var signUpNameInput = document.getElementById("signupName");
var signUpMailInput = document.getElementById("signupMail");
var signUpPasswordInput = document.getElementById("signupPassword");
var signupBtn = document.getElementById("signupBtn");
var loginAnchor = document.getElementById("loginAnchor");

var users = [];

if( localStorage.getItem("users" != null ) ){
    users = JSON.parse(localStorage.getItem("users"));
}

function signUp(){

    var user = {
        name : signUpNameInput.value,
        mail : signUpMailInput.value,
        password : signUpPasswordInput.value
    };

    if(  signUpNameInput.value === "" || signUpMailInput.value === "" || signUpPasswordInput.value === "" ){
        window.alert("Please fill in all fields");
    }else if( isValidMail(signUpMailInput.value) && isNewMail(signUpMailInput.value) ){
        users.push(user);
        localStorage.setItem("users" , JSON.stringify(users));
        console.log(users);
        alert("sign up successful");
        clearForm();
    }else{
        window.alert("Invalid email or email already in use");
    }

}


function isValidMail(email) {
    var mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return mailRegex.test(email);
}


function isNewMail(email){
    for( var i = 0 ; i < users.length ; i++ ){
        if( users[i].mail ===  email){
            return false;
        }
    }return true;
}

signupBtn.addEventListener("click", function () {
    signUp();
});

function clearForm() {
    signUpNameInput.value = "";
    signUpMailInput.value = "";
    signUpPasswordInput.value = "";
}

loginAnchor.addEventListener("click", function () {
    window.location.href = "index.html";
});
