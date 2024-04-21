#!/usr/bin/env node

import {execFileSync} from 'node:child_process'

let iterations = 1000

let balances = []
let wins = []
let draws = []

console.info(`interations: ${iterations.toLocaleString()}`)

for (let i = 1; i <= iterations; i++) {
	let buffer = execFileSync('./index.mjs')
	let text = buffer.toString()

	let match = text.match(/^\$: (?<balance>[\d,]+).+?win \(actual\): (?<win>\d+).+?draw: (?<draw>\d+)/m)
	if (!match?.groups?.balance) throw new Error()
	if (!match?.groups?.win) throw new Error()
	if (!match?.groups?.draw) throw new Error()

	let balance_fix = match.groups.balance.replace(/,/g, '')
	balances.push(parseInt(balance_fix))
	wins.push(parseInt(match.groups.win))
	draws.push(parseInt(match.groups.draw))

	process.stdout.write('.')
}

let balance_high = 0
let balance_total = 0
let balance_low = Number.MAX_SAFE_INTEGER
for (let i = 0; i < balances.length; i++) {
	if (balances[i] > balance_high) balance_high = balances[i]
	balance_total += balances[i]
	if (balances[i] < balance_low) balance_low = balances[i]
}
let balance_average = Math.round(balance_total / iterations)

let win_high = 0
let win_total = 0
let win_low = Number.MAX_SAFE_INTEGER
for (let i = 0; i < wins.length; i++) {
	if (wins[i] > win_high) win_high = wins[i]
	win_total += wins[i]
	if (wins[i] < win_low) win_low = wins[i]
}
let win_average = Math.round(win_total / iterations)

let draw_high = 0
let draw_total = 0
let draw_low = Number.MAX_SAFE_INTEGER
for (let i = 0; i < draws.length; i++) {
	if (draws[i] > draw_high) draw_high = draws[i]
	draw_total += draws[i]
	if (draws[i] < draw_low) draw_low = draws[i]
}
let draw_average = Math.round(draw_total / iterations)

console.info('\n')
console.info(`balance:\n\thigh: $${balance_high.toLocaleString()}\n\taverage: $${balance_average.toLocaleString()}\n\tlow: $${balance_low.toLocaleString()}`)
console.info(`win:\n\thigh: ${win_high}%\n\taverage: ${win_average}%\n\tlow: ${win_low}%`)
console.info(`draw:\n\thigh: ${draw_high}%\n\taverage: ${draw_average}%\n\tlow: ${draw_low}%`)
