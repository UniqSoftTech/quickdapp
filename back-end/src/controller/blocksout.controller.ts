import { Response, Request } from "express";
import { success } from "../utils/res.utils";
import { dummyAbi } from "../utils/dummy-data.utils";


export class BlocksoutController {
  getABI(req: Request, res: Response) {
    try {
      success({
        res, data: {
          contract_address: req.body.contract_address,
          abi: dummyAbi,
        }
      });
    } catch (error) {
      throw error
    }
  }
}
