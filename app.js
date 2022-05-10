const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This runs always!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In another middle");
  res.send("<h1>This is 'Add Product page'</h1>");
});

app.listen(3000);
