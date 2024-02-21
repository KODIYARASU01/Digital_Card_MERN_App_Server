import About from "../models/About.model.js";
import User from "../models/User.model.js";

export const getAbout = async (req, res) => {
  try {
    let getAdmin = await About.find({ user: req.user.id });
    return res.status(201).send(getAdmin);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};

export const postAbout = async (req, res) => {
  let { brandName, category, yearOfEst, value, bussiness } = req.body;
  try {
    let data = {
      brandName,
      category,
      yearOfEst,
      bussiness,
      value,
    };

    let postAbout = await About.create({
      brandName: req.body.brandName,
      user: req.user.id,
      category: req.body.category,
      yearOfEst: req.body.yearOfEst,
      bussiness: req.body.bussiness,
      value: req.body.value,
    });
    return res.status(201).send("About Page Created Successfully" + postAbout);
  } catch (err) {
    return res.status(401).send("About post failed" + err.message);
  }
};

export const putAbout = async (req, res) => {
  try {
    let about = await About.findById(req.user.id);

    if (!about) {
      return res.status(401).json({ msg: "User not found" });
    }
    if (About.user.toString !== about.id) {
      return res.status(401).json({ msg: "User not Autherized" });
    }

    const updateAbout = await About.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(updateAdmin);
  } catch (err) {
    return res.status(401).send(err.message);
  }
};

export const deleteAbout = async (req, res) => {
  try {
    let { _id } = req.params;
    let deleteAbout = await About.delete();

    return res.status(201).send("About deleted Sucessfully" + deleteAbout);
  } catch (err) {
    return res.status(401).send("Failed to delete adamin " + err.message);
  }
};
