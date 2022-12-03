import { getInput } from "../utils/input";
import { printPart1, printPart2 } from "../utils/result";
import Timer from "../utils/timer";

export async function day3() {
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

const alphabet = Array.from(Array(26))
  .map((e, i) => i + 97)
  .concat(Array.from(Array(26)).map((e, i) => i + 65))
  .map((x) => String.fromCharCode(x));

async function part1() {
  const input = [...(await getInput(3))].map((x) => [x.substring(0, x.length / 2).split(""), x.substring(x.length / 2).split("")]);
  let sum = 0;
  input.forEach((line) => {
    for (let x of line[0]) {
      if (line[1].includes(x)) {
        sum += alphabet.indexOf(x) + 1;
        break;
      }
    }
  });
  return sum;
}

async function part2() {
  const input = [...(await getInput(3))].map((x) => x.split(""));
  let sum = 0;
  for (let i = 0; i < input.length; i += 3) {
    for (let char of input[i]) {
      if (input[i + 1].includes(char) && input[i + 2].includes(char)) {
        sum += alphabet.indexOf(char) + 1;
        break;
      }
    }
  }

  return sum;
}
