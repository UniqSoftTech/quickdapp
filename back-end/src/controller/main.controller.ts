import { Response, Request } from "express";
import { success } from "../utils/res.utils";
import { dummyAbi } from "../utils/dummy-data.utils";
import { BLOCKSCOUT_URL } from "../config/env.config";
import { BlocksoutService } from "../serives/blocksout.service";
import { FrontendGenerator } from "../serives/frontend-generator.service";


export class MainController {
  private blocksout = new BlocksoutService();
  private frontendGenerator = new FrontendGenerator();

  async buildApp(req: Request, res: Response): Promise<void> {
    try {
      const { contract_address } = req.body
      const abi = await this.blocksout.getABI(contract_address);

      const frontend = await this.frontendGenerator.generateFrontend(
        "ai-output",
        contract_address,
        abi
      );

      console.log("🚀 ~ MainController ~ buildApp ~ frontend:", frontend)

      return frontend

    } catch (error) {
      throw error
    }
  }
}
