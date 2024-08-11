import { dummyAiOutput } from '../utils/dummy-data.utils';
import { Response, Request } from "express";
import { failed, send, success } from "../utils/res.utils";
import { BlockscoutService } from '../services/blocksout.service';
import { FrontendGenerator } from '../services/frontend-generator.service';

export class MainController {
  private blocksoutService: BlockscoutService;
  private frontendGeneratorService: FrontendGenerator;

  constructor() {
    this.blocksoutService = new BlockscoutService();
    this.frontendGeneratorService = new FrontendGenerator();
  }

  async buildApp(req: Request, res: Response): Promise<void> {
    try {
      const { contract_address, title, description, theme, logo, promt_txt } = req.body;
      const abiResponse = await this.blocksoutService.getABI(contract_address);
      const abi = JSON.parse(abiResponse.result);

      const result = await this.frontendGeneratorService.generateFrontend(dummyAiOutput, contract_address, abi, title, description, theme, logo);

      send({
        res, message: "Frontend generated successfully", result,
      });
    } catch (err) {
      send({
        res, err, message: "Failed to generate frontend", success: false
      });
    }
  }


  async generateApp(req: Request, res: Response): Promise<void> {
    try {
      const { contract_address, title, description, theme, logo, dummyAiOutput, abi } = req.body;

      const result = await this.frontendGeneratorService.generateFrontend(dummyAiOutput, contract_address, abi, title, description, theme, logo);
      send({
        res, message: "Frontend generated successfully", result,
      });
    } catch (err) {
      send({
        res, err, message: "Failed to generate frontend", success: false
      });
    }
  }
}