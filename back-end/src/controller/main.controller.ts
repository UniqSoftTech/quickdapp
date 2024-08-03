import { Response, Request } from "express";
import { success } from "../utils/res.utils";
import { dummyAbi } from "../utils/dummy-data.utils";
import { BLOCKSCOUT_URL } from "../config/env.config";
import { BlocksoutService } from "../serives/blocksout.service";


export class MainController {
  private blocksout = new BlocksoutService();

  async buildApp(req: Request, res: Response): Promise<void> {
    try {
      const { contract_address } = req.body
      const abi = await this.blocksout.getABI(contract_address);

    } catch (error) {
      throw error
    }
  }
}
