import express from "express";
import { failed } from "../utils/res.utils";

const router = express.Router();

router.get("/", (req, res) => {
  failed({ res, err: "Bad Request", status: 400 });
});

export default router;