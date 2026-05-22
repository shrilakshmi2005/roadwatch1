function previewImage() {

    let file =
        document.getElementById("image").files[0];

    let preview =
        document.getElementById("preview");

    if (file) {

        preview.src =
            URL.createObjectURL(file);

        preview.style.display =
            "block";
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

    let formData =
        new FormData();

    formData.append(
        "image",
        image
    );

    fetch(
        "https://roadwatch1-1.onrender.com/detect",
        {

            method: "POST",

            body: formData
        }
    )

    .then(response => {

        if (!response.ok) {

            throw new Error(
                "Server Error"
            );
        }

        return response.json();
    })

    .then(data => {

        console.log(
            "Detection:",
            data
        );

        let reader =
            new FileReader();

        reader.onload =
        function () {

            let detectionLabel =
                "No Damage";

            if (
                data &&
                data.length > 0 &&
                data[0].label
            ) {

                detectionLabel =
                    data[0].label;
            }

            let complaint = {

                roadType:
                    roadType,

                location:
                    location,

                image:
                    reader.result,

                status:
                    "Pending",

                response:
                    "",

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

            complaints.push(
                complaint
            );

            localStorage.setItem(

                "complaints",

                JSON.stringify(
                    complaints
                )
            );

            alert(
                "Complaint Submitted"
            );

            window.location.href =
                "complaints.html";
        };

        reader.readAsDataURL(
            image
        );
    })

    .catch(error => {

        console.log(error);

        alert(
            "Detection Failed"
        );
    });
}



function goBack() {

    window.location.href =
        "dashboard.html";
}
