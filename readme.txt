$ ./batch.mjs
interations: 1,000
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................

# 66% risk 5 to make 10 ($5k/contract)

balance:
        high: $5,827,750
        average: $3,910,053
        low: $2,101,500
win:
        high: 76%
        average: 66%
        low: 57%
draw:
        high: 46%
        average: 18%
        low: 9%

# 66% risk 10 to make 20 ($10k/contract)

balance:
        high: $11,341,500
        average: $7,931,737
        low: $4,485,000
win:
        high: 75%
        average: 66%
        low: 57%
draw:
        high: 43%
        average: 18%
        low: 8%

# 66% risk 10 to make 20 ($5k/contract)

balance:
        high: $13,535,500
        average: $9,971,229
        low: $6,229,500
win:
        high: 75%
        average: 66%
        low: 57%
draw:
        high: 70%
        average: 29%
        low: 10%

# 66% risk 20 to make 40 ($5k/contract)

balance:
        high: $28,572,000
        average: $21,904,915
        low: $11,190,000
win:
        high: 75%
        average: 66%
        low: 52%
draw:
        high: 100%
        average: 47%
        low: 13%


$ ./expectancy 66.66 2
1

# is 50% 4r better than 80% 2r?
$ expr $(./expectancy.mjs 50 4) '>' $(./expectancy.mjs 80 2)
1       # true


$ ./goal.mjs
# 100 contracts max
1,000%: 284 points
10,000%: 520 points
100,000%: 1,420 points
1,000,000%: 10,420 points
10,000,000%: 100,420 points
# 200 contracts max
284, 520, 988, 5,465, 50,242
# 500 contracts max
284, 520, 782, 2,574, 20,503
# 1,000 contracts max
284, 520, 752, 1,645, 10,583


