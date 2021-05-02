import { Contract } from "@ethersproject/contracts";
import {
  deriOneV1AddressDev,
  deriOneV1AbiDev
} from "../contracts/DeriOneV1ContractDev";
import {
  deriOneV1AddressProd,
  deriOneV1AbiProd
} from "../contracts/DeriOneV1ContractProd";

export function getDeriOneV1ContractInstance(
  _web3Library,
  _chainId: number
): any {
  if (_chainId === 1) {
    return new Contract(deriOneV1AddressProd, deriOneV1AbiProd, _web3Library);
  } else if (_chainId === 1337 || _chainId === 31337) {
    return new Contract(deriOneV1AddressDev, deriOneV1AbiDev, _web3Library);
  }
}
