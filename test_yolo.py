from ultralytics import YOLO
import cv2

# LOAD YOUR TRAINED MODEL
model = YOLO("best.pt")

# TEST IMAGE
results = model("test.jpg")

# SHOW RESULT
for r in results:

    # DRAW DETECTION BOXES
    img = r.plot()

    # SHOW IMAGE
    cv2.imshow("YOLO Output", img)

    cv2.waitKey(0)
    cv2.destroyAllWindows()

print("Done")