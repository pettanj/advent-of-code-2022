import { day1 } from "./day1";
import { day2 } from "./day2";
import { day3 } from "./day3";
import { day4 } from "./day4";
import { day5 } from "./day5";
import { day6 } from "./day6";
import { day7 } from "./day7";
import { day8 } from "./day8";
import { day9 } from "./day9";

export function solve(day: number) {
  switch (day) {
    case 1:
      day1();
      break;
    case 2:
      day2();
    case 3:
      day3();
    case 4:
      day4();
    case 5:
      day5();
    case 6:
      day6();
    case 7:
      day7();
    case 8:
      day8();
    default:
      day9();
  }
}
