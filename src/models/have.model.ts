import { DataTypes } from "sequelize";
import { sequelize } from "../databases/database";
import { User } from "./user.model";
import { Schedule } from "./schedule.model";

export const Have = sequelize.define("Have", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  attendance: {
    type: DataTypes.BOOLEAN,
  },
  user_rut: {
    type: DataTypes.STRING,
    references: {
      model: User,
      key: "user_rut",
    },
  },
  id_schedule: {
    type: DataTypes.INTEGER,
    references: {
      model: Schedule,
      key: "id_schedule",
    },
  },
});
