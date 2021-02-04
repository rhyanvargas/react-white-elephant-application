import express from "express";
import { loginController } from "../useCases/login";

export const userRouter = express.Router();

userRouter.post("/login", (req, res) => loginController.execute(req, res));
userRouter.get("/", (req, res) => {
  console.log("yo", req.body);
  return res.sendStatus(200);
});

// register
// authenticate
