import { getInput } from "../utils/input";
import { printPart1, printPart2 } from "../utils/result";
import Timer from "../utils/timer";

export async function day7() {
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
  const input = [...(await getInput(7))].map((x) => x.split(" "));
  const folders: { [key: string]: number } = { "/": 0 };
  let path: string[] = [];

  for (let i = 0; i < input.length; i++) {
    switch (input[i][0]) {
      case "$":
        if (input[i][1] == "cd") {
          if (input[i][1] == "/") {
            path = ["/"];
          } else if (input[i][2] == "..") {
            path.pop();
          } else {
            path.push(input[i][2]);
          }
          break;
        }
        if (input[i][1] == "ls") {
          break;
        }
        break;
      case "dir":
        let dirName = path.join(",") + "," + input[i][1];
        folders[dirName] = 0;
        break;
      default:
        let size = parseInt(input[i][0]);
        if (!isNaN(size)) {
          let subPath = [...path];
          while (subPath.length > 0) {
            folders[subPath.join(",")] += size;
            subPath.pop();
          }
        }
        break;
    }
  }
  return Object.values(folders).reduce((prev, curr) => (curr <= 100000 ? prev + curr : prev), 0);
}

async function part2() {
  const input = [...(await getInput(7))].map((x) => x.split(" "));
  const folders: { [key: string]: number } = { "/": 0 };
  let path: string[] = [];
  for (let i = 0; i < input.length; i++) {
    switch (input[i][0]) {
      case "$":
        if (input[i][1] == "cd") {
          if (input[i][1] == "/") {
            path = ["/"];
          } else if (input[i][2] == "..") {
            path.pop();
          } else {
            path.push(input[i][2]);
          }
          break;
        }
        if (input[i][1] == "ls") {
          break;
        }
        break;
      case "dir":
        let dirName = path.join(",") + "," + input[i][1];
        folders[dirName] = 0;
        break;
      default:
        let size = parseInt(input[i][0]);
        if (!isNaN(size)) {
          let subPath = [...path];
          while (subPath.length > 0) {
            folders[subPath.join(",")] += size;
            subPath.pop();
          }
        }
        break;
    }
  }
  const total = 70000000;
  const required = 30000000;
  const usedSpace = folders["/"];
  const needToFree = usedSpace + required - total;
  let matches = Object.values(folders).filter((a) => a >= needToFree);
  matches.sort((a, b) => a - b);
  return matches[0];
}
