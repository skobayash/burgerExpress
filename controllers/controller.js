var express = require('express');

var router = express.Router();

var burger = require("../models/model.js");


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
    //   console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log("devoured?: " + req.body.devoured)

    burger.insertOne([
        "name", "devoured"
    ],[
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});


router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

router.post("/api/burgers/", function(req, res) {
    console.log("name: " + req.body.name)

    burger.insertOne([
        "name", "devoured"
    ],[
        req.body.name, 0
    ], function(result) {
        res.json({ id: result.insertId });
    });
});


module.exports = router;