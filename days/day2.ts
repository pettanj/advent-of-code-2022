import { getInput } from "../utils/input";
import { printPart1, printPart2 } from "../utils/result";
import Timer from "../utils/timer";

export async function day2() {
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

interface MapItem1 {
  points: number;
  winsAgainst: string;
  ties: string;
}

const map1: { [key: string]: MapItem1 } = {
  X: { points: 1, winsAgainst: "C", ties: "A" },
  Y: { points: 2, winsAgainst: "A", ties: "B" },
  Z: { points: 3, winsAgainst: "B", ties: "C" },
};

async function part1() {
  const input = [...(await getInput(2))].map((x) => x.split(" "));
  let points = 0;
  input.forEach((g) => {
    let rule = map1[g[1]];
    if (g[0] == rule.winsAgainst) points += 6;
    if (g[0] == rule.ties) points += 3;
    points += rule.points;
  });
  return points;
}

const winMap: { [key: string]: number } = { A: 2, B: 3, C: 1 };

const drawMap: { [key: string]: number } = { A: 1, B: 2, C: 3 };

const loseMap: { [key: string]: number } = { A: 3, B: 1, C: 2 };
async function part2() {
  const input = [...(await getInput(2))].map((x) => x.split(" "));
  let points = 0;
  input.forEach((g) => {
    if (g[1] == "Y") {
      points += drawMap[g[0]] + 3;
    } else if (g[1] == "Z") {
      points += winMap[g[0]] + 6;
    } else {
      points += loseMap[g[0]];
    }
  });
  return points;
}
