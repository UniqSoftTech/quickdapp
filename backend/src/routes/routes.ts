import express from "express";
import { failed, success } from "../utils/res.utils";
import { MainController } from "../controller/main.controller";

const router = express.Router();
const mainController = new MainController();

router.get("/", (_req: express.Request, res: express.Response) => {
  success({ res, message: "API is running", status: 200 });
});

router.post("/generate", async (req: express.Request, res: express.Response) => {
  try {
    const result = await mainController.buildApp(req, res);
    success({ res, message: result, status: 200 });
  } catch (error) {
    failed({ res, err: "Failed to build app", status: 500 });
  }
});

export default router;