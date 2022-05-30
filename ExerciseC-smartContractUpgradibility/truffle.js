var HDWalletProvider = require("truffle-hdwallet-provider")
var mnemonic =
  "law clown initial domain alien asset effort sword exile chase oppose govern"

module.exports = {
  networks: {
    development: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 10)
      },
      network_id: "*",
      gas: 4500000,
    },
  },
  compilers: {
    solc: {
      version: "^0.4.25",
    },
  },
}
