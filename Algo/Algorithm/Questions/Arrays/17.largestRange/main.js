function largestRange(array) {
  let bestRange = [];
  let longestRange = 0;
  const nums = {};
  array.forEach(element => {
    nums[element] = true;
  });

  for (const num of array) {
    // eslint-disable-next-line no-continue
    if (!nums[num]) continue;

    nums[num] = false;
    let currLongestRange = 1;
    let left = num - 1;
    let right = num + 1;

    while (left in nums) {
      nums[left] = false;
      currLongestRange += 1;
      left -= 1;
    }

    while (right in nums) {
      nums[right] = false;
      currLongestRange += 1;
      right += 1;
    }

    if (currLongestRange > longestRange) {
      longestRange = currLongestRange;
      bestRange = [left + 1, right - 1];
    }
  }
  return bestRange;
}

module.exports = largestRange;