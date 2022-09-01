/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";

import type { PromiseOrValue } from "../../../common";
import type { MockUSD, MockUSDInterface } from "../../../contracts/mock/MockUSD";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "INITIAL_SUPPLY",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201825260078152661353d0d2d554d160ca1b6020808301918252835180850190945260048452635553444360e01b9084015281519192916200005d916003916200017b565b508051620000739060049060208401906200017b565b5050506200008d3364174876e8006200009360201b60201c565b62000284565b6001600160a01b038216620000ee5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000102919062000221565b90915550506001600160a01b038216600090815260208190526040812080548392906200013190849062000221565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001899062000248565b90600052602060002090601f016020900481019282620001ad5760008555620001f8565b82601f10620001c857805160ff1916838001178555620001f8565b82800160010185558215620001f8579182015b82811115620001f8578251825591602001919060010190620001db565b50620002069291506200020a565b5090565b5b808211156200020657600081556001016200020b565b600082198211156200024357634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200025d57607f821691505b6020821081036200027e57634e487b7160e01b600052602260045260246000fd5b50919050565b610a2f80620002946000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b41146101b6578063a457c2d7146101be578063a9059cbb146101d1578063dd62ed3e146101e457600080fd5b8063395093511461016557806340c10f191461017857806370a082311461018d57600080fd5b806323b872dd116100bd57806323b872dd146101375780632ff2e9dc1461014a578063313ce5671461015657600080fd5b806306fdde03146100e4578063095ea7b31461010257806318160ddd14610125575b600080fd5b6100ec61021d565b6040516100f99190610896565b60405180910390f35b610115610110366004610907565b6102af565b60405190151581526020016100f9565b6002545b6040519081526020016100f9565b610115610145366004610931565b6102c7565b61012964174876e80081565b604051600681526020016100f9565b610115610173366004610907565b6102eb565b61018b610186366004610907565b61032a565b005b61012961019b36600461096d565b6001600160a01b031660009081526020819052604090205490565b6100ec610338565b6101156101cc366004610907565b610347565b6101156101df366004610907565b6103f6565b6101296101f236600461098f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461022c906109c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610258906109c2565b80156102a55780601f1061027a576101008083540402835291602001916102a5565b820191906000526020600020905b81548152906001019060200180831161028857829003601f168201915b5050505050905090565b6000336102bd818585610404565b5060019392505050565b6000336102d5858285610528565b6102e08585856105ba565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102bd90829086906103259087906109fc565b610404565b61033482826107b7565b5050565b60606004805461022c906109c2565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156103e95760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102e08286868403610404565b6000336102bd8185856105ba565b6001600160a01b0383166104665760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103e0565b6001600160a01b0382166104c75760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103e0565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146105b457818110156105a75760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103e0565b6105b48484848403610404565b50505050565b6001600160a01b0383166106365760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103e0565b6001600160a01b0382166106985760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103e0565b6001600160a01b038316600090815260208190526040902054818110156107275760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103e0565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061075e9084906109fc565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107aa91815260200190565b60405180910390a36105b4565b6001600160a01b03821661080d5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103e0565b806002600082825461081f91906109fc565b90915550506001600160a01b0382166000908152602081905260408120805483929061084c9084906109fc565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b818110156108c3578581018301518582016040015282016108a7565b818111156108d5576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461090257600080fd5b919050565b6000806040838503121561091a57600080fd5b610923836108eb565b946020939093013593505050565b60008060006060848603121561094657600080fd5b61094f846108eb565b925061095d602085016108eb565b9150604084013590509250925092565b60006020828403121561097f57600080fd5b610988826108eb565b9392505050565b600080604083850312156109a257600080fd5b6109ab836108eb565b91506109b9602084016108eb565b90509250929050565b600181811c908216806109d657607f821691505b6020821081036109f657634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610a1d57634e487b7160e01b600052601160045260246000fd5b50019056fea164736f6c634300080d000a";

type MockUSDConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: MockUSDConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class MockUSD__factory extends ContractFactory {
  constructor(...args: MockUSDConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<MockUSD> {
    return super.deploy(overrides || {}) as Promise<MockUSD>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockUSD {
    return super.attach(address) as MockUSD;
  }
  override connect(signer: Signer): MockUSD__factory {
    return super.connect(signer) as MockUSD__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockUSDInterface {
    return new utils.Interface(_abi) as MockUSDInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockUSD {
    return new Contract(address, _abi, signerOrProvider) as MockUSD;
  }
}
