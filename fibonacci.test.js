import { fibs } from "./fibonacci.js";

test("Test fibonacci sequence of 8 with iteration", function () {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
