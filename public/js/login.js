$(document).ready(function () {
    var loginForm = $("form.login");
    var emailVal = $("input.email");
    var passwordVal = $("input.password");


    loginForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailVal.val().trim(),
            password: passwordVal.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }
        loginUser(userData.email, userData.password);
        email.val("");
        password.val("");
    });
    function loginUser(email, passgitword) {
        $.post("/api/login", {
            email: email,
            password: password
        })
            .then(function () {
                window.location.replace("/members.html");
            })
            .catch(function (err) {
                console.log(err);
            });
    }
});