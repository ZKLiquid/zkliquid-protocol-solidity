const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const Owner = "0x0Fd1C65A2901471Be8A51ca489604366745ca1E5";

  // const TOKEN = await ethers.getContractFactory("Token");

  const TOKEN = await ethers.getContractFactory("Token");

  const Token = await TOKEN.deploy(
    Owner,
    "Super",
    "SPR",
    ethers.parseUnits("1000000", 18)
  );

  await Token.waitForDeployment();

  console.log(` Your contract address: ${Token.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
