import mongoose from "mongoose";

let adminSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    companyName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let Admin = mongoose.model("Admin", adminSchema);

export default Admin;
