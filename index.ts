function day1 () {
  let commands = process.argv.slice(2);
  let days = [1,2,3];
  let day = parseInt(commands[0]) || days[days.length - 1];
  console.log(day);
}

day1();