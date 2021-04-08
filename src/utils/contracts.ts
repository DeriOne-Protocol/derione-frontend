import { ethers } from "ethers";
import {
  deriOneV1AddressDev,
  deriOneV1AbiDev
} from "../contracts/DeriOneV1ContractDev";
import {
  deriOneV1AddressProd,
  deriOneV1AbiProd
} from "../contracts/DeriOneV1ContractProd";

export function getDeriOneV1ContractInstance(
  provider: any,
  chainId: number
): any {
  const library = new ethers.providers.Web3Provider(provider);
  const signer = library.getSigner(0);
  if (chainId === 1) {
    return new ethers.Contract(deriOneV1AddressProd, deriOneV1AbiProd, signer);
  } else if (chainId === 31337) {
    return new ethers.Contract(deriOneV1AddressDev, deriOneV1AbiDev, signer);
  }
}
