import { App } from "./app";

function main() {
  const app = new App();
  app.db_connection();
  app.listen();
}

main();
