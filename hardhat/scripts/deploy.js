const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "https://lavender-dramatic-moose-633.mypinata.cloud/ipfs/Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/?_gl=1*1mflo28*_ga*MTU4ODcxNDE5Ny4xNjg0NzYzNTQ0*_ga_5RMPXG14TE*MTY5MzIzNDIxNC4xLjEuMTY5MzIzNTIyOS42MC4wLjA.";
  /*
  DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  // here we deploy the contract
 const lw3PunksContract = await hre.ethers.deployContract("LW3Punks", [
   metadataURL
 ]);

  await lw3PunksContract.waitForDeployment();

 // print the address of the deployed contract
  console.log("LW3Punks Contract Address:", lw3PunksContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });