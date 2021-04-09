import { ethers } from "ethers";

export function getLibrary(_provider: any): ethers.providers.Web3Provider {
  const library = new ethers.providers.Web3Provider(_provider);
  library.pollingInterval = 12000;
  return library;
}
