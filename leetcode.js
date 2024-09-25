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
//1901. Find a Peak Element II
// let mat = [
//   [10, 20, 15],
//   [21, 30, 14],
//   [7, 16, 32],
// ];

// var findPeakGrid = function (mat) {
//   let left = 0;
//   let right = mat.length - 1;

//   while (left < right) {
//     let midLineId = parseInt((left + right) / 2, 10);
//     let col = maxId(mat[midLineId]);
//     if (mat[midLineId][col] < mat[midLineId + 1][col]) {
//       left = midLineId + 1;
//     } else {
//       right = midLineId;
//     }
//   }

//   return [left, maxId(mat[left])];
// };

// const maxId = (arr) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[max]) {
//       max = i;
//     }
//   }
//   return max;
// };

// console.log(findPeakGrid(mat));

//70. Climbing Stairs
var climbStairs = function (n) {
  if (n <= 3) return n;
  return climbStairs(n - 3) + 2 * climbStairs(n - 2);
};

console.log(climbStairs(5));
