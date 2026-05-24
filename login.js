

function login(){

    let email =
        document.getElementById(
            "email"
        ).value.trim();

    let password =
        document.getElementById(
            "password"
        ).value.trim();

   

    if(email === "" || password === ""){

        alert(
            "Please enter email and password"
        );

        return;
    }

    

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert(
            " Enter valid email"
        );

        return;
    }

    

    let correctEmail =
        "admin@gmail.com";

    let correctPassword =
        "1234";

    

    if(
        email !== correctEmail ||
        password !== correctPassword
    ){

        alert(
            " Incorrect Email or Password"
        );

        return;
    }

    

    localStorage.setItem(
        "role",
        "user"
    );

    localStorage.setItem(
        "userEmail",
        email
    );

   

    alert(
        "Login Successful"
    );

    window.location.href =
        "dashboard.html";
}

function logout() {

    localStorage.removeItem(
        "loggedInUser"
    );

    localStorage.removeItem(
        "mode"
    );

    alert(
        "Logged Out Successfully"
    );

    window.location.href =
        "login.html";
}

