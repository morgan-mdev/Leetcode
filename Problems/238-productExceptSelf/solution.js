function productExceptSelf(nums) {
  const n = nums.length;
  const prefix = new Array(n);
  const postfix = new Array(n);
  const res = new Array(n);

  prefix[0] = 1;
  postfix[n - 1] = 1;

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    postfix[i] = postfix[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    res[i] = prefix[i] * postfix[i];
  }

  return res;
}

console.log(productExceptSelf([1, 2, 4, 6]));
