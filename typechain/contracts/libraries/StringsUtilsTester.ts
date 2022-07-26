/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface StringsUtilsTesterInterface extends utils.Interface {
  functions: {
    "addressToString(address)": FunctionFragment;
    "byToString(bytes32)": FunctionFragment;
    "uintToHexString(uint256)": FunctionFragment;
    "uintToHexString(uint256,uint256)": FunctionFragment;
    "uintToString(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addressToString"
      | "byToString"
      | "uintToHexString(uint256)"
      | "uintToHexString(uint256,uint256)"
      | "uintToString"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addressToString",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "byToString",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "uintToHexString(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "uintToHexString(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "uintToString",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressToString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "byToString", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uintToHexString(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uintToHexString(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uintToString",
    data: BytesLike
  ): Result;

  events: {};
}

export interface StringsUtilsTester extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StringsUtilsTesterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addressToString(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    byToString(
      _bytes: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "uintToHexString(uint256)"(
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "uintToHexString(uint256,uint256)"(
      value: PromiseOrValue<BigNumberish>,
      length: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    uintToString(
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  addressToString(
    _addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  byToString(
    _bytes: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "uintToHexString(uint256)"(
    value: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "uintToHexString(uint256,uint256)"(
    value: PromiseOrValue<BigNumberish>,
    length: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  uintToString(
    value: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    addressToString(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    byToString(
      _bytes: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "uintToHexString(uint256)"(
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "uintToHexString(uint256,uint256)"(
      value: PromiseOrValue<BigNumberish>,
      length: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    uintToString(
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addressToString(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    byToString(
      _bytes: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "uintToHexString(uint256)"(
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "uintToHexString(uint256,uint256)"(
      value: PromiseOrValue<BigNumberish>,
      length: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uintToString(
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addressToString(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    byToString(
      _bytes: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "uintToHexString(uint256)"(
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "uintToHexString(uint256,uint256)"(
      value: PromiseOrValue<BigNumberish>,
      length: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uintToString(
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
