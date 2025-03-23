function isPalindrome(s) {
  s = s.toLowerCase();
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    while (l < r && !this.isAlphaNum(s[l])) {
      l++;
    }
    while (l < r && !this.isAlphaNum(s[r])) {
      r--;
    }
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
