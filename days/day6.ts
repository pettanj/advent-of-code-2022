import { getInput } from "../utils/input";
import { printPart1, printPart2 } from "../utils/result";
import Timer from "../utils/timer";

export async function day6() {
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

function distinct(list: string[]) {
  let dist = [...new Set(list)];
  return dist.length === list.length;
}

async function part1() {
  const input = (await getInput(6))[0].split("");
  for (let i = 0; i < input.length - 4; i++) {
    let section = input.slice(i, i + 4);
    if (distinct(section)) {
      return i + 4;
    }
  }
}

async function part2() {
  const input = (await getInput(6))[0].split("");
  for (let i = 0; i < input.length - 14; i++) {
    let section = input.slice(i, i + 14);
    if (distinct(section)) {
      return i + 14;
    }
  }
}
