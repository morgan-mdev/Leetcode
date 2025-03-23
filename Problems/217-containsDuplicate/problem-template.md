# [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

### Difficulty:

`Easy`

### Topics:

`Array`

---

## Problem Description:

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

---

## Approach

- Use Set to keep tracking of numbers that we already saw.

## Time and Space Complexity

| Metric | Complexity |
| ------ | ---------- |
| Time   | `O(n)`     |
| Space  | `O(n)`     |

---

## Solution

- [JavaScript Solution](solution.js)

---
