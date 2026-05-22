

function previewImage() {

    let file =
        document.getElementById("image").files[0];

    let preview =
        document.getElementById("preview");

    if (file) {

        preview.src =
            URL.createObjectURL(file);

        preview.style.display = "block";
    }
}



function updateMap() {

    let location =
        document.getElementById("location").value;

    let map =
        document.getElementById("mapFrame");

    map.src =
        `https://maps.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
}


function detectAndSubmit() {

    let image =
        document.getElementById("image").files[0];

    let roadType =
        document.getElementById("roadType").value;

    let location =
        document.getElementById("location").value;

    if (!image || !roadType || !location) {

        alert("Please fill all fields");

        return;
    }

    let detectionLabel = "Road Damage";

    let fileName =
        image.name.toLowerCase();

    if (fileName.includes("crack")) {

        detectionLabel = "Crack";
    }

    else if (
        fileName.includes("landslide")
    ) {

        detectionLabel = "Landslide";
    }

    else if (
        fileName.includes("pothole")
    ) {

        detectionLabel = "Pothole";
    }

    else {

        detectionLabel = "Road Damage";
    }

    let reader = new FileReader();

    reader.onload = function () {

        let complaint = {

            roadType: roadType,

            location: location,

            image: reader.result,

            status: "Pending",

            response: "",

            date:
                new Date()
                .toLocaleString(),

            detection:
                detectionLabel
        };

        let complaints =
            JSON.parse(
                localStorage.getItem(
                    "complaints"
                )
            ) || [];

        complaints.push(complaint);

        localStorage.setItem(

            "complaints",

            JSON.stringify(
                complaints
            )
        );

        alert(
            "Complaint Submitted Successfully"
        );

        window.location.href =
            "complaints.html";
    };

    reader.readAsDataURL(image);
}





function goBack() {

    window.location.href =
        "dashboard.html";
}
