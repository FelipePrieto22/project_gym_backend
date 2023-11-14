import express, { Application } from "express";
import cors from "cors";
import { sequelize } from "./databases/database";

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.middlewares();
    this.settings();
  }

  settings() {
    this.app.set("port", process.env.PORT || this.port || 8080);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  async db_connection() {
    try {
      // Sincronizar la base de datos con Sequelize
      await sequelize.sync({ force: false }); // El parámetro force: true eliminará todas las tablas existentes y las volverá a crear
      console.log("Sequelize models synchronized with the database");
    } catch (error) {
      console.error("Error establishing database connection:", error);
    }
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("listening on port " + this.app.get("port"));
  }
}
