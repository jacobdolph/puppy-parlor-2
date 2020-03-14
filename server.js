var express = require("express");
var db = require("./models")
var PORT = process.env.PORT || 8080;
var app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


require("./controllers/controller.js")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT:", PORT)
    })
});