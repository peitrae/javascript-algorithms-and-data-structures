/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/**
 * Problems:
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * Link: https://leetcode.com/problems/spiral-matrix
 */

var spiralOrder = function (matrix) {
	let i1 = 0;
	let i2 = matrix[0].length - 1; // 3
	let j1 = 0;
	let j2 = matrix.length - 1; // 3
	const result = [];

	while (i1 <= i2 && j1 <= j2) {
		for (let y = i1; y <= i2; y++) result.push(matrix[i1][y]); // NOTE: Move Right
		for (let x = j1 + 1; x <= j2; x++) result.push(matrix[x][i2]); // NOTE: Move Down

		if (i1 < i2 && j1 < j2) {
			for (let y = i2 - 1; y > i1; y--) result.push(matrix[j2][y]); // NOTE: Move Left
			for (let x = j2; x > j1; x--) result.push(matrix[x][i1]); // NOTE: Move Up
		}

		i1++;
		j1++;
		i2--;
		j2--;
	}

	return result;
};
