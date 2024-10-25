#!/usr/bin/env node

let log =
[
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 0.25},
	{profit: 0.25, draw: 4},
]

let total_profit = 0
let total_draw = 0
let max_draw = 0

for (let i = 0; i < log.length; i++)
{
	total_profit += log[i].profit
	total_draw += log[i].draw

	if (log[i].draw > max_draw)
	{
		max_draw = log[i].draw
	}
}

let average_profit = total_profit / log.length
let average_draw = total_draw / log.length

let r_plus = average_profit / average_draw
let r_plusplus = average_profit / max_draw

console.info(`\
trades: ${log.length}
average profit: ${average_profit}
average draw: ${average_draw}
r+: ${r_plus}
r++: ${r_plusplus}
`)
