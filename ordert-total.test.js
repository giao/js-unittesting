/**
 *  test suite using vanilla js
 */

const orderTotal = require('./order-total');

it('works', () => {
	expect(1).toBe(1);
});

it('Quantity', () => {
	expect(orderTotal({
		items: [
			{ name: 'Dragon candy', price: 2, quantity: 3 },
		]
	})).toBe(6)
})

// it('Quantity specified', () => {
// 	expect(orderTotal({
// 		items: [
// 			{ name: 'Dragon candy', price: 2, quantity: 3 },
// 		]
// 	})).toBe(3)
// })

// if (orderTotal({
// 	items: [
// 		{ name: 'Dragon candy', price: 3 },
// 	]
// }) !== 3) {
// 	throw new Error('Check fail: no quantity specified');
// }

if (orderTotal({
	items: [
		{ name: 'Dragon food', price: 8, quantity: 1 },
		{ name: 'Dragon cage(small)', price: 800, quantity: 1 }
	]
}) !== 808) {
	throw new Error('Check fail: happy path (Example 1)');
}

if (orderTotal({
	items: [
		{ name: 'Dragon collar', price: 20, quantity: 1 },
		{ name: 'Dragon chew toy', price: 40, quantity: 1 }
	]
}) !== 60) {
	throw new Error('Check fail: happy path  (Example 2)');
}

