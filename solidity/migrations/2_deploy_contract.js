var SampleToken = artifacts.require("./token.sol")

module.exports = function (deployer) {
  deployer.deploy(SampleToken, 1000)
}
