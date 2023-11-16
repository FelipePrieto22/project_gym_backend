import { DataTypes } from "sequelize";
import { sequelize } from "../databases/database";
import { Schedule } from "./schedule.model";
import { Have } from "./have.model";
import { Place } from "./place.model";
import { Use } from "./use.model";

export const User = sequelize.define(
  "User",
  {
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

User.belongsToMany(Schedule, { through: Have });
User.belongsToMany(Place, { through: Use });