$ ./index.mjs
#1, $6,000, contracts: 1, reward: 1,000, risk: 500, draw: 0%, win: true
#2, $5,500, contracts: 1, reward: 1,000, risk: 500, draw: 8%, win: false
#3, $5,000, contracts: 1, reward: 1,000, risk: 500, draw: 17%, win: false
#4, $6,000, contracts: 1, reward: 1,000, risk: 500, draw: 0%, win: true
#5, $7,000, contracts: 1, reward: 1,000, risk: 500, draw: 0%, win: true
#6, $8,000, contracts: 1, reward: 1,000, risk: 500, draw: 0%, win: true
#7, $9,000, contracts: 1, reward: 1,000, risk: 500, draw: 0%, win: true
#8, $8,500, contracts: 1, reward: 1,000, risk: 500, draw: 6%, win: false
#9, $9,500, contracts: 1, reward: 1,000, risk: 500, draw: 0%, win: true
#10, $10,500, contracts: 1, reward: 1,000, risk: 500, draw: 0%, win: true
#11, $12,500, contracts: 2, reward: 2,000, risk: 1,000, draw: 0%, win: true
#12, $14,500, contracts: 2, reward: 2,000, risk: 1,000, draw: 0%, win: true
#13, $16,500, contracts: 2, reward: 2,000, risk: 1,000, draw: 0%, win: true
#14, $19,500, contracts: 3, reward: 3,000, risk: 1,500, draw: 0%, win: true
#15, $22,500, contracts: 3, reward: 3,000, risk: 1,500, draw: 0%, win: true
#16, $26,500, contracts: 4, reward: 4,000, risk: 2,000, draw: 0%, win: true
#17, $24,000, contracts: 5, reward: 5,000, risk: 2,500, draw: 9%, win: false
#18, $22,000, contracts: 4, reward: 4,000, risk: 2,000, draw: 17%, win: false
#19, $20,000, contracts: 4, reward: 4,000, risk: 2,000, draw: 25%, win: false
#20, $24,000, contracts: 4, reward: 4,000, risk: 2,000, draw: 9%, win: true
#21, $28,000, contracts: 4, reward: 4,000, risk: 2,000, draw: 0%, win: true
#22, $33,000, contracts: 5, reward: 5,000, risk: 2,500, draw: 0%, win: true
#23, $39,000, contracts: 6, reward: 6,000, risk: 3,000, draw: 0%, win: true
#24, $35,500, contracts: 7, reward: 7,000, risk: 3,500, draw: 9%, win: false
#25, $42,500, contracts: 7, reward: 7,000, risk: 3,500, draw: 0%, win: true
#26, $38,500, contracts: 8, reward: 8,000, risk: 4,000, draw: 9%, win: false
#27, $45,500, contracts: 7, reward: 7,000, risk: 3,500, draw: 0%, win: true
#28, $54,500, contracts: 9, reward: 9,000, risk: 4,500, draw: 0%, win: true
#29, $64,500, contracts: 10, reward: 10,000, risk: 5,000, draw: 0%, win: true
#30, $58,500, contracts: 12, reward: 12,000, risk: 6,000, draw: 9%, win: false
#31, $53,000, contracts: 11, reward: 11,000, risk: 5,500, draw: 18%, win: false
#32, $48,000, contracts: 10, reward: 10,000, risk: 5,000, draw: 26%, win: false
#33, $57,000, contracts: 9, reward: 9,000, risk: 4,500, draw: 12%, win: true
#34, $68,000, contracts: 11, reward: 11,000, risk: 5,500, draw: 0%, win: true
#35, $81,000, contracts: 13, reward: 13,000, risk: 6,500, draw: 0%, win: true
#36, $97,000, contracts: 16, reward: 16,000, risk: 8,000, draw: 0%, win: true
#37, $116,000, contracts: 19, reward: 19,000, risk: 9,500, draw: 0%, win: true
#38, $139,000, contracts: 23, reward: 23,000, risk: 11,500, draw: 0%, win: true
#39, $125,500, contracts: 27, reward: 27,000, risk: 13,500, draw: 10%, win: false
#40, $150,500, contracts: 25, reward: 25,000, risk: 12,500, draw: 0%, win: true
#41, $135,500, contracts: 30, reward: 30,000, risk: 15,000, draw: 10%, win: false
#42, $162,500, contracts: 27, reward: 27,000, risk: 13,500, draw: 0%, win: true
#43, $194,500, contracts: 32, reward: 32,000, risk: 16,000, draw: 0%, win: true
#44, $232,500, contracts: 38, reward: 38,000, risk: 19,000, draw: 0%, win: true
#45, $209,500, contracts: 46, reward: 46,000, risk: 23,000, draw: 10%, win: false
#46, $250,500, contracts: 41, reward: 41,000, risk: 20,500, draw: 0%, win: true
#47, $225,500, contracts: 50, reward: 50,000, risk: 25,000, draw: 10%, win: false
#48, $270,500, contracts: 45, reward: 45,000, risk: 22,500, draw: 0%, win: true
#49, $324,500, contracts: 54, reward: 54,000, risk: 27,000, draw: 0%, win: true
#50, $388,500, contracts: 64, reward: 64,000, risk: 32,000, draw: 0%, win: true
[...]
#202, $7,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#203, $7,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#204, $7,058,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#205, $7,008,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#206, $7,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: true
#207, $7,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#208, $7,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#209, $7,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#210, $7,058,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#211, $7,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: true
#212, $7,258,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#213, $7,358,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#214, $7,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#215, $7,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#216, $7,358,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#217, $7,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#218, $7,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#219, $7,508,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#220, $7,458,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#221, $7,558,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#222, $7,658,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#223, $7,758,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#224, $7,858,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#225, $7,808,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#226, $7,908,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#227, $7,858,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#228, $7,808,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#229, $7,908,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#230, $8,008,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#231, $8,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#232, $8,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#233, $8,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#234, $8,258,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#235, $8,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#236, $8,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#237, $8,258,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#238, $8,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#239, $8,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#240, $8,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#241, $8,508,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#242, $8,608,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#243, $8,708,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#244, $8,808,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#245, $8,908,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#246, $9,008,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#247, $9,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#248, $9,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#249, $9,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#250, $9,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#251, $9,508,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#252, $9,608,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
$: 9,608,500, win (projected): 66%, win (actual): 65%, r: 2, draw: 26%


