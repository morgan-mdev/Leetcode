function longestConsecutive(nums) {
  const uniqueNums = new Set(nums);

  let longest = 0;
  for (let num of nums) {
    // Check if it is the start of a sequence
    if (uniqueNums.has(num - 1)) continue;
    let length = 1;
    // Keep adding + 1 until we reach the end of the sequence
    while (uniqueNums.has(num + length)) {
      length++;
    }
    // Save the longest length
    longest = Math.max(length, longest);
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
