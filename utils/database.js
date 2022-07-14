const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  username: "root",
  database: "node-complete",
  password: "1111111!",
});

module.exports = pool.promise();
