function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  for (; i < left.length; i++) {
    result.push(left[i]);
  }
  for (; j < right.length; j++) {
    result.push(right[j]);
  }
  return result;
}

export const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const leftSort = mergeSort(array.slice(0, mid));
  const rightSort = mergeSort(array.slice(mid));
  return merge(leftSort, rightSort);
};
