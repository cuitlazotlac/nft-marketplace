require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

// const projectId = "180b9adee6b048c09347d530decbe8ff";
const projectId = "dZLJBnHzrUefP0RIVyY_lD0oeZZJk47W";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      // Alchemy
      url: `https:////polygon-mumbai.g.alchemy.com/v2/${projectId}`,
      // url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey],
    },
    // mainnet: {
    //   // url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
    //   url: `https://polygon-mainnet.g.alchemy.com/v2/${projectId}`,
    //   accounts: [process.env.privateKey],
    // },
  },
  solidity: "0.8.4",
};
