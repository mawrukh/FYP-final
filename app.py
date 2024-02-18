from flask import Flask, render_template, request, jsonify  # Import jsonify
import numpy as np
import tensorflow as tf
from PIL import Image
from flask_cors import CORS
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

# Load the TFLite model
model_path = 'best-fp16.tflite'
interpreter = tf.lite.Interpreter(model_path=model_path)
interpreter.allocate_tensors()

input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Set a threshold for confidence score to consider an object as "garbage"
confidence_threshold = 1.0

@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def predict():
    imagefile = request.files['imagefile']
    image = Image.open(imagefile).convert('RGB')
    image = image.resize((640, 640))  # Resize the image to match the model input dimensions
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0).astype(np.float32)

    interpreter.set_tensor(input_details[0]['index'], image)
    interpreter.invoke()
    output = interpreter.get_tensor(output_details[0]['index'])

    # Extract information from the output
    detected_objects = []
    for obj in output[0]:
        confidence = float(obj[2])

        object_type = "Non-Garbage" if confidence > confidence_threshold else "Garbage"
        detected_objects.append({'object_type': object_type})

    # Find the object_type with the most occurrences
    object_type_counts = {}
    for obj in detected_objects:
        if obj['object_type'] in object_type_counts:
            object_type_counts[obj['object_type']] += 1
        else:
            object_type_counts[obj['object_type']] = 1

    highest_confidence_object_type = max(object_type_counts, key=object_type_counts.get)

    return highest_confidence_object_type

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
