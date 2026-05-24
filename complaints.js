function loadComplaints() {

    let complaints =
        JSON.parse(
            localStorage.getItem(
                "complaints"
            )
        ) || [];

    let container =
        document.getElementById(
            "complaintList"
        );

    container.innerHTML = "";

    complaints.forEach((c, index) => {

        let detectionText =
            c.detection ||
            "No Detection";

        let card =
            document.createElement(
                "div"
            );

        card.className =
            "card";

        card.innerHTML = `

            <h2>
                ${c.roadType}
            </h2>

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

            <img
                src="${c.image}"
                width="300"
            >

        `;

        container.appendChild(
            card
        );
    });
}



function goBack() {

    window.location.href =
        "dashboard.html";
}



window.onload =
    loadComplaints;
