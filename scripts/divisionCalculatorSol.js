const { ethers } = require("hardhat");
const hre = require("hardhat");

let web3OJ;

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const MyDivisionCalculator = await ethers.getContractFactory(
    "MyDivisionCalculator"
  );
  const myDivisionCalculator = await MyDivisionCalculator.connect(
    addr1
  ).deploy();
  await myDivisionCalculator.deployed();

  const instance = "0xE6316d8afd58DEcCFeF16C7B6b1a0490a331400F"; // 이곳에 문제 Contract 주소를 넣어주세요
  const DivisionCalculator = await ethers.getContractFactory(
    "DivisionCalculatorProblem"
  );
  const divisionCalculator = await DivisionCalculator.attach(instance);
  await divisionCalculator.setDivisionCalculator(myDivisionCalculator.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
