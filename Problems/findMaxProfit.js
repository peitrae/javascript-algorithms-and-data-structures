/**
 * Input: [10, 10], 5
 * Output: 46
 * 10 + 10 + 9 + 9 + 8 = 46
 *
 * Input: [6, 4], 4
 * Output: 19
 * 6 + 5 + 4 + 4 = 19
 *
 * Input: [4, 7, 7], 5
 * Output:
 * 7 + 7 + 6 + 6 + 5 = 31
 *
 */

/**
 * Get the max num of array
 * Convert array to object
 *
 * Loop through the array
 *   if(obj[max])
 *     sum += max
 *     newStock = max - 1
 *     obj[max] = obj[max] - 1
 *     order--
 *
 *     if(!obj[max])
 *       max--;
 *
 *     if(obj[newStock])
 *         obj[newStock] = obj[newStock] + 1
 *     else
 *         obj[newStock] = 1
 *
 *
 *
 * { 7: 2, 4: 1}, 5
 * sum = 7 + 7 + 6 + 6 + 5 = 31
 *
 */

/**
 * Sort inventory
 *
 * Loop through by the order
 *  num = inventory[0]
 *  sum += num
 *  inventory[0] = num - 1;
 *  Sort inventory
 */

function findMaxProfit(inventory, order) {
	let sum = 0;
	let max = 0;
	const stock = {};

	inventory.forEach((item) => {
		max = Math.max(item, max); // Get the max num of inventory

		if (stock[item]) {
			stock[item] = stock[item] + 1;
		} else {
			stock[item] = 1;
		} // Convert inventory to an object
	});

	while (order > 0) {
		sum += max;
		let newStock = max - 1; // Store the new stock to the stock
		stock[max] = stock[max] - 1; // Reduce current inventory

		if (stock[newStock]) {
			stock[newStock] = stock[newStock] + 1;
		} else {
			stock[newStock] = 1;
		}

		if (!stock[max]) {
			// If stock is empty then reduce max

			max--;
		}

		order--;
	}

	return sum;
}

findMaxProfit([6, 4], 4);
