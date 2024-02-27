from flask import Flask, request
from flask_cors import CORS

from predictor import predictor

app = Flask(__name__)
CORS(app, origins='http://localhost:3000', methods=['POST'], supports_credentials=True)

@app.route('/')
def home():
    return 'Hello'

@app.route('/fetch-cars', methods=['POST'])
def fetch_data():
    data = request.json
    
    carCompany = data['carCompany']
    carModel = data['carModel']
    yearOfPurchase = data['yearOfPurchase']
    fuelType = data['fuelType']
    KMsDriven = data['KMsDriven']

    predictor()

    return f'{carCompany}, {carModel}, {yearOfPurchase}, {fuelType}, {KMsDriven}'

if __name__ == "__main__":
    app.run(debug=True)