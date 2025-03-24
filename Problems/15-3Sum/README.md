# [15. 3Sum](https://leetcode.com/problems/3sum/description/)

### Difficulty:

`Medium`

### Topics:

`Array`, `Two Pointers`, `Sorting`

---

## Problem Description:

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

### Examples:

#### Example 1:

**Input:** `nums = [-1,0,1,2,-1,-4]`  
**Output:** `[[-1,-1,2],[-1,0,1]]`  
**Explanation:**

- `nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0`
- `nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0`
- `nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0`

The distinct triplets are `[-1,0,1]` and `[-1,-1,2]`. Notice that the order of the output and the order of the triplets does not matter.

#### Example 2:

**Input:** `nums = [0,1,1]`  
**Output:** `[]`  
**Explanation:** The only possible triplet does not sum up to 0.

#### Example 3:

**Input:** `nums = [0,0,0]`  
**Output:** `[[0,0,0]]`  
**Explanation:** The only possible triplet sums up to 0.

---

## Approach

1. Sort the array `nums`. We will use it later to avoid duplicates
2. Iterate through the sorted array and use two pointers. The left pointer starts at `i + 1` and the right pointer starts at the end of the array
3. Check the sum of the three numbers:
   - Move the right pointer to the left if the sum is greater than 0
   - Move the left pointer to the right if the sum is less than 0
   - If the sum is 0, add the triplet to the result list
4. Move left pointer to the right and keep moving the left pointer until we find a different number
5. Repeat from step 3 until `l < r`

## Time and Space Complexity

| Metric | Complexity |
| ------ | ---------- |
| Time   | `O(n^2)`   |
| Space  | `O(n)`     |

---

## Solution

- [JavaScript Solution](solution.js)

---

## Key Takeaways

- Sorting the array helps in avoiding duplicates
- The two pointer technique significantly reduces time complexity compared to a brute force approach
