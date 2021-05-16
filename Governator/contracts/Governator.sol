////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////.////////////////////////////////.////////////////////////////////////
///////////////////////////////////.@.//////////////////////////////////.@./////////////////////////////////
////////////////////////////////.@@.//////////////////////////////////////.@@.//////////////////////////////
/////////////////////////////..@@@.////////////////////////////////////////.@@@..///////////////////////////
///////////////////////////.@@@@@.//////////////////////////////////////////.@@@@@./////////////////////////
/////////////////////////.@@@@@@@////////////////////////////////////////////@@@@@@@.///////////////////////
////////////////////////.@@@@@@@.////////////////////////////////////////////.@@@@@@@.//////////////////////
//////////////////..///.@@@@@@@@//////////////////////////////////////////////@@@@@@@@.///..////////////////
////////////////.@@.//.@@@@@@@@@//////////////////////////////////////////////@@@@@@@@@.//.@@.//////////////
///////////////@@@@.//@@@@@@@@@.//////////////////////////////////////////////.@@@@@@@@@//@@@@@/////////////
//////////////@@@@@@//@@@@@@@@@.//////////////////////////////////////////////.@@@@@@@@@//@@@@@@////////////
/////////////@@@@@@@./@@@@@@@@@@//////////////////////////////////////////////@@@@@@@@@./.@@@@@@@///////////
/////////////@@@@@@@@//@@@@@@@@@.////////////////////////////////////////////.@@@@@@@@@//@@@@@@@@///////////
/////////////@@@@@@@@.//.@@@@@@@@.//////////////////////////////////////////@@@@@@@@@.//.@@@@@@@@///////////
/////////////@@@@@@@@@///.@@@@@@@@@.////////.//////////////////////////////@@@@@@@@@.///@@@@@@@@@///////////
/////////////.@@@@@@@@@///..@@@@@@@.////////.@.///////////////////////////.@@@@@@@.////@@@@@@@@@.///////////
//////////////.@@@@@@@@@.////.@@@@///////////.@@.//////////////////////////.@@@@.////.@@@@@@@@@.////////////
//////////.////.@@@@@@@@@@./////./////////////.@@@@..////////////////////////./////.@@@@@@@@@@.///..////////
//////////@@.///.@@@@@@@@@@@.//////////////////.@@@@@@@@@@./////////////////////..@@@@@@@@@@.///.@@.////////
//////////@@@@.///.@@@@@@@@@@@@.////////////////.@@@@@@@@@@@..///////////////.@@@@@@@@@@@@@.//.@@@@.////////
//////////.@@@@@@.///.@@@@@@@@@@@.///////////////.@@@@@@@@@@@@./////////////.@@@@@@@@@@@.//.@@@@@@@.////////
//////////.@@@@@@@@.////.@@@@@@@@@.///////////////@@@@@@@@@...@////////////.@@@@@@@@@.//..@@@@@@@@@.////////
//////////.@@@@@@@@@@@..////..@@@@@@./////////////@@@@@@@@@ /////////////.@@@@@@..///..@@@@@@@@@@@./////////
///////////.@@@@@@@@@@@@@@..//////.....///////////@@@@@@@@@.///////////...../////..@@@@@@@@@@@@@@@//////////
////////////.@@@@@@@@@@@@@@@@@@....///////////////@@@@@@@@@.///////////////...@@@@@@@@@@@@@@@@@@@.//////////
/////////////.@@@@@@@@@@@@@@@@@@@@@@@@@@@..///////@@@@@@@@@@//////....@@@@@@@@@@@@@@@@@@@@@@@@@@.///////////
//////////////.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.///.@@@@@@@@@@/////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/////////////
////////////////.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@///@@@@@@@@@@@.///.@@@@@@@@@@@@@@@@@@@@@@@@@@@@.//////////////
//////////////////.@@@@@@@@@@@@@@@@@@@@@@@@@@@@/@@@@@@@@@@@@@./.@@@@@@@@@@@@@@@@@@@@@@@@@@@.////////////////
////////////////////.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@..//////////////////
//////////////////////..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@./////////////////////
/////////////////////////..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.////////////////////////
/////////////////////////////..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@..///////////////////////////               
/////////////////////////////////..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@..///////////////////////////////
//////////////////////////////////////...@@@@@@@@@@@@@@@@@@@@@@@@@@@@...////////////////////////////////////
//////////////////////////////////////////////...@@@@@@@@@@@@@@...//////////////////////////////////////////
//////////////////////////////////////////////////.@@@@@@@@@////////////////////////////////////////////////
////////////////////////////////////////////////.@@@@@./@@@@@///////////////////////////////////////////////
///////////////////////////////////////////////.@@@@@@///@@@@@./////////////////////////////////////////////
/////////////////////////////////////////////.@@@@@@@/.@./@@@@@@.///////////////////////////////////////////
////////////////////////////////////////////@@@@@@@@/.@@@/.@@@@@@@./////////////////////////////////////////
///////////////////////////////////////////.@@@@@@@//@@@@@//@@@@@@@.////////////////////////////////////////
////////////////////////////////////////////.@@@@@./@@@@@@@/.@@@@@./////////////////////////////////////////
//////////////////////////////////////////////.@@./@@@@@@@@@/.@@.///////////////////////////////////////////
///////////////////////////////////////////////../@@@@@@@@@@@/..////////////////////////////////////////////
/////////////////////////////////////////////////@@@@@@@@@@@@@//////////////////////////////////////////////
////////////////////////////////////////////////@@@@@@@@@@@@@@@/////////////////////////////////////////////
///////////////////////////////////////////////@@@@@@.///.@@@@@.////////////////////////////////////////////
//////////////////////////////////////////////.@@..//.@@..//..@@.///////////////////////////////////////////
/////////////////////////////////////////////..//////@@@@//////...//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////_______///________//____////____//_______//______///////__///__////______////______////////////
/////////////@@_____|//@@@__@@@\/\@@@\  /@@@//|@@@____||@@@_  \/////|@@\ |@@|///  __  \//|@@@_@@\///////////
////////////|@@|//__//|@@|  |@@|//\@@@\/@@@///|@@|__///|@@|_)  |////|@@@\|@@|/|@@|  |@@|/|@@|_)@@|//////////
////////////|@@| |_@|/|@@|  |@@|///\@@@@@@////|@@@__|//|@@@@@@//////|@@.@`@@|/|@@|  |@@|/|@@@@@@////////////
////////////|@@|__|@|/|@@`--'@@|////\@@@@/////|@@|____/|@@|\@@\----.|@@|\@@@|/|@@`--'@@|/|@@|\@@\----.//////
/////////////\______|//\______///////\__//////|_______|| _| `._____||__| \__|//\______///|@_| `._____|//////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////                                                                                          
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//

