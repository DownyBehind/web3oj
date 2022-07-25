const { ethers } = require("hardhat");
const hre = require("hardhat");

let web3OJ;

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const MyMinusCalculator = await ethers.getContractFactory(
    "MyMinusCalculator"
  );
  const myMinusCalculator = await MyMinusCalculator.connect(addr1).deploy();
  await myMinusCalculator.deployed();

  const instance = "0x3e43E4c88A0484D21a0ec8e17b152C122365aB6B"; // 이곳에 문제 Contract 주소를 넣어주세요
  const MinusCalculator = await ethers.getContractFactory(
    "MinusCalculatorProblem"
  );
  const minusCalculator = await MinusCalculator.attach(instance);
  await minusCalculator.setMinusCalculator(myMinusCalculator.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
