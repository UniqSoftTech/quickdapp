import { Response, Request } from "express";
import { success } from "../utils/res.utils";
import { BLOCKSCOUT_URL } from "../config/env.config";

export class BlocksoutService {
  async getABI(contract_address: string) {
    try {
      return await fetch(`${BLOCKSCOUT_URL}/api?module=contract&action=getabi&address=${contract_address}`).then(contractInfo => contractInfo.json())


      // success({
      //   res,
      //   message: blockInfo?.message,
      //   status: blockInfo?.status === "1" ? 200 : 500,
      //   result: JSON.parse(blockInfo?.result) || null,
      // });

    } catch (error) {
      throw error
    }
  }
}

