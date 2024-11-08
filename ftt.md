# i did the math on fast track trading

i can prove ftt and its current rules are offering a mathematically beatable game. for every dollar scott collects in revenue he is taking on about five dollars of statistical net liability. this explains why he simply will not be able to make traders whole and it's snowballing with every account he sells. not only does he need a surge of new signups to pay existing liabilities but the attached debt to each new account is insurmountable. every account scott sells for $100 he's long term statistically losing about $500.

this is the largest negative house edge and the biggest blunder i've seen a company make. the math doesn't work. he will not be able to sustain this and i fear it will end up in a netflix documentary and civil or criminal judgments against scott.

the gist is, with the current rules of making 5% before losing 5% with an end of day trailing drawdown from equity highs, and with the 20% consistency rule, anyone with an equal distant target and stop and 50% win rate, aka a coinflip probability, will have a positive edge against scott to the tune of about 500%.

i brought this warning to scott's attention two months ago and he incorrectly asserted that the consistency rule by itself protects him and reduces the probability of payout but this is a common misconception. the probability of reaching symmetrical boundaries is independent of the size of each step. it doesn't matter if it's one trade of 5%, five trades of 1%, or ten trades of 0.5%, they are mathematically equivalent. this one false assumption will be the death of ftt and lost money for it's traders. of course, the end of day trailing drawdown does indeed alter the math in ftt's favor, but it's significantly less than one might expect, reducing the probability of payout from 50% in the 5% before 5% game, to about 38%. however, you'll see below that it's not enough to give scott a positive expectancy when he's paying out winning traders 15 to 1.

in more practical terms, anyone could place a small 6pt target and 6pt stop in the /ES or similar and very literally flip a coin heads for long or tails for short, repeatedly until either the account is blown or they've made the $300 daily maximum for the 20% consistency rule of the $1,500 maximum payout. about 62% of the accounts will blow up and about 38% will reach payout. the payout will be $1,500 while the cost of the account is $100 for about 15x return. this gives every trader a positive edge against the house of about 500%, earning ~$600 gross or ~$500 net profit per account purchased.

again i need to emphasize this is a 38% probability of a 15x return, while including the end of day drawdown, the consistency rule, and any arguments of poor trader performance or emotions, while using a mechanical coinflip and with zero edge against the market! traders who can't beat a coinflip still have a great shot at beating scott's game and traders who can muster any edge that beats 50/50 1R coinflip will obliterate. in fact i just did the math and anyone with at least a 40% win rate and equidistant target and stop will have a positive edge against ftt.

with 20 accounts this is the equivalent of someone spending $1,969 to return ~$9,941 about every 3 weeks! if they could get paid out, that is.

i've attached the math proof and monte carlo code as well as its output for review


```js
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

		if (pnl + account_value >= account_target && day > days_min) {
			account_success = true
			break
		}

		if (pnl > pnl_high) pnl_high = pnl
		if (pnl + account_value <= pnl_high + (account_value * 0.95)) {
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

let revenue = paidout * payout_max
let expense = iterations * account_cost
let profit = revenue - expense
let payout_breakeven = account_cost / payout_max
let payout_actual = paidout / iterations
let blowedup_actual = blowedup / iterations
let expected_value = (payout_actual * (payout_max - account_cost)) - (blowedup_actual * account_cost)
let expected_value2 = (revenue - expense) / iterations
let roi = expected_value / account_cost
let edge = roi - payout_breakeven // @todo double check this math
console.info(`
total accounts: ${iterations}
total payouts: ${paidout}
total blowups: ${blowedup}
total revenue: ${revenue}
total expense: ${expense}
total profit: ${profit}
payout breakeven: ${p(payout_breakeven)}
payout actual: ${p(payout_actual)}
value of payout ${payout_max}
value of blowup ${account_cost}
expected value: ${expected_value}
expected value (monte carlo): ${expected_value2}
return on investment: ${p(roi)}
edge against the house: ${p(edge)}

summary: with a ${p(trade_probability)} win rate and ${trade_reward / trade_risk}R, you would statisitcally expect to reach payout on ${p(payout_actual)} of accounts that payout $${payout_max} and blowup ${p(blowedup_actual)} accounts that cost $${account_cost} which would return $${(account_cost + expected_value).toFixed(2)} gross and $${expected_value.toFixed(2)} net profit, for a return on investment of ${p(roi)}
`)

function p(float) {
	return (float * 100).toFixed(2) + '%'
}
```


```
$ ./ftt.mjs
#1 ✅: 11 trades in 11 days
#2 ❌: 45 trades in 1 days
#3 ✅: 15 trades in 15 days
#4 ❌: 32 trades in 6 days
#5 ✅: 15 trades in 14 days
#6 ✅: 23 trades in 11 days
[...]
#994 ❌: 11 trades in 5 days
#995 ✅: 61 trades in 53 days
#996 ✅: 17 trades in 11 days
#997 ❌: 11 trades in 1 days
#998 ❌: 22 trades in 15 days
#999 ❌: 23 trades in 8 days
#1000 ❌: 21 trades in 7 days

total accounts: 1000
total payouts: 397
total blowups: 603
total revenue: 595500
total expense: 98450
total profit: 497050
payout breakeven: 6.56%
payout actual: 39.70%
value of payout 1500
value of blowup 98.45
expected value: 497.05
expected value (monte carlo): 497.05
return on investment: 504.88%
edge against the house: 498.31%
```

# summary

with a 50.00% win rate and 1R, you would statisitcally expect to reach payout on 39.70% of accounts that payout $1500 and blowup 60.30% accounts that cost $98.45 which would return $595.50 gross and $497.05 net profit, for a return on investment of 504.88%


# edit

i'm getting a lot of pushback with people complaining you can't coinflip a live market and get 50% 1R.. i don't really want to distract from the message that any strategy of your choosing that can maintain >40% 1R will have a positive expectancy against ftt..

but, for those interested in how easy it is to achieve coinflip probabilities in these efficient markets, here's a video

[markets are pretty efficient (11m at 2x)](https://www.youtube.com/watch?v=YBBNTAP50NA)
