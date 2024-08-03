import express from "express";
import { failed } from "../utils/res.utils";
import { MainController } from "../controller/main.controller";

const router = express.Router();
const mainController = new MainController();

router.get("/", (req, res) => {
  failed({ res, err: "Bad Request", status: 400 });
});


router.post("/build-app", mainController.buildApp);

export default router;