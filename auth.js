function registerUser() {

    let name =
        document.getElementById(
            "name"
        ).value.trim();

    let email =
        document.getElementById(
            "email"
        ).value.trim();

    let password =
        document.getElementById(
            "password"
        ).value.trim();

    if (

        name === "" ||

        email === "" ||

        password === ""

    ) {

        alert(
            "Please fill all fields"
        );

        return;
    }

    let users =
        JSON.parse(
            localStorage.getItem(
                "roadwatchUsers"
            )
        ) || [];

    let existingUser =
        users.find(user =>

            user.email === email
        );

    if (existingUser) {

        alert(
            "Email already registered"
        );

        return;
    }

    let user = {

        name: name,

        email: email,

        password: password
    };

    users.push(user);

    localStorage.setItem(

        "roadwatchUsers",

        JSON.stringify(users)
    );

    alert(
        "Registration Successful"
    );

    window.location.href =
        "index.html";
}





function loginUser() {

    let email =
        document.getElementById(
            "email"
        ).value.trim();

    let password =
        document.getElementById(
            "password"
        ).value.trim();

    if (

        email === "" ||

        password === ""

    ) {

        alert(
            "Please enter email and password"
        );

        return;
    }

    let users =
        JSON.parse(
            localStorage.getItem(
                "roadwatchUsers"
            )
        ) || [];

    let matchedUser =
        users.find(user =>

            user.email === email &&

            user.password === password
        );

    if (matchedUser) {

        localStorage.setItem(

            "loggedInUser",

            JSON.stringify(
                matchedUser
            )
        );

        // USER MODE

        localStorage.setItem(
            "mode",
            "USER MODE"
        );

        alert(
            "Login Successful"
        );

        window.location.href =
            "dashboard.html";
    }

    else {

        alert(
            "Incorrect Email or Password"
        );
    }
}





function toggleMenu() {

    let menu =
        document.getElementById(
            "dropdown"
        );

    if (
        menu.style.display ===
        "block"
    ) {

        menu.style.display =
            "none";
    }

    else {

        menu.style.display =
            "block";
    }
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
        "index.html";
}
