var express = require("express");
var db = require("./models")
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("views"));

db.sequelize.sync({
    force: true
}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT:", PORT)
    })
});