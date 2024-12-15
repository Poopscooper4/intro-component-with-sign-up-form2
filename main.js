let myform = document.getElementById("myform")
let loginform = document.getElementById("loginform")
let firstname = document.getElementById("name")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
let pass = document.getElementById("pass")

let validatemail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
let passvalidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

myform.addEventListener("submit" , (e) =>{
    e.preventDefault()
    console.log(firstname.value);
    console.log(pass.value);
    console.log(lastname.value);
    console.log(email.value);
    store()

    // if (!passvalidation.test(pass.value) && !validatemail.test(email.value)) {
    //     firstname.className = "errorinp"
    //     lastname.className = "errorinp"
    //     email.className = "errorinp"
    //     pass.className   = "errorinp"
    // }

    if(!passvalidation.test(pass.value)){
        console.log("ikmsssss");
        firstname.className = "errorinp"
        lastname.className = "errorinp"
         email.className = "errorinp"
         pass.className = "errorinp"
    }
    if(!validatemail.test(pass.value)){
        console.log("ikmsssss");
        firstname.className = "errorinp"
        lastname.className = "errorinp"
         email.className = "errorinp"
         pass.className = "errorinp"
    }
})



function store() {
    localStorage.setItem("email-data" , email.value)
    localStorage.setItem("pass-data" , pass.value)
}



let logemail = document.getElementById("logemail")
let logpass = document.getElementById("logpass")

let emaildata = localStorage.getItem("email-data")
let passdata = localStorage.getItem("pass-data")


loginform.addEventListener("submit" , (a) =>{
    a.preventDefault()
    if (logemail.value !== emaildata) {
        console.log("aaaaaaaaaaaaaaaaaaaa");
    }
    if (logpass.value !== passdata) {
        console.log("aaaaaaaaaaaaaaaaaaaa");
    }
})


