import { getInput } from "./utils/input";

async function day1() {
  let commands = process.argv.slice(2);
  let days = [1];
  let day = parseInt(commands[0]) || days[days.length - 1];
  let input = await getInput(day);
  console.log(input);
}

day1();
