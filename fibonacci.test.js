import { fibs, fibsRec } from "./fibonacci.js";

test("Test fibonacci sequence of n with iteration and recursion", function () {
  testCases = [
    { num: 1, output: [0] },
    { num: 2, output: [0, 1] },
    { num: 3, output: [0, 1, 1] },
    { num: 4, output: [0, 1, 1, 2] },
    { num: 5, output: [0, 1, 1, 2, 3] },
    { num: 6, output: [0, 1, 1, 2, 3, 5] },
    { num: 7, output: [0, 1, 1, 2, 3, 5, 8] },
    { num: 8, output: [0, 1, 1, 2, 3, 5, 8, 13] },
    { num: 9, output: [0, 1, 1, 2, 3, 5, 8, 13, 21] },
    { num: 10, output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] },
  ];

  testCases.forEach((t) => {
    (expect(fibs(t.num)).toEqual(t.output),
      expect(fibsRec(t.num)).toEqual(t.output));
  });
});
