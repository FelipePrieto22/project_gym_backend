import { DataTypes } from "sequelize";
import { sequelize } from "../databases/database";
import { Schedule } from "./schedule.model";
import { User } from "./user.model";
import { Use } from "./use.model";

export const Place = sequelize.define(
  "Place",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Place.hasMany(Schedule, {
  foreignKey: "placeId",
  sourceKey: "name",
});

Schedule.belongsTo(Place, {
  foreignKey: "placeId",
  targetKey: "name",
});

Place.belongsToMany(User, { through: Use });
