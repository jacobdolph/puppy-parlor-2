$(document).ready(function () {
    var signUpForm = $("form.signup");
    var emailVal = $("input#email-input");
    var passwordVal = $("input#password-input");

    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailVal.val().trim(),
            password: passwordVal.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }
        signUpUser(userData.email, userData.password);
        emailVal.val("");
        passwordVal.val("");
    });
    function signUpUser(email, password) {
        $.post("/api/signup", {
            email: email,
            password: password
        })
            .then(function (data) {
                window.location.replace("./members.html");
            })
            .catch(handleLoginErr);
    }
    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});