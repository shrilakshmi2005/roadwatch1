function loadDetail() {
  let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
  let index = localStorage.getItem("selectedIndex");

  let container = document.getElementById("detailBox");

  if (!container || index === null) return;

  let c = complaints[index];
  let role = localStorage.getItem("role");

  let content = `
    <p><b>📍 Location:</b> ${c.location}</p>
    <p><b>📌 Status:</b> ${c.status}</p>
    <p><b>💬 Response:</b> ${c.response || "No response yet"}</p>
    <img src="${c.image}" width="300">
  `;

  // ONLY AUTHORITY CAN EDIT
  if (role === "authority") {
    content += `
      <br><br>
      <textarea id="respBox" placeholder="Write response...">${c.response || ""}</textarea>

      <br><br>
      <button onclick="updateResponse(${index})">Submit Response</button>
    `;
  }

  container.innerHTML = content;
}

function updateResponse(index) {
  let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

  let text = document.getElementById("respBox").value.trim();

  if (!text) {
    alert("⚠️ Enter response first");
    return;
  }

  complaints[index].response = text;
  complaints[index].status = "Resolved";

  localStorage.setItem("complaints", JSON.stringify(complaints));

  alert("✅ Response submitted!");
  window.location.href = "dashboard.html";
}

window.onload = loadDetail;