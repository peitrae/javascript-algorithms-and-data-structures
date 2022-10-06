/**
 * Problems:
 *
 * Write an algorithm to determine if a number n is happy.
 * A happy number is a number defined by the following process:
 *
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 *
 * Link: https://leetcode.com/problems/happy-number
 */

var isHappy = function (n) {
	let arrayOfDigits = Array.from(String(n), Number); // NOTE: Convert num to array of digit
	const buckets = {};

	while (n > 0) {
		let sum = 0;

		for (let i = 0; i < arrayOfDigits.length; i++) {
			sum += Math.pow(arrayOfDigits[i], 2);
		} // NOTE: Count the sum of the squares of array of digits

		if (sum === 1) {
			return true;
		}

		if (buckets[sum]) {
			break;
		} else {
			buckets[sum] = 1;
		} // NOTE: Store sum to bucket and detect if it is a cycle

		arrayOfDigits = Array.from(String(sum), Number);
	}

	return false;
};
