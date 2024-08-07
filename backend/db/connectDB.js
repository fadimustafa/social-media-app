import mysql from "mysql";
// import dotenv from "dotenv";
// dotenv.config();
// export const db = mysql.createConnection({
//   host: "localhost", //process.env.MYSQL_HOST,
//   user: "root", //process.env.MYSQL_USER,
//   password: "1234", //process.env.MYSQL_PASSWORD,
//   database: "socildb", //process.env.MYSQL_DATABASE,
// });
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "socildb",
});
