#!/usr/bin/env node

let balance = 10_000
let contracts = 1
let contracts_maximum = 100
let balance_per_contract = 10_000
let win_rate = 0.66
let reward_points = 10
let risk_points = 5
let points_value = 50
let trade_count = 252

let wins = 0
let highest_balance = balance
let highest_draw = 0
for (let i = 1; i <= trade_count; i++) {
	let coinflip = Math.random() < win_rate

	let reward = contracts * reward_points * points_value
	let risk = contracts * risk_points * points_value

	if (coinflip) {
		balance += reward
		wins++
	} else {
		balance -= risk
	}

	if (balance > highest_balance) highest_balance = balance
	let draw = (highest_balance - balance) / highest_balance
	if (draw > highest_draw) highest_draw = draw

	console.info(`#${i}, $${balance.toLocaleString()}, contracts: ${contracts}, reward: ${reward.toLocaleString()}, risk: ${risk.toLocaleString()}, draw: ${to_percent(draw)}, win: ${coinflip}`)

	contracts = Math.trunc(balance / balance_per_contract)
	if (contracts < 1) contracts = 1
	if (contracts > contracts_maximum) contracts = contracts_maximum
}

console.info(`$: ${balance.toLocaleString()}, win (projected): ${to_percent(win_rate)}, win (actual): ${to_percent(wins / trade_count)}, r: ${reward_points / risk_points}, draw: ${to_percent(highest_draw)}`)

function to_percent(float) {
	return `${Math.round(float * 100)}%`
}
