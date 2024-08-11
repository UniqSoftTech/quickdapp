import { Alchemy, Network, TokenMetadataResponse } from "alchemy-sdk";
import { ALCHEMY_APP_API_KEY } from "../config/env.config";

// apiKey: ALCHEMY_APP_API_KEY,
const config = {
  apiKey: "88qZtQwZSJtRPy8GJ88auDXJjBl4upne",
  network: Network.ETH_MAINNET,
};

export class AlchemyService {
  private alchemy: Alchemy;

  constructor() {
    this.alchemy = new Alchemy(config);
  }

  async getTokenMetadata(address: string, network?: Network): Promise<TokenMetadataResponse | null> {
    try {
      const { name, symbol, decimals, logo }: TokenMetadataResponse = await this.alchemy.core.getTokenMetadata(address);
      return { name, symbol, decimals, logo };
    } catch (error) {
      throw error;
    }
  }

  async getTokenBalances(address: string): Promise<any> {
    try {
      // return await this.alchemy.core.getCode(address);
      // return await this.alchemy.core.getNetwork();
      // return await this.alchemy.core.getGasPrice();
      return await this.alchemy.core.getFeeData();
      // return await this.alchemy.core.getCode(address);
    } catch (error) {
      throw error;
    }
  }
}
