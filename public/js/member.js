$(document).ready(function () {
    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.email);
    });
});

function buildQueryUrl(lat, lon) {
    var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
    var queryParams = { "f": "json" };
    queryParams.query = "dog trail";
    queryParams.radius = "10000";
    queryParams.location = `${lat},${lon}`;
    queryParams.key = MYGOOGLEAPI;
    return queryURL + $.param(queryParams)
}


$("#check-weather").on("click", function () {


})
window.onload = () => {
    navigator.geolocation.getCurrentPosition(success)
    function success(pos) {
        let crd = pos.coords;
        let lon = crd.longitude;
        let lat = crd.latitude;
        let apikey = process.env.MYGOOGLEAPI;

        console.log(lon, lat, apikey)
    }
}