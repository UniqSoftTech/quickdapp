import { dummyAiOutput } from '../utils/dummy-data.utils';
import { Response, Request } from "express";
import { failed, success } from "../utils/res.utils";
import { BlocksoutService } from '../serives/blocksout.service';
import { FrontendGenerator } from '../serives/frontend-generator.service';

export class MainController {
  private blocksout: BlocksoutService;
  private frontendgenerator: FrontendGenerator;

  constructor() {
    this.blocksout = new BlocksoutService();
    this.frontendgenerator = new FrontendGenerator();
    this.buildApp = this.buildApp.bind(this);
  }

  async buildApp(req: Request, res: Response): Promise<void> {
    try {
      const { contract_address } = req.body;
      const abi = await this.blocksout.getABI(contract_address);

      const result = await this.frontendgenerator.generateFrontend(
        dummyAiOutput,
        contract_address,
        abi
      );

      success({
        res,
        message: "Success",
        status: 200,
        result: "success",
      });
    } catch (error) {
      failed({
        res,
        err: error,
        status: 500,
      });
    }
  }
}
