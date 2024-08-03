import { Response, Request } from "express";
import { success } from "../utils/res.utils";
import { dummyAbi } from "../utils/dummy-data.utils";
import { BLOCKSCOUT_URL } from "../config/env.config";


export class BlocksoutController {
  async getABI(req: Request, res: Response) {
    try {
      const blockInfo = await fetch(`${BLOCKSCOUT_URL}/api?module=contract&action=getabi&address=${req.body.contract_address}`).then(contractInfo => contractInfo.json())

      console.log("🚀 ~ BlocksoutController ~ getABI ~ blockInfo:", blockInfo)
      success({
        res,
        message: blockInfo?.message,
        status: blockInfo?.status === "1" ? 200 : 500,
        result: JSON.parse(blockInfo?.result) || null,
      });
    } catch (error) {
      throw error
    }
  }
}
