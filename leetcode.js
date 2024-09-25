//11. Container With Most Water
// var maxArea = function (height) {
//   let left = 0;
//   let right = height.length - 1;
//   let maxHeight = 0;
//   while (left < right) {
//     let boolComparing = isRigthBiggerOrEqual(height[left], height[right]);
//     let size = boolComparing[1] * (right - left);
//     if (maxHeight < size) {
//       maxHeight = size;
//     }
//     if (boolComparing[0]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return maxHeight;
// };

// const isRigthBiggerOrEqual = (leftEl, rightEl) => {
//   if (rightEl >= leftEl) {
//     return [true, leftEl];
//   } else {
//     return [false, rightEl];
//   }
// };
let mat = [
  [10, 20, 15],
  [21, 30, 14],
  [7, 16, 32],
];

var findPeakGrid = function (mat) {
  let array = [];
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

  return [left, maxId(left)];
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
