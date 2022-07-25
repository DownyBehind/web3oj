const { ethers } = require("hardhat");

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const MyERC20Token = await ethers.getContractFactory("MyERC20");

  const myErc20Token = await MyERC20Token.connect(addr1).deploy();

  await myErc20Token.deployed();

  const instance = "0x16956c52f942437a8168bD8876313A8Ba58703cB";
  const ERC20Token = await ethers.getContractFactory("ERC20Init");

  const erc20Token = await ERC20Token.attach(instance);
  await erc20Token.setWeb3ojt(myErc20Token.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
