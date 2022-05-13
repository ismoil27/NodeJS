const path = require("path");

const express = require("express");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.get("/favicon.ico", (req, res) => res.status(204));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(3000);
