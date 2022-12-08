import { getInput } from "../utils/input";
import { printPart1, printPart2 } from "../utils/result";
import Timer from "../utils/timer";

export async function day8() {
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
  const input = [...(await getInput(8))].map((x) => x.split("").map((x) => parseInt(x)));
  const visible: { [key: string]: boolean } = {};
  let previous = 0;
  for (let row = 0; row < input.length; row++) {
    previous = 0;
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col] > previous || col == 0 || row == 0 || row == input.length - 1 || col == input[row].length - 1) {
        visible[row + "," + col] = true;
        previous = input[row][col];
      }
    }
    previous = 0;
    for (let col = input[row].length - 1; col >= 0; col--) {
      if (input[row][col] > previous || col == 0 || row == 0 || row == input.length - 1 || col == input[row].length - 1) {
        visible[row + "," + col] = true;
        previous = input[row][col];
      }
    }
  }
  for (let col = 0; col < input[0].length; col++) {
    previous = 0;
    for (let row = 0; row < input.length; row++) {
      if (input[row][col] > previous || col == 0 || row == 0 || row == input.length - 1 || col == input[row].length - 1) {
        visible[row + "," + col] = true;
        previous = input[row][col];
      }
    }
  }
  for (let col = 0; col < input[0].length; col++) {
    for (let row = input.length - 1; row >= 0; row--) {
      if (input[row][col] > previous || col == 0 || row == 0 || row == input.length - 1 || col == input[row].length - 1) {
        visible[row + "," + col] = true;
        previous = input[row][col];
      }
    }
  }
  return Object.values(visible).length;
}

async function part2() {
  const input = [...(await getInput(8))].map((x) => x.split("").map((x) => parseInt(x)));
  const scores: { [key: string]: number } = {};

  const calculateScenicScore = (inputRow: number, inputCol: number) => {
    let current = input[inputRow][inputCol];
    let values: number[] = [];
    let val = 0;

    for (let col = inputCol - 1; col >= 0; col--) {
      val++;
      if (input[inputRow][col] >= current || col == 0) {
        break;
      }
    }
    values.push(val);
    val = 0;

    for (let row = inputRow - 1; row >= 0; row--) {
      val++;
      if (input[row][inputCol] >= current || row == 0) {
        break;
      }
    }
    values.push(val);
    val = 0;
    for (let col = inputCol + 1; col < input[inputRow].length; col++) {
      val++;
      if (input[inputRow][col] >= current || col == input[inputRow].length - 1) {
        break;
      }
    }
    values.push(val);
    val = 0;

    for (let row = inputRow + 1; row < input.length; row++) {
      val++;
      if (input[row][inputCol] >= current || row == input.length - 1) {
        break;
      }
    }
    values.push(val);

    return values.reduce((prev, curr) => prev * curr, 1);
  };

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      scores[row + "," + col] = calculateScenicScore(row, col);
    }
  }
  return Math.max(...Object.values(scores));
}
