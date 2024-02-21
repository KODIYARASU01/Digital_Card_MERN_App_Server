import mongoose from "mongoose";

let serviceSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    serviceTitle: {
      type: String,
    },
    serviceMessage: {
      type: String,
    },
    servicePic: {
      type: String,
    },
    servicePrice: {
      type: Number,
    },
    serviceEnquiry: {
      type: String,
    },
  },
  { timestamps: true }
);

let Service = mongoose.model("Service", serviceSchema);

export default Service;
