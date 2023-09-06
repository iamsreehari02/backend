import express from "express";
import routerfunction from "./route/index.js";
import morgan from "morgan";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));

mongoose
  .connect("mongodb://localhost:27017/user")
  .then(() => console.log("connected to mongodb"));

app.use("/api", routerfunction);

app.use((err, req, res, next) => {
  res.status(400).send(err);
});

app.listen(5000, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log("connected to port :5000");
});
