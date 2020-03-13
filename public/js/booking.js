$(document).ready(function () {

    $.ajax({
        url: "/api/rooms",
        method: "GET"
    }).then(function (pageInfo) {
        console.log(pageInfo);
        for (i = 0; i < rooms.length; i++) {
            var card = $("div").attr("id", [i]);
            card.addClass("card");
            $("#rooms").append(card);
            if (room_empty === true)
                alert("Booking was successful!")

            //put method to update mysql based on whichever id is clicked ?

            else {
                alert("Room is full, please pick a different one")
            };

        };
    });
});