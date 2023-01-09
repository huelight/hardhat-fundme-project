//import
//main function
//calling main function

const { networkConfig } = require("../helper-hardhat-config")
const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // use chainId to direct what address to use
    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]

    //when going for localhost or hardhat, we want to use a mock
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [address], // put price feed address
        log: true,
    })
}
