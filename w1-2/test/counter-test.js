const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(5);
    await counter.deployed();
    await counter.count();
    expect(await counter.counter()).to.equal(6);

    const setCounter = await counter.set(3);

    // wait until the transaction is mined
    await setCounter.wait();

    expect(await counter.counter()).to.equal(9);
  });
});
