/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type NewPeriodSet = ContractEventLog<{
  startTIme: string;
  endTime: string;
  0: string;
  1: string;
}>;
export type Recovered = ContractEventLog<{
  token: string;
  to: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type RewardAdded = ContractEventLog<{
  amount: string;
  0: string;
}>;
export type RewardPaid = ContractEventLog<{
  account: string;
  amount: string;
  0: string;
  1: string;
}>;
export type Staked = ContractEventLog<{
  account: string;
  amount: string;
  0: string;
  1: string;
}>;
export type Withdrawn = ContractEventLog<{
  account: string;
  amount: string;
  0: string;
  1: string;
}>;

export interface IStakedRewardsPoolTimedRate extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): IStakedRewardsPoolTimedRate;
  clone(): IStakedRewardsPoolTimedRate;
  methods: {
    accruedRewardPerToken(): NonPayableTransactionObject<string>;

    addToRewardsAllocation(
      amount: number | string
    ): NonPayableTransactionObject<void>;

    balanceOf(account: string): NonPayableTransactionObject<string>;

    earned(account: string): NonPayableTransactionObject<string>;

    exit(): NonPayableTransactionObject<void>;

    getReward(): NonPayableTransactionObject<void>;

    getRewardExact(amount: number | string): NonPayableTransactionObject<void>;

    hasEnded(): NonPayableTransactionObject<boolean>;

    hasStarted(): NonPayableTransactionObject<boolean>;

    lastTimeRewardApplicable(): NonPayableTransactionObject<string>;

    pause(): NonPayableTransactionObject<void>;

    periodDuration(): NonPayableTransactionObject<string>;

    periodEndTime(): NonPayableTransactionObject<string>;

    periodStartTime(): NonPayableTransactionObject<string>;

    recoverUnsupportedERC20(
      token: string,
      to: string,
      amount: number | string
    ): NonPayableTransactionObject<void>;

    rewardRate(): NonPayableTransactionObject<string>;

    rewardsToken(): NonPayableTransactionObject<string>;

    setNewPeriod(
      startTime: number | string,
      endTime: number | string
    ): NonPayableTransactionObject<void>;

    stake(amount: number | string): NonPayableTransactionObject<void>;

    stakingToken(): NonPayableTransactionObject<string>;

    stakingTokenDecimals(): NonPayableTransactionObject<string>;

    timeRemainingInPeriod(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    unpause(): NonPayableTransactionObject<void>;

    updateReward(): NonPayableTransactionObject<void>;

    updateRewardFor(account: string): NonPayableTransactionObject<void>;

    withdraw(amount: number | string): NonPayableTransactionObject<void>;
  };
  events: {
    NewPeriodSet(cb?: Callback<NewPeriodSet>): EventEmitter;
    NewPeriodSet(
      options?: EventOptions,
      cb?: Callback<NewPeriodSet>
    ): EventEmitter;

    Recovered(cb?: Callback<Recovered>): EventEmitter;
    Recovered(options?: EventOptions, cb?: Callback<Recovered>): EventEmitter;

    RewardAdded(cb?: Callback<RewardAdded>): EventEmitter;
    RewardAdded(
      options?: EventOptions,
      cb?: Callback<RewardAdded>
    ): EventEmitter;

    RewardPaid(cb?: Callback<RewardPaid>): EventEmitter;
    RewardPaid(options?: EventOptions, cb?: Callback<RewardPaid>): EventEmitter;

    Staked(cb?: Callback<Staked>): EventEmitter;
    Staked(options?: EventOptions, cb?: Callback<Staked>): EventEmitter;

    Withdrawn(cb?: Callback<Withdrawn>): EventEmitter;
    Withdrawn(options?: EventOptions, cb?: Callback<Withdrawn>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "NewPeriodSet", cb: Callback<NewPeriodSet>): void;
  once(
    event: "NewPeriodSet",
    options: EventOptions,
    cb: Callback<NewPeriodSet>
  ): void;

  once(event: "Recovered", cb: Callback<Recovered>): void;
  once(
    event: "Recovered",
    options: EventOptions,
    cb: Callback<Recovered>
  ): void;

  once(event: "RewardAdded", cb: Callback<RewardAdded>): void;
  once(
    event: "RewardAdded",
    options: EventOptions,
    cb: Callback<RewardAdded>
  ): void;

  once(event: "RewardPaid", cb: Callback<RewardPaid>): void;
  once(
    event: "RewardPaid",
    options: EventOptions,
    cb: Callback<RewardPaid>
  ): void;

  once(event: "Staked", cb: Callback<Staked>): void;
  once(event: "Staked", options: EventOptions, cb: Callback<Staked>): void;

  once(event: "Withdrawn", cb: Callback<Withdrawn>): void;
  once(
    event: "Withdrawn",
    options: EventOptions,
    cb: Callback<Withdrawn>
  ): void;
}
