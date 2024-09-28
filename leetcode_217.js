//217. Contains Duplicate
// ВАРИАНТ РЕШЕНИЯ С СОРТИРОВКОЙ
var containsDuplicate = function (nums) {
  let temp = radixSort(nums);
  for (let i = 1; i < temp.length; i++) {
    if (temp[i - 1] == temp[i]) return true;
  }
  return false;
};

const getDigit = (num, k) => {
  if (num == 0) return 1;
  return Math.floor(Math.abs(num) / Math.pow(10, k)) % 10;
};

const getMostDigit = (nums) => {
  let most = 0;
  for (let i = 0; i < nums.length; i++) {
    let newMost = Math.floor(Math.log10(Math.abs(nums[i]))) + 1;
    if (newMost > most) {
      most = newMost;
    }
  }
  return most;
};

const radixSort = (input) => {
  let mostDigit = getMostDigit(input);
  for (let i = 0; i < mostDigit; i++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < input.length; j++) {
      bucket[getDigit(input[j], i)].push(input[j]);
    }
    input = [].concat(...bucket);
  }
  return input;
};
// ВАРИАНТ РЕШЕНИЯ С ХЕШ-ТАБЛИЦЕЙ
var containsDuplicate = function (nums) {
  return mapDuplicateFinder(nums);
};

function mapDuplicateFinder(nums) {
  let j = new Map();
  for (let i = 0; i < nums.length; i++) {
    let count = j.get(nums[i]);
    if (count || count == 0) {
      return true;
    } else {
      count = 1;
      j.set(nums[i], count);
    }
  }
  return false;
}
