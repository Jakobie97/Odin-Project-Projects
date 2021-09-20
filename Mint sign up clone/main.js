let form = document.getElementById("form")

form.onsubmit = function(event) {
   event.preventDefault();
    console.log("User Email :: " + form.Email.value)
    console.log("User Phone :: " + form.Phone.value)
    console.log("User Password :: " + form.Password.value)
}