$ ./ftt.mjs
#1 ✅: 11 trades in 11 days
#2 ❌: 45 trades in 1 days
#3 ✅: 15 trades in 15 days
#4 ❌: 32 trades in 6 days
#5 ✅: 15 trades in 14 days
#6 ✅: 23 trades in 11 days
#7 ❌: 24 trades in 3 days
#8 ❌: 7 trades in 4 days
#9 ✅: 13 trades in 11 days
#10 ❌: 24 trades in 2 days
#11 ✅: 11 trades in 11 days
#12 ✅: 25 trades in 11 days
#13 ❌: 28 trades in 2 days
#14 ❌: 12 trades in 2 days
#15 ✅: 16 trades in 11 days
#16 ✅: 15 trades in 12 days
#17 ❌: 20 trades in 2 days
#18 ❌: 31 trades in 12 days
#19 ❌: 14 trades in 8 days
#20 ❌: 12 trades in 9 days
#21 ❌: 41 trades in 1 days
#22 ✅: 11 trades in 11 days
#23 ❌: 12 trades in 2 days
#24 ✅: 13 trades in 11 days
#25 ❌: 12 trades in 2 days
#26 ✅: 19 trades in 15 days
#27 ❌: 13 trades in 12 days
#28 ❌: 8 trades in 2 days
#29 ❌: 16 trades in 8 days
#30 ❌: 11 trades in 5 days
#31 ✅: 11 trades in 11 days
#32 ❌: 6 trades in 2 days
#33 ❌: 28 trades in 13 days
#34 ❌: 10 trades in 3 days
#35 ✅: 33 trades in 32 days
#36 ❌: 5 trades in 1 days
#37 ❌: 25 trades in 1 days
#38 ❌: 11 trades in 7 days
#39 ❌: 6 trades in 2 days
#40 ❌: 13 trades in 4 days
#41 ❌: 13 trades in 4 days
#42 ✅: 14 trades in 11 days
#43 ✅: 19 trades in 13 days
#44 ❌: 21 trades in 19 days
#45 ❌: 23 trades in 17 days
#46 ❌: 44 trades in 4 days
#47 ✅: 13 trades in 11 days
#48 ✅: 21 trades in 20 days
#49 ❌: 16 trades in 10 days
#50 ❌: 18 trades in 7 days
[...]
#950 ❌: 31 trades in 12 days
#951 ❌: 15 trades in 8 days
#952 ❌: 13 trades in 4 days
#953 ❌: 40 trades in 29 days
#954 ❌: 21 trades in 16 days
#955 ✅: 47 trades in 35 days
#956 ❌: 45 trades in 21 days
#957 ✅: 17 trades in 11 days
#958 ❌: 15 trades in 4 days
#959 ✅: 19 trades in 18 days
#960 ❌: 42 trades in 24 days
#961 ❌: 11 trades in 9 days
#962 ❌: 15 trades in 5 days
#963 ✅: 15 trades in 11 days
#964 ❌: 31 trades in 17 days
#965 ❌: 20 trades in 4 days
#966 ❌: 23 trades in 13 days
#967 ✅: 39 trades in 16 days
#968 ✅: 25 trades in 25 days
#969 ✅: 11 trades in 11 days
#970 ✅: 27 trades in 13 days
#971 ❌: 5 trades in 1 days
#972 ✅: 13 trades in 11 days
#973 ❌: 11 trades in 6 days
#974 ✅: 15 trades in 11 days
#975 ❌: 44 trades in 31 days
#976 ✅: 11 trades in 11 days
#977 ✅: 11 trades in 11 days
#978 ❌: 18 trades in 13 days
#979 ❌: 11 trades in 1 days
#980 ✅: 45 trades in 30 days
#981 ✅: 27 trades in 25 days
#982 ✅: 13 trades in 13 days
#983 ✅: 61 trades in 28 days
#984 ✅: 23 trades in 16 days
#985 ❌: 67 trades in 13 days
#986 ✅: 46 trades in 11 days
#987 ❌: 33 trades in 1 days
#988 ❌: 17 trades in 1 days
#989 ✅: 11 trades in 11 days
#990 ❌: 30 trades in 23 days
#991 ❌: 16 trades in 2 days
#992 ❌: 7 trades in 4 days
#993 ❌: 12 trades in 3 days
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

summary: with a 50.00% win rate and 1R, you would statisitcally expect to reach payout on 39.70% of accounts that payout $1500 and blowup 60.30% accounts that cost $98.45 which would return $595.50 gross and $497.05 net profit, for a return on investment of 504.88%


