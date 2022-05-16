//  SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Score {

  mapping(address => uint) public scores;
  address public teacher;
  address public owner;

  constructor() {
    owner = msg.sender;
  }

  function update(address _student, uint _score) external {
    scores[_student] = _score;
  }

  function approve(address _teacher) external onlyOwner {
    teacher = _teacher;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "only owner");
    _;
  }

  modifier onlyTeacher() {
    require(tx.origin == teacher, "only teacher can update score");
    _;
  }
}

interface IScore {
  function update(address, uint) external;
  function approve(address) external;
}

contract Teacher {
  function updateScore(address _addr, address _student, uint _score) public {
    IScore(_addr).update(_student, _score);
  }
}