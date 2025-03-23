# [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

### Difficulty:

`Medium`

### Topics:

`Array, Hash Set`

---

## Problem Description:

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3

---

## Approach

- Use a Set to store all unique nums
- Iterate through `nums` and check if each element is the start of a sequence
- If it is, keep adding 1 until we reach the end of the sequence
- Save the length of the sequence if it's the longest so far

## Time and Space Complexity

| Metric | Complexity |
| ------ | ---------- |
| Time   | `O(n)`     |
| Space  | `O(n)`     |

---

## Solution

- [JavaScript Solution](solution.js)

---

## Key Takeaways

- Only check the length of a sequence if the current number is the beginning of it
- We can do it by checking if `nums[i] - 1` is not in the set
- Using a Set is a common technique in sequence problems
