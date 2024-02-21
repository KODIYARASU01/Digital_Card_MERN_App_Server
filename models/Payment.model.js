import mongoose from "mongoose";

let paymentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    phonePayNumber: {
      type: Number,
    },
    gPayNumber: {
      type: Number,
    },
    bankName: {
      type: String,
    },
    accountNumber: {
      type: Number,
    },
    IFSC: {
      type: String,
    },
    customerName: {
      type: String,
    },
    AcountType: {
      type: String,
    },
  },
  { timestamps: true }
);

let Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