$ ./topstep.mjs
#1 ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ 💣
#2 ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#3 ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#4 ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#5 ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ ✖️ 💣
#6 ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ 💣
#7 ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ ✖️ 💣
#8 ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ 🙂 ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💀
#9 ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ 💣
#10 ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#11 ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#12 ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ 🙂 ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ 💀
#13 ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#14 ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#15 ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ 🙂 ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💀
#16 ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ 🙂 ✖️ ✖️ ✖️ ✖️ 💀
#17 ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#18 ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#19 ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ 🙂 ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ 💀
#20 ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#21 ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#22 ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#23 ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ 💣
#24 ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ 🙂 ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ ✖️ ✖️ 💀
#25 ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#26 ✖️ ✖️ ✖️ ✖️ 💣
#27 ✖️ ✖️ ✖️ ✖️ 💣
#28 ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ 🙂 ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ 💰 ✔️ ✔️ ✔️ ✔️ ✔️ 💰 ✖️ ✖️ ✖️ ✖️ ✖️ 💀
#29 ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ 🙂 ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💀
#30 ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ 🙂 ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💀
#31 ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#32 ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ 🙂 ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💀
#33 ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ 🙂 ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ 💀
#34 ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#35 ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ 💣
#36 ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ 🙂 ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💀
#37 ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ 🙂 ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💀
#38 ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ 🙂 ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ 💰 ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ 💰 ✖️ ✖️ ✖️ ✖️ 💀
#39 ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#40 ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ 🙂 ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ 💀
#41 ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ 💣
#42 ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ 🙂 ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💀
#43 ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ 🙂 ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ 💀
#44 ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ 🙂 ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💀
#45 ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#46 ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ 🙂 ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💀
#47 ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#48 ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#49 ✖️ ✖️ ✖️ ✖️ 💣
#50 ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#51 ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#52 ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ 💣
#53 ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ 🙂 ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ 💀
#54 ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ 💣
#55 ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#56 ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#57 ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#58 ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#59 ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ 🙂 ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ 💰 ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ 💰 ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ 💰 ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ 💰 ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ 💰 ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ 💰 ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ 💰 ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ 💰 ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ 💰 ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💀
#60 ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ 🙂 ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💀
#61 ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ 🙂 ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ 💀
#62 ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#63 ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ ✖️ 💣
#64 ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ 💣
#65 ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#66 ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#67 ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#68 ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ 💣
#69 ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#70 ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ 💣
#71 ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#72 ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#73 ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ 🙂 ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💀
#74 ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#75 ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ 🙂 ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ 💰 ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ ✖️ ✖️ 💀
#76 ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#77 ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#78 ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#79 ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ 💣
#80 ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#81 ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#82 ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#83 ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#84 ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ 💣
#85 ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#86 ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ 💣
#87 ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ 💣
#88 ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ 💣
#89 ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ 💣
#90 ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ 💣
#91 ✖️ ✖️ ✖️ ✖️ 💣
#92 ✖️ ✖️ ✖️ ✖️ 💣
#93 ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ 🙂 ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ 💰 ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ 💰 ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ 💀
#94 ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣
#95 ✖️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ 🙂 ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ 💀
#96 ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ 🙂 ✔️ ✔️ ✔️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✖️ ✖️ ✔️ ✖️ ✖️ 💀
#97 ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#98 ✖️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✖️ 💣
#99 ✔️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ ✔️ ✔️ ✖️ ✖️ ✖️ 💣
#100 ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✔️ ✔️ ✔️ ✖️ ✔️ ✔️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ ✔️ ✖️ ✖️ 💣

combine_count: 100,000
combine_trade_count: 422,230
combine_trade_success: 210,532
combine_trade_probability: 49.86%
combine_trade_count_per_combine_count: 4.22
combine_success: 29,475
combine_success_probability: 29.48%
combine_count_per_success: 3.39
combine_cost_per_success: $169.64

xfa_count: 29,475
xfa_trade_count: 243,467
xfa_trade_success: 121,992
xfa_trade_probability: 50.11%
xfa_trade_count_per_xfa_count: 8.26
xfa_success: 12,168
xfa_success_probability: 41.28%
xfa_count_per_success: 2.42
xfa_cost_per_success: $363.35

account_count: 100,000
account_success: 12,168
account_success_probability: 12.17%
account_count_per_success: 8.22
account_count_combine_per_success: 8.22
account_count_xfa_per_success: 2.42
account_trade_count_per_account_count: 54.71

account_cost_per_success: $774.26
account_cost_combine_per_success: $410.91
account_cost_xfa_per_success: $363.35
account_cost_per_success2: $774.26

total_cost_per_success: $774.26
total_profit_per_success: $2,278.44
total_profit_net_per_success: $1,504.17
total_profit_factor_per_success: 1.94

total_cost_per_count: $94.21
total_profit_per_count: $277.24
total_profit_net_per_count: $183.03
total_profit_factor_per_count: 1.94

roi: 194.27%
