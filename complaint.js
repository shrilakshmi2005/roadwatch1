

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

function detectAndSubmit() { let image = document.getElementById("image").files[0]; let roadType = document.getElementById("roadType").value; let location = document.getElementById("location").value; 

    let location =
        document.getElementById("location").value;

    let map =
        document.getElementById("mapFrame");

    map.src =
        `https://maps.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
}



function goBack() {

    window.location.href =
        "dashboard.html";
}
