import pandas as pd
import numpy as np

import pickle

model=pickle.load(open("LinearRegressionModel.pkl",'rb'))

def predictor(company, car_model, year, fuel_type, driven):

    prediction=model.predict(pd.DataFrame(columns=['name', 'company', 'year', 'kms_driven', 'fuel_type'], data=np.array([car_model,company,year,driven,fuel_type]).reshape(1, 5)))
    
    return str(np.round(prediction[0], 2))