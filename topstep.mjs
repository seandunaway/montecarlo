#!/usr/bin/env node

import {ok} from 'node:assert'
import {stdout} from 'node:process'

const iterations = 10000

const trade_win = 0.50
const trade_reward = 500.00
const trade_risk = -500.00

const combine_cost = 50.00
const combine_target = 3000.00
const combine_stop = -2000.00

const xfa_cost = 150.00
const xfa_target = 4000.00
const xfa_stop = -2000.00
const xfa_payout_percent = 0.50
const xfa_payout_required_days = 5
const xfa_payout_required_profit = 200.00

const xfa_abandon_after_first_payout = false

ok(trade_reward <= combine_target / 2, 'error: reward breaks consistency rule')
ok(trade_risk >= combine_stop / 2, 'error: risk breaks daily loss limit')
ok(trade_reward >= xfa_payout_required_profit, 'error: reward breaks daily profit minimum')

let combine_count = 0
let combine_success = 0
let combine_trade_count = 0
let combine_trade_success = 0

let xfa_count = 0
let xfa_success = 0
let xfa_trade_count = 0
let xfa_trade_success = 0

let total_cost = 0.00
let total_profit = 0.00
let payouts = []

for (let iteration = 1; iteration <= iterations; iteration++) {
	// purchase combine
	combine_count++
	total_cost += combine_cost

	// trade combine
	let combine_pnl = 0.00
	let combine_trail = combine_stop
	let combine_passed = false

	stdout.write(`#${combine_count} `)

	while (true) {
		// take a trade
		combine_trade_count++
		if (Math.random() < trade_win) {
			combine_trade_success++
			combine_pnl += trade_reward
			stdout.write('✔️ ')
		} else {
			combine_pnl += trade_risk
			stdout.write('✖️ ')
		}

		// blew up
		if (combine_pnl <= combine_trail) {
			stdout.write('💣 ')
			break
		}

		// passed
		if (combine_pnl >= combine_target) {
			combine_success++
			combine_passed = true
			stdout.write('🙂 ')
			break
		}

		// adjust trail
		if (combine_pnl + combine_stop > combine_trail) combine_trail = combine_pnl + combine_stop
		if (combine_trail > 0) combine_trail = 0
	}

	// failed combine
	if (!combine_passed) {
		stdout.write('\n')
		continue
	}


	// congratulations, you just beat the combine
	// for your reward you get to pay a fee and go back to $0


	// purchase xfa
	xfa_count++
	total_cost += xfa_cost

	// trade xfa
	let xfa_pnl = 0.00
	let xfa_trail = xfa_stop
	let xfa_passed = false
	let xfa_payout_required_day = 0

	while (true) {
		// take a trade
		xfa_trade_count++
		if (Math.random() < trade_win) {
			xfa_trade_success++
			if (trade_reward >= xfa_payout_required_profit) xfa_payout_required_day++
			xfa_pnl += trade_reward
			stdout.write('✔️ ')
		} else {
			xfa_pnl += trade_risk
			stdout.write('✖️ ')
		}

		// blew up
		if (xfa_pnl <= xfa_trail) {
			stdout.write('💀 ')
			break
		}

		// payout
		if (xfa_pnl >= xfa_target && xfa_payout_required_day >= xfa_payout_required_days) {
			xfa_success++
			xfa_passed = true
			total_profit += xfa_pnl * xfa_payout_percent
			xfa_pnl = xfa_pnl * (1 - xfa_payout_percent)
			xfa_payout_required_day = 0
			payouts.push(iteration)
			stdout.write('💰 ')

			if (xfa_abandon_after_first_payout) break
		}

		// adjust trail
		if (xfa_pnl + xfa_stop > xfa_trail) xfa_trail = xfa_pnl + xfa_stop
		if (xfa_trail > 0) xfa_trail = 0
	}

	stdout.write('\n')
}

let combine_trade_success_probability = combine_trade_success / combine_trade_count
let combine_trade_count_per_combine_count = combine_trade_count / combine_count
let combine_success_probability = combine_success / combine_count
let combine_count_per_success = combine_count / combine_success
let combine_cost_per_success = combine_cost * combine_count_per_success

let xfa_trade_success_probability = xfa_trade_success / xfa_trade_count
let xfa_trade_count_per_xfa_count = xfa_trade_count / xfa_count
let xfa_success_probability = xfa_success / xfa_count
let xfa_count_per_success = xfa_count / xfa_success
let xfa_cost_per_success = xfa_cost * xfa_count_per_success

let account_count = combine_count
let account_success = xfa_success
let account_success_probability = account_success / account_count
let account_count_per_success = account_count / account_success
let account_count_combine_per_success = combine_count_per_success * xfa_count_per_success
let account_count_xfa_per_success = xfa_count_per_success
let account_trade_count_per_account_count = (account_count_combine_per_success * combine_trade_count_per_combine_count) + (account_count_xfa_per_success * xfa_trade_count_per_xfa_count)

