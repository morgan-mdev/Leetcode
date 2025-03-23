function productExceptSelf(nums) {
  const res = new Array(nums.length).fill(1);
  let prefix = 1;

  for (let i = 1; i < nums.length; i++) {
    prefix *= nums[i - 1];
    res[i] = prefix;
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }

  return res;
}

console.log(productExceptSelf([1, 2, 4, 6]));
