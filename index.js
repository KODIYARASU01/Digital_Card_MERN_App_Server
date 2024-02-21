import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {
  userRegisterRoute,
  userLoginRoute,
  adminDashboard,
} from "./Routes/User.router.js";

import {
  adminGetRoute,
  adminPostRoute,
  adminUpdateRoute,
  adminDeleteRoute,
} from "./Routes/Admin.route.js";

let app = express();
app.use(express.json());
let PORT = process.env.PORT || 3000;
let uri = process.env.MONGODB_URI;
//Middleware:
app.use(cors());
app.use("/api", userRegisterRoute);
app.use("/api", userLoginRoute);
app.use("/api", adminDashboard);
app.use("/api", adminGetRoute);
app.use("/api", adminPostRoute);
app.use("/api", adminUpdateRoute);
app.use("/api", adminDeleteRoute);
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
