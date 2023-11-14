import * as mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "data_base",
  port: 3306,
});
