import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hardhat;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("CitizenV1", {
    contract: "CitizenV1",
    from: deployer,
    args: [
      ["0x0fB374787B0bB7e62bD82A1B020b12fa239aB788", "0x3417aD1d79D9508912E8d7f3B9167085500b12CE"],
      "0x0fB374787B0bB7e62bD82A1B020b12fa239aB788",
    ],
    skipIfAlreadyDeployed: true,
    log: true,
  });
}
