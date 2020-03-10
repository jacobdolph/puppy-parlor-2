const axios = require("axio")
// $(document).ready(function () {
//     $.get("/api/user_data").then(function (data) {
//         $(".member-name").text(data.email);
//     });
// });

function buildQueryUrl(lat, lon) {
    var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
    var queryParams = { "f": "json" };
    queryParams.query = "dog trail";
    queryParams.radius = "10000";
    queryParams.location = `${lat},${lon}`;
    queryParams.key = "AIzaSyBz92Pv0lBp-rKrwN557WHiUbEIO4rIsHI";
    return queryURL + $.param(queryParams)
}



window.onload = () => {
    navigator.geolocation.getCurrentPosition(success)
    function success(pos) {
        let crd = pos.coords;
        let lon = crd.longitude;
        let lat = crd.latitude;

        queryURL = buildQueryUrl(lat, lon);


        // $.ajax({
        //     url: queryURL,
        //     method: "GET",
        //     contentType: "application/json",
        //     dataType: 'jsonp',
        //     responseType: 'application/json',
        //     xhrFields: {
        //         withCredentials: false
        //     },
        //     headers: {
        //         'Access-Control-Allow-Credentials': true,
        //         'Access-Control-Allow-Origin': `*`,
        //         'Access-Control-Allow-Methods': 'GET',
        //         'Access-Control-Allow-Headers': 'application/json',
        //     },
        //     cache: false,
        //     success: function (response) {
        //         console.log(response)
        //     }
        // }).then(function (trailData) {
        //     console.log(trailData)
        // })

    }
}