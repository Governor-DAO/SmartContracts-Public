// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import '@openzeppelin/contracts/math/Math.sol';
import '@openzeppelin/contracts/math/SafeMath.sol';
import './interfaces/IStakedRewardsPoolTimedRate.sol';
import './StakedRewardsPool.sol';

// Accuracy in block.timestamp is not needed.
// https://consensys.github.io/smart-contract-best-practices/recommendations/#the-15-second-rule
/* solhint-disable not-rely-on-time */

contract StakedRewardsPoolTimedRate is StakedRewardsPool, IStakedRewardsPoolTimedRate {
	using SafeMath for uint256;

	uint256 private _accruedRewardPerToken;
	mapping(address => uint256) private _accruedRewardPerTokenPaid;
	uint256 private _lastUpdateTime;
	uint256 private _periodEndTime;
	uint256 private _periodStartTime;
	uint256 private _rewardRate;

	modifier whenStarted {
		require(hasStarted(), 'SRPTR: current rewards distribution period has not yet begun');
		_;
	}

	constructor(IERC20 rewardsToken, IERC20 stakingToken, uint8 stakingTokenDecimals, uint256 periodStartTime, uint256 periodEndTime)
	StakedRewardsPool(rewardsToken, stakingToken, stakingTokenDecimals) {
		_periodStartTime = periodStartTime;
		_periodEndTime = periodEndTime;
	}

	// Represents the ratio of reward token to staking token accrued thus far
	// multiplied by 10**stakingTokenDecimal (in event of a fraction).
	function accruedRewardPerToken() public view override returns (uint256) {
		uint256 totalSupply = totalSupply();
		if (totalSupply == 0) {
			return _accruedRewardPerToken;
		}

		uint256 lastUpdateTime = _lastUpdateTime;
		uint256 lastTimeApplicable = lastTimeRewardApplicable();

		// Allow staking at any time without earning undue rewards.
		// The following is guaranteed if the next `if` is true:
		// lastUpdateTime == previous _periodEndTime || lastUpdateTime == 0
		if (_periodStartTime > lastUpdateTime) {
			// Prevent underflow
			if (_periodStartTime > lastTimeApplicable) {
				return _accruedRewardPerToken;
			}
			lastUpdateTime = _periodStartTime;
		}

		uint256 dt = lastTimeApplicable.sub(lastUpdateTime);

		if (dt == 0) {
			return _accruedRewardPerToken;
		}

		uint256 accruedReward = _rewardRate.mul(dt);
		return _accruedRewardPerToken.add(accruedReward.mul(_getStakingTokenBase()).div(totalSupply));
	}

	function earned(address account) public view override(IStakedRewardsPool, StakedRewardsPool) returns (uint256) {
		// Divide by stakingTokenBase in accordance with accruedRewardPerToken()
		return
			balanceOf(account)
				.mul(accruedRewardPerToken().sub(_accruedRewardPerTokenPaid[account]))
				.div(_getStakingTokenBase())
				.add(_rewards[account]);
	}

	function hasStarted() public view override returns (bool) {	return block.timestamp >= _periodStartTime; }

	function hasEnded() public view override returns (bool) { return block.timestamp >= _periodEndTime;	}

	function lastTimeRewardApplicable() public view override returns (uint256) {
		// Returns 0 if we have never run a staking period, else most recent historical endTime.
		if (!hasStarted()) {
			return _lastUpdateTime;
		}
		return Math.min(block.timestamp, _periodEndTime);
	}

	function periodDuration() public view override returns (uint256) { return _periodEndTime.sub(_periodStartTime);	}

	function periodEndTime() public view override returns (uint256) { return _periodEndTime; }

	function periodStartTime() public view override returns (uint256) { return _periodStartTime; }

	function rewardRate() public view override returns (uint256) { return _rewardRate; }

	function timeRemainingInPeriod() public view override whenStarted returns (uint256)	{
		if (hasEnded()) {
			return 0;
		}

		return _periodEndTime.sub(block.timestamp);
	}

	/* Public Mutators */

	function addToRewardsAllocation(uint256 amount)	public override nonReentrant onlyOwner {
		_addToRewardsAllocation(amount);
	}

	function setNewPeriod(uint256 startTime, uint256 endTime) public override onlyOwner {
		require(!hasStarted() || hasEnded(), 'SRPTR: cannot change an ongoing staking period');
		require(endTime > startTime, 'SRPTR: ends before the fun begins');
		// The lastTimeRewardApplicable() function would not allow rewards for a past period that was never initiated.
		require(startTime > block.timestamp, 'SRPTR: startTime must be greater than the current block time');
		// Ensure rewards are fully granted before changing the period.
		_updateAccrual();

		if (hasEnded()) {
			// Reset reward rate if this a **new** period (not changing one)
			// Note: you MUST addToRewardsAllocation again if you forgot to call
			// this after the previous period ended but before adding rewards.
			_rewardRate = 0;
		} else {
			// Update reward rate for new duration.
			uint256 totalReward = _rewardRate.mul(periodDuration());
			_rewardRate = totalReward.div(endTime.sub(startTime));
		}

		_periodStartTime = startTime;
		_periodEndTime = endTime;

		emit NewPeriodSet(startTime, endTime);
	}

	/* Internal Mutators */

	// Ensure that the amount param is equal to the amount you've added to the contract, otherwise the funds will run out before _periodEndTime.
	// If called during an ongoing staking period, then the amount will be allocated to the current staking period.
	// If called before or after a staking period, then the amount will only be applied to the next staking period.
	function _addToRewardsAllocation(uint256 amount) internal {
		// TODO Require that amount <= available rewards (see below)
		// require(amount <= accruedRewardPerToken, 'SRPTR: amount ought not exceed available rewards.')
		_updateAccrual();

		// Update reward rate based on remaining time.
		uint256 remainingTime;
		if (!hasStarted() || hasEnded()) {
			remainingTime = periodDuration();
		} else {
			remainingTime = timeRemainingInPeriod();
		}

		_rewardRate = _rewardRate.add(amount.div(remainingTime));

		emit RewardAdded(amount);
	}

	function _updateAccrual() internal {
		_accruedRewardPerToken = accruedRewardPerToken();
		_lastUpdateTime = lastTimeRewardApplicable();
	}

	// This logic is needed for any interaction that may manipulate rewards.
	function _updateRewardFor(address account) internal override {
		_updateAccrual();
		// Allocate accrued rewards.
		_rewards[account] = earned(account);
		// Remove ability to earn rewards on or before the current timestamp.
		_accruedRewardPerTokenPaid[account] = _accruedRewardPerToken;
	}
}
