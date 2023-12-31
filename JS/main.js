var loginMailInput = document.getElementById("loginMail");
var loginPasswordInput = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");
var signupAnchor = document.getElementById("signupAnchor");

var users = [] ;

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}

function signin(){
    var loginMail = loginMailInput.value;
    var loginpassword = loginPasswordInput.value;

    if(  loginMail === ""  || loginpassword === ""  ){
        window.alert("Please fill in all fields");
    }else if(isCorrectData( loginMail , loginpassword )){
        window.location.href = "home.html";
    }
    else{
        alert("Incorrect email or password");
    }
}


function isCorrectData(email , password){
    for(  var i = 0 ; i < users.length; i++ ){
        if(  users[i].mail === email && users[i].password === password ){
            localStorage.setItem("userName" , users[i].name)
            return true;
        }
    }
    return false; 
}

loginBtn.addEventListener("click" , function(){
    signin();
})

signupAnchor.addEventListener("click", function(){
    window.location.href = "signUp.html"
} )