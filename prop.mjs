#!/usr/bin/env node

const operations = 1000
const simulations = 1000

const trades = 30
const cost = 100
const payout = 10000
const edge = 0.75

let highest = 0
let lowest = Number.MAX_SAFE_INTEGER
let average = 0
let average_last = 0

for (let o = 1; o <= operations; o++)
{
	let balance = 0
	let paidout = 0

	for (let s = 1; s <= simulations; s++)
	{
		balance += cost

		let total = 0
		let win = 0

		for (let t = 1; t <= trades; t++)
		{
			total++

			if (Math.random() < 0.5)
			{
				win++
			}
		}

		let win_rate = win / total

		if (win_rate >= edge)
		{
			paidout++
			balance -= payout
		}
	}

	if (balance > highest)
	{
		highest = balance
	}

	if (balance < lowest)
	{
		lowest = balance
	}

	average = ((average_last * (o - 1)) + balance) / o
	average_last = average

	if (operations <= 1000)
	{
		console.info(`#${o} balance: ${balance / simulations} paidout: ${paidout / simulations} efficiency: ${(balance / simulations) / cost}`)
	}
}

console.info(`highest: ${highest} lowest: ${lowest} average: ${average}`)
