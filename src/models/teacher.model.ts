import { DataTypes } from "sequelize";
import { sequelize } from "../databases/database";
import { Schedule } from "./schedule.model";
import { Manages } from "./manages.model";

export const Teacher = sequelize.define("Teacher", {
  teacher_rut: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

Teacher.belongsToMany(Schedule, { through: Manages });
