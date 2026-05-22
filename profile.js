function loadProfile() {
  let user = JSON.parse(localStorage.getItem("user")) || {};

  document.getElementById("name").value = user.name || "";
  document.getElementById("email").value = user.email || "";
  document.getElementById("phone").value = user.phone || "";
  document.getElementById("password").value = user.password || "";
}

function saveProfile() {
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    password: document.getElementById("password").value
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Profile saved!");
}

window.onload = loadProfile;
function loadProfile() {
  let user = JSON.parse(localStorage.getItem("user")) || {};

  document.getElementById("name").value = user.name || "";
  document.getElementById("email").value = user.email || "";
  document.getElementById("phone").value = user.phone || "";
  document.getElementById("password").value = user.password || "";
}
function saveProfile() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();

  if (!name || !email || !phone || !password) {
    alert(" All fields are required");
    return;
  }

  let user = { name, email, phone, password };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Profile saved!");
}
