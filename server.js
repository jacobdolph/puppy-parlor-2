var express = require("express");
var session = require("express-session")
var passport = require("./config/passport")
var exphbs = require("express-handlebars")
var db = require("./models")

var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// require("./routes/html-routes")(app)
// require("./controllers/controller.js")(app);
var routes = require("./controllers/roomController.js")
require("./routes/api-routes")(app);
app.use(routes)


db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT:", PORT)
    })
});