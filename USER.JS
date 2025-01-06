let loginform = document.getElementById("loginform")
let logemail = document.getElementById("logemail")
let logpass = document.getElementById("logpass")

let users = JSON.parse(localStorage.getItem("user")) || []

console.log(users);

loginform.addEventListener("submit" , (e) =>{
    e.preventDefault()
    let userFound = false
    users.forEach((element) => {
        if(element.email === logemail.value && element.pass === logpass.value){
            console.log("login success");
            userFound = true
            window.open("./Success.html")

        }
    });
    if (!userFound) {
        console.log("Login Failed");
    }
})