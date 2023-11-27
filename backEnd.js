function updateMarketOptions() {
  var districtDropdown = document.getElementById('3');
  var marketDropdown = document.getElementById('1');
  marketDropdown.options.length = 1;
  // Get the selected district value
  console.log('updateMarketOptions() called');
  
  var selectedDistrict = districtDropdown.options[districtDropdown.selectedIndex].value;
   
  console.log(selectedDistrict);

  const districtMarketMap = {
      '59': ['Alirajpur', 'Alirajpur(F&V)', 'Jobat'],
      '58': ['Anuppur', 'Jaithari', 'Kotma'],
      '57' : ['Ashoknagar', 'Ashoknagar(F&V)', 'Chanderi','Isagarh' , 'Mungawali' , 'Piprai', 'Shadora'],
      '56' : ['Anjad', 'Badwani', 'Balwadi', 'Khetia', 'Sendhwa'],
      '17' : ['Balaghat', 'Balaghat(F&V)', 'Katangi', 'Khairlangi', 'Lalbarra' , 'Mohgaon', 'Praswada' , 'Varaseoni'],
      '19' : ['Betul', 'Bhensdehi', 'Multai'],
      '20' : ['Alampur', 'Bhind' , 'Bhind(F&V)', 'Gohad', 'Lahar', 'Mehgaon', 'Mow'],
      '1'  : ['Berasia' , 'Bhopal' , 'Bhopal(F&V)'],
      '60' : ['Burhanpur', 'Burhanpur(F&V)'],
      '22' : ['Badamalhera', 'Bakswaha', 'Bijawar', 'Chhatarpur', 'Harpalpur', 'LavKush Nagar(Laundi)', 'Naugaon', 'Rajnagar'],
      '23' : ['Amarwda', 'Chaurai', 'Chhindwara' , 'Chhindwara(F&V)' , 'Pandhurna' , 'Pandhurna(F&V)' , 'Saunsar', 'Saunsar (F&V)'],
      '24' : ['Damoh', 'Damoh(F&V)', 'Hata', 'Javera', 'Patharia'],
      '49' : ['Bhander', 'Datia', 'Sevda'],
      '2'  : ['Bagli', 'Dewas', 'Dewas(F&V)' , 'Haatpipliya' , 'Kannod' , 'Khategaon' , 'Loharda' , 'Sonkatch'],
      '50' : ['Badnawar', 'Badnawar(F&V)' , 'Dhamnod' , 'Dhar' , 'Dhar(F&V)' , 'Gandhwani' , 'Kukshi' , 'Manawar' , 'Rajgarh'],
      '51' : ['Dindori' , 'Gorakhpur' , 'Shahpura'],
      '4'  : ['Aron' , 'Binaganj' , 'Guna' , 'Guna(F&V)' , 'Kumbhraj' , 'Maksudangarh' , 'Raghogarh'],
      '5'  : ['Bhitarwar' , 'Dabra' , 'Lashkar','Lashkar(F&V)'],
      '52' : ['Harda' , 'Harda(F&V)' , 'Khirakiya' , 'Sirali' , 'Timarni'],
      '27' : ['Babai' , 'Banapura' , 'Bankhedi' , 'Hoshangabad' , 'Itarsi' , 'Pipariya' , 'Semriharchand'],
      '6'  : ['Gautampura' , 'Indore' , 'Indore(F&V)' , 'Mhow' , 'Sanwer'],
      '7'  : ['Jabalpur' , 'Jabalpur(F&V)' , 'Paatan' , 'Sehora' , 'Shahpura Bhitoni (F&V)' , 'Shahpura(Jabalpur)' , 'Sihora' , 'Sihora(F&V)'],
      '28' : ['Jhabua' , 'Petlawad' , 'Thandla'],
      '53' : ['Katni' , 'Katni(F&V)'],
      '29' : ['Harsood' , 'Khandwa' , 'Khandwa(F&V)' , 'Mundi' , 'Pandhana' , 'Pandhana(F&V)'],
      '30' : ['Badwaha' , 'Bedia' , 'Bhikangaon' , 'Karhi' , 'Kasrawad' , 'Khargone' , 'Sanawad' , 'Segaon'],
      '31' : ['Bichhiya' , 'Mandla' , 'Nainpur'],
      '32' : ['Bhanpura' , 'Daloda' , 'Garoth' , 'Mandsaur' , 'Mandsaur(F&V)' , 'Piplya' , 'Shamgarh' , 'Shamgarh(F&V)' , 'Sitmau' , 'Suvasra'],
      '33' : ['Ambaha', 'Banmorkalan' , 'Jora' , 'Kailaras' , 'Morena' , 'Morena(F&V)' , 'Porsa' , 'Porsa(F&V)' , 'Sabalgarh'],
      '34' : ['Gadarwada' , 'Gotegaon' , 'Kareli' , 'Narsinghpur' , 'Tendukheda'],
      '9'  : ['Javad' , 'Manasa' , 'Neemuch'],
      '35' : ['Ajaygarh' , 'Devandranagar' , 'Panna' , 'Pawai' , 'Simariya'],
      '37' : ['Bareli' , 'Begamganj' , 'Gairatganj' , 'Obedullaganj' , 'Raisen' , 'Silvani' , 'Udaipura'],
      '38' : ['Biaora' , 'Chhapiheda' , 'Jeerapur' , 'Khilchipur' , 'Khujner' , 'Kurawar' , 'Machalpur' , 'Narsinghgarh' , 'Pachaur' , 'Sarangpur' , 'Suthalia'],
      '39' : ['A lot' , 'Jaora' , 'Ratlam' , 'Ratlam(F&V)' , 'Sailana' , 'Taal'],
      '40' : ['Baikunthpur' , 'Chaakghat' , 'Hanumana' , 'Rewa'],
      '41' : ['Bamora' , 'Banda' , 'Bina' , 'Deori' , 'Garhakota' , 'Jaisinagar' , 'Kesli' , 'Khurai' , 'Malthone' , 'Rahatgarh' , 'Rehli' , 'Sagar' , 'Sagar(F&V)' , 'Shahagarh'],
      '13' : ['Amarpatan' , 'Mehar' , 'Nagod' , 'Ramnagar' , 'Satna' , 'Satna(F&V)'],
      '16' : ['Ashta' , 'Baktara' , 'Ichhawar' , 'Jawar' , 'Nasrullaganj' , 'Rehati' , 'Sehore' , 'Shyampur'],
      '43' : ['Barghat' , 'Chhpara' , 'Ghansour' , 'Keolari' , 'Lakhnadon' , 'Lakhnadon(F&V)' , 'Palari' , 'Seoni'],
      '12' : ['Agar' , 'Akodia' , 'Akodiya' , 'Badod' , 'Berachha' , 'Kalapipal' , 'Maksi' , 'Momanbadodiya' , 'Nalkehda' , 'Sajapur' , 'Shajapur' , 'Shajapur(F&V)' , 'Shujalpur' , 'Soyatkalan' , 'Susner'],
      '44' : ['Beohari' , 'Budhar' , 'Shahdol'],
      '54' : ['Sheopurbadod' , 'Sheopurkalan' , 'Syopurkalan(F&V)' , 'Vijaypur'],
      '45' : ['Badarwas' , 'Barad' , 'Karera' , 'Khaniadhana' , 'Khanyadhana' , 'Khatora' , 'Kolaras' , 'Magroni' , 'Pichhour' , 'Pohari' , 'Rannod' , 'Shivpuri' , 'Shivpuri(F&V)'],
      '46' : ['Sidhi'],
      '61' : ['Singroli'],
      '48' : ['Jatara' , 'Khargapur' , 'Niwadi' , 'Niwadi(F&V)' , 'Palera' , 'Prithvipur' , 'Tikamgarh'],
      '14' : ['Badnagar' , 'Khachrod' , 'Mahidpur' , 'Nagda' , 'Tarana' , 'Ujjain' , 'Ujjain(F&V)' , 'Unhel'],
      '55' : ['Umariya'],
      '15' : ['Ganjbasoda' , 'Gulabganj' , 'Kurwai' , 'Lateri' , 'Shamshabad' , 'Sironj' , 'Vidisha']};
    
  var markets = districtMarketMap[selectedDistrict];
  for (var i = 0; i < markets.length; i++) {
    var option = document.createElement('option'); 
    option.text = markets[i];
    option.value = markets[i];
    marketDropdown.add(option);
    console.log(option.value);
    }
    }
    
    // Attach event listeners to the dropdowns and date input
    // districtDropdown.addEventListener('change', function() {
    //   updateMarketOptions();
    document.addEventListener("DOMContentLoaded", function() {
        updateMarketOptions();
      });
