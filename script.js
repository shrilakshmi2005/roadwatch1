
function login() {
  alert("Login Successful!");
  window.location.href = "dashboard.html";
}

function register() {
  alert("Registered Successfully!");
}

function goToComplaint() {
  window.location.href = "complaint.html";
}

function goToComplaints() {
  window.location.href = "complaints.html";
}

function goToDashboard() {
  window.location.href = "dashboard.html";
}



function loadStats() {

  let complaints =
      JSON.parse(localStorage.getItem("complaints")) || [];

  let total = complaints.length;

  let pending =
      complaints.filter(c => c.status === "Pending").length;

  let resolved = total - pending;

  let stats = document.getElementById("stats");

  if (!stats) return;

  stats.innerHTML = `

    <div class="stats-box">

      <div class="stat-item">
        <p>Total Reports</p>
        <h2>${total}</h2>
      </div>

      <div class="stat-item">
        <p>Pending</p>
        <h2>${pending}</h2>
      </div>

      <div class="stat-item">
        <p>Resolved</p>
        <h2>${resolved}</h2>
      </div>

    </div>

  `;
}

function previewImage() {
  let file = document.getElementById("image").files[0];
  let preview = document.getElementById("preview");

  if (file && preview) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }
}


window.onload = function() {
  loadComplaints();
  loadStats();
};
function openUser() {
    window.location.href = "user.html";
}

function openAuthority() {
    window.location.href = "authority_new.html";
}

function logout() {
    alert("Logged out");
    window.location.href = "login.html";
}


function logout(){

    localStorage.removeItem("role");

    window.location.href = "code.html";
}


function openResponses(){

    window.location.href =
        "responses.html";
}


function openPopup(){

    document.getElementById(
        "passwordPopup"
    ).style.display = "flex";
}




function closePopup(){

    document.getElementById(
        "passwordPopup"
    ).style.display = "none";
}




function checkPassword(){

    let password =
        document.getElementById(
            "authorityPassword"
        ).value;

    // PASSWORD

    if(password === "admin123"){

        // SET ROLE

        localStorage.setItem(
            "role",
            "authority"
        );

        // OPEN RESPONSES PAGE

        window.location.href =
            "responses.html";
    }

    else{

        document.getElementById(
            "errorText"
        ).innerText =
            " Incorrect Password";
    }
}


function loadStats(){

    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    let total = complaints.length;

    let pending =
        complaints.filter(
            c => c.status === "Pending"
        ).length;

    let resolved =
        complaints.filter(
            c => c.status === "Resolved"
        ).length;

    let stats =
        document.getElementById("stats");

    stats.innerHTML = `

        <div class="stats-box">

            <div class="stat-item">

                <p>Total Reports</p>

                <h2>${total}</h2>

            </div>

            <div class="stat-item">

                <p>Pending</p>

                <h2>${pending}</h2>

            </div>

            <div class="stat-item">

                <p>Resolved</p>

                <h2>${resolved}</h2>

            </div>

        </div>

    `;
}




function openPopup(){

    document.getElementById(
        "passwordPopup"
    ).style.display = "flex";
}


function closePopup(){

    document.getElementById(
        "passwordPopup"
    ).style.display = "none";
}




function checkPassword(){

    let password =
        document.getElementById(
            "authorityPassword"
        ).value;

    if(password === "admin123"){

        localStorage.setItem(
            "role",
            "authority"
        );

        window.location.href =
            "responses.html";
    }

    else{

        document.getElementById(
            "errorText"
        ).innerText =
            "Incorrect Password";
    }
}




function logout(){

    localStorage.removeItem("role");

    window.location.href =
        "code.html";
}




window.onload =
    loadStats;
function getRoadDetails(){

    let location =
        document.getElementById(
            "locationInput"
        ).value;

    let result =
        document.getElementById(
            "roadResult"
        );

    if(location.trim() == ""){

        alert("Enter location");

        return;
    }

    // DEMO DATA

    let details = {

        "mailapore":
            "Road condition is Moderate. Some potholes detected.",

        "madurai":
            "Road condition is Poor. Crack and potholes detected.",

        "chennai":
            "Road condition is Good. No major damages."
    };

    let key =
        location.toLowerCase();

    if(details[key]){

        result.innerHTML = `

            <div class="result-box">

                <h3>Road Details</h3>

                <p>${details[key]}</p>

            </div>
        `;
    }

    else{

        result.innerHTML = `

            <div class="result-box">

                <h3>Road Details</h3>

                <p>
                No road data found
                for this location.
                </p>

            </div>
        `;
    }
}