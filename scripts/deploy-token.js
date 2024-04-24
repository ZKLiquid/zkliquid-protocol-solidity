const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const Receiver = "0x53e9e213e0CeAe81154798d79c510331947D4E0d";
  const TokenAddress = "0xE94A73848224907453e872D20078E0C4621BbA92";

  // const TOKEN = await ethers.getContractFactory("Token");

  const SALE = await ethers.getContractFactory("Chai");

  const Sale = await SALE.deploy(Receiver, TokenAddress);

  await Sale.waitForDeployment();

  console.log(` Your contract address: ${Sale.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
