var questions = [
    {
        "question":"在戰鬥中，你傾向於哪種戰鬥模式？",
        "answers":[
            ["近身肉搏",2],
            ["遠程攻擊",3],
            ["還不知道","E"]
        ]
    },
    {
        "question":"你希望自己在戰鬥中主要承擔什麼作用？",
        "answers":[
            ["保護隊友",4],
            ["擊殺敵人",5],
            
        ]
    },
	{
        "question":"你希望自己在戰鬥中主要承擔什麼作用？",
        "answers":[
            ["物理攻擊",6],
            ["魔法攻擊",7],
            
        ]
    },
    {
        "question":"為了保護隊友，你還希望自己具備什麼能力？",
        "answers":[
            ["承擔傷害","A"],
            ["輔助戰鬥","G"],
            ["靈活的機動性","K"]
        ]
    },
	{
        "question":"為了擊殺敵人，你還希望自己具備什麼能力？",
        "answers":[
            ["高爆發傷害","C"],
            ["靈活的機動性","D"],
            ["攻防均衡","F"]
        ]
    },
	{
        "question":"你希望自己具備什麼能力？",
        "answers":[
            ["靈活的機動性","B"],
            ["遠程高傷害","L"],
        ]
    },
    {
        "question":"你希望自己具備什麼能力？",
        "answers":[
            ["團控能力","H"],
            ["持續造成傷害","I"],
			["輔助戰鬥","J"],
        ]
    }
    
];

var finalAnswers={
        "A":["標準坦克","憑藉高血量和高防禦能力而在戰場中為團隊承擔主要傷害，保護己方後牌英雄。比血量更重要的是針對性地選擇物理防禦或魔法防禦裝備，以應對敵方不同類型的傷害輸出。"],
        "B":["機動射手","射手擁有較高的傷害能力，但由於自身防禦能力較低，需要依賴隊友的保護。機動射手能夠透過施放位移技能選擇更號地點位來造成更大殺傷，或躲避敵人追擊。"],
        "C":["高爆發刺客","能夠迅速突襲敵人，瞬間透過技能和高輸出能力造成大量傷害，一擊斃命。但是由於防禦能力較弱，需要避免正面衝突，並及時脫離戰場。"],
        "D":["機動戰士","擁有位移技能，能夠更好地切入戰鬥或是從中脫離，擁有較高的戰場機動性。並且其平衡的輸出與承擔傷害的能力給了他們可攻可守的應變性。"],
		"E":["新手英雄","適合新手學習的英雄，這需英雄分屬於不同的職業類型，可以根據自己的喜好選擇練習。"],
		"F":["標準戰士","擅長近身戰鬥，輸出能力與傷害能力較為平衡，能夠在位團隊承擔傷害的同時對敵人造成打擊。"],
		"G":["輔助坦克","具有不同的加強隊友或控制敵人的技能，能夠在團戰中發揮特殊作用。並憑藉高血量和高防禦力在戰場中位團隊承擔傷害。"],
		"H":["團控法師","依賴於技能施放的法師通常比較脆弱，團控法師能受時透過控制技能限制敵方。而在團隊的保護下能夠最大地發揮法師的傷害與控制能力。"],
		"I":["標準法師","依賴於技能施放的法師通常比較脆弱，常會和隊友一起行動。法師能夠在團戰之前透過師法持續消耗敵方血量，打破刷方戰力平衡。"],
		"J":["輔助法師","依賴於技能施放的法師通常比較脆弱，常會和隊友一起行動。輔助類的法師通常擁有強大的團控技能或是團隊治療的能力。"],
		"K":["機動坦克","擁有位移技能，能夠更好地切入戰鬥或是從中脫離，擁有較高的戰場機動性，並憑藉高血量和高防禦力在戰場中位團隊承擔傷害。"],
		"L":["輸出射手","射手擁有較高的傷害能力，但由於自身防禦能力較低，需要依賴隊友的保護。輸出射手能夠透過適時地施放控制技能來位團站提供幫助追擊敵人或躲避追擊。"],
		};
