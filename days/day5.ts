import { getInput } from "../utils/input";
import { printPart1, printPart2 } from "../utils/result";
import Timer from "../utils/timer";

export async function day5() {
  const timer = new Timer();
  timer.start();
  const result = await part1();
  const time = timer.stop();
  printPart1(result, time);
  timer.start();
  const result2 = await part2();
  const time2 = timer.stop();
  printPart2(result2, time2);
}

const exampleStacks: string[][] = [["Z", "N"], ["M", "C", "D"], ["P"]];

const inputStacks: string[][] = ["NTBSQHGR", "JZPDFSH", "VHZ", "HGFJZM", "RSMLDCZT", "JZHVWTM", "ZLPFT", "SWVQ", "CNDTMLHW"].map((x) =>
  x.split("").reverse()
);

async function part1() {
  const input = [...(await getInput(5))].map((x) =>
    x
      .split(/move | from | to /g)
      .slice(1)
      .map((y) => parseInt(y))
  );
  let stacks: string[][] = JSON.parse(JSON.stringify(inputStacks));
  for (let line of input) {
    let amount = line[0];
    let from = line[1] - 1;
    let to = line[2] - 1;
    for (let i = 0; i < amount; i++) {
      stacks[to].push(stacks[from].pop()!);
    }
  }
  return stacks.map((x) => x[x.length - 1]).join("");
}

async function part2() {
  const input = [...(await getInput(5))].map((x) =>
    x
      .split(/move | from | to /g)
      .slice(1)
      .map((y) => parseInt(y))
  );
  let stacks: string[][] = JSON.parse(JSON.stringify(inputStacks));
  for (let line of input) {
    let amount = line[0];
    let from = line[1] - 1;
    let to = line[2] - 1;
    stacks[to].push(...stacks[from].splice(stacks[from].length - amount));
  }
  return stacks.map((x) => x[x.length - 1]).join("");
}
