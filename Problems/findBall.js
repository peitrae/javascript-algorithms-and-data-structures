
/**
 * Problems:
 *
 * You have a 2-D grid of size m x n representing a box, and you have n balls. The box is open on the top and bottom sides.
 *
 * Each cell in the box has a diagonal board spanning two corners of the cell 
 * that can redirect a ball to the right or to the left.
 *
 * A board that redirects the ball to the right spans the top-left corner to the bottom-right corner and is represented in the grid as 1.
 * A board that redirects the ball to the left spans the top-right corner to the bottom-left corner and is represented in the grid as -1.
 * We drop one ball at the top of each column of the box. Each ball can get stuck in the box or fall out of the bottom. A ball gets stuck if it hits a "V" shaped pattern between two boards or if a board redirects the ball into either wall of the box.
 *
 * Return an array answer of size n where answer[i] is the column that the ball falls out of at the bottom after dropping the ball from the ith column at the top, or -1 if the ball gets stuck in the box.
 *
 * Link: https://leetcode.com/problems/where-will-the-ball-fall
 */


var findBall = function (grid) {
	const recursion = (row, cell) => {
		if (row === grid.length) {
			/**
			 * If the ball have reached the end of grid return the index of ball
			 */

			return cell;
		}

		if (cell === 0 && grid[row][cell] === -1) {
			// NOTE: Check the left border

			return -1;
		} else if (cell === grid[0].length - 1 && grid[row][cell] === 1) {
			// NOTE: Check the right border

			return -1;
		}

		if (grid[row][cell] === 1 && grid[row][cell + 1] === -1) {
			// NOTE: Check if the next cell is not blocked (-1)

			return -1;
		} else if (grid[row][cell] === -1 && grid[row][cell - 1] === 1) {
			// NOTE: Check if the previous cell is not blocked (1)

			return -1;
		}

		return recursion(row + 1, cell + grid[row][cell]);
	};

	const result = Array.from({ length: grid[0].length }, (_, idx) =>
		recursion(0, idx)
	);

	return result;
};
