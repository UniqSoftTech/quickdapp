import express from "express";
import { failed, success } from "../utils/res.utils";
import { MainController } from "../controller/main.controller";
import { ContractController } from "../controller/contract.controller";
import { validateContractGetMetadata } from "../middleware/validation.middleware";

const router = express.Router();
const mainController = new MainController();
const contractController = new ContractController();

router.post("/generate", mainController.buildApp.bind(mainController));
router.post("/contract/get-metadata", contractController.getMetaData.bind(contractController));
router.post("/contract/get-abi", contractController.getABI.bind(contractController));
router.get("/contract/top-tokens", contractController.getTopTokens.bind(contractController));

export default router;