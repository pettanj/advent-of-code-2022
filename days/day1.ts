import { getInput } from "../utils/input";
import { printPart1 } from "../utils/result";
import Timer from "../utils/timer";

export async function day1() {
  const timer = new Timer();
  timer.start();
  const input = await getInput(1);
  const result = input[0];
  const time = timer.stop();
  printPart1(result, time);
}
