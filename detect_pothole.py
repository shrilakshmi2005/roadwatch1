import cv2
import numpy as np

def detect_pothole(image_path):

    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Blur for noise removal
    blur = cv2.GaussianBlur(gray, (5,5), 0)

    # Edge detection
    edges = cv2.Canny(blur, 50, 150)

    # Threshold dark regions
    _, thresh = cv2.threshold(blur, 70, 255, cv2.THRESH_BINARY_INV)

    # Combine edges + dark regions
    combined = cv2.bitwise_or(edges, thresh)

    # Morphological closing (fill gaps)
    kernel = np.ones((5,5), np.uint8)
    closing = cv2.morphologyEx(combined, cv2.MORPH_CLOSE, kernel)

    contours, _ = cv2.findContours(closing, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    detections = []

    for cnt in contours:
        area = cv2.contourArea(cnt)

        if area > 800:  # filter small noise

            x, y, w, h = cv2.boundingRect(cnt)

            detections.append({
                "x": int(x),
                "y": int(y),
                "w": int(w),
                "h": int(h),
                "label": "pothole",
                "confidence": 0.8
            })

    return detections