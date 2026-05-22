from ultralytics import YOLO

print("🔥 Training Started")

# LOAD MODEL

model = YOLO("yolov8n.pt")

# START TRAINING

model.train(

    data="dataset/data.yaml",

    epochs=50,

    imgsz=640,

    batch=8,

    device="cpu",

    name="roadwatch_model"
)

print("✅ Training Finished")