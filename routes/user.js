/*
 * This file handel all /user Routes
 *
 */

// Dependencies
const express = require("express");
const router = express.Router();
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
// const checker = require("../middlewares/checker");

// router.use(checker); //change this

// Registration Route
router.post("/register", (req, res) => {
  bcrypt.genSalt(10).then(salt => {
    bcrypt.hash(req.body.password, salt).then(hashed => {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        password: hashed,
        email: req.body.email,
        userType: req.body.usrType
      });
      user
        .save()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.send(err);
        });
    });
  });
});

//login
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then(result => {
      bcrypt.compare(req.body.password, result.password, function(
        err,
        response
      ) {
        if (response) {
          let x = loggedIn(result._id);
          res.header({ "x-auth-token": x }).send("your logged in ");
        } else {
          res.status(404).send("invalid creds");
        }
      });
    })
    .catch(err => {
      res.status(404).send(err);
    });
});

function loggedIn(id) {
  const x = jwt.sign({ _id: id }, "key");
  console.log(x);
  return x;
}

//  Exporting the router so app.js can use it in a MiddleWare
module.exports = router;
