// LOAD SAVED DATA
function loadSettings() {
  let volume = localStorage.getItem("volume");

  if (volume) {
    document.getElementById("volume").value = volume;
  }
}

// SAVE VOLUME
document.addEventListener("DOMContentLoaded", () => {
  let slider = document.getElementById("volume");

  slider.addEventListener("input", () => {
    localStorage.setItem("volume", slider.value);
  });
});


// CHANGE EMAIL
function changeEmail() {
  let user = JSON.parse(localStorage.getItem("user")) || {};
  let newEmail = document.getElementById("newEmail").value;

  if (!newEmail) {
    alert("Enter new email");
    return;
  }

  user.email = newEmail;
  localStorage.setItem("user", JSON.stringify(user));

  alert("✅ Email updated");
}


// CHANGE PASSWORD
function changePassword() {
  let user = JSON.parse(localStorage.getItem("user")) || {};
  let newPass = document.getElementById("newPass").value;

  if (!newPass) {
    alert("Enter new password");
    return;
  }

  user.password = newPass;
  localStorage.setItem("user", JSON.stringify(user));

  alert("✅ Password updated");
}


// CLEAR DATA
function clearData() {
  localStorage.clear();
  alert("All data cleared");
  window.location.href = "code.html";
}


// LOGOUT
function logout() {
  localStorage.removeItem("role");

  alert("✅ Logged out");
  window.location.href = "code.html";
}


// INIT
window.onload = loadSettings;
function loadSettings() {
  let user = JSON.parse(localStorage.getItem("user")) || {};

  if (user.email) {
    document.getElementById("newEmail").value = user.email;
  }
}
function changeEmail() {
  let user = JSON.parse(localStorage.getItem("user")) || {};
  let newEmail = document.getElementById("newEmail").value.trim();

  if (!newEmail) {
    alert("⚠️ Enter new email");
    return;
  }

  user.email = newEmail;
  localStorage.setItem("user", JSON.stringify(user));

  alert("✅ Email updated");
}