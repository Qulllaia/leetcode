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
// var climbStairs = function (n) {
//   if (n <= 3) return n;
//   return climbStairs(n - 3) + 2 * climbStairs(n - 2);
// };

// console.log(climbStairs(5));
//215. Kth Largest Element in an Array
// var findKthLargest = function(nums, k) {
//   return radixSort(nums)[nums.length-k]
// };
// const getDigit = (num,place) =>{
//   if (num === 0) return 0
//   return Math.floor(Math.abs(num)/Math.pow(10,place))%10
// }

// const mostDigits = (nums) =>{
//   let mostDigit = 0
//   for(let i = 0; i < nums.length; i++){
//       mostDigit = Math.max(mostDigit, nums[i] === 0 ? 1 : Math.floor(Math.log10(Math.abs(nums[i])))+1)
//   }
//   return mostDigit
// }

// const radixSort = (nums) =>{
//   let mostDigit = mostDigits(nums)
//   for(let j = 0; j < mostDigit; j++){
//       let bucket = Array.from({length:20}, ()=>[])
//       for(let i = 0; i < nums.length; i++){
//           let digit = getDigit(nums[i],j)
//           bucket[nums[i] >= 0 ? 10 + digit : 10 - digit].push(nums[i])
//       }
//       nums = [].concat(...bucket)
//   }
//   return nums
// }
//217. Contains Duplicate
// ВАРИАНТ РЕШЕНИЯ С СОРТИРОВКОЙ
// var containsDuplicate = function (nums) {
//   let temp = radixSort(nums);
//   for (let i = 1; i < temp.length; i++) {
//     if (temp[i - 1] == temp[i]) return true;
//   }
//   return false;
// };

// const getDigit = (num, k) => {
//   if (num == 0) return 1;
//   return Math.floor(Math.abs(num) / Math.pow(10, k)) % 10;
// };

// const getMostDigit = (nums) => {
//   let most = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let newMost = Math.floor(Math.log10(Math.abs(nums[i]))) + 1;
//     if (newMost > most) {
//       most = newMost;
//     }
//   }
//   return most;
// };

// const radixSort = (input) => {
//   let mostDigit = getMostDigit(input);
//   for (let i = 0; i < mostDigit; i++) {
//     let bucket = Array.from({ length: 10 }, () => []);
//     for (let j = 0; j < input.length; j++) {
//       bucket[getDigit(input[j], i)].push(input[j]);
//     }
//     input = [].concat(...bucket);
//   }
//   return input;
// };
// ВАРИАНТ РЕШЕНИЯ С ХЕШ-ТАБЛИЦЕЙ
// var containsDuplicate = function (nums) {
//   return mapDuplicateFinder(nums);
// };

// function mapDuplicateFinder(nums) {
//   let j = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let count = j.get(nums[i]);
//     if (count || count == 0) {
//       return true;
//     } else {
//       count = 1;
//       j.set(nums[i], count);
//     }
//   }
//   return false;
// }
