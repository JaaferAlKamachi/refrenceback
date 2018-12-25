const jwt = require("jsonwebtoken");

function checker(req, res, next) {
  const token = req.headers.token;
  console.log(token);

  if (token) {
    try {
      console.log(token);

      //  Get the payload from the jsonwebtoken
      let payload = jwt.verify(token, "key");
      //  You can check the expiration if you want
      next();
    } catch (err) {
      console.log("here");
      res.status(400).send(err);
    }
  } else {
    res.status(404).send("please log in");
  }
}

module.exports = checker;
