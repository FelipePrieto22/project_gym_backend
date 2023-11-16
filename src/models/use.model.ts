import { DataType } from "sequelize-typescript";
import { sequelize } from "../databases/database";
import { Place } from "./place.model";
import { User } from "./user.model";

export const Use = sequelize.define("Use", {
  space: {
    type: DataType.INTEGER,
  },
  place_name: {
    type: DataType.STRING,
    references: {
      model: Place,
      key: "name",
    },
  },
  user_rut: {
    type: DataType.STRING,
    references: {
      model: User,
      key: "rut",
    },
  },
});
