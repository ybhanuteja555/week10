function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "epam" && password == "epam123"){
window.location = "success.html"; 
return false;
}
else{
alert("Login Failed! Please enter correct username and password");
}
}