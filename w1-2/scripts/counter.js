const hre = require("hardhat");

async function main() {

  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy(5);
  await counter.deployed();
  console.log("Counter address:", counter.address);
  console.log("Counter", counter);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
