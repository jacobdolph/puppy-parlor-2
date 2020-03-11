var db = require("./../models")

module.exports = function (app) {

    app.get("/api/rooms", function (req, res) {
        db.rooms.findAll({}).then(function (dbRooms) {
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

    app.get("/api/test", function (req, res) {
        var productArray = [
            {
                name: "Delux",
                description: "The works",
                price: "29"
            },
            {
                name: "Premium",
                description: "The works",
                price: "45"
            },
            {
                name: "King",
                description: "The works",
                price: "60"
            }
        ]
        res.json(productArray)
    })
}