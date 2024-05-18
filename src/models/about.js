import mongoose, { Schema, models } from "mongoose";

const aboutSchema = new Schema(
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
    cv: {
      type: String,  // URL to the CV file
      required: true,
    },
  },
  { timestamps: true }
);

const About = models.About || mongoose.model("About", aboutSchema);
export default About;
