import express from "express";
import { userRouter } from "../../../modules/Users/infrastructure/user";

const v0Router = express.Router();
v0Router.use("/", userRouter);

export { v0Router };
