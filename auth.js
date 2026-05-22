

function registerUser(){

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

    // EMPTY CHECK

    if(
        name === "" ||
        email === "" ||
        password === ""
    ){

        alert(
            " Fill all fields"
        );

        return;
    }

    // GET OLD USERS

    let users =
        JSON.parse(
            localStorage.getItem(
                "roadwatchUsers"
            )
        ) || [];

    // CHECK EXISTING EMAIL

    let existingUser =
        users.find(user =>

            user.email === email
        );

    if(existingUser){

        alert(
            " Email already registered"
        );

        return;
    }

    // NEW USER

    let user = {

        name:name,

        email:email,

        password:password
    };

    // SAVE

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




function loginUser(){

    let email =
        document.getElementById(
            "email"
        ).value.trim();

    let password =
        document.getElementById(
            "password"
        ).value.trim();

    // GET USERS

    let users =
        JSON.parse(
            localStorage.getItem(
                "roadwatchUsers"
            )
        ) || [];

    // FIND USER

    let matchedUser =
        users.find(user =>

            user.email === email &&

            user.password === password
        );

    // CHECK LOGIN

    if(matchedUser){

        localStorage.setItem(

            "loggedInUser",

            JSON.stringify(matchedUser)
        );

        alert(
            " Login Successful"
        );

        window.location.href =
            "dashboard.html";
    }

    else{

        alert(
            "Incorrect Email or Password"
        );
    }
}
   function toggleMenu(){

            let menu =
                document.getElementById(
                    "dropdown"
                );

            if(menu.style.display === "block"){

                menu.style.display = "none";
            }

            else{

                menu.style.display = "block";
            }
        }

        function logout(){

            localStorage.removeItem(
                "loggedInUser"
            );

            alert(
                " Logged Out"
            );

            window.location.href =
                "index.html";
        }
