var db = require("./../models")

module.exports = function (app) {

    app.get("/api/rooms", function (req, res) {
        db.rooms.findAll({ raw: true }).then(function (dbRooms) {
            res.json(dbRooms)
        })
    })

    app.get("/api/rooms/:id", function (req, res) {
        db.rooms.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbRooms) {
            res.json(dbRooms)
        })
    })
    app.put("/api/rooms", function (req, res) {
        db.rooms.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (dbUpdate) {
            res.json(dbUpdate)
        });
    });
    // app.get("/api/users", function (req, res) {
    //     db.User.findAll({}).then(function (dbUsers) {
    //         res.json(dbUsers)
    //     });
    // });
    // app.post("/api/users", function (req, res) {
    //     console.log(req.body)
    //     db.User.create({
    //         first_name: req.body.firstName,
    //         last_name: req.body.lastName,
    //         email: req.body.userEmail,
    //         password: req.body.userPassword
    //     })
    //         .then(function (dbUser) {
    //             res.json(dbUser)
    //         });
    // });
    // app.put("api/users", function (req, res) {
    //     db.User.update(req.body, {
    //         where: {
    //             id: req.body.id
    //         }
    //     }).then(function (dbUsers) {
    //         res.json(dbUsers)
    //     })
    // })

}