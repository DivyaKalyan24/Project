from flask import Flask, request
from flask_cors import CORS

from predictor import predictor

app = Flask(__name__)
CORS(app, origins='http://localhost:3000', methods=['POST'], supports_credentials=True)

@app.route('/fetch-cars', methods=['POST'])
def fetch_data():
    data = request.json
    
    carCompany = data['carCompany']
    carModel = data['carModel']
    yearOfPurchase = data['yearOfPurchase']
    fuelType = data['fuelType']
    KMsDriven = data['KMsDriven']

    try:

        price = predictor(carCompany, carModel, yearOfPurchase, fuelType, KMsDriven)
        return (price)
    
    except Exception as e:
        return e


if __name__ == "__main__":
    app.run(debug=True)