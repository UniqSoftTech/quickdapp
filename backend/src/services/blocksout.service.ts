import { BLOCKSCOUT_URL } from "../config/env.config";

export class BlockscoutService {
  private url = {
    ETH: "https://eth-sepolia.blockscout.com/api/?module=contract&action=listcontracts",
  }

  async getABI(contractAddress: string): Promise<any> {
    const url = `${BLOCKSCOUT_URL}/api?module=contract&action=getabi&address=${contractAddress}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching ABI:", error);
      throw error;
    }
  }

  async searchTokens(query: string): Promise<any> {
    const url = `https://gnosis.blockscout.com/api/v2/search?q=${query}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error searching tokens:", error);
      throw error;
    }
  }
}
