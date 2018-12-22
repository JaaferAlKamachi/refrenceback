const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Home Router
app.get("/", (req, res) => {
  res.send("welcome to my app");
});

 
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
