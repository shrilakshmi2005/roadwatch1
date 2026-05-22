from ultralytics import YOLO

model = YOLO("best.pt")

def detect_objects(image_path):
    results = model(image_path)

    detections = []

    for r in results:
        for box in r.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0])
            label = model.names[int(box.cls)]

            detections.append({
                "x": x1,
                "y": y1,
                "w": x2 - x1,
                "h": y2 - y1,
                "label": label
            })

    return detections