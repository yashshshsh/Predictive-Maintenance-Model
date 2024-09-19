from flask import Flask, request, jsonify
import pickle
import pandas as pd
import numpy as np
import warnings

warnings.filterwarnings("ignore", message="Trying to unpickle estimator")
warnings.filterwarnings("ignore", category=UserWarning)

app = Flask(__name__)

try:
    with open('./KRoutes/KnightsModel.pkl','rb') as file:
        model = pickle.load(file)
except Exception as e:
    print(f"Error loading the model: {e}")
    model = None

@app.route('/predict',methods=['POST'])
def predict():
    if model is None:
        print('Model couldnot be loaded')
        return jsonify({'error': 'Model could not be loaded.'}), 500 
    
    try:
        data = request.json
        airTemp = data['airTemp']
        processTemp = data['processTemp']
        rotationalSpeed = data['rotationalSpeed']
        torque = data['torque']
        toolWear = data['toolWear']

        # print('data',data)
        
        input_data = pd.DataFrame(columns=['Air temperature [K]', 'Process temperature [K]', 'Rotational speed [rpm]', 'Torque [Nm]', 'Tool wear [min]'], data=np.array([airTemp, processTemp, rotationalSpeed, torque, toolWear]).reshape(1, 5))
        
        # Make a prediction
        prediction = model.predict(input_data)
        prediction_list = prediction.tolist()
        # print('Prediction Value',prediction_list)
        return jsonify({'prediction': prediction_list})  # Convert ndarray to native Python data type
    except KeyError as e:
        return jsonify({'error': f'Missing key in input data: {e}'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)