//70. Climbing Stairs
var climbStairs = function (n) {
  if (n <= 3) return n;
  return climbStairs(n - 3) + 2 * climbStairs(n - 2);
};

console.log(climbStairs(5));
