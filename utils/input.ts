import { readFile } from "fs";

export async function getInput(day: number) {
  return new Promise((resolve, reject) => {
    readFile(`./inputs/${day}.txt`, "utf8", (err: any, data: any) => {
      if (err) {
        reject(err);
      }
      resolve(data.split("\r\n"));
    });
  });
}
