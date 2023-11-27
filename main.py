import numpy as np
import seaborn as sns
import pandas as pd
import lightgbm as lgb
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler, LabelEncoder

df = pd.read_csv('dataset/dataset_final.csv')


required_data = df[['Market Name', 'Commodity', 'Variety', 'Modal Price (Rs./Quintal)', 'Price Date']]

scaler = MinMaxScaler(feature_range=(0,1))
required_data['Modal Price (Rs./Quintal)'] = scaler.fit_transform(required_data['Modal Price (Rs./Quintal)'].values.reshape(-1,1))


encode_market = LabelEncoder()
encode_variety = LabelEncoder()
encode_commodity = LabelEncoder()
required_data['Market Name'] = encode_market.fit_transform(required_data['Market Name'].values)
required_data['Variety'] = encode_variety.fit_transform(required_data['Variety'].values) 
required_data['Commodity'] = encode_commodity.fit_transform(required_data['Commodity'].values)


x = required_data[['Market Name', 'Commodity', 'Variety', 'Price Date']]
y = required_data[['Modal Price (Rs./Quintal)']]

y = required_data['Modal Price (Rs./Quintal)'].values
X_market = required_data['Market Name'].values
X_variety = required_data['Variety'].values
X_commodity = required_data['Commodity'].values
X_date = pd.to_datetime(required_data['Price Date']).astype(int) // 10**9


X = np.column_stack((X_market, X_commodity, X_variety, X_date))

y = y.reshape(-1, 1)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20)

model = lgb.LGBMRegressor(objective='regression', num_leaves=31, learning_rate=0.05, n_estimators=2000, max_depth=-1)

model.fit(X_train, y_train)

y_pred = model.predict(X_test)
y_pred = y_pred.reshape(-1,1)

from sklearn.metrics import r2_score
print(r2_score(y_test,y_pred))





