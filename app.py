import pickle
from flask import Flask, request, render_template
import pandas as pd
from sklearn.preprocessing import MinMaxScaler, LabelEncoder
import lightgbm as lgb
import numpy as np


marketName_pkl = pickle.load(open('models/market1.pkl', 'rb'))
commodity_pkl = pickle.load(open('models/commodity.pkl', 'rb'))
scaler_pkl = pickle.load(open('models/scaler1.pkl', 'rb'))


model = pickle.load(open('models/model1.pkl', 'rb'))

app = Flask(__name__)
global prediction

@app.route('/')
def home():
    return render_template('services.html')

@app.route('/predict', methods=['POST'])
def predict():
    
    # If a form is submitted
    if request.method == "POST":
        
        marketName = request.form.get('marketInput')
        marketName_encoded = marketName_pkl.transform([marketName])
        commodityName = request.form.get("commodityInput")
        commodityName_encoded = int(commodityName)
        dateChoosen = request.form.get('Date')
        dateFinal = pd.to_datetime([dateChoosen]).astype('int64') // 10**9
        dateFinal = dateFinal[0]
        X = np.column_stack((marketName_encoded, commodityName_encoded, dateFinal))
        prediction_scaled = model.predict(X)
        prediction_unscaled = scaler_pkl.inverse_transform(prediction_scaled.reshape(-1,1))
        prediction_unscaled_int = prediction_unscaled[0][0]
        prediction_unscaled_int = round(prediction_unscaled_int, 2)
        
    else:
        prediction = "Error"
        
    return render_template('services.html', prediction_text="The price of the crop will be: " + "Rs. " + str(prediction_unscaled_int))

if __name__ == '__main__':
    app.run(debug=True)