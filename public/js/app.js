$(document).ready(function () {

    $(".login").on("click", function (event) {
        var id = $(this).data("id");
    })

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newDog = {
            name: $(".dog-name").val().trim().toString,
            size: $(".dog-size").val().trim().toString,
            breed: $(".dog-breed").val().trim().toString,
            vaccinated: $("[name=vaccinated]:checked").val().trim(),
        };
        $.ajax("/api/dogs", {
            type: "POST",
            data: newDog
        }).then(
            function () {
                console.log("Added new pup!");
                location.reload();
            }
        );
    });













})