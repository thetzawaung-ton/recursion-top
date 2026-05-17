export const fibs = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i < 3) {
      result.push(i - 1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
};
