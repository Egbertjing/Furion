/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IVeERC20,
  IVeERC20Interface,
} from "../../../../contracts/furion-staking/interfaces/IVeERC20";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IVeERC20__factory {
  static readonly abi = _abi;
  static createInterface(): IVeERC20Interface {
    return new utils.Interface(_abi) as IVeERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVeERC20 {
    return new Contract(address, _abi, signerOrProvider) as IVeERC20;
  }
}
