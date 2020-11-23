const express = require("express")
const burger = require("../models/burger.js")
const orm = require("../config/orm")
const connection = require("../config/connection")
const router = express.Router()

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const handlebarsObj = {
            burgers: data
        }
        console.log(handlebarsObj)
        res.render("index", handlebarsObj)
    })
})

router.post("/burgers", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function() {
      res.redirect("/");
    });
  });

  router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function() {
      res.redirect("/");
    });
  });

module.exports = router

