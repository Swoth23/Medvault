const { create } = require("domain");

function validateForm() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    if (name == ""|| email =="" || password == "" || role == ""|| username == "") {
        alert("All field must be filled out ");
        return false;
    }

    //You can add more validation logic here if needed

    alert("Login Successful");
    

    


    if (role == "doctor") {
        window.open("doctor.html")
    }
    else if (role == "patient") {
        window.open("paitent.html");
    }

}
