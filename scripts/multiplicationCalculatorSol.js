const { ethers } = require("hardhat");
const hre = require("hardhat");

let web3OJ;

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const MyMultiplicationCalculator = await ethers.getContractFactory(
    "MyMultiplicationCalculator"
  );
  const myMultiplicationCalculator = await MyMultiplicationCalculator.connect(
    addr1
  ).deploy();
  await myMultiplicationCalculator.deployed();

  const instance = "0xF36eF22dFA600f91a70Bf46E2295d172D1Fe2c46"; // 이곳에 문제 Contract 주소를 넣어주세요
  const MultiplicationCalculator = await ethers.getContractFactory(
    "MultiplicationCalculatorProblem"
  );
  const multiplicationCalculator = await MultiplicationCalculator.attach(
    instance
  );
  await multiplicationCalculator.setMultiplicationCalculator(
    myMultiplicationCalculator.address
  );
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
