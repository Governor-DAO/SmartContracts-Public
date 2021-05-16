/**
 *Submitted for verification at Etherscan.io on 2020-12-20
*/

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

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.6.0;

abstract contract IERC20 {
    function totalSupply() external virtual view returns (uint256);
    function balanceOf(address tokenOwner) external virtual view returns (uint256 balance);
    function allowance(address tokenOwner, address spender) external virtual view returns (uint256 remaining);
    function transfer(address to, uint256 tokens) external virtual returns (bool success);
    function approve(address spender, uint256 tokens) external virtual returns (bool success);
    function transferFrom(address from, address to, uint256 tokens) external virtual returns (bool success);
    function burnFrom(address account, uint256 amount) public virtual;
    
    event Transfer(address indexed from, address indexed to, uint256 tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint256 tokens);
}

contract Swapico {

    address public immutable synthetico;
    address public immutable authentico;
    uint256 public immutable inicio;
    
    event purchased(address indexed _purchaser, uint256 indexed _tokens);
    
    constructor(address _synthetico, address _authentico, uint256 _inicio) public {
        synthetico = _synthetico;
        authentico = _authentico;
        inicio = _inicio;
    }
    
    function purchase(uint256 amount) public {
        require(block.timestamp >= inicio, 'purchase: too soon');
        require(IERC20(synthetico).balanceOf(address(msg.sender)) >= amount, 'purchase: insufficient balance');
        require(IERC20(authentico).balanceOf(address(this)) >= amount, 'purchase: insufficient liquidity');
        _purchase(amount);
    }
    
    function _purchase(uint256 _amount) internal {
        IERC20(synthetico).burnFrom(msg.sender, _amount);
        IERC20(authentico).transfer(msg.sender, _amount);
        
        emit purchased(msg.sender, _amount);
    }
}