// Copyright (C) 2021 Uni
///@notice This contract adds liquidity to Uniswap V2 pools using ETH or any ERC20 Token.
// SPDX-License-Identifier: MIT OR GPLv2 or higher
pragma solidity ^0.5.0;

import '@OpenZeppelin/contracts/token/ERC20/IERC20';
import '@OpenZeppelin/contracts/math/SafeMath.sol';
import '@OpenZeppelin/contracts/utils/Address.sol';
import 'OpenZeppelin/contracts/token/ERC20/SafeERC20.sol'
import '@OpenZeppelin/contracts/utils/ReentrancyGuard.sol';
import '@OpenZeppelin/contracts/GSN/Context.sol';
import '@OpenZeppelin/contracts/access/Ownable.sol';
import '@uniswap/lib/contracts/libraries/Babylonian.sol';
import '@uniswap/lib/contracts/interfaces/IWETH.sol';

interface IUniswapV2Factory {
    function getPair(address tokenA, address tokenB)
        external
        view
        returns (address);
}

interface IUniswapV2Router02 {
    function factory() external pure returns (address);

    function WETH() external pure returns (address);

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountADesired,
        uint256 amountBDesired,
        uint256 amountAMin,
        uint256 amountBMin,
        address to,
        uint256 deadline
    )
        external
        returns (
            uint256 amountA,
            uint256 amountB,
            uint256 liquidity
        );

    function addLiquidityETH(
        address token,
        uint256 amountTokenDesired,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline
    )
        external
        payable
        returns (
            uint256 amountToken,
            uint256 amountETH,
            uint256 liquidity
        );

    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint256 liquidity,
        uint256 amountAMin,
        uint256 amountBMin,
        address to,
        uint256 deadline
    ) external returns (uint256 amountA, uint256 amountB);

    function removeLiquidityETH(
        address token,
        uint256 liquidity,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline
    ) external returns (uint256 amountToken, uint256 amountETH);

    function removeLiquidityWithPermit(
        address tokenA,
        address tokenB,
        uint256 liquidity,
        uint256 amountAMin,
        uint256 amountBMin,
        address to,
        uint256 deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint256 amountA, uint256 amountB);

    function removeLiquidityETHWithPermit(
        address token,
        uint256 liquidity,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint256 amountToken, uint256 amountETH);

    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function swapTokensForExactTokens(
        uint256 amountOut,
        uint256 amountInMax,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function swapExactETHForTokens(
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable returns (uint256[] memory amounts);

    function swapTokensForExactETH(
        uint256 amountOut,
        uint256 amountInMax,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function swapExactTokensForETH(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function swapETHForExactTokens(
        uint256 amountOut,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable returns (uint256[] memory amounts);

    function removeLiquidityETHSupportingFeeOnTransferTokens(
        address token,
        uint256 liquidity,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline
    ) external returns (uint256 amountETH);

    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
        address token,
        uint256 liquidity,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint256 amountETH);

    function swapExactTokensForTokensSupportingFeeOnTransferTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external;

    function swapExactETHForTokensSupportingFeeOnTransferTokens(
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable;

    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external;

    function quote(
        uint256 amountA,
        uint256 reserveA,
        uint256 reserveB
    ) external pure returns (uint256 amountB);

    function getAmountOut(
        uint256 amountIn,
        uint256 reserveIn,
        uint256 reserveOut
    ) external pure returns (uint256 amountOut);

    function getAmountIn(
        uint256 amountOut,
        uint256 reserveIn,
        uint256 reserveOut
    ) external pure returns (uint256 amountIn);

    function getAmountsOut(uint256 amountIn, address[] calldata path)
        external
        view
        returns (uint256[] memory amounts);

    function getAmountsIn(uint256 amountOut, address[] calldata path)
        external
        view
        returns (uint256[] memory amounts);
}

interface IUniswapV2Pair {
    function token0() external pure returns (address);

    function token1() external pure returns (address);

    function getReserves()
        external
        view
        returns (
            uint112 _reserve0,
            uint112 _reserve1,
            uint32 _blockTimestampLast
        );
}

pragma solidity ^0.5.0;
contract Governator is ReentrancyGuard, Ownable {
    using SafeMath for uint256;
    using Address for address;
    using SafeERC20 for IERC20;

    bool public stopped = false;
    address public pairAddress;
    address public fromTokenContractAddress;

    IUniswapV2Factory
        private constant UniSwapV2FactoryAddress = IUniswapV2Factory(
        0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f
    );

    IUniswapV2Router02 private constant uniswapRouter = IUniswapV2Router02(
        0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D
    );

    address 
        private constant wethTokenAddress = 0xc778417E063141139Fce010982780140Aa0cD5Ab;

    uint256
        private constant deadline = 0xf000000000000000000000000000000000000000000000000000000000000000;

    constructor(address _pairAddress, address _fromTokenContractAddress) public {
        pairAddress = _pairAddress;
        fromTokenContractAddress = _fromTokenContractAddress;
    }

    // circuit breaker modifiers
    modifier stopInEmergency {
        if (stopped) {
            revert("Temporarily Paused");
        } else {
            _;
        }
    }

    /**
    @notice This function is used to invest in given Uniswap V2 pair through ETH/ERC20 Tokens
    @param _fromTokenContractAddress The ERC20 token used for investment (address(0x00) if ether)
    @param _pairAddress The Uniswap pair address
    @param _amount The amount of fromToken to invest
    @param _minPoolTokens Reverts if less tokens received than this
    @return Amount of LP bought
     */
    function ZapIn(
        address _fromTokenContractAddress,
        address _pairAddress,
        uint256 _amount,
        uint256 _minPoolTokens
    ) external payable nonReentrant stopInEmergency returns (uint256) {
        uint256 toInvest;
        require(msg.value == 0, "Error: ETH sent");
        require(_amount > 0, "Error: Invalid ERC amount");
        IERC20(_fromTokenContractAddress).safeTransferFrom(msg.sender, address(this), _amount);
            toInvest = _amount;
    
        uint256 LPBought = _performZapIn(toInvest);
        require(LPBought >= _minPoolTokens, "ERR: High Slippage");

        IERC20(_pairAddress).safeTransfer(
            msg.sender,
            LPBought
        );
        return LPBought;
    }

    function _getPairTokens(address _pairAddress)
        internal
        pure
        returns (address token0, address token1)
    {
        IUniswapV2Pair uniPair = IUniswapV2Pair(_pairAddress);
        token0 = uniPair.token0();
        token1 = uniPair.token1();
    }

    function _performZapIn(
        uint256 _amount
    ) internal returns (uint256) {
        uint256 intermediateAmt;
        address intermediateToken;
        (address _ToUniswapToken0, address _ToUniswapToken1) = _getPairTokens(
            pairAddress
        );
        intermediateToken = fromTokenContractAddress;
        intermediateAmt = _amount;
        
        // divide intermediate into appropriate amount to add liquidity
        (uint256 token0Bought, uint256 token1Bought) = _swapIntermediate(
            intermediateToken,
            _ToUniswapToken0,
            _ToUniswapToken1,
            intermediateAmt
        );

        return
            _uniDeposit(
                _ToUniswapToken0,
                _ToUniswapToken1,
                token0Bought,
                token1Bought
            );
    }
 function _uniDeposit(
        address _ToUnipoolToken0,
        address _ToUnipoolToken1,
        uint256 token0Bought,
        uint256 token1Bought
    ) internal returns (uint256) {
        IERC20(_ToUnipoolToken0).safeApprove(address(uniswapRouter), 0);
        IERC20(_ToUnipoolToken1).safeApprove(address(uniswapRouter), 0);

        IERC20(_ToUnipoolToken0).safeApprove(
            address(uniswapRouter),
            token0Bought
        );
        IERC20(_ToUnipoolToken1).safeApprove(
            address(uniswapRouter),
            token1Bought
        );

        (uint256 amountA, uint256 amountB, uint256 LP) = uniswapRouter
            .addLiquidity(
            _ToUnipoolToken0,
            _ToUnipoolToken1,
            token0Bought,
            token1Bought,
            1,
            1,
            address(this),
            deadline
        );

        //Returning Residue in token0, if any.
        if (token0Bought.sub(amountA) > 0) {
            IERC20(_ToUnipoolToken0).safeTransfer(
                msg.sender,
                token0Bought.sub(amountA)
            );
        }

        //Returning Residue in token1, if any
        if (token1Bought.sub(amountB) > 0) {
            IERC20(_ToUnipoolToken1).safeTransfer(
                msg.sender,
                token1Bought.sub(amountB)
            );
        }

        return LP;
    }


    function _fillQuote(
        address fromTokenAddress,
        address _pairAddress,
        uint256 _amount,
        address _allowanceTarget,
        address _swapTarget,
        bytes memory swapCallData
    ) internal returns (uint256 amountBought, address intermediateToken) {
        uint256 valueToSend;
        if (fromTokenAddress == address(0)) {
            valueToSend = _amount;
        } else {
            IERC20 fromToken = IERC20(fromTokenAddress);
            fromToken.safeApprove(address(_allowanceTarget), 0);
            fromToken.safeApprove(address(_allowanceTarget), _amount);
        }

        (address _token0, address _token1) = _getPairTokens(_pairAddress);
        IERC20 token0 = IERC20(_token0);
        IERC20 token1 = IERC20(_token1);
        uint256 initialBalance0 = token0.balanceOf(address(this));
        uint256 initialBalance1 = token1.balanceOf(address(this));

        (bool success, ) = _swapTarget.call.value(valueToSend)(swapCallData);
        require(success, "Error Swapping Tokens 1");

        uint256 finalBalance0 = token0.balanceOf(address(this)).sub(
            initialBalance0
        );
        uint256 finalBalance1 = token1.balanceOf(address(this)).sub(
            initialBalance1
        );

        if (finalBalance0 > finalBalance1) {
            amountBought = finalBalance0;
            intermediateToken = _token0;
        } else {
            amountBought = finalBalance1;
            intermediateToken = _token1;
        }

        require(amountBought > 0, "Swapped to Invalid Intermediate");
    }

  function _swapIntermediate(
        address _toContractAddress,
        address _ToUnipoolToken0,
        address _ToUnipoolToken1,
        uint256 _amount
    ) internal returns (uint256 token0Bought, uint256 token1Bought) {
        IUniswapV2Pair pair = IUniswapV2Pair(
            UniSwapV2FactoryAddress.getPair(_ToUnipoolToken0, _ToUnipoolToken1)
        );
        (uint256 res0, uint256 res1, ) = pair.getReserves();
        if (_toContractAddress == _ToUnipoolToken0) {
            uint256 amountToSwap = calculateSwapInAmount(res0, _amount);
            //if no reserve or a new pair is created
            if (amountToSwap <= 0) amountToSwap = _amount.div(2);
            token1Bought = _token2Token(
                _toContractAddress,
                _ToUnipoolToken1,
                amountToSwap
            );
            token0Bought = _amount.sub(amountToSwap);
        } else {
            uint256 amountToSwap = calculateSwapInAmount(res1, _amount);
            //if no reserve or a new pair is created
            if (amountToSwap <= 0) amountToSwap = _amount.div(2);
            token0Bought = _token2Token(
                _toContractAddress,
                _ToUnipoolToken0,
                amountToSwap
            );
            token1Bought = _amount.sub(amountToSwap);
        }
    }


    function calculateSwapInAmount(uint256 reserveIn, uint256 userIn)
        internal
        pure
        returns (uint256)
    {
        return
            Babylonian
                .sqrt(
                reserveIn.mul(userIn.mul(3988000) + reserveIn.mul(3988009))
            )
                .sub(reserveIn.mul(1997)) / 1994;
    }


    /**
    @notice This function is used to swap ERC20 <> ERC20
    @param tokens2Trade The amount of tokens to swap
    @return tokenBought The quantity of tokens bought
    */
    function _token2Token(
        address _fromTokenContractAddress,
        address _ToTokenContractAddress,
        uint256 tokens2Trade
    ) internal returns (uint256 tokenBought) {
        if (_fromTokenContractAddress == _ToTokenContractAddress) {
            return tokens2Trade;
        }
        IERC20(_fromTokenContractAddress).safeApprove(
            address(uniswapRouter),
            0
        );
        IERC20(_fromTokenContractAddress).safeApprove(
            address(uniswapRouter),
            tokens2Trade
        );

        address pair = UniSwapV2FactoryAddress.getPair(
            _fromTokenContractAddress,
            _ToTokenContractAddress
        );
        require(pair != address(0), "No Swap Available");
        address[] memory path = new address[](2);
        path[0] = _fromTokenContractAddress;
        path[1] = _ToTokenContractAddress;

        tokenBought = uniswapRouter.swapExactTokensForTokens(
            tokens2Trade,
            1,
            path,
            address(this),
            deadline
        )[path.length - 1];

        require(tokenBought > 0, "Error Swapping Tokens 2");
    }

    function inCaseTokengetsStuck(IERC20 _TokenAddress) public onlyOwner {
        uint256 qty = _TokenAddress.balanceOf(address(this));
        _TokenAddress.safeTransfer(owner(), qty);
    }

    function toggleContractActive() public onlyOwner {
        stopped = !stopped;
    }

    function withdraw() public onlyOwner {
        uint256 contractBalance = address(this).balance;
        address payable _to = owner().toPayable();
        _to.transfer(contractBalance);
    }
}
