import express from "express";
import { v0Router } from "./api/v0";

const app = express();

app.use(express.json());

app.use("/api/v0", v0Router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`[app]: Listening on port ${port}`);
});
