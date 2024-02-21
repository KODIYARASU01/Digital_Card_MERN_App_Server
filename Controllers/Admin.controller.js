import Admin from "../models/Admin.model.js";
import User from "../models/User.model.js";

export const getAdmin = async (req, res) => {
  try {
    let getAdmin = await Admin.find({ user: req.user.id });
    return res.status(201).send(getAdmin);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};

export const postAdmin = async (req, res) => {
  try {
    let postAdmin = await Admin.create({
      user: req.user.id,
      companyName: req.body.companyName,
    });
    return res.status(201).send("Admin Created Successfully" + postAdmin);
  } catch (err) {
    return res.status(401).send("Admin post failed" + err.message);
  }
};

export const putAdmin = async (req, res) => {
  try {
    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(401).json({ msg: "User not found" });
    }
    if (Admin.user.toString !== user.id) {
      return res.status(401).json({ msg: "User not Autherized" });
    }

    const updateAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(updateAdmin);
  } catch (err) {
    return res.status(401).send(err.message);
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    let { _id } = req.params;
    let deleteAdmin = await Admin.delete();

    return res.status(201).send("Admin deleted Sucessfully");
  } catch (err) {
    return res.status(401).send("Failed to delete adamin " + err.message);
  }
};
