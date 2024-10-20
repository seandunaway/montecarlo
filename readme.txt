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
#1 ❌: 28 trades in 9 days
#2 ❌: 18 trades in 13 days
#3 ❌: 18 trades in 4 days
#4 ❌: 9 trades in 1 days
#5 ❌: 18 trades in 4 days
#6 ❌: 16 trades in 2 days
#7 ✅: 59 trades in 21 days
#8 ❌: 18 trades in 13 days
#9 ❌: 9 trades in 5 days
#10 ✅: 17 trades in 14 days
#11 ✅: 39 trades in 12 days
#12 ❌: 31 trades in 18 days
#13 ❌: 14 trades in 6 days
#14 ✅: 27 trades in 18 days
#15 ❌: 15 trades in 5 days
#16 ❌: 23 trades in 9 days
#17 ❌: 12 trades in 10 days
#18 ❌: 11 trades in 1 days
#19 ❌: 15 trades in 5 days
#20 ❌: 19 trades in 6 days
#21 ❌: 9 trades in 1 days
#22 ✅: 77 trades in 51 days
#23 ❌: 21 trades in 10 days
#24 ❌: 12 trades in 3 days
#25 ❌: 13 trades in 6 days
#26 ❌: 9 trades in 1 days
#27 ❌: 9 trades in 4 days
#28 ❌: 8 trades in 3 days
#29 ✅: 21 trades in 11 days
#30 ❌: 9 trades in 5 days
#31 ✅: 39 trades in 17 days
#32 ❌: 22 trades in 3 days
#33 ✅: 21 trades in 14 days
#34 ❌: 17 trades in 5 days
#35 ❌: 10 trades in 2 days
#36 ✅: 15 trades in 11 days
#37 ❌: 11 trades in 1 days
#38 ❌: 7 trades in 1 days
#39 ❌: 41 trades in 15 days
#40 ✅: 55 trades in 39 days
#41 ✅: 23 trades in 17 days
#42 ❌: 16 trades in 15 days
#43 ✅: 13 trades in 12 days
#44 ❌: 11 trades in 10 days
#45 ❌: 25 trades in 7 days
#46 ❌: 11 trades in 1 days
#47 ✅: 13 trades in 13 days
#48 ✅: 29 trades in 22 days
#49 ❌: 19 trades in 6 days
#50 ✅: 11 trades in 11 days
#51 ❌: 10 trades in 3 days
#52 ❌: 28 trades in 15 days
#53 ✅: 12 trades in 11 days
#54 ❌: 20 trades in 2 days
#55 ✅: 13 trades in 11 days
#56 ✅: 11 trades in 11 days
#57 ❌: 28 trades in 15 days
#58 ✅: 19 trades in 19 days
#59 ✅: 11 trades in 11 days
#60 ✅: 13 trades in 11 days
#61 ❌: 6 trades in 2 days
#62 ❌: 12 trades in 9 days
#63 ✅: 13 trades in 13 days
#64 ❌: 17 trades in 1 days
#65 ✅: 16 trades in 11 days
#66 ❌: 17 trades in 1 days
#67 ❌: 26 trades in 10 days
#68 ✅: 11 trades in 11 days
#69 ❌: 17 trades in 1 days
#70 ❌: 8 trades in 6 days
#71 ❌: 12 trades in 3 days
#72 ✅: 37 trades in 13 days
#73 ❌: 27 trades in 14 days
#74 ❌: 11 trades in 5 days
#75 ❌: 26 trades in 17 days
#76 ✅: 23 trades in 13 days
#77 ✅: 11 trades in 11 days
#78 ✅: 15 trades in 13 days
#79 ❌: 19 trades in 15 days
#80 ✅: 21 trades in 18 days
#81 ✅: 25 trades in 11 days
#82 ❌: 27 trades in 15 days
#83 ❌: 5 trades in 1 days
#84 ✅: 27 trades in 11 days
#85 ✅: 11 trades in 11 days
#86 ✅: 17 trades in 17 days
#87 ❌: 32 trades in 4 days
#88 ❌: 15 trades in 1 days
#89 ✅: 21 trades in 16 days
#90 ✅: 13 trades in 11 days
#91 ✅: 19 trades in 19 days
#92 ✅: 11 trades in 11 days
#93 ✅: 11 trades in 11 days
#94 ❌: 17 trades in 1 days
#95 ✅: 25 trades in 20 days
#96 ❌: 37 trades in 31 days
#97 ✅: 14 trades in 11 days
#98 ✅: 29 trades in 19 days
#99 ❌: 11 trades in 5 days
#100 ❌: 13 trades in 1 days
#101 ❌: 20 trades in 9 days
#102 ❌: 18 trades in 14 days
#103 ✅: 11 trades in 11 days
#104 ✅: 27 trades in 25 days
#105 ✅: 12 trades in 11 days
#106 ❌: 11 trades in 1 days
#107 ✅: 17 trades in 14 days
#108 ❌: 12 trades in 6 days
#109 ❌: 11 trades in 1 days
#110 ❌: 12 trades in 2 days
#111 ✅: 15 trades in 13 days
#112 ❌: 18 trades in 7 days
#113 ✅: 11 trades in 11 days
#114 ✅: 29 trades in 16 days
#115 ✅: 19 trades in 19 days
#116 ❌: 5 trades in 1 days
#117 ✅: 25 trades in 21 days
#118 ✅: 25 trades in 15 days
#119 ❌: 7 trades in 1 days
#120 ✅: 11 trades in 11 days
#121 ✅: 13 trades in 11 days
#122 ❌: 14 trades in 2 days
#123 ❌: 27 trades in 8 days
#124 ✅: 27 trades in 19 days
#125 ❌: 6 trades in 2 days
#126 ✅: 19 trades in 19 days
#127 ❌: 9 trades in 1 days
#128 ❌: 15 trades in 15 days
#129 ✅: 21 trades in 20 days
#130 ✅: 14 trades in 11 days
#131 ❌: 20 trades in 2 days
#132 ✅: 13 trades in 11 days
#133 ✅: 15 trades in 11 days
#134 ❌: 20 trades in 15 days
#135 ❌: 15 trades in 1 days
#136 ❌: 15 trades in 1 days
#137 ❌: 5 trades in 1 days
#138 ❌: 11 trades in 6 days
#139 ❌: 7 trades in 1 days
#140 ✅: 23 trades in 11 days
#141 ❌: 8 trades in 2 days
#142 ✅: 23 trades in 15 days
#143 ❌: 5 trades in 1 days
#144 ❌: 9 trades in 8 days
#145 ❌: 25 trades in 16 days
#146 ❌: 24 trades in 4 days
#147 ✅: 29 trades in 25 days
#148 ❌: 10 trades in 8 days
#149 ✅: 15 trades in 12 days
#150 ✅: 13 trades in 13 days
#151 ❌: 12 trades in 3 days
#152 ❌: 11 trades in 7 days
#153 ❌: 7 trades in 1 days
#154 ✅: 31 trades in 13 days
#155 ❌: 31 trades in 11 days
#156 ❌: 10 trades in 2 days
#157 ✅: 47 trades in 23 days
#158 ❌: 39 trades in 34 days
#159 ❌: 8 trades in 2 days
#160 ✅: 71 trades in 18 days
#161 ❌: 22 trades in 17 days
#162 ❌: 5 trades in 1 days
#163 ❌: 6 trades in 2 days
#164 ✅: 21 trades in 18 days
#165 ✅: 15 trades in 14 days
#166 ❌: 8 trades in 2 days
#167 ❌: 22 trades in 17 days
#168 ❌: 16 trades in 2 days
#169 ✅: 23 trades in 12 days
#170 ✅: 11 trades in 11 days
#171 ❌: 11 trades in 10 days
#172 ❌: 21 trades in 7 days
#173 ❌: 9 trades in 1 days
#174 ❌: 42 trades in 12 days
#175 ❌: 11 trades in 1 days
#176 ❌: 24 trades in 5 days
#177 ❌: 20 trades in 4 days
#178 ❌: 20 trades in 3 days
#179 ❌: 18 trades in 3 days
#180 ✅: 21 trades in 11 days
#181 ✅: 11 trades in 11 days
#182 ✅: 39 trades in 38 days
#183 ✅: 11 trades in 11 days
#184 ✅: 23 trades in 20 days
#185 ❌: 7 trades in 1 days
#186 ❌: 15 trades in 5 days
#187 ✅: 11 trades in 11 days
#188 ❌: 18 trades in 4 days
#189 ❌: 16 trades in 2 days
#190 ❌: 27 trades in 1 days
#191 ❌: 15 trades in 13 days
#192 ❌: 21 trades in 1 days
#193 ❌: 16 trades in 16 days
#194 ✅: 23 trades in 14 days
#195 ❌: 5 trades in 1 days
#196 ❌: 14 trades in 2 days
#197 ✅: 13 trades in 11 days
#198 ❌: 11 trades in 11 days
#199 ❌: 17 trades in 13 days
#200 ✅: 11 trades in 11 days
#201 ❌: 9 trades in 1 days
#202 ✅: 12 trades in 11 days
#203 ❌: 48 trades in 19 days
#204 ❌: 7 trades in 1 days
#205 ✅: 25 trades in 18 days
#206 ❌: 11 trades in 1 days
#207 ✅: 13 trades in 11 days
#208 ✅: 11 trades in 11 days
#209 ❌: 8 trades in 2 days
#210 ❌: 14 trades in 2 days
#211 ❌: 12 trades in 7 days
#212 ✅: 15 trades in 13 days
#213 ❌: 16 trades in 2 days
#214 ✅: 19 trades in 19 days
#215 ✅: 12 trades in 11 days
#216 ✅: 15 trades in 15 days
#217 ❌: 20 trades in 13 days
#218 ❌: 18 trades in 16 days
#219 ✅: 19 trades in 12 days
#220 ✅: 15 trades in 12 days
#221 ✅: 15 trades in 15 days
#222 ✅: 15 trades in 14 days
#223 ❌: 28 trades in 3 days
#224 ❌: 9 trades in 4 days
#225 ❌: 62 trades in 39 days
#226 ✅: 23 trades in 20 days
#227 ❌: 11 trades in 1 days
#228 ✅: 11 trades in 11 days
#229 ❌: 28 trades in 22 days
#230 ❌: 7 trades in 1 days
#231 ❌: 11 trades in 5 days
#232 ❌: 31 trades in 27 days
#233 ❌: 22 trades in 14 days
#234 ❌: 11 trades in 5 days
#235 ❌: 12 trades in 3 days
#236 ❌: 34 trades in 18 days
#237 ❌: 44 trades in 3 days
#238 ❌: 17 trades in 15 days
#239 ❌: 27 trades in 5 days
#240 ✅: 21 trades in 20 days
#241 ✅: 11 trades in 11 days
#242 ❌: 6 trades in 2 days
#243 ✅: 13 trades in 12 days
#244 ✅: 13 trades in 12 days
#245 ❌: 20 trades in 4 days
#246 ❌: 53 trades in 11 days
#247 ✅: 15 trades in 15 days
#248 ✅: 11 trades in 11 days
#249 ✅: 12 trades in 11 days
#250 ❌: 14 trades in 9 days
#251 ✅: 11 trades in 11 days
#252 ❌: 20 trades in 10 days
#253 ❌: 17 trades in 10 days
#254 ✅: 19 trades in 11 days
#255 ✅: 13 trades in 11 days
#256 ❌: 20 trades in 16 days
#257 ❌: 14 trades in 3 days
#258 ❌: 18 trades in 13 days
#259 ✅: 20 trades in 11 days
#260 ❌: 24 trades in 14 days
#261 ❌: 11 trades in 6 days
#262 ✅: 13 trades in 12 days
#263 ❌: 12 trades in 8 days
#264 ✅: 23 trades in 19 days
#265 ❌: 11 trades in 1 days
#266 ✅: 27 trades in 24 days
#267 ✅: 11 trades in 11 days
#268 ❌: 32 trades in 3 days
#269 ❌: 9 trades in 1 days
#270 ✅: 16 trades in 11 days
#271 ❌: 39 trades in 13 days
#272 ❌: 15 trades in 1 days
#273 ❌: 5 trades in 1 days
#274 ❌: 6 trades in 2 days
#275 ❌: 20 trades in 12 days
#276 ❌: 33 trades in 19 days
#277 ❌: 19 trades in 1 days
#278 ❌: 40 trades in 35 days
#279 ✅: 23 trades in 23 days
#280 ❌: 11 trades in 1 days
#281 ❌: 15 trades in 4 days
#282 ✅: 27 trades in 12 days
#283 ❌: 14 trades in 13 days
#284 ❌: 59 trades in 11 days
#285 ❌: 17 trades in 1 days
#286 ❌: 22 trades in 14 days
#287 ❌: 12 trades in 2 days
#288 ✅: 27 trades in 26 days
#289 ❌: 20 trades in 4 days
#290 ❌: 12 trades in 2 days
#291 ❌: 9 trades in 1 days
#292 ✅: 29 trades in 14 days
#293 ❌: 15 trades in 5 days
#294 ❌: 22 trades in 22 days
#295 ❌: 30 trades in 12 days
#296 ❌: 12 trades in 6 days
#297 ✅: 11 trades in 11 days
#298 ❌: 17 trades in 17 days
#299 ✅: 11 trades in 11 days
#300 ✅: 11 trades in 11 days
#301 ✅: 11 trades in 11 days
#302 ✅: 15 trades in 11 days
#303 ✅: 47 trades in 23 days
#304 ✅: 21 trades in 15 days
#305 ✅: 13 trades in 11 days
#306 ✅: 15 trades in 13 days
#307 ✅: 19 trades in 12 days
#308 ❌: 9 trades in 5 days
#309 ❌: 16 trades in 6 days
#310 ❌: 15 trades in 1 days
#311 ❌: 17 trades in 14 days
#312 ❌: 10 trades in 3 days
#313 ❌: 5 trades in 1 days
#314 ❌: 5 trades in 1 days
#315 ❌: 6 trades in 2 days
#316 ❌: 30 trades in 2 days
#317 ❌: 18 trades in 4 days
#318 ❌: 13 trades in 6 days
#319 ❌: 10 trades in 3 days
#320 ❌: 15 trades in 14 days
#321 ❌: 14 trades in 2 days
#322 ❌: 25 trades in 13 days
#323 ❌: 20 trades in 15 days
#324 ✅: 13 trades in 11 days
#325 ✅: 13 trades in 11 days
#326 ❌: 17 trades in 16 days
#327 ❌: 7 trades in 1 days
#328 ✅: 31 trades in 11 days
#329 ❌: 20 trades in 15 days
#330 ❌: 16 trades in 2 days
#331 ❌: 36 trades in 20 days
#332 ❌: 11 trades in 1 days
#333 ✅: 31 trades in 20 days
#334 ✅: 12 trades in 11 days
#335 ❌: 25 trades in 1 days
#336 ✅: 11 trades in 11 days
#337 ❌: 17 trades in 1 days
#338 ❌: 19 trades in 7 days
#339 ❌: 33 trades in 29 days
#340 ❌: 13 trades in 12 days
#341 ✅: 13 trades in 11 days
#342 ❌: 16 trades in 4 days
#343 ❌: 33 trades in 25 days
#344 ❌: 10 trades in 2 days
#345 ✅: 15 trades in 13 days
#346 ❌: 25 trades in 1 days
#347 ❌: 15 trades in 1 days
#348 ❌: 6 trades in 2 days
#349 ❌: 5 trades in 1 days
#350 ✅: 11 trades in 11 days
#351 ❌: 5 trades in 1 days
#352 ✅: 13 trades in 11 days
#353 ✅: 35 trades in 34 days
#354 ❌: 8 trades in 2 days
#355 ✅: 23 trades in 23 days
#356 ❌: 36 trades in 6 days
#357 ❌: 14 trades in 2 days
#358 ❌: 25 trades in 20 days
#359 ❌: 8 trades in 3 days
#360 ❌: 14 trades in 4 days
#361 ✅: 13 trades in 12 days
#362 ❌: 20 trades in 2 days
#363 ❌: 10 trades in 2 days
#364 ❌: 11 trades in 10 days
#365 ❌: 5 trades in 1 days
#366 ✅: 12 trades in 11 days
#367 ❌: 5 trades in 1 days
#368 ❌: 25 trades in 9 days
#369 ✅: 11 trades in 11 days
#370 ❌: 21 trades in 20 days
#371 ❌: 31 trades in 25 days
#372 ❌: 9 trades in 4 days
#373 ✅: 15 trades in 11 days
#374 ❌: 16 trades in 8 days
#375 ❌: 19 trades in 9 days
#376 ❌: 7 trades in 1 days
#377 ❌: 19 trades in 15 days
#378 ❌: 23 trades in 15 days
#379 ✅: 11 trades in 11 days
#380 ✅: 16 trades in 11 days
#381 ❌: 14 trades in 10 days
#382 ❌: 20 trades in 15 days
#383 ✅: 12 trades in 11 days
#384 ❌: 10 trades in 2 days
#385 ✅: 13 trades in 11 days
#386 ❌: 9 trades in 1 days
#387 ❌: 25 trades in 18 days
#388 ❌: 7 trades in 1 days
#389 ❌: 10 trades in 6 days
#390 ✅: 21 trades in 21 days
#391 ❌: 34 trades in 15 days
#392 ❌: 9 trades in 1 days
#393 ❌: 18 trades in 13 days
#394 ✅: 59 trades in 19 days
#395 ✅: 11 trades in 11 days
#396 ❌: 23 trades in 16 days
#397 ✅: 11 trades in 11 days
#398 ✅: 11 trades in 11 days
#399 ❌: 22 trades in 13 days
#400 ✅: 47 trades in 26 days
#401 ❌: 37 trades in 34 days
#402 ❌: 19 trades in 16 days
#403 ❌: 19 trades in 1 days
#404 ✅: 11 trades in 11 days
#405 ❌: 9 trades in 4 days
#406 ❌: 13 trades in 1 days
#407 ✅: 35 trades in 15 days
#408 ❌: 28 trades in 14 days
#409 ✅: 39 trades in 33 days
#410 ✅: 33 trades in 20 days
#411 ❌: 7 trades in 4 days
#412 ✅: 13 trades in 12 days
#413 ❌: 30 trades in 17 days
#414 ✅: 11 trades in 11 days
#415 ✅: 41 trades in 22 days
#416 ❌: 9 trades in 1 days
#417 ❌: 23 trades in 8 days
#418 ❌: 30 trades in 4 days
#419 ❌: 12 trades in 8 days
#420 ❌: 17 trades in 5 days
#421 ❌: 11 trades in 1 days
#422 ✅: 11 trades in 11 days
#423 ❌: 11 trades in 1 days
#424 ❌: 35 trades in 32 days
#425 ❌: 26 trades in 2 days
#426 ❌: 15 trades in 1 days
#427 ✅: 15 trades in 15 days
#428 ❌: 22 trades in 7 days
#429 ✅: 13 trades in 13 days
#430 ❌: 40 trades in 12 days
#431 ❌: 45 trades in 37 days
#432 ❌: 32 trades in 11 days
#433 ✅: 11 trades in 11 days
#434 ❌: 21 trades in 11 days
#435 ❌: 18 trades in 8 days
#436 ✅: 41 trades in 11 days
#437 ❌: 12 trades in 9 days
#438 ✅: 16 trades in 11 days
#439 ✅: 33 trades in 23 days
#440 ❌: 23 trades in 15 days
#441 ❌: 8 trades in 2 days
#442 ❌: 9 trades in 4 days
#443 ✅: 33 trades in 28 days
#444 ❌: 10 trades in 3 days
#445 ❌: 32 trades in 17 days
#446 ✅: 17 trades in 15 days
#447 ❌: 16 trades in 3 days
#448 ✅: 29 trades in 20 days
#449 ✅: 11 trades in 11 days
#450 ❌: 8 trades in 2 days
#451 ❌: 12 trades in 9 days
#452 ✅: 25 trades in 11 days
#453 ✅: 11 trades in 11 days
#454 ✅: 13 trades in 11 days
#455 ✅: 13 trades in 11 days
#456 ❌: 6 trades in 2 days
#457 ✅: 11 trades in 11 days
#458 ✅: 11 trades in 11 days
#459 ❌: 8 trades in 3 days
#460 ❌: 23 trades in 22 days
#461 ❌: 37 trades in 10 days
#462 ❌: 22 trades in 9 days
#463 ❌: 21 trades in 1 days
#464 ❌: 8 trades in 2 days
#465 ✅: 13 trades in 12 days
#466 ❌: 10 trades in 8 days
#467 ❌: 30 trades in 19 days
#468 ❌: 5 trades in 1 days
#469 ✅: 15 trades in 13 days
#470 ❌: 27 trades in 1 days
#471 ❌: 24 trades in 11 days
#472 ❌: 16 trades in 2 days
#473 ✅: 27 trades in 24 days
#474 ✅: 13 trades in 11 days
#475 ✅: 15 trades in 13 days
#476 ✅: 29 trades in 17 days
#477 ❌: 7 trades in 1 days
#478 ❌: 23 trades in 13 days
#479 ❌: 16 trades in 3 days
#480 ✅: 13 trades in 12 days
#481 ❌: 17 trades in 17 days
#482 ❌: 18 trades in 11 days
#483 ✅: 13 trades in 11 days
#484 ❌: 12 trades in 9 days
#485 ❌: 25 trades in 11 days
#486 ❌: 26 trades in 2 days
#487 ❌: 16 trades in 13 days
#488 ❌: 13 trades in 6 days
#489 ❌: 5 trades in 1 days
#490 ❌: 9 trades in 1 days
#491 ❌: 6 trades in 2 days
#492 ❌: 23 trades in 10 days
#493 ❌: 14 trades in 3 days
#494 ✅: 45 trades in 26 days
#495 ❌: 15 trades in 7 days
#496 ❌: 9 trades in 1 days
#497 ❌: 11 trades in 4 days
#498 ❌: 15 trades in 12 days
#499 ❌: 18 trades in 18 days
#500 ✅: 11 trades in 11 days
#501 ✅: 19 trades in 11 days
#502 ❌: 27 trades in 15 days
#503 ✅: 14 trades in 11 days
#504 ✅: 33 trades in 16 days
#505 ❌: 45 trades in 26 days
#506 ❌: 16 trades in 2 days
#507 ❌: 12 trades in 2 days
#508 ❌: 22 trades in 15 days
#509 ❌: 17 trades in 1 days
#510 ❌: 28 trades in 3 days
#511 ✅: 25 trades in 15 days
#512 ❌: 34 trades in 20 days
#513 ❌: 31 trades in 12 days
#514 ✅: 11 trades in 11 days
#515 ❌: 8 trades in 2 days
#516 ❌: 9 trades in 1 days
#517 ✅: 11 trades in 11 days
#518 ❌: 7 trades in 4 days
#519 ✅: 11 trades in 11 days
#520 ✅: 29 trades in 25 days
#521 ❌: 9 trades in 4 days
#522 ❌: 16 trades in 2 days
#523 ❌: 23 trades in 16 days
#524 ✅: 13 trades in 12 days
#525 ✅: 13 trades in 12 days
#526 ✅: 15 trades in 14 days
#527 ✅: 15 trades in 11 days
#528 ❌: 7 trades in 1 days
#529 ❌: 6 trades in 2 days
#530 ❌: 12 trades in 10 days
#531 ❌: 5 trades in 1 days
#532 ✅: 33 trades in 27 days
#533 ✅: 13 trades in 12 days
#534 ❌: 5 trades in 1 days
#535 ✅: 13 trades in 11 days
#536 ❌: 7 trades in 1 days
#537 ❌: 17 trades in 13 days
#538 ✅: 13 trades in 11 days
#539 ❌: 18 trades in 6 days
#540 ❌: 21 trades in 8 days
#541 ❌: 35 trades in 27 days
#542 ✅: 39 trades in 12 days
#543 ❌: 22 trades in 2 days
#544 ✅: 29 trades in 15 days
#545 ❌: 19 trades in 1 days
#546 ❌: 14 trades in 8 days
#547 ✅: 25 trades in 19 days
#548 ❌: 17 trades in 14 days
#549 ✅: 13 trades in 12 days
#550 ✅: 15 trades in 11 days
#551 ❌: 22 trades in 3 days
#552 ✅: 15 trades in 12 days
#553 ❌: 11 trades in 1 days
#554 ❌: 18 trades in 5 days
#555 ✅: 25 trades in 15 days
#556 ❌: 29 trades in 7 days
#557 ✅: 21 trades in 13 days
#558 ✅: 43 trades in 28 days
#559 ❌: 14 trades in 9 days
#560 ❌: 12 trades in 3 days
#561 ✅: 17 trades in 11 days
#562 ❌: 11 trades in 10 days
#563 ✅: 18 trades in 11 days
#564 ❌: 25 trades in 1 days
#565 ❌: 11 trades in 5 days
#566 ❌: 27 trades in 11 days
#567 ❌: 14 trades in 8 days
#568 ✅: 21 trades in 13 days
#569 ❌: 25 trades in 10 days
#570 ❌: 24 trades in 2 days
#571 ❌: 25 trades in 1 days
#572 ✅: 31 trades in 26 days
#573 ❌: 18 trades in 13 days
#574 ✅: 27 trades in 14 days
#575 ❌: 18 trades in 5 days
#576 ❌: 5 trades in 1 days
#577 ❌: 8 trades in 6 days
#578 ❌: 31 trades in 25 days
#579 ❌: 9 trades in 1 days
#580 ❌: 7 trades in 1 days
#581 ❌: 14 trades in 12 days
#582 ❌: 17 trades in 1 days
#583 ✅: 19 trades in 13 days
#584 ❌: 10 trades in 2 days
#585 ❌: 13 trades in 4 days
#586 ❌: 25 trades in 10 days
#587 ✅: 13 trades in 13 days
#588 ❌: 20 trades in 2 days
#589 ✅: 49 trades in 40 days
#590 ❌: 12 trades in 2 days
#591 ❌: 10 trades in 2 days
#592 ❌: 7 trades in 4 days
#593 ❌: 17 trades in 7 days
#594 ❌: 17 trades in 1 days
#595 ✅: 12 trades in 11 days
#596 ❌: 7 trades in 1 days
#597 ✅: 13 trades in 11 days
#598 ❌: 12 trades in 4 days
#599 ❌: 45 trades in 27 days
#600 ❌: 15 trades in 14 days
#601 ✅: 39 trades in 11 days
#602 ❌: 15 trades in 7 days
#603 ❌: 37 trades in 14 days
#604 ❌: 23 trades in 21 days
#605 ❌: 34 trades in 14 days
#606 ✅: 11 trades in 11 days
#607 ❌: 17 trades in 1 days
#608 ✅: 15 trades in 14 days
#609 ❌: 7 trades in 1 days
#610 ✅: 23 trades in 18 days
#611 ❌: 23 trades in 8 days
#612 ❌: 24 trades in 6 days
#613 ❌: 23 trades in 10 days
#614 ❌: 23 trades in 10 days
#615 ❌: 27 trades in 23 days
#616 ✅: 45 trades in 35 days
#617 ❌: 29 trades in 11 days
#618 ❌: 19 trades in 4 days
#619 ✅: 17 trades in 13 days
#620 ✅: 19 trades in 17 days
#621 ❌: 8 trades in 3 days
#622 ✅: 37 trades in 30 days
#623 ❌: 15 trades in 8 days
#624 ❌: 9 trades in 1 days
#625 ❌: 12 trades in 2 days
#626 ✅: 11 trades in 11 days
#627 ❌: 9 trades in 8 days
#628 ✅: 21 trades in 11 days
#629 ❌: 7 trades in 4 days
#630 ❌: 7 trades in 4 days
#631 ❌: 28 trades in 16 days
#632 ❌: 13 trades in 7 days
#633 ❌: 22 trades in 2 days
#634 ✅: 31 trades in 29 days
#635 ❌: 17 trades in 9 days
#636 ✅: 23 trades in 18 days
#637 ❌: 11 trades in 5 days
#638 ❌: 13 trades in 6 days
#639 ❌: 7 trades in 1 days
#640 ❌: 16 trades in 14 days
#641 ✅: 15 trades in 12 days
#642 ✅: 19 trades in 17 days
#643 ❌: 19 trades in 7 days
#644 ❌: 24 trades in 19 days
#645 ✅: 11 trades in 11 days
#646 ❌: 23 trades in 11 days
#647 ❌: 8 trades in 2 days
#648 ✅: 21 trades in 11 days
#649 ❌: 27 trades in 14 days
#650 ❌: 8 trades in 3 days
#651 ✅: 17 trades in 15 days
#652 ❌: 9 trades in 1 days
#653 ❌: 22 trades in 18 days
#654 ❌: 27 trades in 16 days
#655 ❌: 9 trades in 1 days
#656 ❌: 6 trades in 2 days
#657 ❌: 9 trades in 4 days
#658 ❌: 17 trades in 1 days
#659 ❌: 7 trades in 1 days
#660 ✅: 17 trades in 11 days
#661 ❌: 17 trades in 15 days
#662 ✅: 17 trades in 12 days
#663 ✅: 17 trades in 16 days
#664 ❌: 22 trades in 18 days
#665 ✅: 21 trades in 19 days
#666 ✅: 41 trades in 26 days
#667 ❌: 21 trades in 8 days
#668 ❌: 20 trades in 2 days
#669 ❌: 13 trades in 8 days
#670 ✅: 13 trades in 12 days
#671 ❌: 24 trades in 12 days
#672 ✅: 11 trades in 11 days
#673 ❌: 37 trades in 28 days
#674 ✅: 15 trades in 11 days
#675 ✅: 15 trades in 11 days
#676 ✅: 23 trades in 14 days
#677 ❌: 14 trades in 3 days
#678 ❌: 29 trades in 23 days
#679 ✅: 17 trades in 11 days
#680 ❌: 31 trades in 15 days
#681 ❌: 21 trades in 8 days
#682 ❌: 13 trades in 1 days
#683 ❌: 11 trades in 1 days
#684 ❌: 16 trades in 3 days
#685 ✅: 17 trades in 11 days
#686 ❌: 11 trades in 5 days
#687 ❌: 21 trades in 12 days
#688 ✅: 11 trades in 11 days
#689 ❌: 17 trades in 13 days
#690 ❌: 19 trades in 1 days
#691 ❌: 33 trades in 11 days
#692 ✅: 47 trades in 40 days
#693 ❌: 11 trades in 8 days
#694 ❌: 7 trades in 4 days
#695 ✅: 29 trades in 23 days
#696 ✅: 27 trades in 27 days
#697 ❌: 15 trades in 4 days
#698 ❌: 44 trades in 33 days
#699 ✅: 13 trades in 13 days
#700 ❌: 16 trades in 2 days
#701 ❌: 31 trades in 25 days
#702 ❌: 18 trades in 18 days
#703 ❌: 14 trades in 2 days
#704 ❌: 5 trades in 1 days
#705 ✅: 21 trades in 15 days
#706 ✅: 19 trades in 17 days
#707 ❌: 17 trades in 1 days
#708 ❌: 14 trades in 9 days
#709 ❌: 10 trades in 3 days
#710 ❌: 17 trades in 9 days
#711 ✅: 19 trades in 11 days
#712 ❌: 7 trades in 4 days
#713 ❌: 45 trades in 1 days
#714 ❌: 7 trades in 1 days
#715 ✅: 17 trades in 16 days
#716 ✅: 11 trades in 11 days
#717 ❌: 9 trades in 1 days
#718 ✅: 15 trades in 15 days
#719 ✅: 16 trades in 11 days
#720 ✅: 31 trades in 13 days
#721 ❌: 26 trades in 16 days
#722 ✅: 19 trades in 15 days
#723 ✅: 25 trades in 13 days
#724 ✅: 15 trades in 14 days
#725 ❌: 13 trades in 4 days
#726 ❌: 37 trades in 35 days
#727 ✅: 13 trades in 12 days
#728 ❌: 21 trades in 14 days
#729 ✅: 47 trades in 11 days
#730 ❌: 19 trades in 1 days
#731 ✅: 23 trades in 14 days
#732 ✅: 11 trades in 11 days
#733 ❌: 9 trades in 5 days
#734 ❌: 25 trades in 11 days
#735 ❌: 10 trades in 2 days
#736 ❌: 11 trades in 1 days
#737 ❌: 7 trades in 1 days
#738 ✅: 21 trades in 20 days
#739 ✅: 11 trades in 11 days
#740 ✅: 13 trades in 11 days
#741 ❌: 5 trades in 1 days
#742 ✅: 23 trades in 12 days
#743 ❌: 24 trades in 3 days
#744 ❌: 27 trades in 1 days
#745 ✅: 13 trades in 11 days
#746 ❌: 9 trades in 1 days
#747 ❌: 15 trades in 1 days
#748 ❌: 5 trades in 1 days
#749 ❌: 35 trades in 13 days
#750 ❌: 18 trades in 12 days
#751 ✅: 13 trades in 11 days
#752 ✅: 28 trades in 11 days
#753 ❌: 80 trades in 3 days
#754 ✅: 23 trades in 16 days
#755 ✅: 33 trades in 27 days
#756 ❌: 9 trades in 4 days
#757 ❌: 28 trades in 7 days
#758 ✅: 15 trades in 11 days
#759 ❌: 11 trades in 11 days
#760 ✅: 15 trades in 13 days
#761 ✅: 11 trades in 11 days
#762 ❌: 15 trades in 11 days
#763 ❌: 10 trades in 8 days
#764 ❌: 11 trades in 1 days
#765 ❌: 21 trades in 8 days
#766 ✅: 23 trades in 11 days
#767 ❌: 8 trades in 2 days
#768 ❌: 9 trades in 1 days
#769 ❌: 9 trades in 1 days
#770 ✅: 31 trades in 25 days
#771 ❌: 18 trades in 14 days
#772 ❌: 51 trades in 21 days
#773 ✅: 21 trades in 12 days
#774 ✅: 12 trades in 11 days
#775 ❌: 24 trades in 16 days
#776 ❌: 18 trades in 15 days
#777 ✅: 15 trades in 12 days
#778 ✅: 17 trades in 15 days
#779 ❌: 8 trades in 2 days
#780 ✅: 13 trades in 11 days
#781 ✅: 13 trades in 11 days
#782 ❌: 21 trades in 19 days
#783 ❌: 12 trades in 2 days
#784 ✅: 27 trades in 24 days
#785 ✅: 13 trades in 12 days
#786 ✅: 33 trades in 13 days
#787 ❌: 5 trades in 1 days
#788 ❌: 19 trades in 1 days
#789 ✅: 11 trades in 11 days
#790 ❌: 8 trades in 3 days
#791 ✅: 25 trades in 11 days
#792 ❌: 9 trades in 4 days
#793 ❌: 6 trades in 2 days
#794 ❌: 17 trades in 6 days
#795 ❌: 16 trades in 13 days
#796 ✅: 12 trades in 11 days
#797 ✅: 11 trades in 11 days
#798 ✅: 21 trades in 18 days
#799 ✅: 11 trades in 11 days
#800 ❌: 8 trades in 2 days
#801 ❌: 69 trades in 59 days
#802 ❌: 5 trades in 1 days
#803 ❌: 7 trades in 1 days
#804 ✅: 27 trades in 20 days
#805 ✅: 13 trades in 13 days
#806 ✅: 17 trades in 14 days
#807 ❌: 5 trades in 1 days
#808 ❌: 20 trades in 3 days
#809 ❌: 6 trades in 2 days
#810 ❌: 5 trades in 1 days
#811 ✅: 12 trades in 11 days
#812 ✅: 15 trades in 12 days
#813 ❌: 17 trades in 1 days
#814 ❌: 45 trades in 37 days
#815 ✅: 19 trades in 15 days
#816 ✅: 45 trades in 33 days
#817 ❌: 34 trades in 27 days
#818 ✅: 15 trades in 14 days
#819 ❌: 10 trades in 6 days
#820 ❌: 7 trades in 1 days
#821 ❌: 31 trades in 1 days
#822 ❌: 45 trades in 8 days
#823 ❌: 9 trades in 1 days
#824 ❌: 10 trades in 3 days
#825 ❌: 16 trades in 12 days
#826 ❌: 6 trades in 2 days
#827 ✅: 21 trades in 15 days
#828 ✅: 17 trades in 11 days
#829 ❌: 14 trades in 9 days
#830 ❌: 17 trades in 15 days
#831 ✅: 11 trades in 11 days
#832 ✅: 11 trades in 11 days
#833 ✅: 57 trades in 33 days
#834 ❌: 15 trades in 7 days
#835 ❌: 15 trades in 10 days
#836 ✅: 21 trades in 19 days
#837 ❌: 20 trades in 12 days
#838 ✅: 23 trades in 12 days
#839 ✅: 13 trades in 13 days
#840 ✅: 23 trades in 15 days
#841 ❌: 9 trades in 1 days
#842 ✅: 16 trades in 11 days
#843 ✅: 11 trades in 11 days
#844 ✅: 23 trades in 11 days
#845 ✅: 11 trades in 11 days
#846 ❌: 5 trades in 1 days
#847 ❌: 5 trades in 1 days
#848 ✅: 11 trades in 11 days
#849 ❌: 9 trades in 8 days
#850 ❌: 8 trades in 2 days
#851 ❌: 34 trades in 12 days
#852 ❌: 12 trades in 3 days
#853 ✅: 15 trades in 13 days
#854 ❌: 16 trades in 13 days
#855 ❌: 16 trades in 12 days
#856 ✅: 17 trades in 12 days
#857 ❌: 7 trades in 1 days
#858 ❌: 28 trades in 14 days
#859 ❌: 8 trades in 2 days
#860 ❌: 29 trades in 10 days
#861 ✅: 15 trades in 12 days
#862 ❌: 18 trades in 12 days
#863 ❌: 10 trades in 7 days
#864 ✅: 25 trades in 11 days
#865 ❌: 5 trades in 1 days
#866 ✅: 24 trades in 11 days
#867 ❌: 16 trades in 9 days
#868 ❌: 39 trades in 34 days
#869 ✅: 41 trades in 34 days
#870 ❌: 5 trades in 1 days
#871 ❌: 21 trades in 1 days
#872 ❌: 28 trades in 18 days
#873 ❌: 15 trades in 1 days
#874 ❌: 13 trades in 1 days
#875 ❌: 9 trades in 1 days
#876 ❌: 15 trades in 1 days
#877 ❌: 9 trades in 1 days
#878 ✅: 23 trades in 12 days
#879 ✅: 59 trades in 11 days
#880 ❌: 37 trades in 15 days
#881 ✅: 15 trades in 12 days
#882 ❌: 24 trades in 13 days
#883 ✅: 33 trades in 13 days
#884 ❌: 27 trades in 13 days
#885 ✅: 29 trades in 11 days
#886 ✅: 14 trades in 11 days
#887 ❌: 25 trades in 15 days
#888 ❌: 11 trades in 1 days
#889 ✅: 15 trades in 12 days
#890 ❌: 29 trades in 7 days
#891 ❌: 8 trades in 2 days
#892 ❌: 9 trades in 4 days
#893 ❌: 24 trades in 6 days
#894 ❌: 14 trades in 2 days
#895 ✅: 33 trades in 13 days
#896 ✅: 35 trades in 15 days
#897 ✅: 25 trades in 16 days
#898 ❌: 33 trades in 21 days
#899 ✅: 11 trades in 11 days
#900 ❌: 24 trades in 8 days
#901 ❌: 26 trades in 17 days
#902 ✅: 29 trades in 15 days
#903 ✅: 17 trades in 16 days
#904 ❌: 11 trades in 10 days
#905 ❌: 8 trades in 6 days
#906 ✅: 61 trades in 33 days
#907 ❌: 23 trades in 1 days
#908 ❌: 23 trades in 10 days
#909 ❌: 50 trades in 23 days
#910 ❌: 29 trades in 11 days
#911 ✅: 23 trades in 19 days
#912 ✅: 23 trades in 23 days
#913 ✅: 19 trades in 13 days
#914 ✅: 21 trades in 14 days
#915 ✅: 21 trades in 20 days
#916 ✅: 15 trades in 11 days
#917 ❌: 11 trades in 4 days
#918 ❌: 10 trades in 4 days
#919 ❌: 27 trades in 20 days
#920 ❌: 19 trades in 1 days
#921 ❌: 25 trades in 11 days
#922 ❌: 9 trades in 4 days
#923 ❌: 22 trades in 20 days
#924 ❌: 6 trades in 2 days
#925 ❌: 13 trades in 8 days
#926 ❌: 5 trades in 1 days
#927 ✅: 17 trades in 12 days
#928 ✅: 11 trades in 11 days
#929 ❌: 21 trades in 1 days
#930 ✅: 15 trades in 12 days
#931 ❌: 7 trades in 1 days
#932 ✅: 25 trades in 20 days
#933 ✅: 21 trades in 15 days
#934 ❌: 11 trades in 1 days
#935 ❌: 37 trades in 14 days
#936 ❌: 19 trades in 11 days
#937 ✅: 15 trades in 11 days
#938 ❌: 13 trades in 1 days
#939 ❌: 73 trades in 61 days
#940 ❌: 23 trades in 6 days
#941 ❌: 13 trades in 6 days
#942 ❌: 37 trades in 28 days
#943 ❌: 32 trades in 20 days
#944 ❌: 22 trades in 14 days
#945 ✅: 35 trades in 29 days
#946 ✅: 29 trades in 22 days
#947 ❌: 14 trades in 10 days
#948 ❌: 19 trades in 19 days
#949 ❌: 11 trades in 1 days
#950 ❌: 18 trades in 2 days
#951 ❌: 5 trades in 1 days
#952 ❌: 17 trades in 6 days
#953 ✅: 11 trades in 11 days
#954 ❌: 5 trades in 1 days
#955 ❌: 6 trades in 2 days
#956 ❌: 17 trades in 15 days
#957 ❌: 9 trades in 1 days
#958 ❌: 8 trades in 2 days
#959 ❌: 18 trades in 8 days
#960 ❌: 5 trades in 1 days
#961 ❌: 16 trades in 15 days
#962 ✅: 15 trades in 13 days
#963 ❌: 15 trades in 1 days
#964 ❌: 15 trades in 8 days
#965 ✅: 31 trades in 29 days
#966 ✅: 20 trades in 11 days
#967 ❌: 9 trades in 1 days
#968 ❌: 20 trades in 15 days
#969 ❌: 10 trades in 2 days
#970 ❌: 29 trades in 1 days
#971 ❌: 17 trades in 10 days
#972 ❌: 9 trades in 1 days
#973 ✅: 13 trades in 12 days
#974 ❌: 15 trades in 1 days
#975 ✅: 13 trades in 11 days
#976 ✅: 27 trades in 11 days
#977 ❌: 51 trades in 33 days
#978 ❌: 5 trades in 1 days
#979 ✅: 25 trades in 19 days
#980 ❌: 7 trades in 1 days
#981 ❌: 9 trades in 1 days
#982 ❌: 6 trades in 2 days
#983 ✅: 14 trades in 11 days
#984 ✅: 31 trades in 26 days
#985 ❌: 15 trades in 5 days
#986 ✅: 25 trades in 11 days
#987 ✅: 11 trades in 11 days
#988 ❌: 7 trades in 1 days
#989 ✅: 27 trades in 20 days
#990 ❌: 7 trades in 4 days
#991 ❌: 30 trades in 5 days
#992 ✅: 13 trades in 11 days
#993 ✅: 13 trades in 11 days
#994 ❌: 24 trades in 4 days
#995 ✅: 15 trades in 14 days
#996 ❌: 13 trades in 5 days
#997 ✅: 19 trades in 11 days
#998 ❌: 5 trades in 1 days
#999 ❌: 13 trades in 11 days
#1000 ✅: 21 trades in 15 days
total accounts: 1000
total payouts: 371
total blowups: 629
total expense: 98450
total revenue: 556500
total net profit: 458050
payout percent required for breakeven: 6.56%
actual payout percent: 37.10%
edge against the house: 30.54%

summary: with a 50.00% win rate and 1R, for every account purchased for $98.45, you would statisitcally expect to return $226.96 gross and $128.51 net profit, for a return on investment of 130.53%
