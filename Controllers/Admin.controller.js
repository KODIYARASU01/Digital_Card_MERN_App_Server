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
  let {
    profileImage,
    companyName,
    authorName,
    mobile,
    whatsup,
    location,
    mail,
    companyAddress,
    companyEmail,
    websiteLink,
    phoneNumber,
  } = req.body;
  try {
    let data = {
      profileImage,
      companyName,
      authorName,
      mobile,
      whatsup,
      location,
      mail,
      companyAddress,
      companyEmail,
      websiteLink,
      phoneNumber,
    };

    let postAdmin = await Admin.create({
      user: req.user.id,
      profileImage: req.body.profileImage,
      companyName: req.body.companyName,
      authorName: req.body.authorName,
      mobile: req.body.mobile,
      whatsup: req.body.whatsup,
      location: req.body.location,
      mail: req.body.mail,
      companyAddress: req.body.companyAddress,
      companyEmail: req.body.companyEmail,
      websiteLink: req.body.websiteLink,
      phoneNumber: req.body.phoneNumber,
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
