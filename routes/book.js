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

router.use(express.json());

/* ************************** MiddleWares ************************** */

// post middleWare to check for if the request is from an admin
router.post("*", (req, res, next) => {
  console.log("post middleWare");
  checker(req, res, next);
});

// put middleWare to check for if the request is from an admin
router.put("*", (req, res, next) => {
  console.log("put middleWare");
  checker(req, res, next);
});

// delete middleWare to check for if the request is from an admin
router.delete("*", (req, res, next) => {
  console.log("delete middleWare");
  checker(req, res, next);
});

/* ************************** EOF MiddleWares ************************** */

//list all books (change this to pagination later)
router.get("/all", (req, res) => {
  res.send("getting all books");
});

//get a specific book info
router.get("/:id", (req, res) => {
  res.send(`the book is ${req.params.id}`);
});

// //publish a book admin only
router.post("/publish", (req, res) => {
  res.send("published");
});

//edit a publish Admin only
router.put("/edit/:id", (req, res) => {
  res.send("edited successfully");
});

//delete a publish Admin only
router.delete("/delete/:id", (req, res) => {
  res.send("deleted successfully");
});

// Important check paylod with db on every request
function checker(req, res, next) {
  const token = req.headers.token;
  if (token) {
    try {
      //  Get the payload from the jsonwebtoken
      let payload = jwt.verify(token, "key");
      //  You can check the expiration if you want
      next();
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    res.status(404).send("please log in");
  }
}
//  Exporting the router so app.js can use it in a MiddleWare
module.exports = router;
