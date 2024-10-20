#!/usr/bin/env node

let iterations = 1_000

let account_cost = 98.45
let account_value = 25_000.00
let account_target = account_value * 1.05
let account_stop = account_value * 0.95
let consistency_rule = 0.20
let days_min = 10
let payout_max = 1500.00

// 50% 1R
let trade_probability = 0.50
let trade_reward = payout_max * consistency_rule
let trade_risk = trade_reward

let paidout = 0
let blowedup = 0
for (let iteration = 1; iteration <= iterations; iteration++) {
	let account_success = false
	let day = 1
	let trade = 0
	let pnl = 0.00
	let pnl_high = 0.00
	while (true) {
		let trade_success = false
		if (Math.random() < trade_probability) {
			trade_success = true
			pnl += trade_reward
		} else {
			trade_success = false
			pnl -= trade_risk
		}
		trade++

		if (pnl + account_value > account_target && day > days_min) {
			account_success = true
			break
		}

		if (pnl > pnl_high) pnl_high = pnl
		if (account_value + pnl <= (account_value + pnl_high) * 0.95) {
			account_success = false
			break
		}

		if (pnl < trade_reward) continue

		day++
	}

	let mark = ''
	if (account_success) {
		mark = '✅'
		paidout++
	} else {
		mark = '❌'
		blowedup++
	}

	console.info(`#${iteration} ${mark}: ${trade} trades in ${day} days`)
}

let expense = iterations * account_cost
let revenue = paidout * payout_max
let net = revenue - expense
let payout_breakeven = account_cost / payout_max
let payout_percent = paidout / (paidout + blowedup)
let edge = payout_percent - payout_breakeven
let expected_value = account_cost * (1 + edge)
let roi = expected_value / account_cost
console.info(`\
total accounts: ${iterations}
total payouts: ${paidout}
total blowups: ${blowedup}
total expense: ${expense}
total revenue: ${revenue}
total net profit: ${net}
payout percent required for breakeven: ${p(payout_breakeven)}
actual payout percent: ${p(payout_percent)}
edge against the house: ${p(edge)}

summary: with a ${p(trade_probability)} win rate and ${trade_reward / trade_risk}R, for every account purchased for $${account_cost}, you would statisitcally expect to return $${(account_cost + expected_value).toFixed(2)} gross and $${expected_value.toFixed(2)} net profit, for a return on investment of ${p(roi)}
`)

function p(float) {
	return (float * 100).toFixed(2) + '%'
}
