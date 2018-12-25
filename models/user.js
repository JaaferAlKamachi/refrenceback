const mongoose = require("mongoose");

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  age: {
    required: [true, "Age Is Required"],
    type: Number
  },
  name: {
    type: String
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  password: {
    required: true,
    type: String
  },
  userType: {
    type: String,
    required: true,
    enum: ["user"] //admin enum cannot be used here for security reasons
    //maybe we can add admins only manually ??
  }
});

module.exports = mongoose.model("User", userSchema);
