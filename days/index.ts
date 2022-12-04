import { day1 } from "./day1";
import { day2 } from "./day2";
import { day3 } from "./day3";
import { day4 } from "./day4";

export function solve(day: number) {
  switch (day) {
    case 1:
      day1();
      break;
    case 2:
      day2();
    case 3:
      day3();
    default:
      day4();
  }
}
