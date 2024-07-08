(() =>{
   let db = {
      "Gathering Update": `Последнее обновление: 27/06/2024`,
      // Action 01
      "Action 01": {
         "name": {
            "MIN": "Sharp Vision",
            "BTN": "Field Mastery",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/7776104ec581999d5730940e0a07a592701f438e.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/0265d8e360e249da9c0c803380211a54eff755df.png",
         },
         "level": '4',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '50',
         "content": "Увеличивает шанс получения предметов при сборе на 5%. Увеличение не применяется к предметам с шансом получения 0%.",
      },
      // Action 02
      "Action 02": {
         "name": {
            "MIN": "Sharp Vision II",
            "BTN": "Field Mastery II",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/b21c26edb473ba54365dbdfb8f885e488502a62c.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/a4d564eec48761cf0bdb306809dcffa2c9defba4.png",
         },
         "level": '5',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '100',
         "content": "Увеличивает шанс получения предметов при сборе на 15%. Увеличение не применяется к предметам с шансом получения 0%.",
      },
      // Action 03
      "Action 03": {
         "name": 'Sneak',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/857ec6bb92c1ba7fbd2f9e4ed9488da157549645.png',
         "level": '8',
         "classification": 'Способность',
         "recast": '-',
         "cost": '0',
         "content": "Бесшумная походка, позволяет избегать противников на четыре уровня выше персонажа.",
      },
      // Action 04
      "Action 04": {
         "name": {
            "MIN": "Sharp Vision III",
            "BTN": "Field Mastery III",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/0bbe373c893aec8c5749ca11e7ac5e9a8ae6385c.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/d5eee45cdfee5fe5ca6dbce39b5e5599cc533803.png",
         },
         "level": '10',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '250',
         "content": "Увеличивает шанс получения предмета при сборе на 50%. Не сработает при сборе, если шанс добычи 0%.",
      },
      // Action 05
      "Action 05": {
         "name": "Mountaineer's Gift I",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/17b81385fde3996f5dceec7f69eb6ed921724987.png',
         "level": '15',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '50',
         "content": "Увеличивает шанс срабатывания Gatherer's Boon на 10%. Не сработает при сборе, если шанс добычи 0%.",
      },
      // Action 06
      "Action 06": {
         "name": "The Twelve's Bounty",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/bb72a73a8e85e73c677498bc89a2067a12369ee0.png',
         "level": '20',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '150',
         "content": "Увеличивает количество собираемых shard, crystal и cluster yields на 3.<br/>Не сработает, если место сбора не содержит shard, crystal, and cluster yields.",
      },
      // Action 07
      "Action 07": {
         "name": {
            "MIN": "Clear Vision",
            "BTN": "Flora Mastery",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/b7b81c8844b39356dcbdc504a217e2d74292fa54.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/4e1e0d924f3d9e00c977704d0beba0b41048fa4e.png",
         },
         "level": '23',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '50',
         "content": "Увеличивает шанс получения предмета для следующей попытки сбора на 15%. Не сработает при сборе, если шанс добычи 0%.",
      },
      // Action 08
      "Action 08": {
         "name": {
            "MIN": "Bountiful Yield",
            "BTN": "Bountiful Harvest",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/a4a18e80eb9ea8dad19fdb1e43f4c13006b5e944.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/3f321357853ff740411e2f412254bf17b3cd17a2.png",
         },
         "level": '24',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '100',
         "content": "Увеличивает количество получаемых предметов при следующей попытке сбора на один.",
      },
      // Action 09
      "Action 09": {
         "name": {
            "MIN": "Solid Reason",
            "BTN": "Ageless Words",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/5e3f52fe624609f40fd81e9a1a20c659cb12d327.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/0d3e3f07c1db9344e96da54fefc6d66eb54f26fd.png",
         },
         "level": '25',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '300',
         "content": "Дает дополнительную попытку сбора. При сборе collectables восстанавливает 1 integrity.<br/>Дополнительный эффект: 50% шанс получить эффект Eureka Moment",
      },
      // Action 10
      "Action 10": {
         "name": {
            "MIN": "King's Yield",
            "BTN": "Blessed Harvest",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/1a5c0826e1c078faa733829e0b054697b5fc1410.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/816cd5383d58f2d2a6b8209e50c9d7e5bfc67484.png",
         },
         "level": '30',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '400',
         "content": "Увеличивает количество получаемого при сборе предмета на один.",
      },
      // Action 11
      "Action 11": {
         "name": {
            "MIN": "King's Yield II",
            "BTN": "Blessed Harvest II",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/6ec7a46292dacd2b0cc19fadbccfd94dd019f206.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/31ba3194b41a2575399c9882e6d28757353f66b9.png",
         },
         "level": '40',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '500',
         "content": "Увеличивает количество получаемых предметов при следующей попытке сбора на два.",
      },
      // Action 12
      "Action 12": {
         "name": 'Collect',
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/8532ffbf30e00d3dd48a425b7a9dfca9e9b7071e.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/ea33c3737679e3186707e1d05d3a801f8ddbfaa9.png",
         },
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/a94b1abd066/',
         "level": '50',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '0',
         "content": "Собирает collectable предмет с его текущим collectability рейтингом.<br/>Уменьшает integrity на 1.",
      },
      // Action 13
      "Action 13": {
         "name": "Scour",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/18ff13b278138c7690b35e333b1cb24f60d43710.png',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/a94b1abd066/',
         "level": '50',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '0',
         "content": "Повышает collectability предмета. Увеличение определяется рейтингом сбора (gathering rating).<br/>Уменьшает integrity на 1.",
      },
      // Action 14
      "Action 14": {
         "name": "Brazen Woodsman",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/8d4871671a3cae1003e78d29ca68f91154298811.png',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/a94b1abd066/',
         "level": '50',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '0',
         "content": "Увеличивает collectability предмета. Увеличение происходит случайным образом в диапазоне от 50 до 150% от эффективности Scour.<br/>Уменьшает integrity на 1.",
      },
      // Action 15
      "Action 15": {
         "name": "Meticulous Woodsman",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/f5dd83f5f2fa5b10a3cfe821f6e626b8922c6505.png',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/a94b1abd066/',
         "level": '50',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '0',
         "content": "Повышает collectability предмета. Увеличение составляет 75% от эффективности Scour.<br/>Уменьшает integrity на 1. При использовании есть шанс, что integrity не изменится, который зависит от вашего рейтинга сбора (gathering rating).",
      },
      // Action 16
      "Action 16": {
         "name": "Scrutiny",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2173762adfe1521ca6aa0fbaf0735e578a1664b5.png',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/a94b1abd066/',
         "level": '50',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '200',
         "content": "Улучшает увеличение collectability следующего предмета. Эффект зависит от вашего рейтинга восприятия (perception rating).",
      },
      // Action 17
      "Action 17": {
         "name": {
            "MIN": "Mountaineer's Gift II",
            "BTN": "Pioneer's Gift II",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/14c45e87b9fa8abe6b16104a9aeddc9bfc19ef15.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/16ba049dbedae727a1b23092305e31b522b39011.png",
         },
         "level": '50',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '100',
         "content": "Увеличивает шанс срабатывания Gatherer's Boon на 30%. Не сработает при сборе, если шанс добычи 0%.<br/>Эффект может использоваться одновременно с Mountaineer's Gift I.",
      },
      // Action 18
      "Action 18": {
         "name": {
            "MIN": "Luck of the Mountaineer",
            "BTN": "Luck of the Pioneer",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/7c0957f7505a33a744e32691ecdddc4cb9829707.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/486674c8800105f65bb2f5952b297d4270ab39ad.png",
         },
         "eorzeadb": {
            "MIN": "https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/2ec172f3e49/",
            "BTN": "https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/54baece3283/",
         },
         "level": '55',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '200',
         "content": "Позволяет увидеть скрытые предметы во время сбора.",
      },
      // Action 19
      "Action 19": {
         "name": {
            "MIN": "Bountiful Yield II",
            "BTN": "Bountiful Harvest II",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/cd913af6a15b37894f412f47e1b35b1c2186b490.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/4c6a426da3a9efd03c300805a7caed3c669ccdbb.png",
         },
         "eorzeadb": {
            "MIN": "https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/9e9f9b79ae4/",
            "BTN": "https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/b82804dfe4c/",
         },
         "level": '68',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '100',
         "content": "Увеличивает количество предметов, получаемых при следующей попытке сбора, на один, два или три.<br/>Количество зависит от рейтинга сбора (gathering rating).",
      },
      // Action 20
      "Action 20": {
         "name": 'The Giving Land',
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/f53d7b0308353a7431a21f378514cb26f5d66a88.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/df152c10ca865203a7cc2cf92bb4ee370759a00c.png",
         },
         "level": '74',
         "classification": 'DoL способность',
         "recast": '180 сек.',
         "cost": '200',
         "content": "Увеличивает количество собираемых shard, crystal и cluster yields на случайное количество.<br/>Эффект может использоваться одновременно с The Twelve's Bounty.<br/>Не сработает, если место сбора не дает shard, crystal and cluster yields.",
      },
      // Action 21
      "Action 21": {
         "name": {
            "MIN": "Nald'thal's Tidings",
            "BTN": "Nophica's Tidings",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/af6088be601b6f04dac012c2f0513e0dfaa5088f.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/3f95f73a80dd817a1292f631a1f49af5f2ba4011.png",
         },
         "level": '81',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '200',
         "content": "Увеличивает количество предметов, получаемых с помощью эффекта Gatherer's Boon, на 1.",
      },
      // Action 22
      "Action 22": {
         "name": "Collector's Focus",
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/7a5ecb2f6a3913825d1626c2c058364e545af96d.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/ef19938212dd2651c4ccffff2c920dfe565aec27.png",
         },
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/a94b1abd066/',
         "level": '85',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '100',
         "content": "Увеличивает шанс срабатывания Collector's Intuition на 75% при следующем использовании collectable умения.",
      },
      // Action 23
      "Action 23": {
         "name": "Wise to the World",
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/0bdb0683c158d431e6274cf6ef2100532d1a40ea.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/e125df92eba06fc3a0e5b0d14e8f6c7f41033546.png",
         },
         "level": '90',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '0',
         "content": "Дает дополнительную попытку сбора или восстанавливает 1 integrity при сборе collectables предметов.<br/>Можно использовать только под действием эффекта Eureka Moment.",
      },
      // Action 24
      "Action 24": {
         "name": "Priming Touch",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/1c0b33077e7d53177839a3e2571ca1f66892a0db.png',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/a94b1abd066/',
         "level": '95',
         "classification": 'DoL способность',
         "recast": '-',
         "cost": '100',
         "content": " ",
      },
   };
   FILL_DB_VALUES(db);
   FILL_DB_SKILLS_GATHERING(db);
   FILL_DB_GATHERING_PASSIVE(db);
})();