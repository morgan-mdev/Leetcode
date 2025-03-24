function maxArea(heights) {
  let l = 0;
  let r = heights.length - 1;
  let maximum = 0;

  while (l < r) {
    // Calculate the area
    const water = (r - l) * Math.min(heights[r], heights[l]);
    maximum = Math.max(water, maximum);
    // Move only the pointer with the smaller height
    if (heights[r] < heights[l]) {
      r--;
    } else {
      l++;
    }
  }

  return maximum;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// Output: 49
