const Item = artifacts.require("./NFTItem");

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Item);
};
