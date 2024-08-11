import { BLOCKSCOUT_URL } from "../config/env.config";


export interface IGetABIResponse {
  message: string;
  result:  string;
  status:  string;
}

export class BlockscoutService {
  private URL = {
    BASE: "https://base.blockscout.com/api/api?module=contract&action=getabi&address=",
  }

  async getABI(contractAddress: string): Promise<any> {
    try {
      const response = await fetch(this.URL.BASE + contractAddress);

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

  async getTransactions(address: string): Promise<any> {
    try {
      return await fetch(`https://base.blockscout.com/api/v2/addresses/${address}/transactions?filter=to%20%7C%20from`, {
        method: "GET",
      }).then((res) => res.json());
    } catch (err: Error | any) {
      throw err;
    }
  }
}
