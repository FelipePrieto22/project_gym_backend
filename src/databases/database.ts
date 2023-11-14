import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "root",
  database: "data_base",
  port: 3306,
  models: [__dirname + "/models"], // Directorio donde estarán tus modelos Sequelize
});
