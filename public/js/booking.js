$(document).ready(function () {

    $.ajax({
        url: "/api/rooms",
        method: "GET"
    }).then(function (pageInfo) {
        console.log(pageInfo);
        for (i = 0; i < pageInfo.length + 1; i++) {
            // $('#rooms').append($('<div/>').attr("id", [i]));
            $("#rooms").append($roomsList);
            console.log(pageInfo[i].room_name);
            var $roomsList = $('<div/>').addClass("col").attr("id", [i]);
            var $roomListItems = $("<li class='list-group-item'>");
            $roomListItems.append("<h5>" + pageInfo[i].room_name + "</h5>");
            $roomsList.append($roomListItems);
        };
    });
    if (this.room_empty === true)
        alert("Booking was successful!")

    else {
        alert("Room is full, please pick a different one")
    };

});