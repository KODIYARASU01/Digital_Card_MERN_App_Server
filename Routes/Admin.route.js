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
import {
  deletePayment,
  getPayment,
  postPayment,
  putPayment,
} from "../Controllers/Payment.controller.js";

import {
  putGallery,
  getGallery,
  postGallery,
  deleteGallery,
} from "../Controllers/Gallery.controller.js";
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

//payment
export let paymentGetRoute = router.get("/user/payment", auth, getPayment);
export let paymentPostRoute = router.post("/user/payment", auth, postPayment);
export let paymentUpdateRoute = router.put(
  "/user/payment/:id",
  auth,
  putPayment
);
export let paymentDeleteRoute = router.delete(
  "/user/payment/:id",
  auth,
  deletePayment
);

//Gallery:

export let galleryGetRoute = router.get("/user/gallery", auth, getGallery);
export let galleryPostRoute = router.post("/user/gallery", auth, postGallery);
export let galleryPutRoute = router.put("/user/gallery", auth, putGallery);
export let galleryDeleteRoute = router.delete(
  "/user/gallery",
  auth,
  deleteGallery
);