let account_cost_per_success = ((combine_cost * combine_count) + (xfa_cost * xfa_count)) / account_success
let account_cost_combine_per_success = combine_cost * account_count_combine_per_success
let account_cost_xfa_per_success = xfa_cost * account_count_xfa_per_success
let account_cost_per_success2 = account_cost_combine_per_success + account_cost_xfa_per_success

let total_profit_net = total_profit - total_cost
let total_profit_factor = total_profit / total_cost

let total_cost_per_success = total_cost / account_success
let total_profit_per_success = total_profit / account_success
let total_profit_net_per_success = total_profit_net / account_success
let total_profit_factor_per_success = total_profit_net_per_success / total_cost_per_success

let total_cost_per_count = total_cost / account_count
let total_profit_per_count = total_profit / account_count
let total_profit_net_per_count = total_profit_net / account_count
let total_profit_factor_per_count = total_profit_net_per_count / total_cost_per_count

let roi = total_profit_net_per_success / total_cost_per_success

console.info(`
combine_count: ${n(combine_count)}
combine_trade_count: ${n(combine_trade_count)}
combine_trade_success: ${n(combine_trade_success)}
combine_trade_probability: ${p(combine_trade_success_probability)}
combine_trade_count_per_combine_count: ${f(combine_trade_count_per_combine_count)}
combine_success: ${n(combine_success)}
combine_success_probability: ${p(combine_success_probability)}
combine_count_per_success: ${f(combine_count_per_success)}
combine_cost_per_success: ${c(combine_cost_per_success)}

xfa_count: ${n(xfa_count)}
xfa_trade_count: ${n(xfa_trade_count)}
xfa_trade_success: ${n(xfa_trade_success)}
xfa_trade_probability: ${p(xfa_trade_success_probability)}
xfa_trade_count_per_xfa_count: ${f(xfa_trade_count_per_xfa_count)}
xfa_success: ${n(xfa_success)}
xfa_success_probability: ${p(xfa_success_probability)}
xfa_count_per_success: ${f(xfa_count_per_success)}
xfa_cost_per_success: ${c(xfa_cost_per_success)}

account_count: ${n(account_count)}
account_success: ${n(account_success)}
account_success_probability: ${p(account_success_probability)}
account_count_per_success: ${f(account_count_per_success)}
account_count_combine_per_success: ${f(account_count_combine_per_success)}
account_count_xfa_per_success: ${f(account_count_xfa_per_success)}
account_trade_count_per_account_count: ${f(account_trade_count_per_account_count)}

account_cost_per_success: ${c(account_cost_per_success)}
account_cost_combine_per_success: ${c(account_cost_combine_per_success)}
account_cost_xfa_per_success: ${c(account_cost_xfa_per_success)}
account_cost_per_success2: ${c(account_cost_per_success2)}
`,
// total_cost: ${c(total_cost)}
// total_profit: ${c(total_profit)}
// total_profit_net: ${c(total_profit_net)}
// total_profit_factor: ${f(total_profit_factor)}
`
total_cost_per_success: ${c(total_cost_per_success)}
total_profit_per_success: ${c(total_profit_per_success)}
total_profit_net_per_success: ${c(total_profit_net_per_success)}
total_profit_factor_per_success: ${f(total_profit_factor_per_success)}

total_cost_per_count: ${c(total_cost_per_count)}
total_profit_per_count: ${c(total_profit_per_count)}
total_profit_net_per_count: ${c(total_profit_net_per_count)}
total_profit_factor_per_count: ${f(total_profit_factor_per_count)}

roi: ${p(roi)}
`)

let streaks = []
let streaks_total = 0
let streaks_max = 0
let streaks_avg = 0
let dryspells = []
let dryspells_total = 0
let dryspells_max = 0
let dryspells_avg = 0

let streak_count = 1
let payouts_last = 0

for (let i = 0; i < payouts.length; i++) {
	if (payouts[i] == payouts_last) streak_count++
	if (payouts[i] > payouts_last) {
		dryspells.push(payouts[i] - payouts_last)
		streaks.push(streak_count)
		streak_count = 1
	}
	payouts_last = payouts[i]
}

for (let i = 0; i < streaks.length; i++) {
	streaks_total += streaks[i]
	if (streaks[i] > streaks_max) streaks_max = streaks[i]
}
streaks_avg = streaks_total / streaks.length

for (let i = 0; i < dryspells.length; i++) {
	dryspells_total += dryspells[i]
	if (dryspells[i] > dryspells_max) dryspells_max = dryspells[i]
}
dryspells_avg = dryspells_total / dryspells.length

console.info(`\
streaks_max: ${streaks_max}
streaks_avg: ${f(streaks_avg)}
dryspells_max: ${dryspells_max}
dryspells_avg: ${f(dryspells_avg)}
`)

function c(currency = 0.00) {
	return '$' + currency.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
}

function f(float = 0.0) {
	return float.toLocaleString(undefined, {maximumFractionDigits: 2})
}

function n(number = 0) {
	return number.toLocaleString(undefined, {maximumFractionDigits: 0})
}

function p(percent = 0.0) {
	return (percent * 100).toLocaleString(undefined, {maximumFractionDigits: 2}) + '%'
}
