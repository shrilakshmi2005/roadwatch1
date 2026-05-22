

function loadResponses(){

    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    let container =
        document.getElementById("responseContainer");

    let role =
        localStorage.getItem("role");

    container.innerHTML = "";

    // NO DATA

    if(complaints.length === 0){

        container.innerHTML = `

            <h2>No complaints found</h2>

        `;

        return;
    }

    // CREATE CARDS

    complaints.forEach((c, index) => {

        let card =
            document.createElement("div");

        card.className = "card";

        let statusClass =
            c.status === "Resolved"
            ? "resolved"
            : "pending";

        let responseSection = "";

        // AUTHORITY MODE

        if(role === "authority"){

            // NOT RESPONDED

            if(c.status !== "Resolved"){

                responseSection = `

                    <textarea
                        id="response-${index}"
                        placeholder="Write response...">
                    </textarea>

                    <button
                        onclick="submitResponse(${index})">

                        Submit Response

                    </button>

                `;
            }

            // ALREADY RESPONDED

            else{

                responseSection = `

                    <p class="resolved">
                        ✔ Response Submitted
                    </p>

                    <p>
                        <b>Response:</b>
                        ${c.response}
                    </p>

                `;
            }
        }

        // USER MODE

        else{

            responseSection = `

                <p>
                    <b>Authority Response:</b>

                    ${
                        c.response
                        ?

                        c.response

                        :

                        "No response yet"
                    }
                </p>

            `;
        }

        // CARD

        card.innerHTML = `

            <h2>
                 ${c.roadType}
            </h2>

            <p>
                <b> Location:</b>
                ${c.location}
            </p>

            <p>
                <b>Status:</b>

                <span class="${statusClass}">
                    ${c.status}
                </span>
            </p>

            <p>
                <b> Date:</b>
                ${c.date}
            </p>

            <img src="${c.image}">

            ${responseSection}

        `;

        container.appendChild(card);
    });
}




function submitResponse(index){

    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    let text =
        document.getElementById(
            `response-${index}`
        ).value.trim();

    if(!text){

        alert(" Enter response");
        return;
    }

    complaints[index].response = text;

    complaints[index].status = "Resolved";

    localStorage.setItem(
        "complaints",
        JSON.stringify(complaints)
    );

    alert(" Response Submitted");

    loadResponses();
}




function goBack(){

    window.location.href =
        "dashboard.html";
}




window.onload =
    loadResponses;