
$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.first_name);
    });
});

$(document).ready(function () {
    $('.modal').modal();
});

$(document).ready(function () {
    $('#miles-submit').on("click", function () {
        let miles = $(".miles").val().trim()
        console.log(miles)
        let currentMiles = $("#current-miles").text()
        console.log(currentMiles)
        let newDistance = parseInt(currentMiles) + parseInt(miles)
        console.log(newDistance)
        $("#current-miles").empty()
        $("#current-miles").append(newDistance)

    })


})