import express from "express";
import { auth } from "../Middleware/AuthMiddleware.js";

import {
  getAdmin,
  putAdmin,
  postAdmin,
  deleteAdmin,
} from "../Controllers/Admin.controller.js";
import {
  getAbout,
  putAbout,
  postAbout,
  deleteAbout,
} from "../Controllers/About.controller.js";
import {
  deleteService,
  getService,
  postService,
  putService,
} from "../Controllers/Service.controller.js";
let router = express.Router();

export let adminGetRoute = router.get("/user", auth, getAdmin);
export let adminPostRoute = router.post("/user", auth, postAdmin);
export let adminUpdateRoute = router.put("/user/:id", auth, putAdmin);
export let adminDeleteRoute = router.delete("/user/:id", auth, deleteAdmin);

//About

export let aboutGetRoute = router.get("/user/about", auth, getAbout);
export let aboutPostRoute = router.post("/user/about", auth, postAbout);
export let aboutUpdateRoute = router.put("/user/about/:id", auth, putAbout);
export let aboutDeleteRoute = router.delete(
  "/user/about/:id",
  auth,
  deleteAbout
);

//service:

export let serviceGetRoute = router.get("/user/service", auth, getService);
export let servicePostRoute = router.post("/user/service", auth, postService);
export let serviceUpdateRoute = router.put(
  "/user/service/:id",
  auth,
  putService
);
export let serviceDeleteRoute = router.delete(
  "/user/service/:id",
  auth,
  deleteService
);
