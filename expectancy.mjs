#!/usr/bin/env node

import {argv, exit} from 'node:process'

let win = parseFloat(argv[2])
let r = parseFloat(argv[3])

if (!win || !r) usage()
if (win < 0 || win > 100) usage()
if (r < 0 || r > 100) usage()

let expectancy = ((win / 100) * r) - (((100 - win) / 100) * 1)
let expectancy_fix = Math.round(expectancy * 100) / 100

console.info(expectancy_fix)

function usage() {
	console.error('usage: <win rate percent> <reward to risk number>')
	console.error('example: 66 2')
	exit(1)
}
