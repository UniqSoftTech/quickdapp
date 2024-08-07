import { Alchemy, Network, TokenMetadataResponse } from "alchemy-sdk";
import { ALCHEMY_APP_API_KEY } from "../config/env.config";

const config = {
  // apiKey: ALCHEMY_APP_API_KEY,
  apiKey: "88qZtQwZSJtRPy8GJ88auDXJjBl4upne",
  network: Network.ETH_MAINNET,
};

export class AlchemyService {
  private alchemy: Alchemy;

  constructor() {
    this.alchemy = new Alchemy(config);
  }

  /**
   * Retrieves the metadata of a token contract.
   *
   * @param {string} address - The address of the token contract.
   * @param {Network} network - The network on which the token contract is deployed.
   * @return {Promise<TokenMetadataResponse>} A promise that resolves to the token metadata response.
   * @throws {Error} If there is an error retrieving the token metadata.
   */
  async getTokenMetadata(address: string, network?: Network): Promise<TokenMetadataResponse | null> {
    try {
      const { name, symbol, decimals, logo }: TokenMetadataResponse = await this.alchemy.core.getTokenMetadata(address);
      return { name, symbol, decimals, logo };
    } catch (error) {
      throw error;
    }
  }
}
