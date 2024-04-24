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
  const Owner = "0x0Fd1C65A2901471Be8A51ca489604366745ca1E5";
  const contractAddress = "0xDeD172139Eb99f0aBc0d34302c704b5777C93E98";

  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [
      Owner,
      "Omegaaaa",
      "OMG",
      ethers.parseUnits("1000000", 18),
    ],
    contract: "contracts/OMEGA.sol:Omegaaaa",
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
