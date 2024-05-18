import mongoose, { Schema, models } from "mongoose";

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    liveUrl: {
      type: String,
      required: true,
    },
    githubUrl: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Project = models.Project || mongoose.model("Project", projectSchema);
export default Project;
