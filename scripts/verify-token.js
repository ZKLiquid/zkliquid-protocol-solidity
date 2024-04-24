// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

//0x11B076DBFAfdf2327F962052397b02E9419eDCfC

const hre = require("hardhat");
const { ethers } = require("hardhat");
const network = hre.network.name;

async function main() {
  const now = Math.round(Date.now() / 1000);
  const Receiver = "0x53e9e213e0CeAe81154798d79c510331947D4E0d";
  const TokenAddress = "0xE94A73848224907453e872D20078E0C4621BbA92";
  const contractAddress = "0x83E0f93168fbdDbABFe35DE334bd050Bdcfa6957";

  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [Receiver, TokenAddress],
    contract: "contracts/Sale.sol:Chai",
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
