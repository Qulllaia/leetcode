//215. Kth Largest Element in an Array
var findKthLargest = function (nums, k) {
  return radixSort(nums)[nums.length - k];
};
const getDigit = (num, place) => {
  if (num === 0) return 0;
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const mostDigits = (nums) => {
  let mostDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    mostDigit = Math.max(
      mostDigit,
      nums[i] === 0 ? 1 : Math.floor(Math.log10(Math.abs(nums[i]))) + 1
    );
  }
  return mostDigit;
};

const radixSort = (nums) => {
  let mostDigit = mostDigits(nums);
  for (let j = 0; j < mostDigit; j++) {
    let bucket = Array.from({ length: 20 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], j);
      bucket[nums[i] >= 0 ? 10 + digit : 10 - digit].push(nums[i]);
    }
    nums = [].concat(...bucket);
  }
  return nums;
};
