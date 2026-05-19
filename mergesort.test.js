import { mergeSort } from "./mergesort.js";

test("merge sort multiple types of array", () => {
  const testCases = [
    { array: [], sortedArray: [] },
    { array: [1], sortedArray: [1] },
    { array: [2, 1], sortedArray: [1, 2] },
    { array: [2, 1, 3], sortedArray: [1, 2, 3] },
    { array: [8, 3, 3, 9], sortedArray: [3, 3, 8, 9] },
    { array: [5, 6, 2, 9, 6], sortedArray: [2, 5, 6, 6, 9] },
    { array: [5, 4, 3, 2, 1, 8], sortedArray: [1, 2, 3, 4, 5, 8] },
  ];

  testCases.forEach((t) => {
    expect(mergeSort(t.array)).toEqual(t.sortedArray);
  });
});
