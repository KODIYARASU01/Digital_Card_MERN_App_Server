import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import GalleryImage from "./models/Gallery.model.js";
import jwt from "jsonwebtoken";
import {
  userRegisterRoute,
  userLoginRoute,
  loginUserDataRoute,
  adminDashboard,
} from "./Routes/User.router.js";

import {
  adminGetRoute,
  adminPostRoute,
  adminUpdateRoute,
  adminDeleteRoute,
  aboutGetRoute,
  aboutPostRoute,
  aboutUpdateRoute,
  aboutDeleteRoute,
  serviceGetRoute,
  servicePostRoute,
  serviceUpdateRoute,
  serviceDeleteRoute,
  paymentGetRoute,
  paymentPostRoute,
  paymentUpdateRoute,
  paymentDeleteRoute,
  galleryGetRoute,
  galleryPostRoute,
  galleryPutRoute,
  galleryDeleteRoute,
} from "./Routes/Admin.route.js";
let app = express();
app.use(cors());
app.use(express.json());
let PORT = process.env.PORT || 3000;
let uri = process.env.MONGODB_URI;
//Middleware:

app.use("/api", userRegisterRoute);
app.use("/api", userLoginRoute);
app.use("api", loginUserDataRoute);
app.use("/api", adminDashboard);
app.use("/api", adminGetRoute);
app.use("/api", adminPostRoute);
app.use("/api", adminUpdateRoute);
app.use("/api", adminDeleteRoute);

//About:
app.use("/api", aboutGetRoute);
app.use("/api", aboutPostRoute);
app.use("/api", aboutUpdateRoute);
app.use("/api", aboutDeleteRoute);
//Services:
app.use("/api", serviceGetRoute);
app.use("/api", servicePostRoute);
app.use("/api", serviceUpdateRoute);
app.use("/api", serviceDeleteRoute);

//Payment:
app.use("/api", paymentGetRoute);
app.use("/api", paymentPostRoute);
app.use("/api", paymentUpdateRoute);
app.use("/api", paymentDeleteRoute);
app.get("/", (req, res) => {
  res.send("Hello,Server is running");
});

//Gallery:
app.use("/api", galleryGetRoute);
app.use("/api", galleryPostRoute);
app.use("/api", galleryPutRoute);
app.use("/api", galleryDeleteRoute);
app.get("/", (req, res) => {
  res.send("Hello,Server is running");
});

mongoose.set("strictQuery", false);
mongoose
  .connect(uri)
  .then(() => {
    console.log("Mongodb Connected Succesfully");
    app.listen(PORT, () => {
      console.log(`Server is running ${PORT} port number`);
    });
  })
  .catch((error) => {
    console.log("mongoDB connection Failed" + error.message);
  });
