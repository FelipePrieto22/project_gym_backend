import { App } from "./app";

import { User } from "./models/user.model";
import { Have } from "./models/have.model";
import { Place } from "./models/place.model";

function main() {
  const app = new App();
  app.db_connection();
  app.listen();
}

main();
