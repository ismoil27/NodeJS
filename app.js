const path = require("path");

const express = require("express");

const errorController = require("./controllers/error");
const db = require("./utils/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// db.execute();

// app.get("/favicon.ico", (req, res) => res.status(204));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000, console.log(`Server is running on Port 3000...`));

// grant all privileges on node.* to root@'127.0.0.1' identified by '1111111!' with grant option
