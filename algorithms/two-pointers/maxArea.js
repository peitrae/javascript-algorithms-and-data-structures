/**
 * You are given an integer array height of length n. 
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 * 
 * Link: https://leetcode.com/problems/container-with-most-water/
 */

var maxArea = function (height) {
	let maxArea = 0;
	let i = 0;
	let j = height.length - 1;

	while (i < j) {
		const minHeight = Math.min(height[i], height[j]);
		const sum = minHeight * (j - i);
		maxArea = Math.max(sum, maxArea);

		if (height[i] < height[j]) {
			i++;
		} else {
			j--;
		}
	}

	return maxArea;
};
