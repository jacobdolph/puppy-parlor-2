
var db = require("../models");

var passport = require("../config/passport.js")


module.exports = function (app) {
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user)
    });
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    })
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            res.json({})
        } else {
            res.json({
                first_name: req.user.first_name,
                email: req.user.email,
                id: req.user.id
            })
        }
    })
    app.get("/api/rooms", function (req, res) {
        db.rooms.findAll({}).then(function (dbRooms) {
            res.json(dbRooms)
        })
    });
    app.get("/api/users", function (req, res) {
        db.users.findAll({}).then(function (dbUsers) {
            res.json(dbUsers)
        })
    })

    app.post("/api/users", function (req, res) {
        db.users.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        }).then(function (dbUsers) {
            res.json(dbUsers)
        })
    })
};



