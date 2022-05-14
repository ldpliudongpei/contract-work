// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Bank {
  mapping(address => uint) public balances;
  address public owner;

  constructor() {
    owner = msg.sender;
  }

  receive() external payable {
    balances[msg.sender] += msg.value;
  }

  function withdraw() public {
    uint amount = balances[msg.sender];
    balances[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
  }
}