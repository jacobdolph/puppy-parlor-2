// const fs = require("fs");
// const util = require("util");

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);





window.onload = () => {
    var cardBuild = function () {
        // $("div").remove(".columnH")
        let column = $("div").addClass(".columnH")
        let card = $("div").addClass(".cardH")
        let title1 = $("h3").text("")
        let title2 = $("h3").text("")
        let title3 = $("h3").text("")
        let title4 = $("h3").text("")
        let desc1 = $("p").text("")
        let desc2 = $("p").text("")
        let desc3 = $("p").text("")
        let desc4 = $("p").text("")

    }

    cardBuild();

    navigator.geolocation.getCurrentPosition(success)
    function success(pos) {
        let crd = pos.coords;
        let lon = crd.longitude;
        let lat = crd.latitude;

        // queryURL = buildQueryUrl(lat, lon);


    }
}