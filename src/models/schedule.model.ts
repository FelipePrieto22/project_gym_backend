import { DataTypes } from "sequelize";
import { sequelize } from "../databases/database";
import { User } from "./user.model";
import { Have } from "./have.model";

export const Schedule = sequelize.define(
  "Schedule",
  {
    id_schedule: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    month: {
      type: DataTypes.INTEGER,
    },
    day: {
      type: DataTypes.INTEGER,
    },
    space: {
      type: DataTypes.INTEGER,
    },
    hour: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Schedule.belongsToMany(User, { through: Have });
