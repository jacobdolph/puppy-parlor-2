var express = require("express");

var router = express.Router();

var db = require("../models")

router.get("/", function (req, res) {

    res.render("index")
})
router.get("/signup", function (req, res) {
    res.render("signup")
})
router.get("/login", function (req, res) {
    res.render("login")
})
router.get("/member", function (req, res) {
    res.render("member")
})
module.exports = router;