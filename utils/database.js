const mysql = require("mysql2");
const fs = require("fs");
const { getSystemErrorMap } = require("util");
const contents = fs.readFileSync("./config/db-config.json");
const conf = JSON.parse(contents.toString());

console.log(conf.user);

let pool = mysql.createPool({
  connectionLimit: conf.connectionLimit,
  multipleStatements: true,
  host: conf.host,
  port: parseInt(conf.port),
  user: conf.user,
  password: conf.password,
  database: conf.database,
});

module.exports = pool.promise();

// module.exports = {
//   executeQuery: function (query, values, callback) {
//     this.getConnection((conn) => {
//       conn.query(query, values, function (err, rows, fields) {
//         if (err) {
//           console.log("error : " + err);
//         }
//         callback(err, rows);
//       });
//       conn.release();
//       // console.log("release db connection");
//     });
//   },
//   getConnection: function (callback) {
//     pool.getConnection(function (err, conn) {
//       if (!err) {
//         // console.log("create db connection");
//         callback(conn);
//       } else {
//         console.log(err);
//       }
//     });
//   },
// };
