function loadData(data = null) {
  let complaints = data || JSON.parse(localStorage.getItem("complaints")) || [];
  let container = document.getElementById("list");
  let role = localStorage.getItem("role");

  container.innerHTML = "";

  complaints.forEach((c, index) => {

    let card = document.createElement("div");
    card.className = "card";

    let statusClass = c.status === "Resolved" ? "status-resolved" : "status-pending";

    let content = `
      <p><b>📍 Location:</b> ${c.location}</p>
      <p><b>Status:</b> <span class="${statusClass}">${c.status}</span></p>
      <p><b>💬 Response:</b> ${c.response || "No response yet"}</p>
      <p><b>🕒 Responded On:</b> ${c.date || "Not yet"}</p>

      <p><b>🔍 Issues:</b> ${
        c.detections && c.detections.length > 0
          ? c.detections.map(d => d.label).join(", ")
          : "None"
      }</p>

      <img src="${c.image}" width="250">
    `;

    // ONLY AUTHORITY CAN EDIT (ONLY IF NOT RESOLVED)
    if (role === "authority" && c.status !== "Resolved") {
      content += `
        <textarea id="res-${index}" placeholder="Write response...">${c.response || ""}</textarea>
        <br>
        <button onclick="submitRes(${index})">Submit</button>
      `;
    }

    // IF ALREADY RESOLVED
    if (c.status === "Resolved") {
      content += `<p style="color:lightgreen;">✔ Already Responded</p>`;
    }

    card.innerHTML = content;
    container.appendChild(card);
  });
}


// ================= SUBMIT RESPONSE =================
function submitRes(index) {
  let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

  let text = document.getElementById(`res-${index}`).value.trim();

  if (!text) {
    alert("⚠️ Enter response");
    return;
  }

  complaints[index].response = text;
  complaints[index].status = "Resolved";
  complaints[index].date = new Date().toLocaleString();

  localStorage.setItem("complaints", JSON.stringify(complaints));

  alert("✅ Response submitted!");
  loadData();
}


// ================= FILTER =================
function filterData(type) {
  let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

  if (type !== "All") {
    complaints = complaints.filter(c => c.status === type);
  }

  loadData(complaints);  // ✅ correct call
}


// ================= LOAD =================
window.onload = loadData;
