import { BLOCKSCOUT_URL } from "../config/env.config";

export class BlockscoutService {
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
}
