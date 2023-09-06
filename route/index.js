import express, { Router } from "express";
import {
  createUser,
  getApi,
  updateUser,
} from "../controller/user.controller.js";
const route = express.Router();

route.route("/").get(getApi).post(createUser);
route.patch("/:userid", updateUser);

export default route;
