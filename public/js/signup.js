let $clearForm = $("input.validate")
let $firstName = $("input#firstName");
let $lastName = $("input#lastName");
let $email = $("input#emailAddress");
let $password = $("input#password");
let $password2 = $("input#password2");
function insertUser(event) {
    event.preventDefault();
    var user = {
        first_name: $firstName.val().trim(),
        last_name: $lastName.val().trim(),
        email: $email.val().trim(),
        password: $password.val().trim()
    }
    console.log(user)
    $.post("/api/users", user)
    location.replace("/login")
}

$(document).on("submit", "#user-form", insertUser)