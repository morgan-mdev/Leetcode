# [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/)

### Difficulty:

`Medium`

### Topics:

`Array`, `Two Pointers`

---

## Problem Description:

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i-th` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

### Example 1:

**Input:** `height = [1,8,6,2,5,4,8,3,7]`  
**Output:** `49`  
**Explanation:** The above vertical lines are represented by array `[1,8,6,2,5,4,8,3,7]`. In this case, the max area of water (blue section) the container can contain is `49`.

### Example 2:

**Input:** `height = [1,1]`  
**Output:** `1`

---

## Approach

1. Initialize left and right pointers.
2. Calculate the area between the two pointers.
3. If we have a new maximum area, then update the maximum area.
4. Move only the pointer with the smaller height.

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

- We move only the pointer with the smaller height, because if we do the opposite, we will not increase the area, because it is calculated based on the lowest vertical line
