import { getInput } from "../utils/input";
import { printPart1, printPart2 } from "../utils/result";
import Timer from "../utils/timer";

export async function day4() {
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

async function part1() {
  const input = [...(await getInput(4))].map((x) => x.split(",").map((y) => y.split("-").map((z) => parseInt(z))));
  let amount = 0;
  input.forEach((x) => {
    if ((x[0][0] >= x[1][0] && x[0][1] <= x[1][1]) || (x[1][0] >= x[0][0] && x[1][1] <= x[0][1])) {
      amount += 1;
    }
  });
  return amount;
}

async function part2() {
  const input = [...(await getInput(4))].map((x) =>
    x
      .split(",")
      .map((y) => y.split("-").map((z) => parseInt(z)))
      .map((section) => [...Array(section[1] - section[0] + 1).keys()].map((x) => x + section[0]))
  );
  let amount = 0;
  for (let x of input) {
    for (let y of x[0]) {
      if (x[1].includes(y)) {
        amount += 1;
        break;
      }
    }
  }
  return amount;
}
