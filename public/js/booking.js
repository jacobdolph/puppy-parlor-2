$(document).ready(function () {
    $.ajax({
        url: "/api/rooms",
        method: "GET"
    }).then(function (pageInfo) {
        console.log(pageInfo)
        let row = $("#rooms")

        for (var i = 0; i < pageInfo.length; i++) {
            let roomName = pageInfo[i].room_name;
            let roomStatus = pageInfo[i].room_empty;
            let roomId = pageInfo[i].id;
            let border = $("<li/>").addClass("list-group-item")
            let div = $("<button/>").addClass("col").attr({
                "id": roomId,
                "id_status": roomStatus,
                "onclick": "window.location.href='./member.html'"
            });
            let title = $("<h4/>").text(roomName);
            let uL = $("<ul/>");
            let list = null;
            switch (roomName) {
                case "Executive":
                    list = "<li>King Bed</li><li>Full Bath</li><li>Private Feeding Area</li>";
                    break;
                case "Delux":
                    list = "<li>Queen Bed</li><li>Half Bath</li><li>Shared Feeding Area</li>";
                    break;
                case "Standard":
                    list = "<li>Twin Bed</li><li>Shared Feeding Area</li>"
            }
            div.data("status", roomStatus)
            uL.append(list);
            border.append(title);
            border.append(uL);
            div.append(border)
            row.append(div);
            console.log(roomId, roomName, roomStatus, list);
        }
        $("#rooms").on("click", "button", function () {
            let roomEmptyStatus = $(this).attr("id_status");

            if (roomEmptyStatus != 1) {
                alert("This room is Full");
                return;
            } else {
                alert("Thank you for booking with us!")



            }
        }
        )
    });
});

