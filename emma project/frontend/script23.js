function toggleRoleSpecificFields() {
    var role = document.getElementById("role").value;
    var doctorFieldGroup = document.getElementById("doctorFieldGroup");
    var experienceGroup = document.getElementById("experienceGroup");
    var patientLocationGroup = document.getElementById("patientLocationGroup");

    if (role === "doctor") {
        doctorFieldGroup.style.display = "block";
        experienceGroup.style.display = "inline-flex";
        patientLocationGroup.style.display = "none";
        degreeLevelGroup.style.display = "block";
    } else if (role === "patient") {
        doctorFieldGroup.style.display = "none";
        experienceGroup.style.display = "none";
        patientLocationGroup.style.display = "block";
        degreeLevelGroup.style.display = "none";
    } else {
        doctorFieldGroup.style.display = "none";
        experienceGroup.style.display = "none";
        patientLocationGroup.style.display = "none";
        degreeLevelGroup.style.display = "none";
    }
}

function validateForm() {
    var surname = document.getElementById("surname").value;
    var firstname = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;
    var phone = document.getElementById("phone").value;

    if (surname == "" || firstname == "" || email == "" || phone == "" || password == "" || role == "") {
        alert("Please fill out all required fields.");
        return false;
    }

    if (role === "doctor") {
        var field = document.getElementById("field").value;
        var experience = document.getElementById("experience").value;

        if (field == "" || experience == "" || degree == "") {
            alert("Please fill out your field of expertise and years of experience.");
            return false;
        }
        var phone = document.getElementById("phone").value;

       


    }

     if (role === "patient") {
        var locationPreference = document.getElementById("locationPreference").value;

        if (locationPreference == "") {
            alert("Please select your preferred doctor location.");
            return false;
            
        }

    }

    alert("Registration successful!");

    if (role == "doctor") {
        window.open("doctor.html")
    }
    else if (role == "patient") {
        window.open("paitent.html");
    }

    
    return true;

}