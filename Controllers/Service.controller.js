import User from "../models/User.model.js";
import Service from "./../models/Service.model.js";

export const getService = async (req, res) => {
  try {
    let getAdmin = await Service.find({ user: req.user.id });
    return res.status(201).send(getAdmin);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};

export const postService = async (req, res) => {
  let {
    serviceTitle,
    serviceMessage,
    servicePic,
    servicePrice,
    serviceEnquiry,
  } = req.body;
  try {
    let data = {
      serviceTitle,
      serviceMessage,
      servicePic,
      servicePrice,
      serviceEnquiry,
    };

    let postService = await Service.create({
      serviceTitle: req.body.serviceTitle,
      user: req.user.id,
      serviceMessage: req.body.serviceMessage,
      servicePic: req.body.servicePic,
      servicePrice: req.body.servicePrice,
      serviceEnquiry: req.body.serviceEnquiry,
    });
    return res
      .status(201)
      .send("Service Page Created Successfully" + postService);
  } catch (err) {
    return res.status(401).send("About post failed" + err.message);
  }
};

export const putService = async (req, res) => {
  try {
    let service = await Service.findById(req.user.id);

    if (!service) {
      return res.status(401).json({ msg: "User not found" });
    }
    if (Service.user.toString !== service.id) {
      return res.status(401).json({ msg: "User not Autherized" });
    }

    const updateService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(updateService);
  } catch (err) {
    return res.status(401).send(err.message);
  }
};

export const deleteService = async (req, res) => {
  try {
    let { _id } = req.params;
    let deleteService = await Service.delete();

    return res.status(201).send("Service deleted Sucessfully" + deleteService);
  } catch (err) {
    return res.status(401).send("Failed to delete Service " + err.message);
  }
};
