let myform = document.getElementById("myform")
let email = document.getElementById("email")
let lastname = document.getElementById("lastname")
let pass = document.getElementById("pass")
let name = document.getElementById("name")
let userArr = []
myform.addEventListener("submit" , (e) =>{
    e.preventDefault()
    let user = {
        email: email.value,
        pass: pass.value,
        name: name.value,
        lastname: lastname.value
    }
    userArr.push(user)
    console.log(userArr);

    localStorage.setItem("user" , JSON.stringify(userArr))

    window.open("./user.html")
})

// add validation to the form

let validatemail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
let passvalidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/