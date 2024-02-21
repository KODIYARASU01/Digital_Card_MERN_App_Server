import express from "express";
import { auth } from "../Middleware/AuthMiddleware.js";

import {
  getAdmin,
  putAdmin,
  postAdmin,
  deleteAdmin,
} from "../Controllers/Admin.controller.js";

let router = express.Router();

export let adminGetRoute = router.get("/user", auth, getAdmin);
export let adminPostRoute = router.post("/user", auth, postAdmin);
export let adminUpdateRoute = router.put("/user/:id", auth, putAdmin);
export let adminDeleteRoute = router.delete("/user/:id", auth, deleteAdmin);
