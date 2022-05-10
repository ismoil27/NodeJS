const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("went to users route");
  res.send("<ul><li>User 1</li> <li>User 2 </li>  </ul>");
});

app.use("/", (req, res, next) => {
  console.log("This just runs always!");
  res.send("<p>Home page with only / </p>");
});

app.listen(4000);
