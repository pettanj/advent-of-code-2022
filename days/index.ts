import { day1 } from "./day1";
import { day2 } from "./day2";

export function solve(day: number) {
  switch (day) {
    case 1:
      day1();
      break;
    case 2:
      day2();
    default:
      day2();
  }
}
