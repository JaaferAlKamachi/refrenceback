// Dependancies
const mongoose = require("mongoose");

//Schema

const bookSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    required: true,
    type: String,
    unique: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    String
  },
  link: { type: String, required: true },
  poster: { type: String, required: true }
});

module.exports = mongoose.model("Book", bookSchema);
