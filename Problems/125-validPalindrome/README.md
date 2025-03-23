# [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)

### Difficulty:

`Easy`

### Topics:

`Two Pointers`

---

## Problem Description:

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: `s = "A man, a plan, a canal: Panama"`
Output: `true`
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: `s = "race a car"`
Output: `false`
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: `s = " "`
Output: `true`
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

---

## Approach

1. Use left and right pointers to compare characters. If they are not equal, then it's not a palindrome
2. If we encounter a non-alphanumeric character, then keep moving the pointer until we reach an alphanumeric character

## Time and Space Complexity

| Metric | Complexity |
| ------ | ---------- |
| Time   | `O(n)`     |
| Space  | `O(1)`     |

---

## Solution

- [JavaScript Solution](solution.js)

---

## Key Takeaways

- Here is how we can check if a character is alphanumeric:

```
    (c >= "A" && c <= "Z") ||
    (c >= "a" && c <= "z") ||
    (c >= "0" && c <= "9");
```
