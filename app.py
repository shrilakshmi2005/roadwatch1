from flask import Flask, request, jsonify
from flask_cors import CORS
from ultralytics import YOLO
import os
import uuid
import traceback

app = Flask(__name__)

CORS(app)



MODEL_PATH = "yolov8n.pt"

try:

    model = YOLO("yolov8n.pt")

    print(" Model Loaded Successfully")

except Exception as e:

    print(" Model Load Error")
    print(e)

    model = None



@app.route("/")

def home():

    return "RoadWatch Backend Running"




@app.route("/detect", methods=["POST"])

def detect():

    print("\n API HIT")

    try:


        if model is None:

            return jsonify({
                "error":"Model not loaded"
            }), 500

       

        if "image" not in request.files:

            return jsonify({
                "error":"No image uploaded"
            }), 400

        file = request.files["image"]

        if file.filename == "":

            return jsonify({
                "error":"Empty file"
            }), 400

       

        temp_file = f"temp_{uuid.uuid4().hex}.jpg"

        file.save(temp_file)

        print(" Image Saved")

        # RUN YOLO

        results = model.predict(

            source=temp_file,

            conf=0.50,

            save=False
        )

       

        final_label = "No Damage"

        highest_conf = 0

       
        for r in results:

            if r.boxes is None:
                continue

            for box in r.boxes:

                cls_id = int(box.cls[0])

                confidence = float(box.conf[0])

                label = str(
                        model.names[cls_id]
                    )

            

                if confidence > highest_conf:

                    highest_conf = confidence

                    final_label = label

      

        if os.path.exists(temp_file):

            os.remove(temp_file)

        print(" FINAL:", final_label)

        

        return jsonify([{

            "label": final_label,

            "confidence":
                round(highest_conf * 100, 2)

        }])

    except Exception as e:

        print("\n FULL ERROR\n")

        traceback.print_exc()

        return jsonify({
            "error": str(e)
        }), 500



if __name__ == "__main__":

    app.run(

        host="0.0.0.0",

        port=5000,

        debug=True
    )

