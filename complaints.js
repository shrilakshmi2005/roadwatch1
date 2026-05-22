function loadComplaints() {

    let complaints =
        JSON.parse(
            localStorage.getItem("complaints")
        ) || [];

    let container =
        document.getElementById("complaintList");

    container.innerHTML = "";

    complaints.forEach((c, index) => {

        let detectionText = "No Detection";

      
        if (
            c.detections &&
            c.detections.length > 0
        ) {

            detectionText =
                c.detections.map(d => {

                    // IF OBJECT

                    if(typeof d === "object"){

                        // LABEL EXISTS

                        if(d.label){

                            // NUMBER TO NAME

                            if(d.label == 0){

                                return "Pothole";
                            }

                            if(d.label == 1){

                                return "Crack";
                            }

                            if(d.label == 2){

                                return "Landslide";
                            }

                            return d.label;
                        }
                    }

                    // STRING

                    return d;

                }).join(", ");
        }

        let card =
            document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <h2> ${c.roadType}</h2>

            <p>
             <b>Location:</b>
            ${c.location}
            </p>

            <p>
            <b>Status:</b>
            <span style="color:orange;">
            ${c.status}
            </span>
            </p>

            <p>
             <b>Date:</b>
            ${c.date}
            </p>

            <p>
             <b>Detection:</b>
            ${detectionText}
            </p>

            <img src="${c.image}" width="300">

        `;

        container.appendChild(card);
    });
}




function goBack(){

    window.location.href =
        "dashboard.html";
}

window.onload = loadComplaints;