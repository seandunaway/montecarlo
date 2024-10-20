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
#51, $465,500, contracts: 77, reward: 77,000, risk: 38,500, draw: 0%, win: true
#52, $558,500, contracts: 93, reward: 93,000, risk: 46,500, draw: 0%, win: true
#53, $658,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#54, $758,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#55, $858,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#56, $958,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#57, $908,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 5%, win: false
#58, $1,008,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#59, $1,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#60, $1,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#61, $1,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#62, $1,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#63, $1,508,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#64, $1,458,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: false
#65, $1,558,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#66, $1,658,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#67, $1,608,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: false
#68, $1,708,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#69, $1,658,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: false
#70, $1,758,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#71, $1,858,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#72, $1,958,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#73, $1,908,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: false
#74, $1,858,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 5%, win: false
#75, $1,808,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 8%, win: false
#76, $1,908,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: true
#77, $2,008,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#78, $2,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#79, $2,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#80, $2,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#81, $2,258,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#82, $2,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#83, $2,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 4%, win: false
#84, $2,258,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#85, $2,358,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#86, $2,458,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#87, $2,558,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#88, $2,658,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#89, $2,758,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#90, $2,858,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#91, $2,958,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#92, $3,058,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#93, $3,008,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#94, $2,958,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: false
#95, $3,058,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#96, $3,008,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#97, $3,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#98, $3,058,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#99, $3,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#100, $3,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#101, $3,058,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: false
#102, $3,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#103, $3,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#104, $3,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#105, $3,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#106, $3,258,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#107, $3,358,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#108, $3,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#109, $3,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#110, $3,358,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#111, $3,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: false
#112, $3,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#113, $3,508,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#114, $3,458,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#115, $3,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: false
#116, $3,358,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 4%, win: false
#117, $3,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 6%, win: false
#118, $3,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: true
#119, $3,358,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 4%, win: false
#120, $3,458,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: true
#121, $3,558,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#122, $3,508,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#123, $3,608,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#124, $3,708,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#125, $3,808,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#126, $3,758,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#127, $3,858,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#128, $3,808,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#129, $3,758,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: false
#130, $3,858,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#131, $3,958,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#132, $4,058,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#133, $4,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#134, $4,258,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#135, $4,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#136, $4,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#137, $4,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#138, $4,508,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#139, $4,458,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#140, $4,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#141, $4,358,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: false
#142, $4,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 4%, win: false
#143, $4,258,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 6%, win: false
#144, $4,358,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: true
#145, $4,458,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: true
#146, $4,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#147, $4,358,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 3%, win: false
#148, $4,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 4%, win: false
#149, $4,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: true
#150, $4,508,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#151, $4,608,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#152, $4,558,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#153, $4,658,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#154, $4,758,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#155, $4,858,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#156, $4,958,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#157, $4,908,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#158, $5,008,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#159, $5,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#160, $5,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#161, $5,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#162, $5,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#163, $5,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#164, $5,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#165, $5,258,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#166, $5,358,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#167, $5,458,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#168, $5,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#169, $5,508,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#170, $5,458,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#171, $5,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#172, $5,508,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#173, $5,608,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#174, $5,708,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#175, $5,808,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#176, $5,908,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#177, $6,008,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#178, $6,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#179, $6,058,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#180, $6,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#181, $6,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#182, $6,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#183, $6,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#184, $6,258,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#185, $6,208,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 2%, win: false
#186, $6,308,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#187, $6,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#188, $6,358,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#189, $6,458,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#190, $6,408,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#191, $6,508,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#192, $6,608,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#193, $6,708,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#194, $6,808,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#195, $6,908,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#196, $6,858,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#197, $6,958,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#198, $7,058,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#199, $7,158,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 0%, win: true
#200, $7,108,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
#201, $7,058,500, contracts: 100, reward: 100,000, risk: 50,000, draw: 1%, win: false
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
#51 ❌: 15 trades in 11 days
#52 ✅: 11 trades in 11 days
#53 ❌: 35 trades in 24 days
#54 ❌: 25 trades in 10 days
#55 ❌: 12 trades in 9 days
#56 ✅: 23 trades in 14 days
#57 ❌: 12 trades in 6 days
#58 ❌: 16 trades in 3 days
#59 ✅: 11 trades in 11 days
#60 ✅: 11 trades in 11 days
#61 ❌: 13 trades in 1 days
#62 ❌: 18 trades in 3 days
#63 ✅: 17 trades in 15 days
#64 ❌: 10 trades in 8 days
#65 ❌: 14 trades in 2 days
#66 ✅: 23 trades in 12 days
#67 ❌: 19 trades in 1 days
#68 ❌: 21 trades in 13 days
#69 ❌: 9 trades in 1 days
#70 ❌: 26 trades in 3 days
#71 ✅: 16 trades in 11 days
#72 ✅: 43 trades in 15 days
#73 ✅: 17 trades in 14 days
#74 ❌: 31 trades in 4 days
#75 ❌: 52 trades in 5 days
#76 ❌: 30 trades in 27 days
#77 ❌: 50 trades in 35 days
#78 ❌: 10 trades in 2 days
#79 ❌: 19 trades in 10 days
#80 ✅: 17 trades in 11 days
#81 ❌: 48 trades in 8 days
#82 ✅: 13 trades in 11 days
#83 ✅: 15 trades in 11 days
#84 ✅: 16 trades in 11 days
#85 ✅: 23 trades in 14 days
#86 ❌: 29 trades in 26 days
#87 ✅: 25 trades in 14 days
#88 ✅: 12 trades in 11 days
#89 ❌: 53 trades in 29 days
#90 ✅: 14 trades in 11 days
#91 ❌: 31 trades in 1 days
#92 ✅: 11 trades in 11 days
#93 ❌: 11 trades in 1 days
#94 ❌: 15 trades in 4 days
#95 ❌: 56 trades in 17 days
#96 ❌: 11 trades in 5 days
#97 ✅: 21 trades in 13 days
#98 ✅: 11 trades in 11 days
#99 ✅: 53 trades in 52 days
#100 ✅: 11 trades in 11 days
#101 ✅: 11 trades in 11 days
#102 ✅: 15 trades in 11 days
#103 ❌: 15 trades in 1 days
#104 ✅: 40 trades in 11 days
#105 ❌: 15 trades in 1 days
#106 ✅: 11 trades in 11 days
#107 ❌: 26 trades in 4 days
#108 ❌: 7 trades in 4 days
#109 ❌: 31 trades in 21 days
#110 ❌: 34 trades in 3 days
#111 ✅: 21 trades in 21 days
#112 ❌: 20 trades in 11 days
#113 ✅: 11 trades in 11 days
#114 ✅: 31 trades in 17 days
#115 ✅: 33 trades in 31 days
#116 ✅: 23 trades in 15 days
#117 ❌: 18 trades in 17 days
#118 ✅: 13 trades in 12 days
#119 ❌: 25 trades in 19 days
#120 ❌: 53 trades in 7 days
#121 ❌: 10 trades in 3 days
#122 ❌: 16 trades in 2 days
#123 ✅: 12 trades in 11 days
#124 ✅: 13 trades in 11 days
#125 ❌: 10 trades in 3 days
#126 ✅: 21 trades in 12 days
#127 ✅: 25 trades in 18 days
#128 ❌: 20 trades in 5 days
#129 ✅: 14 trades in 11 days
#130 ❌: 25 trades in 19 days
#131 ❌: 9 trades in 8 days
#132 ✅: 29 trades in 28 days
#133 ❌: 21 trades in 19 days
#134 ✅: 37 trades in 24 days
#135 ❌: 7 trades in 1 days
#136 ❌: 22 trades in 5 days
#137 ❌: 36 trades in 4 days
#138 ✅: 21 trades in 21 days
#139 ❌: 19 trades in 1 days
#140 ❌: 9 trades in 1 days
#141 ✅: 59 trades in 32 days
#142 ❌: 17 trades in 1 days
#143 ✅: 13 trades in 12 days
#144 ❌: 15 trades in 10 days
#145 ✅: 39 trades in 19 days
#146 ✅: 11 trades in 11 days
#147 ✅: 17 trades in 14 days
#148 ❌: 23 trades in 14 days
#149 ✅: 39 trades in 11 days
#150 ❌: 15 trades in 1 days
#151 ✅: 11 trades in 11 days
#152 ❌: 34 trades in 21 days
#153 ❌: 14 trades in 8 days
#154 ❌: 5 trades in 1 days
#155 ❌: 43 trades in 1 days
#156 ❌: 7 trades in 1 days
#157 ✅: 23 trades in 11 days
#158 ❌: 9 trades in 8 days
#159 ✅: 17 trades in 13 days
#160 ❌: 20 trades in 3 days
#161 ❌: 29 trades in 6 days
#162 ✅: 12 trades in 11 days
#163 ❌: 9 trades in 1 days
#164 ✅: 17 trades in 13 days
#165 ❌: 11 trades in 5 days
#166 ✅: 15 trades in 14 days
#167 ❌: 20 trades in 16 days
#168 ❌: 17 trades in 5 days
#169 ❌: 15 trades in 6 days
#170 ✅: 11 trades in 11 days
#171 ❌: 29 trades in 26 days
#172 ❌: 12 trades in 6 days
#173 ❌: 11 trades in 1 days
#174 ❌: 13 trades in 9 days
#175 ❌: 12 trades in 8 days
#176 ✅: 15 trades in 15 days
#177 ❌: 27 trades in 8 days
#178 ❌: 33 trades in 19 days
#179 ❌: 32 trades in 18 days
#180 ✅: 55 trades in 31 days
#181 ❌: 9 trades in 1 days
#182 ✅: 12 trades in 11 days
#183 ❌: 21 trades in 1 days
#184 ✅: 47 trades in 32 days
#185 ✅: 11 trades in 11 days
#186 ❌: 11 trades in 4 days
#187 ✅: 25 trades in 14 days
#188 ❌: 9 trades in 5 days
#189 ✅: 14 trades in 11 days
#190 ❌: 7 trades in 4 days
#191 ❌: 11 trades in 5 days
#192 ❌: 12 trades in 8 days
#193 ❌: 35 trades in 10 days
#194 ❌: 17 trades in 1 days
#195 ✅: 13 trades in 12 days
#196 ✅: 11 trades in 11 days
#197 ❌: 33 trades in 25 days
#198 ❌: 9 trades in 4 days
#199 ✅: 23 trades in 19 days
#200 ✅: 17 trades in 14 days
#201 ✅: 35 trades in 19 days
#202 ❌: 15 trades in 1 days
#203 ❌: 7 trades in 4 days
#204 ❌: 13 trades in 5 days
#205 ❌: 5 trades in 1 days
#206 ❌: 7 trades in 1 days
#207 ❌: 11 trades in 9 days
#208 ❌: 24 trades in 2 days
#209 ✅: 15 trades in 14 days
#210 ❌: 12 trades in 6 days
#211 ✅: 35 trades in 11 days
#212 ✅: 13 trades in 11 days
#213 ✅: 21 trades in 13 days
#214 ❌: 11 trades in 1 days
#215 ❌: 25 trades in 8 days
#216 ✅: 25 trades in 14 days
#217 ❌: 18 trades in 4 days
#218 ✅: 11 trades in 11 days
#219 ✅: 22 trades in 11 days
#220 ❌: 16 trades in 4 days
#221 ❌: 13 trades in 4 days
#222 ❌: 8 trades in 2 days
#223 ❌: 15 trades in 1 days
#224 ✅: 21 trades in 13 days
#225 ✅: 15 trades in 13 days
#226 ❌: 25 trades in 1 days
#227 ❌: 45 trades in 25 days
#228 ✅: 41 trades in 13 days
#229 ❌: 7 trades in 1 days
#230 ❌: 9 trades in 1 days
#231 ❌: 26 trades in 20 days
#232 ❌: 12 trades in 7 days
#233 ❌: 11 trades in 1 days
#234 ❌: 22 trades in 13 days
#235 ❌: 25 trades in 1 days
#236 ❌: 22 trades in 15 days
#237 ❌: 23 trades in 16 days
#238 ❌: 7 trades in 1 days
#239 ❌: 10 trades in 2 days
#240 ✅: 11 trades in 11 days
#241 ✅: 16 trades in 11 days
#242 ✅: 11 trades in 11 days
#243 ✅: 23 trades in 23 days
#244 ❌: 14 trades in 7 days
#245 ✅: 30 trades in 11 days
#246 ❌: 18 trades in 13 days
#247 ❌: 17 trades in 15 days
#248 ❌: 9 trades in 1 days
#249 ❌: 28 trades in 13 days
#250 ✅: 15 trades in 12 days
#251 ❌: 8 trades in 2 days
#252 ✅: 31 trades in 12 days
#253 ❌: 16 trades in 12 days
#254 ✅: 29 trades in 18 days
#255 ❌: 7 trades in 1 days
#256 ❌: 37 trades in 22 days
#257 ❌: 18 trades in 3 days
#258 ❌: 59 trades in 8 days
#259 ✅: 15 trades in 11 days
#260 ❌: 13 trades in 1 days
#261 ❌: 25 trades in 15 days
#262 ❌: 14 trades in 4 days
#263 ❌: 29 trades in 15 days
#264 ❌: 22 trades in 9 days
#265 ❌: 9 trades in 4 days
#266 ✅: 31 trades in 24 days
#267 ✅: 11 trades in 11 days
#268 ❌: 18 trades in 12 days
#269 ❌: 12 trades in 10 days
#270 ✅: 17 trades in 17 days
#271 ❌: 33 trades in 11 days
#272 ✅: 12 trades in 11 days
#273 ❌: 32 trades in 22 days
#274 ❌: 24 trades in 7 days
#275 ✅: 27 trades in 12 days
#276 ❌: 26 trades in 6 days
#277 ❌: 43 trades in 1 days
#278 ❌: 12 trades in 2 days
#279 ❌: 17 trades in 15 days
#280 ❌: 12 trades in 8 days
#281 ❌: 45 trades in 30 days
#282 ❌: 13 trades in 1 days
#283 ✅: 11 trades in 11 days
#284 ✅: 15 trades in 11 days
#285 ✅: 21 trades in 18 days
#286 ❌: 29 trades in 1 days
#287 ❌: 21 trades in 8 days
#288 ✅: 21 trades in 18 days
#289 ✅: 16 trades in 11 days
#290 ❌: 10 trades in 2 days
#291 ❌: 9 trades in 1 days
#292 ❌: 14 trades in 3 days
#293 ✅: 11 trades in 11 days
#294 ✅: 13 trades in 13 days
#295 ✅: 12 trades in 11 days
#296 ✅: 15 trades in 15 days
#297 ❌: 9 trades in 1 days
#298 ❌: 11 trades in 6 days
#299 ✅: 33 trades in 19 days
#300 ❌: 51 trades in 21 days
#301 ❌: 5 trades in 1 days
#302 ❌: 9 trades in 1 days
#303 ✅: 11 trades in 11 days
#304 ❌: 10 trades in 2 days
#305 ❌: 12 trades in 2 days
#306 ✅: 19 trades in 15 days
#307 ❌: 16 trades in 3 days
#308 ❌: 20 trades in 2 days
#309 ✅: 13 trades in 12 days
#310 ❌: 18 trades in 2 days
#311 ❌: 9 trades in 4 days
#312 ✅: 29 trades in 12 days
#313 ❌: 23 trades in 1 days
#314 ✅: 21 trades in 17 days
#315 ✅: 11 trades in 11 days
#316 ❌: 13 trades in 1 days
#317 ❌: 15 trades in 1 days
#318 ✅: 11 trades in 11 days
#319 ❌: 13 trades in 1 days
#320 ❌: 22 trades in 14 days
#321 ✅: 21 trades in 20 days
#322 ❌: 31 trades in 1 days
#323 ✅: 23 trades in 13 days
#324 ❌: 16 trades in 6 days
#325 ✅: 27 trades in 15 days
#326 ✅: 15 trades in 13 days
#327 ❌: 13 trades in 1 days
#328 ❌: 5 trades in 1 days
#329 ✅: 29 trades in 29 days
#330 ❌: 7 trades in 1 days
#331 ❌: 25 trades in 15 days
#332 ❌: 12 trades in 12 days
#333 ❌: 10 trades in 7 days
#334 ❌: 16 trades in 3 days
#335 ❌: 47 trades in 35 days
#336 ❌: 7 trades in 1 days
#337 ❌: 10 trades in 6 days
#338 ✅: 15 trades in 12 days
#339 ✅: 21 trades in 20 days
#340 ✅: 13 trades in 13 days
#341 ✅: 49 trades in 37 days
#342 ❌: 13 trades in 11 days
#343 ❌: 13 trades in 5 days
#344 ✅: 25 trades in 24 days
#345 ❌: 11 trades in 1 days
#346 ✅: 26 trades in 11 days
#347 ✅: 12 trades in 11 days
#348 ❌: 11 trades in 1 days
#349 ❌: 14 trades in 10 days
#350 ✅: 11 trades in 11 days
#351 ❌: 9 trades in 1 days
#352 ❌: 18 trades in 2 days
#353 ❌: 7 trades in 1 days
#354 ✅: 23 trades in 11 days
#355 ✅: 13 trades in 11 days
#356 ✅: 15 trades in 13 days
#357 ✅: 27 trades in 22 days
#358 ❌: 8 trades in 2 days
#359 ✅: 31 trades in 22 days
#360 ✅: 15 trades in 13 days
#361 ✅: 33 trades in 22 days
#362 ✅: 11 trades in 11 days
#363 ❌: 15 trades in 14 days
#364 ✅: 39 trades in 12 days
#365 ✅: 31 trades in 16 days
#366 ❌: 21 trades in 19 days
#367 ❌: 53 trades in 1 days
#368 ✅: 21 trades in 12 days
#369 ✅: 13 trades in 12 days
#370 ❌: 32 trades in 28 days
#371 ✅: 15 trades in 13 days
#372 ❌: 22 trades in 16 days
#373 ❌: 7 trades in 1 days
#374 ❌: 10 trades in 3 days
#375 ❌: 11 trades in 5 days
#376 ❌: 19 trades in 1 days
#377 ❌: 26 trades in 17 days
#378 ✅: 47 trades in 29 days
#379 ✅: 11 trades in 11 days
#380 ❌: 9 trades in 1 days
#381 ❌: 6 trades in 2 days
#382 ❌: 5 trades in 1 days
#383 ❌: 32 trades in 22 days
#384 ✅: 19 trades in 15 days
#385 ❌: 57 trades in 49 days
#386 ❌: 13 trades in 12 days
#387 ✅: 23 trades in 12 days
#388 ✅: 29 trades in 20 days
#389 ❌: 15 trades in 6 days
#390 ✅: 43 trades in 35 days
#391 ❌: 24 trades in 12 days
#392 ❌: 31 trades in 12 days
#393 ❌: 28 trades in 24 days
#394 ✅: 35 trades in 16 days
#395 ❌: 12 trades in 2 days
#396 ✅: 11 trades in 11 days
#397 ✅: 25 trades in 17 days
#398 ❌: 9 trades in 1 days
#399 ❌: 12 trades in 2 days
#400 ✅: 39 trades in 24 days
#401 ❌: 17 trades in 7 days
#402 ❌: 12 trades in 5 days
#403 ❌: 11 trades in 1 days
#404 ✅: 23 trades in 14 days
#405 ✅: 27 trades in 21 days
#406 ❌: 31 trades in 15 days
#407 ❌: 5 trades in 1 days
#408 ✅: 11 trades in 11 days
#409 ❌: 38 trades in 7 days
#410 ❌: 22 trades in 4 days
#411 ❌: 16 trades in 2 days
#412 ✅: 45 trades in 35 days
#413 ❌: 13 trades in 1 days
#414 ❌: 21 trades in 9 days
#415 ❌: 7 trades in 1 days
#416 ✅: 19 trades in 17 days
#417 ❌: 14 trades in 2 days
#418 ❌: 17 trades in 6 days
#419 ❌: 7 trades in 1 days
#420 ✅: 45 trades in 28 days
#421 ❌: 9 trades in 4 days
#422 ❌: 24 trades in 11 days
#423 ❌: 29 trades in 14 days
#424 ❌: 9 trades in 1 days
#425 ❌: 10 trades in 3 days
#426 ❌: 5 trades in 1 days
#427 ✅: 17 trades in 11 days
#428 ❌: 5 trades in 1 days
#429 ✅: 19 trades in 19 days
#430 ❌: 5 trades in 1 days
#431 ❌: 9 trades in 1 days
#432 ✅: 39 trades in 38 days
#433 ❌: 16 trades in 2 days
#434 ✅: 73 trades in 32 days
#435 ❌: 18 trades in 17 days
#436 ❌: 17 trades in 16 days
#437 ❌: 37 trades in 16 days
#438 ❌: 21 trades in 1 days
#439 ❌: 19 trades in 1 days
#440 ✅: 15 trades in 13 days
#441 ❌: 11 trades in 1 days
#442 ✅: 21 trades in 16 days
#443 ❌: 28 trades in 3 days
#444 ✅: 13 trades in 11 days
#445 ❌: 24 trades in 15 days
#446 ❌: 11 trades in 1 days
#447 ❌: 27 trades in 1 days
#448 ❌: 23 trades in 22 days
#449 ❌: 19 trades in 1 days
#450 ✅: 12 trades in 11 days
#451 ✅: 13 trades in 13 days
#452 ❌: 5 trades in 1 days
#453 ❌: 25 trades in 14 days
#454 ✅: 37 trades in 35 days
#455 ✅: 15 trades in 14 days
#456 ❌: 9 trades in 6 days
#457 ❌: 18 trades in 2 days
#458 ✅: 17 trades in 11 days
#459 ❌: 23 trades in 19 days
#460 ❌: 14 trades in 2 days
#461 ✅: 31 trades in 12 days
#462 ❌: 16 trades in 3 days
#463 ✅: 27 trades in 20 days
#464 ✅: 25 trades in 22 days
#465 ✅: 19 trades in 19 days
#466 ❌: 7 trades in 1 days
#467 ❌: 16 trades in 13 days
#468 ❌: 19 trades in 14 days
#469 ❌: 15 trades in 1 days
#470 ✅: 29 trades in 20 days
#471 ❌: 10 trades in 7 days
#472 ✅: 27 trades in 11 days
#473 ❌: 18 trades in 9 days
#474 ✅: 23 trades in 21 days
#475 ✅: 11 trades in 11 days
#476 ❌: 34 trades in 20 days
#477 ❌: 5 trades in 1 days
#478 ❌: 12 trades in 6 days
#479 ❌: 14 trades in 10 days
#480 ✅: 17 trades in 13 days
#481 ✅: 27 trades in 26 days
#482 ✅: 19 trades in 11 days
#483 ✅: 11 trades in 11 days
#484 ✅: 31 trades in 27 days
#485 ✅: 35 trades in 13 days
#486 ❌: 15 trades in 14 days
#487 ❌: 17 trades in 8 days
#488 ❌: 9 trades in 1 days
#489 ✅: 11 trades in 11 days
#490 ❌: 15 trades in 6 days
#491 ✅: 75 trades in 40 days
#492 ✅: 14 trades in 11 days
#493 ❌: 11 trades in 8 days
#494 ❌: 50 trades in 3 days
#495 ❌: 49 trades in 18 days
#496 ✅: 11 trades in 11 days
#497 ❌: 25 trades in 14 days
#498 ❌: 15 trades in 10 days
#499 ✅: 11 trades in 11 days
#500 ✅: 21 trades in 15 days
#501 ✅: 12 trades in 11 days
#502 ✅: 31 trades in 13 days
#503 ✅: 25 trades in 18 days
#504 ✅: 11 trades in 11 days
#505 ❌: 14 trades in 2 days
#506 ❌: 19 trades in 16 days
#507 ❌: 11 trades in 6 days
#508 ❌: 20 trades in 3 days
#509 ✅: 11 trades in 11 days
#510 ❌: 25 trades in 6 days
#511 ❌: 10 trades in 2 days
#512 ❌: 23 trades in 6 days
#513 ✅: 11 trades in 11 days
#514 ✅: 37 trades in 21 days
#515 ❌: 15 trades in 9 days
#516 ✅: 11 trades in 11 days
#517 ❌: 5 trades in 1 days
#518 ❌: 40 trades in 3 days
#519 ✅: 19 trades in 16 days
#520 ❌: 29 trades in 9 days
#521 ❌: 13 trades in 1 days
#522 ✅: 11 trades in 11 days
#523 ❌: 5 trades in 1 days
#524 ✅: 11 trades in 11 days
#525 ❌: 18 trades in 3 days
#526 ✅: 25 trades in 17 days
#527 ❌: 22 trades in 13 days
#528 ❌: 7 trades in 1 days
#529 ❌: 41 trades in 9 days
#530 ✅: 12 trades in 11 days
#531 ✅: 13 trades in 11 days
#532 ❌: 16 trades in 16 days
#533 ✅: 23 trades in 17 days
#534 ❌: 8 trades in 3 days
#535 ❌: 14 trades in 11 days
#536 ✅: 12 trades in 11 days
#537 ❌: 17 trades in 15 days
#538 ✅: 11 trades in 11 days
#539 ❌: 29 trades in 13 days
#540 ✅: 25 trades in 17 days
#541 ✅: 27 trades in 20 days
#542 ❌: 9 trades in 1 days
#543 ❌: 9 trades in 1 days
#544 ❌: 7 trades in 1 days
#545 ✅: 19 trades in 12 days
#546 ✅: 11 trades in 11 days
#547 ✅: 11 trades in 11 days
#548 ✅: 17 trades in 14 days
#549 ❌: 20 trades in 13 days
#550 ✅: 21 trades in 18 days
#551 ✅: 31 trades in 12 days
#552 ✅: 23 trades in 19 days
#553 ✅: 24 trades in 11 days
#554 ✅: 12 trades in 11 days
#555 ✅: 15 trades in 12 days
#556 ✅: 11 trades in 11 days
#557 ❌: 25 trades in 7 days
#558 ❌: 42 trades in 23 days
#559 ❌: 9 trades in 8 days
#560 ❌: 22 trades in 5 days
#561 ✅: 25 trades in 20 days
#562 ✅: 23 trades in 16 days
#563 ❌: 33 trades in 26 days
#564 ❌: 17 trades in 1 days
#565 ✅: 25 trades in 11 days
#566 ✅: 27 trades in 26 days
#567 ❌: 13 trades in 8 days
#568 ❌: 24 trades in 13 days
#569 ✅: 21 trades in 17 days
#570 ❌: 9 trades in 1 days
#571 ✅: 45 trades in 20 days
#572 ✅: 11 trades in 11 days
#573 ❌: 7 trades in 1 days
#574 ❌: 15 trades in 1 days
#575 ❌: 52 trades in 22 days
#576 ❌: 20 trades in 15 days
#577 ❌: 6 trades in 2 days
#578 ✅: 12 trades in 11 days
#579 ✅: 49 trades in 38 days
#580 ❌: 14 trades in 3 days
#581 ❌: 7 trades in 1 days
#582 ✅: 35 trades in 31 days
#583 ❌: 19 trades in 16 days
#584 ✅: 17 trades in 12 days
#585 ❌: 10 trades in 3 days
#586 ❌: 12 trades in 10 days
#587 ❌: 9 trades in 1 days
#588 ❌: 9 trades in 8 days
#589 ✅: 15 trades in 15 days
#590 ✅: 19 trades in 18 days
#591 ❌: 11 trades in 10 days
#592 ❌: 13 trades in 4 days
#593 ✅: 19 trades in 12 days
#594 ✅: 23 trades in 19 days
#595 ✅: 18 trades in 11 days
#596 ✅: 21 trades in 18 days
#597 ✅: 35 trades in 24 days
#598 ✅: 17 trades in 15 days
#599 ❌: 11 trades in 1 days
#600 ✅: 11 trades in 11 days
#601 ✅: 21 trades in 15 days
#602 ❌: 30 trades in 2 days
#603 ✅: 13 trades in 11 days
#604 ✅: 27 trades in 15 days
#605 ❌: 6 trades in 2 days
#606 ❌: 11 trades in 1 days
#607 ❌: 9 trades in 1 days
#608 ✅: 31 trades in 26 days
#609 ❌: 18 trades in 18 days
#610 ✅: 24 trades in 11 days
#611 ✅: 13 trades in 11 days
#612 ❌: 11 trades in 10 days
#613 ✅: 11 trades in 11 days
#614 ❌: 29 trades in 9 days
#615 ✅: 23 trades in 18 days
#616 ❌: 10 trades in 10 days
#617 ❌: 5 trades in 1 days
#618 ❌: 9 trades in 6 days
#619 ❌: 28 trades in 20 days
#620 ❌: 27 trades in 7 days
#621 ❌: 31 trades in 7 days
#622 ✅: 19 trades in 19 days
#623 ✅: 19 trades in 19 days
#624 ✅: 11 trades in 11 days
#625 ❌: 72 trades in 39 days
#626 ✅: 11 trades in 11 days
#627 ✅: 11 trades in 11 days
#628 ❌: 15 trades in 15 days
#629 ❌: 7 trades in 1 days
#630 ✅: 21 trades in 12 days
#631 ✅: 23 trades in 21 days
#632 ❌: 23 trades in 1 days
#633 ✅: 13 trades in 11 days
#634 ❌: 23 trades in 11 days
#635 ❌: 25 trades in 11 days
#636 ❌: 17 trades in 7 days
#637 ❌: 10 trades in 2 days
#638 ❌: 16 trades in 3 days
#639 ❌: 16 trades in 12 days
#640 ✅: 17 trades in 15 days
#641 ❌: 14 trades in 3 days
#642 ✅: 43 trades in 37 days
#643 ❌: 12 trades in 2 days
#644 ✅: 20 trades in 11 days
#645 ✅: 27 trades in 14 days
#646 ✅: 17 trades in 12 days
#647 ✅: 47 trades in 20 days
#648 ❌: 23 trades in 6 days
#649 ❌: 16 trades in 7 days
#650 ❌: 8 trades in 2 days
#651 ✅: 13 trades in 11 days
#652 ❌: 10 trades in 8 days
#653 ✅: 13 trades in 12 days
#654 ❌: 5 trades in 1 days
#655 ✅: 35 trades in 30 days
#656 ✅: 17 trades in 17 days
#657 ✅: 17 trades in 16 days
#658 ❌: 20 trades in 3 days
#659 ✅: 17 trades in 13 days
#660 ✅: 17 trades in 11 days
#661 ❌: 21 trades in 20 days
#662 ❌: 7 trades in 1 days
#663 ✅: 11 trades in 11 days
#664 ❌: 19 trades in 15 days
#665 ❌: 12 trades in 10 days
#666 ❌: 9 trades in 8 days
#667 ✅: 15 trades in 15 days
#668 ✅: 15 trades in 13 days
#669 ❌: 10 trades in 6 days
#670 ❌: 23 trades in 1 days
#671 ✅: 12 trades in 11 days
#672 ✅: 19 trades in 19 days
#673 ❌: 9 trades in 6 days
#674 ❌: 10 trades in 3 days
#675 ❌: 20 trades in 15 days
#676 ❌: 5 trades in 1 days
#677 ❌: 19 trades in 6 days
#678 ✅: 59 trades in 38 days
#679 ❌: 26 trades in 17 days
#680 ❌: 19 trades in 4 days
#681 ❌: 14 trades in 14 days
#682 ✅: 15 trades in 14 days
#683 ❌: 23 trades in 18 days
#684 ❌: 20 trades in 2 days
#685 ✅: 35 trades in 24 days
#686 ❌: 7 trades in 1 days
#687 ❌: 23 trades in 10 days
#688 ❌: 34 trades in 17 days
#689 ❌: 9 trades in 5 days
#690 ✅: 21 trades in 17 days
#691 ✅: 20 trades in 11 days
#692 ❌: 21 trades in 19 days
#693 ❌: 9 trades in 1 days
#694 ✅: 18 trades in 11 days
#695 ❌: 7 trades in 1 days
#696 ❌: 12 trades in 3 days
#697 ❌: 12 trades in 6 days
#698 ❌: 7 trades in 1 days
#699 ✅: 11 trades in 11 days
#700 ❌: 12 trades in 2 days
#701 ✅: 13 trades in 13 days
#702 ❌: 15 trades in 1 days
#703 ❌: 7 trades in 1 days
#704 ❌: 15 trades in 15 days
#705 ✅: 41 trades in 17 days
#706 ❌: 15 trades in 4 days
#707 ❌: 6 trades in 2 days
#708 ❌: 24 trades in 3 days
#709 ❌: 7 trades in 1 days
#710 ❌: 7 trades in 1 days
#711 ✅: 19 trades in 11 days
#712 ✅: 29 trades in 15 days
#713 ❌: 8 trades in 2 days
#714 ✅: 55 trades in 54 days
#715 ❌: 35 trades in 8 days
#716 ❌: 10 trades in 7 days
#717 ✅: 33 trades in 18 days
#718 ❌: 6 trades in 2 days
#719 ❌: 14 trades in 2 days
#720 ✅: 33 trades in 12 days
#721 ✅: 37 trades in 16 days
#722 ❌: 47 trades in 40 days
#723 ✅: 57 trades in 20 days
#724 ❌: 9 trades in 1 days
#725 ❌: 7 trades in 1 days
#726 ✅: 13 trades in 12 days
#727 ❌: 8 trades in 2 days
#728 ❌: 12 trades in 3 days
#729 ❌: 14 trades in 7 days
#730 ✅: 19 trades in 13 days
#731 ❌: 26 trades in 6 days
#732 ✅: 29 trades in 14 days
#733 ❌: 25 trades in 15 days
#734 ✅: 29 trades in 22 days
#735 ❌: 17 trades in 1 days
#736 ✅: 13 trades in 12 days
#737 ❌: 23 trades in 22 days
#738 ❌: 10 trades in 2 days
#739 ❌: 9 trades in 1 days
#740 ❌: 11 trades in 4 days
#741 ✅: 23 trades in 21 days
#742 ✅: 17 trades in 15 days
#743 ✅: 15 trades in 14 days
#744 ❌: 14 trades in 2 days
#745 ✅: 15 trades in 13 days
#746 ✅: 25 trades in 13 days
#747 ❌: 32 trades in 16 days
#748 ✅: 13 trades in 11 days
#749 ✅: 11 trades in 11 days
#750 ✅: 41 trades in 29 days
#751 ✅: 11 trades in 11 days
#752 ❌: 15 trades in 1 days
#753 ✅: 21 trades in 20 days
#754 ❌: 11 trades in 1 days
#755 ❌: 19 trades in 5 days
#756 ❌: 9 trades in 5 days
#757 ❌: 24 trades in 10 days
#758 ✅: 12 trades in 11 days
#759 ❌: 13 trades in 11 days
#760 ❌: 18 trades in 2 days
#761 ❌: 13 trades in 4 days
#762 ❌: 27 trades in 1 days
#763 ❌: 10 trades in 2 days
#764 ❌: 8 trades in 2 days
#765 ✅: 11 trades in 11 days
#766 ✅: 11 trades in 11 days
#767 ❌: 27 trades in 20 days
#768 ❌: 7 trades in 1 days
#769 ✅: 20 trades in 11 days
#770 ✅: 27 trades in 13 days
#771 ❌: 13 trades in 4 days
#772 ✅: 11 trades in 11 days
#773 ❌: 7 trades in 1 days
#774 ✅: 17 trades in 17 days
#775 ✅: 37 trades in 24 days
#776 ❌: 26 trades in 2 days
#777 ❌: 8 trades in 2 days
#778 ✅: 17 trades in 13 days
#779 ❌: 22 trades in 19 days
#780 ❌: 7 trades in 1 days
#781 ❌: 7 trades in 1 days
#782 ❌: 22 trades in 16 days
#783 ❌: 15 trades in 13 days
#784 ✅: 18 trades in 11 days
#785 ❌: 59 trades in 43 days
#786 ✅: 11 trades in 11 days
#787 ✅: 16 trades in 11 days
#788 ❌: 14 trades in 2 days
#789 ❌: 23 trades in 10 days
#790 ✅: 13 trades in 13 days
#791 ❌: 9 trades in 1 days
#792 ✅: 15 trades in 13 days
#793 ✅: 15 trades in 15 days
#794 ✅: 27 trades in 21 days
#795 ❌: 12 trades in 10 days
#796 ❌: 11 trades in 5 days
#797 ❌: 16 trades in 16 days
#798 ❌: 6 trades in 2 days
#799 ✅: 11 trades in 11 days
#800 ✅: 11 trades in 11 days
#801 ❌: 18 trades in 11 days
#802 ✅: 15 trades in 13 days
#803 ❌: 36 trades in 20 days
#804 ❌: 29 trades in 1 days
#805 ✅: 23 trades in 15 days
#806 ❌: 12 trades in 3 days
#807 ✅: 25 trades in 16 days
#808 ❌: 22 trades in 10 days
#809 ❌: 17 trades in 6 days
#810 ✅: 43 trades in 36 days
#811 ✅: 23 trades in 15 days
#812 ✅: 41 trades in 11 days
#813 ❌: 24 trades in 19 days
#814 ❌: 18 trades in 10 days
#815 ✅: 13 trades in 13 days
#816 ❌: 34 trades in 14 days
#817 ❌: 16 trades in 14 days
#818 ✅: 16 trades in 11 days
#819 ✅: 27 trades in 14 days
#820 ❌: 9 trades in 1 days
#821 ❌: 7 trades in 1 days
#822 ❌: 20 trades in 3 days
#823 ✅: 16 trades in 11 days
#824 ❌: 27 trades in 12 days
#825 ❌: 11 trades in 1 days
#826 ❌: 21 trades in 19 days
#827 ❌: 9 trades in 1 days
#828 ❌: 33 trades in 10 days
#829 ❌: 15 trades in 1 days
#830 ❌: 11 trades in 10 days
#831 ❌: 11 trades in 1 days
#832 ✅: 25 trades in 25 days
#833 ❌: 40 trades in 8 days
#834 ❌: 9 trades in 1 days
#835 ❌: 10 trades in 2 days
#836 ❌: 26 trades in 5 days
#837 ❌: 27 trades in 20 days
#838 ❌: 7 trades in 1 days
#839 ❌: 55 trades in 28 days
#840 ❌: 17 trades in 15 days
#841 ❌: 5 trades in 1 days
#842 ✅: 11 trades in 11 days
#843 ❌: 6 trades in 2 days
#844 ❌: 16 trades in 11 days
#845 ❌: 21 trades in 6 days
#846 ❌: 5 trades in 1 days
#847 ❌: 27 trades in 1 days
#848 ✅: 19 trades in 16 days
#849 ❌: 7 trades in 1 days
#850 ✅: 11 trades in 11 days
#851 ❌: 6 trades in 2 days
#852 ❌: 12 trades in 2 days
#853 ❌: 13 trades in 10 days
#854 ✅: 23 trades in 21 days
#855 ❌: 11 trades in 1 days
#856 ❌: 19 trades in 12 days
#857 ❌: 6 trades in 2 days
#858 ❌: 5 trades in 1 days
#859 ❌: 21 trades in 1 days
#860 ❌: 13 trades in 1 days
#861 ✅: 13 trades in 11 days
#862 ✅: 15 trades in 14 days
#863 ✅: 19 trades in 14 days
#864 ✅: 19 trades in 14 days
#865 ❌: 17 trades in 1 days
#866 ✅: 22 trades in 11 days
#867 ❌: 7 trades in 1 days
#868 ❌: 20 trades in 20 days
#869 ✅: 23 trades in 11 days
#870 ❌: 45 trades in 26 days
#871 ✅: 23 trades in 14 days
#872 ❌: 7 trades in 1 days
#873 ❌: 11 trades in 4 days
#874 ❌: 22 trades in 8 days
#875 ❌: 11 trades in 10 days
#876 ✅: 16 trades in 11 days
#877 ❌: 33 trades in 23 days
#878 ❌: 43 trades in 35 days
#879 ❌: 23 trades in 12 days
#880 ❌: 15 trades in 13 days
#881 ❌: 34 trades in 3 days
#882 ❌: 6 trades in 2 days
#883 ❌: 18 trades in 2 days
#884 ❌: 11 trades in 1 days
#885 ❌: 12 trades in 3 days
#886 ❌: 41 trades in 14 days
#887 ❌: 13 trades in 1 days
#888 ❌: 29 trades in 18 days
#889 ✅: 23 trades in 17 days
#890 ✅: 25 trades in 12 days
#891 ❌: 11 trades in 1 days
#892 ❌: 26 trades in 26 days
#893 ❌: 19 trades in 15 days
#894 ✅: 11 trades in 11 days
#895 ❌: 6 trades in 2 days
#896 ✅: 31 trades in 16 days
#897 ❌: 17 trades in 12 days
#898 ❌: 14 trades in 6 days
#899 ❌: 16 trades in 10 days
#900 ❌: 7 trades in 1 days
#901 ❌: 5 trades in 1 days
#902 ✅: 37 trades in 24 days
#903 ❌: 9 trades in 1 days
#904 ❌: 7 trades in 1 days
#905 ❌: 15 trades in 1 days
#906 ❌: 7 trades in 4 days
#907 ❌: 11 trades in 1 days
#908 ✅: 13 trades in 13 days
#909 ❌: 21 trades in 1 days
#910 ❌: 16 trades in 2 days
#911 ❌: 5 trades in 1 days
#912 ✅: 27 trades in 16 days
#913 ✅: 13 trades in 11 days
#914 ❌: 21 trades in 20 days
#915 ❌: 10 trades in 6 days
#916 ✅: 19 trades in 16 days
#917 ❌: 23 trades in 7 days
#918 ❌: 23 trades in 13 days
#919 ✅: 21 trades in 17 days
#920 ✅: 11 trades in 11 days
#921 ❌: 13 trades in 9 days
#922 ❌: 16 trades in 8 days
#923 ❌: 15 trades in 1 days
#924 ❌: 45 trades in 24 days
#925 ❌: 33 trades in 31 days
#926 ❌: 20 trades in 9 days
#927 ❌: 29 trades in 1 days
#928 ✅: 13 trades in 12 days
#929 ✅: 19 trades in 15 days
#930 ❌: 20 trades in 2 days
#931 ✅: 17 trades in 11 days
#932 ❌: 31 trades in 25 days
#933 ✅: 11 trades in 11 days
#934 ❌: 31 trades in 26 days
#935 ✅: 21 trades in 19 days
#936 ✅: 22 trades in 11 days
#937 ✅: 11 trades in 11 days
#938 ✅: 11 trades in 11 days
#939 ✅: 21 trades in 21 days
#940 ✅: 22 trades in 11 days
#941 ❌: 15 trades in 5 days
#942 ❌: 7 trades in 4 days
#943 ❌: 5 trades in 1 days
#944 ❌: 9 trades in 1 days
#945 ❌: 25 trades in 23 days
#946 ❌: 7 trades in 1 days
#947 ❌: 25 trades in 10 days
#948 ✅: 13 trades in 12 days
#949 ❌: 11 trades in 1 days
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
