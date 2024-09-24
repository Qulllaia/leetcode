var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxHeight = 0;
  while (left < right) {
    let boolComparing = isRigthBiggerOrEqual(height[left], height[right]);
    let size = boolComparing[1] * (right - 1 - left);
    if (maxHeight < size) {
      maxHeight = size;
      console.log(maxHeight);
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
    return [true, rightEl];
  } else {
    return [false, leftEl];
  }
};
console.log(maxArea([1, 1]));
