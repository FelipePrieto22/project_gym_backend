import express, { Application } from "express";
import cors from "cors";

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

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("listening on port " + this.app.get("port"));
  }
}
