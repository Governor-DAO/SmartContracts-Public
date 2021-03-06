/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IStakedRewardsPoolTimedRateInterface extends ethers.utils.Interface {
  functions: {
    "accruedRewardPerToken()": FunctionFragment;
    "addToRewardsAllocation(uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "earned(address)": FunctionFragment;
    "exit()": FunctionFragment;
    "getReward()": FunctionFragment;
    "getRewardExact(uint256)": FunctionFragment;
    "hasEnded()": FunctionFragment;
    "hasStarted()": FunctionFragment;
    "lastTimeRewardApplicable()": FunctionFragment;
    "pause()": FunctionFragment;
    "periodDuration()": FunctionFragment;
    "periodEndTime()": FunctionFragment;
    "periodStartTime()": FunctionFragment;
    "recoverUnsupportedERC20(address,address,uint256)": FunctionFragment;
    "rewardRate()": FunctionFragment;
    "rewardsToken()": FunctionFragment;
    "setNewPeriod(uint256,uint256)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakingToken()": FunctionFragment;
    "stakingTokenDecimals()": FunctionFragment;
    "timeRemainingInPeriod()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateReward()": FunctionFragment;
    "updateRewardFor(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accruedRewardPerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addToRewardsAllocation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "earned", values: [string]): string;
  encodeFunctionData(functionFragment: "exit", values?: undefined): string;
  encodeFunctionData(functionFragment: "getReward", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRewardExact",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "hasEnded", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hasStarted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardApplicable",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "periodDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "periodEndTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "periodStartTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoverUnsupportedERC20",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setNewPeriod",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakingTokenDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timeRemainingInPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateRewardFor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accruedRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addToRewardsAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardExact",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasEnded", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasStarted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "periodDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "periodEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "periodStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverUnsupportedERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardsToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNewPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingTokenDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeRemainingInPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRewardFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "NewPeriodSet(uint256,uint256)": EventFragment;
    "Recovered(address,address,uint256)": EventFragment;
    "RewardAdded(uint256)": EventFragment;
    "RewardPaid(address,uint256)": EventFragment;
    "Staked(address,uint256)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewPeriodSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Recovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export class IStakedRewardsPoolTimedRate extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IStakedRewardsPoolTimedRateInterface;

  functions: {
    accruedRewardPerToken(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "accruedRewardPerToken()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    addToRewardsAllocation(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addToRewardsAllocation(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    earned(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "earned(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    exit(overrides?: Overrides): Promise<ContractTransaction>;

    "exit()"(overrides?: Overrides): Promise<ContractTransaction>;

    getReward(overrides?: Overrides): Promise<ContractTransaction>;

    "getReward()"(overrides?: Overrides): Promise<ContractTransaction>;

    getRewardExact(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "getRewardExact(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    hasEnded(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "hasEnded()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    hasStarted(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "hasStarted()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    lastTimeRewardApplicable(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "lastTimeRewardApplicable()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    pause(overrides?: Overrides): Promise<ContractTransaction>;

    "pause()"(overrides?: Overrides): Promise<ContractTransaction>;

    periodDuration(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "periodDuration()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    periodEndTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "periodEndTime()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    periodStartTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "periodStartTime()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    recoverUnsupportedERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "recoverUnsupportedERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    rewardRate(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "rewardRate()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    rewardsToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "rewardsToken()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setNewPeriod(
      startTime: BigNumberish,
      endTime: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setNewPeriod(uint256,uint256)"(
      startTime: BigNumberish,
      endTime: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "stake(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stakingToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "stakingToken()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    stakingTokenDecimals(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "stakingTokenDecimals()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    timeRemainingInPeriod(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "timeRemainingInPeriod()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    totalSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalSupply()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    unpause(overrides?: Overrides): Promise<ContractTransaction>;

    "unpause()"(overrides?: Overrides): Promise<ContractTransaction>;

    updateReward(overrides?: Overrides): Promise<ContractTransaction>;

    "updateReward()"(overrides?: Overrides): Promise<ContractTransaction>;

    updateRewardFor(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateRewardFor(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  accruedRewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  "accruedRewardPerToken()"(overrides?: CallOverrides): Promise<BigNumber>;

  addToRewardsAllocation(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addToRewardsAllocation(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "earned(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exit(overrides?: Overrides): Promise<ContractTransaction>;

  "exit()"(overrides?: Overrides): Promise<ContractTransaction>;

  getReward(overrides?: Overrides): Promise<ContractTransaction>;

  "getReward()"(overrides?: Overrides): Promise<ContractTransaction>;

  getRewardExact(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "getRewardExact(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  hasEnded(overrides?: CallOverrides): Promise<boolean>;

  "hasEnded()"(overrides?: CallOverrides): Promise<boolean>;

  hasStarted(overrides?: CallOverrides): Promise<boolean>;

  "hasStarted()"(overrides?: CallOverrides): Promise<boolean>;

  lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

  "lastTimeRewardApplicable()"(overrides?: CallOverrides): Promise<BigNumber>;

  pause(overrides?: Overrides): Promise<ContractTransaction>;

  "pause()"(overrides?: Overrides): Promise<ContractTransaction>;

  periodDuration(overrides?: CallOverrides): Promise<BigNumber>;

  "periodDuration()"(overrides?: CallOverrides): Promise<BigNumber>;

  periodEndTime(overrides?: CallOverrides): Promise<BigNumber>;

  "periodEndTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  periodStartTime(overrides?: CallOverrides): Promise<BigNumber>;

  "periodStartTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  recoverUnsupportedERC20(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "recoverUnsupportedERC20(address,address,uint256)"(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

  "rewardRate()"(overrides?: CallOverrides): Promise<BigNumber>;

  rewardsToken(overrides?: CallOverrides): Promise<string>;

  "rewardsToken()"(overrides?: CallOverrides): Promise<string>;

  setNewPeriod(
    startTime: BigNumberish,
    endTime: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setNewPeriod(uint256,uint256)"(
    startTime: BigNumberish,
    endTime: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "stake(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stakingToken(overrides?: CallOverrides): Promise<string>;

  "stakingToken()"(overrides?: CallOverrides): Promise<string>;

  stakingTokenDecimals(overrides?: CallOverrides): Promise<number>;

  "stakingTokenDecimals()"(overrides?: CallOverrides): Promise<number>;

  timeRemainingInPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  "timeRemainingInPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  unpause(overrides?: Overrides): Promise<ContractTransaction>;

  "unpause()"(overrides?: Overrides): Promise<ContractTransaction>;

  updateReward(overrides?: Overrides): Promise<ContractTransaction>;

  "updateReward()"(overrides?: Overrides): Promise<ContractTransaction>;

  updateRewardFor(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateRewardFor(address)"(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    accruedRewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    "accruedRewardPerToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    addToRewardsAllocation(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addToRewardsAllocation(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "earned(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exit(overrides?: CallOverrides): Promise<void>;

    "exit()"(overrides?: CallOverrides): Promise<void>;

    getReward(overrides?: CallOverrides): Promise<void>;

    "getReward()"(overrides?: CallOverrides): Promise<void>;

    getRewardExact(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "getRewardExact(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    hasEnded(overrides?: CallOverrides): Promise<boolean>;

    "hasEnded()"(overrides?: CallOverrides): Promise<boolean>;

    hasStarted(overrides?: CallOverrides): Promise<boolean>;

    "hasStarted()"(overrides?: CallOverrides): Promise<boolean>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    "lastTimeRewardApplicable()"(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: CallOverrides): Promise<void>;

    "pause()"(overrides?: CallOverrides): Promise<void>;

    periodDuration(overrides?: CallOverrides): Promise<BigNumber>;

    "periodDuration()"(overrides?: CallOverrides): Promise<BigNumber>;

    periodEndTime(overrides?: CallOverrides): Promise<BigNumber>;

    "periodEndTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    periodStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    "periodStartTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    recoverUnsupportedERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "recoverUnsupportedERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardRate()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsToken(overrides?: CallOverrides): Promise<string>;

    "rewardsToken()"(overrides?: CallOverrides): Promise<string>;

    setNewPeriod(
      startTime: BigNumberish,
      endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setNewPeriod(uint256,uint256)"(
      startTime: BigNumberish,
      endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "stake(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    "stakingToken()"(overrides?: CallOverrides): Promise<string>;

    stakingTokenDecimals(overrides?: CallOverrides): Promise<number>;

    "stakingTokenDecimals()"(overrides?: CallOverrides): Promise<number>;

    timeRemainingInPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "timeRemainingInPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(overrides?: CallOverrides): Promise<void>;

    "unpause()"(overrides?: CallOverrides): Promise<void>;

    updateReward(overrides?: CallOverrides): Promise<void>;

    "updateReward()"(overrides?: CallOverrides): Promise<void>;

    updateRewardFor(account: string, overrides?: CallOverrides): Promise<void>;

    "updateRewardFor(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    NewPeriodSet(startTIme: null, endTime: null): EventFilter;

    Recovered(token: null, to: string | null, amount: null): EventFilter;

    RewardAdded(amount: null): EventFilter;

    RewardPaid(account: string | null, amount: null): EventFilter;

    Staked(account: string | null, amount: null): EventFilter;

    Withdrawn(account: string | null, amount: null): EventFilter;
  };

  estimateGas: {
    accruedRewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    "accruedRewardPerToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    addToRewardsAllocation(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addToRewardsAllocation(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "earned(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exit(overrides?: Overrides): Promise<BigNumber>;

    "exit()"(overrides?: Overrides): Promise<BigNumber>;

    getReward(overrides?: Overrides): Promise<BigNumber>;

    "getReward()"(overrides?: Overrides): Promise<BigNumber>;

    getRewardExact(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "getRewardExact(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    hasEnded(overrides?: CallOverrides): Promise<BigNumber>;

    "hasEnded()"(overrides?: CallOverrides): Promise<BigNumber>;

    hasStarted(overrides?: CallOverrides): Promise<BigNumber>;

    "hasStarted()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    "lastTimeRewardApplicable()"(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: Overrides): Promise<BigNumber>;

    "pause()"(overrides?: Overrides): Promise<BigNumber>;

    periodDuration(overrides?: CallOverrides): Promise<BigNumber>;

    "periodDuration()"(overrides?: CallOverrides): Promise<BigNumber>;

    periodEndTime(overrides?: CallOverrides): Promise<BigNumber>;

    "periodEndTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    periodStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    "periodStartTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    recoverUnsupportedERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "recoverUnsupportedERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardRate()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsToken(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardsToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    setNewPeriod(
      startTime: BigNumberish,
      endTime: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setNewPeriod(uint256,uint256)"(
      startTime: BigNumberish,
      endTime: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stake(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "stake(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    "stakingToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    stakingTokenDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    "stakingTokenDecimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    timeRemainingInPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "timeRemainingInPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(overrides?: Overrides): Promise<BigNumber>;

    "unpause()"(overrides?: Overrides): Promise<BigNumber>;

    updateReward(overrides?: Overrides): Promise<BigNumber>;

    "updateReward()"(overrides?: Overrides): Promise<BigNumber>;

    updateRewardFor(account: string, overrides?: Overrides): Promise<BigNumber>;

    "updateRewardFor(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accruedRewardPerToken(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "accruedRewardPerToken()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addToRewardsAllocation(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addToRewardsAllocation(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    earned(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "earned(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exit(overrides?: Overrides): Promise<PopulatedTransaction>;

    "exit()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    getReward(overrides?: Overrides): Promise<PopulatedTransaction>;

    "getReward()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    getRewardExact(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "getRewardExact(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    hasEnded(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "hasEnded()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasStarted(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "hasStarted()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lastTimeRewardApplicable()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pause(overrides?: Overrides): Promise<PopulatedTransaction>;

    "pause()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    periodDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "periodDuration()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    periodEndTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "periodEndTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    periodStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "periodStartTime()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recoverUnsupportedERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "recoverUnsupportedERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardRate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardsToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setNewPeriod(
      startTime: BigNumberish,
      endTime: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setNewPeriod(uint256,uint256)"(
      startTime: BigNumberish,
      endTime: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "stake(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stakingToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakingTokenDecimals(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "stakingTokenDecimals()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timeRemainingInPeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "timeRemainingInPeriod()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(overrides?: Overrides): Promise<PopulatedTransaction>;

    "unpause()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    updateReward(overrides?: Overrides): Promise<PopulatedTransaction>;

    "updateReward()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    updateRewardFor(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateRewardFor(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
