import User from "../models/User.model.js";
import Payment from "../models/Payment.model.js";

export const getPayment = async (req, res) => {
  try {
    let getPayment = await Payment.find({ user: req.user.id });
    return res.status(201).send(getPayment);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};

export const postPayment = async (req, res) => {
  let {
    phonePayNumber,
    user,
    gPayNumber,
    bankName,
    accountNumber,
    IFSC,
    customerName,
    AcountType,
  } = req.body;
  try {
    let data = {
      phonePayNumber,
      user,
      gPayNumber,
      bankName,
      accountNumber,
      IFSC,
      customerName,
      AcountType,
    };

    let postPayment = await Payment.create({
      phonePayNumber: req.body.phonePayNumber,
      user: req.user.id,
      gPayNumber: req.body.gPayNumber,
      bankName: req.body.bankName,
      accountNumber: req.body.accountNumber,
      customerName: req.body.customerName,
      AcountType: req.body.AcountType,
      IFSC: req.body.IFSC,
    });
    return res
      .status(201)
      .send("Payment Page Created Successfully" + postPayment);
  } catch (err) {
    return res.status(401).send("Payment post failed" + err.message);
  }
};

export const putPayment = async (req, res) => {
  try {
    let payment = await Payment.findById(req.user.id);

    if (!payment) {
      return res.status(401).json({ msg: "User not found" });
    }
    if (Payment.user.toString !== payment.id) {
      return res.status(401).json({ msg: "User not Autherized" });
    }

    const updatePayment = await Payment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(updatePayment);
  } catch (err) {
    return res.status(401).send(err.message);
  }
};

export const deletePayment = async (req, res) => {
  try {
    let { _id } = req.params;
    let deletePayment = await Payment.delete();

    return res.status(201).send("Payment deleted Sucessfully" + deletePayment);
  } catch (err) {
    return res.status(401).send("Failed to delete Payment " + err.message);
  }
};
