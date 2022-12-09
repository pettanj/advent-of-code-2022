import { getInput } from "../utils/input";
import { printPart1, printPart2 } from "../utils/result";
import Timer from "../utils/timer";

export async function day9() {
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
  const input = [...(await getInput(9))].map((x) => x.split(" ")).map((x) => [x[0], parseInt(x[1])]);
  const positionMap: { [key: string]: boolean } = {};
  const head = { x: 0, y: 0 };
  const tail = { x: 0, y: 0 };
  for (let line of input) {
    let val = line[1] as number;
    for (let i = 0; i < val; i++) {
      switch (line[0]) {
        case "R":
          head.x++;
          break;
        case "L":
          head.x--;
          break;
        case "U":
          head.y--;
          break;
        case "D":
          head.y++;
          break;
      }
      if (head.x != tail.x && head.y != tail.y && (Math.abs(head.x - tail.x) > 1 || Math.abs(head.y - tail.y) > 1)) {
        if (head.x > tail.x && head.y > tail.y) {
          tail.y++;
          tail.x++;
        } else if (head.x > tail.x && head.y < tail.y) {
          tail.y--;
          tail.x++;
        } else if (head.x < tail.x && head.y > tail.y) {
          tail.y++;
          tail.x--;
        } else if (head.x < tail.x && head.y < tail.y) {
          tail.y--;
          tail.x--;
        }
      } else if (head.x == tail.x) {
        if (head.y - tail.y >= 2) {
          tail.y++;
        } else if (head.y - tail.y <= -2) {
          tail.y--;
        }
      } else if (head.y == tail.y) {
        if (head.x - tail.x >= 2) {
          tail.x++;
        } else if (head.x - tail.x <= -2) {
          tail.x--;
        }
      }
      positionMap[tail.x + "," + tail.y] = true;
    }
  }
  return Object.values(positionMap).length;
}

async function part2() {
  const input = [...(await getInput(9))].map((x) => x.split(" ")).map((x) => [x[0], parseInt(x[1])]);
  const positionMap: { [key: string]: boolean } = {};
  const originalHead = { x: 0, y: 0 };
  const tails = new Array(9).fill(0).map((x) => {
    return { x: 0, y: 0 };
  });
  for (let line of input) {
    let val = line[1] as number;
    for (let i = 0; i < val; i++) {
      switch (line[0]) {
        case "R":
          originalHead.x++;
          break;
        case "L":
          originalHead.x--;
          break;
        case "U":
          originalHead.y--;
          break;
        case "D":
          originalHead.y++;
          break;
      }
      let head = originalHead;
      for (let tail of tails) {
        if (head.x != tail.x && head.y != tail.y && (Math.abs(head.x - tail.x) > 1 || Math.abs(head.y - tail.y) > 1)) {
          if (head.x > tail.x && head.y > tail.y) {
            tail.y++;
            tail.x++;
          } else if (head.x > tail.x && head.y < tail.y) {
            tail.y--;
            tail.x++;
          } else if (head.x < tail.x && head.y > tail.y) {
            tail.y++;
            tail.x--;
          } else if (head.x < tail.x && head.y < tail.y) {
            tail.y--;
            tail.x--;
          }
        } else if (head.x == tail.x) {
          if (head.y - tail.y >= 2) {
            tail.y++;
          } else if (head.y - tail.y <= -2) {
            tail.y--;
          }
        } else if (head.y == tail.y) {
          if (head.x - tail.x >= 2) {
            tail.x++;
          } else if (head.x - tail.x <= -2) {
            tail.x--;
          }
        }
        head = tail;
      }
      positionMap[tails[8].x + "," + tails[8].y] = true;
    }
  }
  return Object.values(positionMap).length;
}
