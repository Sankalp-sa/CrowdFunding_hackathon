require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
     hardhat: {},
     sepolia: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`],
     }
  },
};
