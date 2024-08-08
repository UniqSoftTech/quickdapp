import { dummyAiOutput, topTokens } from '../utils/dummy-data.utils';
import { Response, Request } from "express";
import { failed, send } from "../utils/res.utils";
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

      if (!ethers.isAddress(address))
        return failed({ res, message: "Invalid address" });

      const result = await this.alchemyService.getTokenMetadata(address, network);
      send({ res, result })
    } catch (err: Error | any) {
      send({ res, err, message: `Failed to get metadata for contract ${req.body.address}`, success: false });
    }
  }

  async getTopTokens(req: Request, res: Response): Promise<void> {
    try {
      send({ res, result: topTokens });
    } catch (err: Error | any) {
      send({ res, err, message: `Failed to get top tokens`, success: false });
    }
  }

  async getABI(req: Request, res: Response): Promise<void> {
    try {
      const { address } = req.body;

      if (!ethers.isAddress(address))
        return failed({ res, message: "Invalid address" });

      const result = await this.blocksoutService.getABI(address).then((res) => JSON.parse(res.result));
      send({ res, result });
    } catch (err: Error | any) {
      send({ res, err, message: `Failed to get ABI for contract ${req.body.address}`, success: false });
    }
  }

  async searchTokens(req: Request, res: Response): Promise<void> {
    try {
      const { query } = req.body;
      const result = await this.blocksoutService.searchTokens(query);
      send({ res, result });
    } catch (err: Error | any) {
      send({ res, err, message: `Failed to search tokens`, success: false });
    }
  }
}