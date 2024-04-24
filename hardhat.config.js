require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
let secrets = require("./secrets");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    sepolia: {
      url: secrets.url,
      accounts: [secrets.key],
    },
    bsc: {
      url: secrets.bscUrl,
      accounts: [secrets.bscKey],
    },
  },
  etherscan: {
    //apiKey: "YJJJCUX1H4EGWT6D5URIF1QNGXSN9EDA14",
    apiKey: "YJJJCUX1H4EGWT6D5URIF1QNGXSN9EDA14",
  },
};
