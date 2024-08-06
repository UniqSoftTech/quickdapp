import { dummyAiOutput } from '../utils/dummy-data.utils';
import { Response, Request } from "express";
import { failed, success } from "../utils/res.utils";
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
      const { contract_address, title, description } = req.body;
      const abiResponse = await this.blocksoutService.getABI(contract_address);
      const abi = JSON.parse(abiResponse.result); // Parse the ABI string to an object

      const result = await this.frontendGeneratorService.generateFrontend(
        dummyAiOutput,
        contract_address,
        abi,
        title,
        description
      );

      success({
        res, message: "Frontend generated successfully", status: 200, result,
      });
    } catch (error) {
      failed({
        res, err: error, status: 500, message: "Failed to generate frontend",
      });
    }
  }
}