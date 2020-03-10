const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);





window.onload = () => {
    navigator.geolocation.getCurrentPosition(success)
    function success(pos) {
        let crd = pos.coords;
        let lon = crd.longitude;
        let lat = crd.latitude;

        queryURL = buildQueryUrl(lat, lon);


    }
}