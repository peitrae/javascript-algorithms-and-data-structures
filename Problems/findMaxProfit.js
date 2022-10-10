/**
 * Problem:
 * 
 * An e-commerce company imports a type of fitness band from China and sell them in the US for a higher price. 
 * The company source the product from multiple suppliers, each with their own inventory. 
 * The suppliers raise the price of their product when inventory decreases due to scarcity. 
 * More specifically, the profit that the e-commerce company makes on each product sold is equal to the number of products left from the supplier.
 * 
 * Given a list of integers representing the number of products each supplier has and an integer representing the number of products sold,
 * find the maximum profit the company can make.
 * 
 * Link: https://algo.monster/problems/find_the_highest_profit
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
		let newInventory = max - 1; // Store the new inventory to the stock
		stock[max] = stock[max] - 1; // Reduce current inventory

		if (stock[newInventory]) {
			stock[newInventory] = stock[newInventory] + 1;
		} else {
			stock[newInventory] = 1;
		}

		if (!stock[max]) {
			// If stock is empty then reduce the max

			max--;
		}

		order--;
	}

	return sum;
}
