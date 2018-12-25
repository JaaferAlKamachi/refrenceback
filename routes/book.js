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
const checker = require("../middlewares/checker");

// router.use(checker); //change this
router.use(express.json());

/* ************************** MiddleWares ************************** */

// post middleWare to check for if the request is from an admin
router.post("*", (req, res, next) => {
  console.log("post middleWare");
  next();
});

// put middleWare to check for if the request is from an admin
router.put("*", (req, res, next) => {
  console.log("post middleWare");
  next();
});

// delete middleWare to check for if the request is from an admin
router.delete("*", (req, res, next) => {
  console.log("post middleWare");
  next();
});

/* ************************** EOF MiddleWares ************************** */

// //publish a book admin only
router.post("/publish", (req, res) => {
  res.send("published");
});

/*
 *  Here all users should be able to view all and specific book info
 *
 *
 */

//list all books (change this to pagination later) E
router.get("/all", (req, res) => {
  res.send("getting all books");
});

//get a specific book info E
router.get("/:id", (req, res) => {
  res.send(`the book is ${req.params.id}`);
});

//edit a publish Admin only
//delete a publish Admin only

//  Exporting the router so app.js can use it in a MiddleWare
module.exports = router;
