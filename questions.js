const questions = [
  {
    "image": "q1.png",
    "options": [
      "瓦爾桑 (Varshahn / ヴァルシャン)",
      "雅·修特拉 (Y'shtola / ヤ・シュトラ)",
      "瑪格奈 (Magnai / マグナイ)",
      "阿倫瓦爾德 (Arenvald / アレンヴァルド)"
    ],
    "correct": 0,
    "name": "雅·修特拉 (Y'shtola / ヤ・シュトラ)"
  },
  {
    "image": "q2.png",
    "options": [
      "埃斯蒂尼安 (Estinien / エスティニアン)",
      "希爾達 (Hilda / ヒルダ)",
      "薩都 (Sadu / サドゥ)",
      "阿爾菲諾 (Alphinaud / アルフィノ)"
    ],
    "correct": 1,
    "name": "阿爾菲諾 (Alphinaud / アルフィノ)"
  },
  {
    "image": "q3.png",
    "options": [
      "于里昂熱 (Urianger / ウリエンジェ)",
      "阿莉塞 (Alisaie / アリゼー)",
      "芙朵拉 (Fordola / フォルドラ)",
      "帕帕力莫 (Papalymo / パパリモ)"
    ],
    "correct": 0,
    "name": "阿莉塞 (Alisaie / アリゼー)"
  },
  {
    "image": "q4.png",
    "options": [
      "桑克瑞德 (Thancred / サンクレッド)",
      "芝諾斯 (Zenos / ゼノス)",
      "維涅斯 (Venat / ヴェーネス)",
      "瓦厲斯 (Varis / ヴァリス)"
    ],
    "correct": 0,
    "name": "桑克瑞德 (Thancred / サンクレッド)"
  },
  {
    "image": "q5.png",
    "options": [
      "希爾達 (Hilda / ヒルダ)",
      "柯納 (Koana / コーナ)",
      "梅爾維布 (Merlwyb / メルウィブ)",
      "于里昂熱 (Urianger / ウリエンジェ)"
    ],
    "correct": 3,
    "name": "于里昂熱 (Urianger / ウリエンジェ)"
  },
  {
    "image": "q6.png",
    "options": [
      "敏菲利亞 (Minfilia / ミンフィリア)",
      "瓦爾桑 (Varshahn / ヴァルシャン)",
      "芝諾斯 (Zenos / ゼノス)",
      "可露兒 (Krile / クルル)"
    ],
    "correct": 1,
    "name": "可露兒 (Krile / クルル)"
  },
  {
    "image": "q7.png",
    "options": [
      "奧爾什方 (Haurchefant / オルシュファン)",
      "莉瑟 (Lyse / リセ)",
      "古·拉哈·提亞 (G'raha Tia / グ・ラハ・ティア)",
      "希爾達 (Hilda / ヒルダ)"
    ],
    "correct": 1,
    "name": "古·拉哈·提亞 (G'raha Tia / グ・ラハ・ティア)"
  },
  {
    "image": "q8.png",
    "options": [
      "塔塔露 (Tataru / タタル)",
      "琳 (Ryne / リーン)",
      "尼祿 (Nero / ネロ)",
      "梅爾維布 (Merlwyb / メルウィブ)"
    ],
    "correct": 3,
    "name": "塔塔露 (Tataru / タタル)"
  },
  {
    "image": "q10.png",
    "options": [
      "飛燕 (Hien / ヒエン)",
      "艾德蒙 (Edmont / エドモン)",
      "薩都 (Sadu / サドゥ)",
      "帕帕力莫 (Papalymo / パパリモ)"
    ],
    "correct": 3,
    "name": "帕帕力莫 (Papalymo / パパリモ)"
  },
  {
    "image": "q11.png",
    "options": [
      "于里昂熱 (Urianger / ウリエンジェ)",
      "夕霧 (Yugiri / ユウギリ)",
      "古·拉哈·提亞 (G'raha Tia / グ・ラハ・ティア)",
      "莉瑟 (Lyse / リセ)"
    ],
    "correct": 3,
    "name": "莉瑟 (Lyse / リセ)"
  },
  {
    "image": "q12.png",
    "options": [
      "席林娜 (Cirina / シリナ)",
      "柯納 (Koana / コーナ)",
      "古·拉哈·提亞 (G'raha Tia / グ・ラハ・ティア)",
      "琳 (Ryne / リーン)"
    ],
    "correct": 0,
    "name": "琳 (Ryne / リーン)"
  },
  {
    "image": "q13.png",
    "options": [
      "愛梅特賽爾克 (Emet-Selch / エメトセルク)",
      "零 (Zero / ゼロ)",
      "莉瑟 (Lyse / リセ)",
      "露琪亞 (Lucia / ルキア)"
    ],
    "correct": 3,
    "name": "愛梅特賽爾克 (Emet-Selch / エメトセルク)"
  },
  {
    "image": "q14.png",
    "options": [
      "娜娜莫 (Nanamo / ナナモ)",
      "艾里迪布斯 (Elidibus / エリディブス)",
      "塔塔露 (Tataru / タタル)",
      "艾默里克 (Aymeric / アイメリク)"
    ],
    "correct": 3,
    "name": "艾里迪布斯 (Elidibus / エリディブス)"
  },
  {
    "image": "q15.png",
    "options": [
      "西卡爾 (Sicard / シカルド)",
      "拉哈布雷亞 (Lahabrea / ラハブレア)",
      "佐拉加 (Zoraal Ja / ゾラージャ)",
      "阿倫瓦爾德 (Arenvald / アレンヴァルド)"
    ],
    "correct": 0,
    "name": "拉哈布雷亞 (Lahabrea / ラハブレア)"
  },
  {
    "image": "q16.png",
    "options": [
      "塔塔露 (Tataru / タタル)",
      "阿爾博特 (Ardbert / アルバート)",
      "愛梅特賽爾克 (Emet-Selch / エメトセルク)",
      "法丹尼爾 (Fandaniel / ファンダニエル)"
    ],
    "correct": 2,
    "name": "法丹尼爾 (Fandaniel / ファンダニエル)"
  },
  {
    "image": "q17.png",
    "options": [
      "芝諾斯 (Zenos / ゼノス)",
      "皮平 (Pippin / ピピン)",
      "露琪亞 (Lucia / ルキア)",
      "盧納爾 (Runar / ルナル)"
    ],
    "correct": 2,
    "name": "芝諾斯 (Zenos / ゼノス)"
  },
  {
    "image": "q18.png",
    "options": [
      "瓦厲斯 (Varis / ヴァリス)",
      "芙朵拉 (Fordola / フォルドラ)",
      "萊娜 (Lyna / ライナ)",
      "柯納 (Koana / コーナ)"
    ],
    "correct": 2,
    "name": "瓦厲斯 (Varis / ヴァリス)"
  },
  {
    "image": "q19.png",
    "options": [
      "弗爾什諾 (Fourchenault / フルシュノ)",
      "泰勒吉·阿代勒吉 (Teledji Adeledji / テレジ・アデレジ)",
      "梅蒂恩 (Meteion / メーティオン)",
      "蓋烏斯 (Gaius / ガイウス)"
    ],
    "correct": 3,
    "name": "蓋烏斯 (Gaius / ガイウス)"
  },
  {
    "image": "q20.png",
    "options": [
      "莉維亞 (Livia / リウィア)",
      "雅·修特拉 (Y'shtola / ヤ・シュトラ)",
      "于里昂熱 (Urianger / ウリエンジェ)",
      "莉瑟 (Lyse / リセ)"
    ],
    "correct": 0,
    "name": "莉維亞 (Livia / リウィア)"
  },
  {
    "image": "q21.png",
    "options": [
      "巴庫加加 (Bakool Ja Ja / バクージャジャ)",
      "里塔提恩 (Rhitahtyn / リットアティン)",
      "奧爾什方 (Haurchefant / オルシュファン)",
      "希斯拉德 (Hythlodaeus / ヒュトロダエウス)"
    ],
    "correct": 0,
    "name": "里塔提恩 (Rhitahtyn / リットアティン)"
  },
  {
    "image": "q22.png",
    "options": [
      "瑪格奈 (Magnai / マグナイ)",
      "佐拉加 (Zoraal Ja / ゾラージャ)",
      "皮平 (Pippin / ピピン)",
      "尼祿 (Nero / ネロ)"
    ],
    "correct": 1,
    "name": "尼祿 (Nero / ネロ)"
  },
  {
    "image": "q23.png",
    "options": [
      "朝陽 (Asahi / アサヒ)",
      "琳 (Ryne / リーン)",
      "佐拉加 (Zoraal Ja / ゾラージャ)",
      "愛梅特賽爾克 (Emet-Selch / エメトセルク)"
    ],
    "correct": 1,
    "name": "朝陽 (Asahi / アサヒ)"
  },
  {
    "image": "q24.png",
    "options": [
      "夜露 (Yotsuyu / ヨツユ)",
      "帕帕力莫 (Papalymo / パパリモ)",
      "里塔提恩 (Rhitahtyn / リットアティン)",
      "蓋烏斯 (Gaius / ガイウス)"
    ],
    "correct": 1,
    "name": "夜露 (Yotsuyu / ヨツユ)"
  },
  {
    "image": "q25.png",
    "options": [
      "飛燕 (Hien / ヒエン)",
      "羅羅力特 (Lolorito / ロロリト)",
      "桑克瑞德 (Thancred / サンクレッド)",
      "阿倫瓦爾德 (Arenvald / アレンヴァルド)"
    ],
    "correct": 0,
    "name": "飛燕 (Hien / ヒエン)"
  },
  {
    "image": "q26.png",
    "options": [
      "拉哈布雷亞 (Lahabrea / ラハブレア)",
      "露琪亞 (Lucia / ルキア)",
      "柯納 (Koana / コーナ)",
      "豪雪 (Gosetsu / ゴウセツ)"
    ],
    "correct": 3,
    "name": "豪雪 (Gosetsu / ゴウセツ)"
  },
  {
    "image": "q27.png",
    "options": [
      "夕霧 (Yugiri / ユウギリ)",
      "嘉恩·艾·神納 (Kan-E-Senna / カヌ・エ・センナ)",
      "羅羅力特 (Lolorito / ロロリト)",
      "雅·修特拉 (Y'shtola / ヤ・シュトラ)"
    ],
    "correct": 2,
    "name": "夕霧 (Yugiri / ユウギリ)"
  },
  {
    "image": "q28.png",
    "options": [
      "赫爾墨斯 (Hermes / ヘルメス)",
      "飛燕 (Hien / ヒエン)",
      "艾默里克 (Aymeric / アイメリク)",
      "埃里克特翁尼亞斯 (Erichthonios / エリクトニオス)"
    ],
    "correct": 3,
    "name": "艾默里克 (Aymeric / アイメリク)"
  },
  {
    "image": "q29.png",
    "options": [
      "露琪亞 (Lucia / ルキア)",
      "艾里迪布斯 (Elidibus / エリディブス)",
      "于里昂熱 (Urianger / ウリエンジェ)",
      "奧爾什方 (Haurchefant / オルシュファン)"
    ],
    "correct": 2,
    "name": "奧爾什方 (Haurchefant / オルシュファン)"
  },
  {
    "image": "q30.png",
    "options": [
      "席林娜 (Cirina / シリナ)",
      "露琪亞 (Lucia / ルキア)",
      "蓋烏斯 (Gaius / ガイウス)",
      "奧爾什方 (Haurchefant / オルシュファン)"
    ],
    "correct": 0,
    "name": "露琪亞 (Lucia / ルキア)"
  },
  {
    "image": "q31.png",
    "options": [
      "阿梅莉安絲 (Ameliance / アメリアンス)",
      "尤魯斯 (Jullus / ユルス)",
      "佐拉加 (Zoraal Ja / ゾラージャ)",
      "希爾達 (Hilda / ヒルダ)"
    ],
    "correct": 3,
    "name": "希爾達 (Hilda / ヒルダ)"
  },
  {
    "image": "q32.png",
    "options": [
      "阿倫瓦爾德 (Arenvald / アレンヴァルド)",
      "拉哈布雷亞 (Lahabrea / ラハブレア)",
      "艾德蒙 (Edmont / エドモン)",
      "夕霧 (Yugiri / ユウギリ)"
    ],
    "correct": 1,
    "name": "艾德蒙 (Edmont / エドモン)"
  },
  {
    "image": "q33.png",
    "options": [
      "梅爾維布 (Merlwyb / メルウィブ)",
      "烏克·拉瑪特 (Wuk Lamat / ウクラマト)",
      "瑪格奈 (Magnai / マグナイ)",
      "薩都 (Sadu / サドゥ)"
    ],
    "correct": 0,
    "name": "梅爾維布 (Merlwyb / メルウィブ)"
  },
  {
    "image": "q34.png",
    "options": [
      "嘉恩·艾·神納 (Kan-E-Senna / カヌ・エ・センナ)",
      "希斯拉德 (Hythlodaeus / ヒュトロダエウス)",
      "雅·修特拉 (Y'shtola / ヤ・シュトラ)",
      "艾里迪布斯 (Elidibus / エリディブス)"
    ],
    "correct": 0,
    "name": "嘉恩·艾·神納 (Kan-E-Senna / カヌ・エ・センナ)"
  },
  {
    "image": "q35.png",
    "options": [
      "尼祿 (Nero / ネロ)",
      "勞班 (Raubahn / ラウバーン)",
      "萊娜 (Lyna / ライナ)",
      "夜露 (Yotsuyu / ヨツユ)"
    ],
    "correct": 0,
    "name": "勞班 (Raubahn / ラウバーン)"
  },
  {
    "image": "q36.png",
    "options": [
      "娜娜莫 (Nanamo / ナナモ)",
      "希斯拉德 (Hythlodaeus / ヒュトロダエウス)",
      "里塔提恩 (Rhitahtyn / リットアティン)",
      "希爾達 (Hilda / ヒルダ)"
    ],
    "correct": 1,
    "name": "娜娜莫 (Nanamo / ナナモ)"
  },
  {
    "image": "q38.png",
    "options": [
      "伊爾伯德 (Ilberd / イルベルド)",
      "夜露 (Yotsuyu / ヨツユ)",
      "豪雪 (Gosetsu / ゴウセツ)",
      "薩都 (Sadu / サドゥ)"
    ],
    "correct": 0,
    "name": "伊爾伯德 (Ilberd / イルベルド)"
  },
  {
    "image": "q39.png",
    "options": [
      "席林娜 (Cirina / シリナ)",
      "弗爾什諾 (Fourchenault / フルシュノ)",
      "伊塞勒 (Ysayle / イゼル)",
      "瑪格奈 (Magnai / マグナイ)"
    ],
    "correct": 3,
    "name": "伊塞勒 (Ysayle / イゼル)"
  },
  {
    "image": "q40.png",
    "options": [
      "古·拉哈·提亞 (G'raha Tia / グ・ラハ・ティア)",
      "瑪格奈 (Magnai / マグナイ)",
      "維涅斯 (Venat / ヴェーネス)",
      "豪雪 (Gosetsu / ゴウセツ)"
    ],
    "correct": 0,
    "name": "維涅斯 (Venat / ヴェーネス)"
  },
  {
    "image": "q41.png",
    "options": [
      "莉維亞 (Livia / リウィア)",
      "赫爾墨斯 (Hermes / ヘルメス)",
      "阿倫瓦爾德 (Arenvald / アレンヴァルド)",
      "奧爾什方 (Haurchefant / オルシュファン)"
    ],
    "correct": 1,
    "name": "赫爾墨斯 (Hermes / ヘルメス)"
  },
  {
    "image": "q42.png",
    "options": [
      "烏克·拉瑪特 (Wuk Lamat / ウクラマト)",
      "弗朗塞爾 (Francel / フランセル)",
      "埃斯蒂尼安 (Estinien / エスティニアン)",
      "梅蒂恩 (Meteion / メーティオン)"
    ],
    "correct": 3,
    "name": "梅蒂恩 (Meteion / メーティオン)"
  },
  {
    "image": "q43.png",
    "options": [
      "瓦厲斯 (Varis / ヴァリス)",
      "塔塔露 (Tataru / タタル)",
      "希斯拉德 (Hythlodaeus / ヒュトロダエウス)",
      "法丹尼爾 (Fandaniel / ファンダニエル)"
    ],
    "correct": 0,
    "name": "希斯拉德 (Hythlodaeus / ヒュトロダエウス)"
  },
  {
    "image": "q44.png",
    "options": [
      "阿爾博特 (Ardbert / アルバート)",
      "瑪托雅 (Matoya / マトヤ)",
      "拉哈布雷亞 (Lahabrea / ラハブレア)",
      "烏克·拉瑪特 (Wuk Lamat / ウクラマト)"
    ],
    "correct": 0,
    "name": "烏克·拉瑪特 (Wuk Lamat / ウクラマト)"
  },
  {
    "image": "q45.png",
    "options": [
      "柯納 (Koana / コーナ)",
      "伊爾伯德 (Ilberd / イルベルド)",
      "羅羅力特 (Lolorito / ロロリト)",
      "烏克·拉瑪特 (Wuk Lamat / ウクラマト)"
    ],
    "correct": 3,
    "name": "柯納 (Koana / コーナ)"
  },
  {
    "image": "q46.png",
    "options": [
      "伊塞勒 (Ysayle / イゼル)",
      "埃里克特翁尼亞斯 (Erichthonios / エリクトニオス)",
      "瑪格奈 (Magnai / マグナイ)",
      "佐拉加 (Zoraal Ja / ゾラージャ)"
    ],
    "correct": 3,
    "name": "佐拉加 (Zoraal Ja / ゾラージャ)"
  },
  {
    "image": "q47.png",
    "options": [
      "法丹尼爾 (Fandaniel / ファンダニエル)",
      "巴庫加加 (Bakool Ja Ja / バクージャジャ)",
      "帕帕力莫 (Papalymo / パパリモ)",
      "羅羅力特 (Lolorito / ロロリト)"
    ],
    "correct": 0,
    "name": "巴庫加加 (Bakool Ja Ja / バクージャジャ)"
  },
  {
    "image": "q48.png",
    "options": [
      "尼德哈娜 (Nidhana / ニッダーナ)",
      "西卡爾 (Sicard / シカルド)",
      "古魯加加 (Gulool Ja Ja / グルージャジャ)",
      "漢考克 (Hancock / ハンコック)"
    ],
    "correct": 2,
    "name": "古魯加加 (Gulool Ja Ja / グルージャジャ)"
  },
  {
    "image": "q49.png",
    "options": [
      "阿倫瓦爾德 (Arenvald / アレンヴァルド)",
      "芙朵拉 (Fordola / フォルドラ)",
      "維涅斯 (Venat / ヴェーネス)",
      "桑克瑞德 (Thancred / サンクレッド)"
    ],
    "correct": 3,
    "name": "阿倫瓦爾德 (Arenvald / アレンヴァルド)"
  },
  {
    "image": "q50.png",
    "options": [
      "盧納爾 (Runar / ルナル)",
      "漢考克 (Hancock / ハンコック)",
      "艾里迪布斯 (Elidibus / エリディブス)",
      "芙朵拉 (Fordola / フォルドラ)"
    ],
    "correct": 3,
    "name": "芙朵拉 (Fordola / フォルドラ)"
  },
  {
    "image": "q51.png",
    "name": "埃斯蒂尼安 (Estinien / エスティニアン)",
    "options": [
      "飛燕 (Hien / ヒエン)",
      "埃斯蒂尼安 (Estinien / エスティニアン)",
      "里塔提恩 (Rhitahtyn / リットアティン)",
      "柯納 (Koana / コーナ)"
    ]
  },
  {
    "image": "q52.png",
    "name": "阿爾博特 (Ardbert / アルバート)",
    "options": [
      "芝諾斯 (Zenos / ゼノス)",
      "佐拉加 (Zoraal Ja / ゾラージャ)",
      "夕霧 (Yugiri / ユウギリ)",
      "阿爾博特 (Ardbert / アルバート)"
    ]
  },
  {
    "image": "q53.png",
    "name": "蓋婭 (Gaia / ガイア)",
    "options": [
      "萊娜 (Lyna / ライナ)",
      "零 (Zero / ゼロ)",
      "漢考克 (Hancock / ハンコック)",
      "蓋婭 (Gaia / ガイア)"
    ]
  },
  {
    "image": "q54.png",
    "name": "瑪格奈 (Magnai / マグナイ)",
    "options": [
      "法丹尼爾 (Fandaniel / ファンダニエル)",
      "瑪格奈 (Magnai / マグナイ)",
      "奧爾什方 (Haurchefant / オルシュファン)",
      "佐拉加 (Zoraal Ja / ゾラージャ)"
    ]
  },
  {
    "image": "q55.png",
    "name": "薩都 (Sadu / サドゥ)",
    "options": [
      "尼德哈娜 (Nidhana / ニッダーナ)",
      "雅·修特拉 (Y'shtola / ヤ・シュトラ)",
      "伊塞勒 (Ysayle / イゼル)",
      "薩都 (Sadu / サドゥ)"
    ]
  },
  {
    "image": "q56.png",
    "name": "席林娜 (Cirina / シリナ)",
    "options": [
      "席林娜 (Cirina / シリナ)",
      "維涅斯 (Venat / ヴェーネス)",
      "尼德哈娜 (Nidhana / ニッダーナ)",
      "拉哈布雷亞 (Lahabrea / ラハブレア)"
    ]
  },
  {
    "image": "q57.png",
    "name": "盧納爾 (Runar / ルナル)",
    "options": [
      "奧爾什方 (Haurchefant / オルシュファン)",
      "桑克瑞德 (Thancred / サンクレッド)",
      "薩都 (Sadu / サドゥ)",
      "盧納爾 (Runar / ルナル)"
    ]
  },
  {
    "image": "q58.png",
    "name": "泰絲琳 (Tesleen / テスリーン)",
    "options": [
      "赫爾墨斯 (Hermes / ヘルメス)",
      "埃斯蒂尼安 (Estinien / エスティニアン)",
      "羅羅力特 (Lolorito / ロロリト)",
      "泰絲琳 (Tesleen / テスリーン)"
    ]
  },
  {
    "image": "q59.png",
    "name": "萊娜 (Lyna / ライナ)",
    "options": [
      "特彌斯 (Themis / テミス)",
      "塔塔露 (Tataru / タタル)",
      "艾德蒙 (Edmont / エドモン)",
      "萊娜 (Lyna / ライナ)"
    ]
  },
  {
    "image": "q60.png",
    "name": "菲奧·烏爾 (Feo Ul / フェオ・ウル)",
    "options": [
      "芝諾斯 (Zenos / ゼノス)",
      "阿莉塞 (Alisaie / アリゼー)",
      "莉瑟 (Lyse / リセ)",
      "菲奧·烏爾 (Feo Ul / フェオ・ウル)"
    ]
  },
  {
    "image": "q61.png",
    "name": "伊達 (Yda / イダ)",
    "options": [
      "伊達 (Yda / イダ)",
      "阿倫瓦爾德 (Arenvald / アレンヴァルド)",
      "巴庫加加 (Bakool Ja Ja / バクージャジャ)",
      "蓋婭 (Gaia / ガイア)"
    ]
  },
  {
    "image": "q63.png",
    "name": "瑪托雅 (Matoya / マトヤ)",
    "options": [
      "烏克·拉瑪特 (Wuk Lamat / ウクラマト)",
      "弗爾什諾 (Fourchenault / フルシュノ)",
      "瑪托雅 (Matoya / マトヤ)",
      "零 (Zero / ゼロ)"
    ]
  },
  {
    "image": "q64.png",
    "name": "索羅班 (Soroban / ソロバン)",
    "options": [
      "阿莉塞 (Alisaie / アリゼー)",
      "帕帕力莫 (Papalymo / パパリモ)",
      "索羅班 (Soroban / ソロバン)",
      "皮平 (Pippin / ピピン)"
    ]
  },
  {
    "image": "q66.png",
    "name": "埃里克特翁尼亞斯 (Erichthonios / エリクトニオス)",
    "options": [
      "埃里克特翁尼亞斯 (Erichthonios / エリクトニオス)",
      "席林娜 (Cirina / シリナ)",
      "伊爾伯德 (Ilberd / イルベルド)",
      "烏克·拉瑪特 (Wuk Lamat / ウクラマト)"
    ]
  },
  {
    "image": "q67.png",
    "name": "特彌斯 (Themis / テミス)",
    "options": [
      "古魯加加 (Gulool Ja Ja / グルージャジャ)",
      "艾德蒙 (Edmont / エドモン)",
      "特彌斯 (Themis / テミス)",
      "法丹尼爾 (Fandaniel / ファンダニエル)"
    ]
  },
  {
    "image": "q68.png",
    "name": "零 (Zero / ゼロ)",
    "options": [
      "菲奧·烏爾 (Feo Ul / フェオ・ウル)",
      "梅蒂恩 (Meteion / メーティオン)",
      "赫爾墨斯 (Hermes / ヘルメス)",
      "零 (Zero / ゼロ)"
    ]
  },
  {
    "image": "q69.png",
    "name": "瓦爾桑 (Varshahn / ヴァルシャン)",
    "options": [
      "豪雪 (Gosetsu / ゴウセツ)",
      "瓦爾桑 (Varshahn / ヴァルシャン)",
      "古·拉哈·提亞 (G'raha Tia / グ・ラハ・ティア)",
      "皮平 (Pippin / ピピン)"
    ]
  },
  {
    "image": "q70.png",
    "name": "尼德哈娜 (Nidhana / ニッダーナ)",
    "options": [
      "尼德哈娜 (Nidhana / ニッダーナ)",
      "雅·修特拉 (Y'shtola / ヤ・シュトラ)",
      "夕霧 (Yugiri / ユウギリ)",
      "飛燕 (Hien / ヒエン)"
    ]
  },
  {
    "image": "q72.png",
    "name": "弗爾什諾 (Fourchenault / フルシュノ)",
    "options": [
      "西卡爾 (Sicard / シカルド)",
      "弗爾什諾 (Fourchenault / フルシュノ)",
      "拉哈布雷亞 (Lahabrea / ラハブレア)",
      "瓦厲斯 (Varis / ヴァリス)"
    ]
  },
  {
    "image": "q73.png",
    "name": "阿梅莉安絲 (Ameliance / アメリアンス)",
    "options": [
      "阿梅莉安絲 (Ameliance / アメリアンス)",
      "艾德蒙 (Edmont / エドモン)",
      "里塔提恩 (Rhitahtyn / リットアティン)",
      "莉瑟 (Lyse / リセ)"
    ]
  },
  {
    "image": "q74.png",
    "name": "西卡爾 (Sicard / シカルド)",
    "options": [
      "琳 (Ryne / リーン)",
      "雅·修特拉 (Y'shtola / ヤ・シュトラ)",
      "尼德哈娜 (Nidhana / ニッダーナ)",
      "西卡爾 (Sicard / シカルド)"
    ]
  },
  {
    "image": "q75.png",
    "name": "埃馬內蘭 (Emmanellain / エマネラン)",
    "options": [
      "愛梅特賽爾克 (Emet-Selch / エメトセルク)",
      "里塔提恩 (Rhitahtyn / リットアティン)",
      "埃馬內蘭 (Emmanellain / エマネラン)",
      "阿莉塞 (Alisaie / アリゼー)"
    ]
  },
  {
    "image": "q76.png",
    "name": "阿爾圖瓦雷爾 (Artoirel / アルトワレル)",
    "options": [
      "奧爾什方 (Haurchefant / オルシュファン)",
      "法丹尼爾 (Fandaniel / ファンダニエル)",
      "萊娜 (Lyna / ライナ)",
      "阿爾圖瓦雷爾 (Artoirel / アルトワレル)"
    ]
  },
  {
    "image": "q77.png",
    "name": "弗朗塞爾 (Francel / フランセル)",
    "options": [
      "蓋烏斯 (Gaius / ガイウス)",
      "敏菲利亞 (Minfilia / ミンフィリア)",
      "法丹尼爾 (Fandaniel / ファンダニエル)",
      "弗朗塞爾 (Francel / フランセル)"
    ]
  },
  {
    "image": "q78.png",
    "name": "斯蒂法尼維安 (Stephanivien / ステファニヴィアン)",
    "options": [
      "伊達 (Yda / イダ)",
      "巴庫加加 (Bakool Ja Ja / バクージャジャ)",
      "阿爾圖瓦雷爾 (Artoirel / アルトワレル)",
      "斯蒂法尼維安 (Stephanivien / ステファニヴィアン)"
    ]
  },
  {
    "image": "q80.png",
    "name": "泰勒吉·阿代勒吉 (Teledji Adeledji / テレジ・アデレジ)",
    "options": [
      "于里昂熱 (Urianger / ウリエンジェ)",
      "柯納 (Koana / コーナ)",
      "泰勒吉·阿代勒吉 (Teledji Adeledji / テレジ・アデレジ)",
      "豪雪 (Gosetsu / ゴウセツ)"
    ]
  }
];
