import mongoose from "mongoose";

let aboutSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    companyName: {
      type: String,
    },
    category: {
      type: String,
    },
    yearOfEst: {
      type: Number,
    },
    bussiness: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  { timestamps: true }
);

let About = mongoose.model("About", aboutSchema);

export default About;
