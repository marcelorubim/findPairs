/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let map = new Map();
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = 0; j <= nums.length - 1; j++) {
      if (Math.abs(nums[i] - nums[j]) === k && i !== j) {
        const v = [nums[i], nums[j]].sort();
        map.set(`${v[0]}-${v[1]}`, 1);
      }
    }
  }
  return map.size;
};
