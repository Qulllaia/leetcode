//1901. Find a Peak Element II
let mat = [
  [10, 20, 15],
  [21, 30, 14],
  [7, 16, 32],
];
var findPeakGrid = function (mat) {
  let left = 0;
  let right = mat.length - 1;

  while (left < right) {
    let midLineId = parseInt((left + right) / 2, 10);
    let col = maxId(mat[midLineId]);
    if (mat[midLineId][col] < mat[midLineId + 1][col]) {
      left = midLineId + 1;
    } else {
      right = midLineId;
    }
  }

  return [left, maxId(mat[left])];
};

const maxId = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  return max;
};

console.log(findPeakGrid(mat));
