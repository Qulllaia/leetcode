// 11. Container With Most Water
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxHeight = 0;
  while (left < right) {
    let boolComparing = isRigthBiggerOrEqual(height[left], height[right]);
    let size = boolComparing[1] * (right - left);
    if (maxHeight < size) {
      maxHeight = size;
    }
    if (boolComparing[0]) {
      left++;
    } else {
      right--;
    }
  }
  return maxHeight;
};
const isRigthBiggerOrEqual = (leftEl, rightEl) => {
  if (rightEl >= leftEl) {
    return [true, leftEl];
  } else {
    return [false, rightEl];
  }
};
