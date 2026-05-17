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

export const fibsRec = (num) => {
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }
  const prevNum = fibsRec(num - 1);
  prevNum.push(prevNum.at(-1) + prevNum.at(-2));
  return prevNum;
};
