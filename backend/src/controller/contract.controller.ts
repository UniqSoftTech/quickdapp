import { dummyAiOutput, topTokens } from '../utils/dummy-data.utils';
import { Response, Request } from "express";
import { failed, success } from "../utils/res.utils";
import { ethers } from "ethers"
import { AlchemyService } from '../services/alchemy.service';
import { BlockscoutService } from '../services/blocksout.service';

export class ContractController {
  private alchemyService: AlchemyService;
  private blocksoutService: BlockscoutService;

  constructor() {
    this.alchemyService = new AlchemyService();
    this.blocksoutService = new BlockscoutService();
  }

  /**
   * Retrieves the metadata of a token contract.
   *
   * @param {Request} req - The request object containing the address and network of the token contract.
   * @param {Response} res - The response object to send the result or error.
   * @return {Promise<void>} A promise that resolves when the metadata is retrieved and sent in the response.
   */
  async getMetaData(req: Request, res: Response): Promise<void> {
    try {
      const { address, network } = req.body;

      if(!ethers.isAddress(address))
        return failed({ res, message: "Invalid address" });

      const result = await this.alchemyService.getTokenMetadata(address, network);
      success({ res, result })
    } catch (error: Error | any) {
      failed({ res, err: error, message: `Failed to get metadata for contract ${req.body.address}` });
    }
  }

  async getTopTokens(req: Request, res: Response): Promise<void> {
    try {
      success({ res, result: topTokens });
    } catch (error: Error | any) {
      failed({ res, err: error, message: `Failed to get top tokens` });
    }
  }

  async getABI(req: Request, res: Response): Promise<void> {
    try {
      const { address } = req.body;

      if(!ethers.isAddress(address))
        return failed({ res, message: "Invalid address" });

      const result = await this.blocksoutService.getABI(address);
      success({ res, result });
    } catch (error: Error | any) {
      failed({ res, err: error, message: `Failed to get ABI for contract ${req.body.address}` });
    }
  }
}