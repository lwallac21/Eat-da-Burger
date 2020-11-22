const express = require("express")
const burgers = require("../models/burger.js")
const router = express.Router()


router.get("/", function(req, res) {
    burgers.selectAll(function (data) {
        const handlebarsObj= {
            burgers: data
        }
        console.log(handlebarsObj)
        res.render("index", handlebarsObj)
})
})

module.exports = router

