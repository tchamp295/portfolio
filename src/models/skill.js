import mongoose, { Schema, models } from "mongoose";
const skillSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Skill = models.Skill || mongoose.model("Skill", skillSchema);
export default Skill;
