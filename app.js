const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRoutes = require("./routes/user");
const booksRoutes = require("./routes/book");

const PORT = process.env.PORT || 3000;

//  Starting MongoDB connection
mongoose.connect(
  "mongodb://root:root123@ds141654.mlab.com:41654/lldartsll-fikracamps-bookstore",
  { useNewUrlParser: true }
);

//  To Check if the connection works fine or not
mongoose.connection.on("connected", () => {
  console.log("\x1b[36m%s\x1b[0m", "mongo has been connected...");
});

app.use(express.json());
app.use("/user", usersRoutes);
app.use("/books", booksRoutes);

// Home Router
app.get("/", (req, res) => {
  res.send("welcome to my app");
}); // this one is useless kinda

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
