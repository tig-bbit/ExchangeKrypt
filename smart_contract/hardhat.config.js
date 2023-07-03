// require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-waffle')

// https://eth-goerli.g.alchemy.com/v2/W79gFm5o0cQScROz9uREyZrthx4kjX-9

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/W79gFm5o0cQScROz9uREyZrthx4kjX-9",
      accounts: ['694d6589396f1a0096b38c23902ba19d476a327fb63ef7ffb090476483d3c20f']
    }
  }
};
