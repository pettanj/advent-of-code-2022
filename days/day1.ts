import { getInput } from "../utils/input";
import { printPart1, printPart2 } from "../utils/result";
import Timer from "../utils/timer";

export async function day1() {
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

async function part1()  {
  const input = [...await getInput(1)];
  
  const elves: number[] = [];
  let group: string[] = [];
  for(let i = 0; i < input.length; i++) {
    if (input[i] == "") {
      elves.push(group.reduce((previous, current) => previous + parseInt(current, 10), 0));
      group = [];
    } else {
      group.push(input[i]);
    }
  }

  return Math.max(...elves);;
}

async function part2()  {
  const input = [...await getInput(1)];
  
  let elves: number[] = [];
  let group: string[] = [];
  for(let i = 0; i < input.length; i++) {
    if (input[i] == "") {
      elves.push(group.reduce((previous, current) => previous + parseInt(current, 10), 0));
      group = [];
    } else {
      group.push(input[i]);
    }
  }
  elves.sort((a, b) => b - a);
  return elves.slice(0, 3).reduce((prev, curr) => prev + curr);
}