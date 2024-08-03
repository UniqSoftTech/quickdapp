import express from "express";
import { failed } from "../utils/res.utils";
import { BlocksoutController } from "../controller/blocksout.controller";

const router = express.Router();
const blocksoutController = new BlocksoutController();

router.get("/", (req, res) => {
  failed({ res, err: "Bad Request", status: 400 });
});


router.post("/blocksout/get-abi", blocksoutController.getABI);

export default router;