#!/usr/bin/env node

let balance = 10_000
let goal = 2_000_000
let contracts_max = 100
let contracts_margin = 10_000
let point_value = 50

let points = 0
while (balance < goal) {
	let contracts = Math.min(Math.trunc(balance / contracts_margin), contracts_max)

	balance += contracts * point_value
	points++

	console.info(`contracts: ${contracts}, balance: ${balance}, points: ${points}`)
}

console.info(points)
