$(document).ready(function () {

    $.ajax({
        url: "/api/rooms",
        method: "GET"
    }).then(function (pageInfo) {
        console.log(pageInfo);
        // for (i = 0; i < rooms.length; i++) {
        //     var card = $("div").attr("id", [i]);
        // }
    });

    function updatePage(data) {
        if (room_empty === true)
            alert("Booking was successful!")

        else {
            alert("Room is full, please pick a different one")
        };
    };
});