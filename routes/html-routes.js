module.exports = function (app) {


    app.get("/", function (res, res) {

        res.sendFile("./index.html")
    })
}

