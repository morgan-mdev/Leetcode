function containsDuplicate(nums) {
  const numsSet = new Set();
  for (const num of nums) {
    if (numsSet.has(num)) return true;
    numsSet.add(num);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
