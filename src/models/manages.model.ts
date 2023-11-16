import { DataTypes } from "sequelize";
import { sequelize } from "../databases/database";
import { Teacher } from "./teacher.model";
import { Schedule } from "./schedule.model";

export const Manages = sequelize.define("Manages", {
  teacher_rut: {
    type: DataTypes.STRING,
    references: {
      model: Teacher,
      key: "teacher_rut",
    },
  },
  schedule_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Schedule,
      key: "id_schedule",
    },
  },
});
