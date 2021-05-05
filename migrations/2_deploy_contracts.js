const JpaisysToken = artifacts.require("JpaisysToken");

module.exports = function (deployer) {
  deployer.deploy(JpaisysToken);
};
