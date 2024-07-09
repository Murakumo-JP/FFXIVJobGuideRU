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
      // Action 24 NEW
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
      // Gatherer Role 01
      "Gatherer Role 01": {
         "name": {
            "MIN": "Prospect",
            "BTN": "Triangulate",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/99f88ea5d023e55c25eb9505c72060f24094a8d3.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/2934bfbab2e8cdb9d6539a22c867b3b9ccb57c5c.png",
         },
         "level": '1',
         "classification": 'Способность',
         "recast": '-',
         "content": {
            "MIN": "Показывает на миникарте ближайшие точки сбора mineral deposits и rocky outcrops. Умение активируется автоматически, как только персонаж сменит класс на шахтера (Miner).",
            "BTN": "Показывает на миникарте ближайшие точки сбора mature trees и lush vegetation. Умение активируется автоматически, как только персонаж сменит класс на ботаника (Botanist).",
         },
      },
      // Gatherer Role 02
      "Gatherer Role 02": {
         "name": {
            "MIN": "Lay of the Land",
            "BTN": "Arbor Call",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/80f7ca5ee8fe5169804a5eaddce7066288848754.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/f535ce3b68e6952b486d979bb0f6602cc8838b47.png",
         },
         "level": '3',
         "classification": 'Способность',
         "recast": '20 сек.',
         "content": {
            "MIN": "Позволяет персонажу обнаружить mineral deposit или rocky outcrop, а также отображает на миникарте направление до ближайшей точки сбора в пределах зоны действия умения. Можно использовать только при активном умении Prospect.<br/>Продолжительность: 15 сек.",
            "BTN": "Позволяет персонажу обнаружить mature tree или lush vegetation, а также отображает на миникарте направление до ближайшей точки сбора в пределах зоны действия умения. Можно использовать только при активном умении Triangulate.<br/>Продолжительность: 15 сек.",
         },
      },
      // Gatherer Role 03
      "Gatherer Role 03": {
         "name": {
            "MIN": "Lay of the Land II",
            "BTN": "Arbor Call II",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/b2888c088441cb7d159650bdde285283787ce0ed.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/d7d127c4546e2ec471fc3ae73fe74771d886c962.png",
         },
         "level": '5',
         "classification": 'Способность',
         "recast": '20 сек.',
         "content": {
            "MIN": "Позволяет персонажу обнаружить высокоуровневые mineral deposit или rocky outcrop. А также отображает на миникарте направление до ближайшей точки сбора в пределах зоны действия умения. Можно использовать только при активном умении Prospect.<br/>Продолжительность: 15 сек.",
            "BTN": "Позволяет персонажу обнаружить высокоуровневое mature tree или lush vegetation, а также отображает на миникарте направление до ближайшей точки сбора в пределах зоны действия умения. Можно использовать только при активном умении Triangulate.<br/>Продолжительность: 15 сек.",
         },
      },
      // Gatherer Role 04
      "Gatherer Role 04": {
         "name": {
            "MIN": "Truth of Mountains",
            "BTN": "Truth of Forests",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/91c11ae6c308a90e29cca02b71a7df86ba227202.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/0c0f6fb9e3d7890de8ca9c7f1a9de1b285ff8266.png",
         },
         "level": '45',
         "classification": 'Способность',
         "recast": '-',
         "content": {
            "MIN": "Отображает на миникарте местоположение неизвестных, легендарных и скрытых mineral deposits или rocky outcrops.",
            "BTN": "Отображает на миникарте местоположение неизвестных, легендарных и скрытых mature trees или lush vegetation.",
         },
      },
      // Gatherer Traits 01
      "Gatherer Traits 01": {
         "name": {
            "MIN": "Auto Prospect",
            "BTN": "Auto Triangulate",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/1563a7b70873d8e0df8c5da1a2c93dfdc11633b0.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/67e11300048b8ec756d1787b1954bc579a08aa26.png",
         },
         "level": '2',
         "content": {
            "MIN": "Автоматически активирует эффект Prospect при смене класса на шахтера (Miner).",
            "BTN": "Автоматически активирует эффект Triangulate при смене класса на ботаника (Botanist).",
         },
      },
      // Gatherer Traits 02
      "Gatherer Traits 02": {
         "name": {
            "MIN": "Stone Whisperer",
            "BTN": "Tree Whisperer",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/ef344d4af74d52d1acaac14e701e8f93274090d8.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/63a50a41b5e1e8f7756154438923c3f2f6136857.png",
         },
         "level": '11',
         "content": {
            "MIN": "Позволяет лучше определить характеристики mineral deposit или rocky outcrop, благодаря чему персонаж повышает шанс сбора предметов при соблюдении условий.",
            "BTN": "Позволяет лучше определить свойства mature tree или patch of lush vegetation, благодаря чему персонаж повышает шанс сбора предметов при соблюдении условий.",
         },
      },
      // Gatherer Traits 03
      "Gatherer Traits 03": {
         "name": {
            "MIN": "Stone Whisperer II",
            "BTN": "Tree Whisperer II",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/e2f453b3f30ae111fdee07e82bfbf52558f5ceea.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/b1aa60dee775b98b63cb90a5abe786b8d6c07287.png",
         },
         "level": '16',
         "content": {
            "MIN": "Позволяет лучше определить характеристики mineral deposit или rocky outcrop, что увеличивает количество попыток сбора при соблюдении условий.",
            "BTN": "Позволяет лучше определить свойства mature tree или patch of lush vegetation, что увеличивает количество попыток сбора при соблюдении условий.",
         },
      },
      // Gatherer Traits 04
      "Gatherer Traits 04": {
         "name": {
            "MIN": "Stone Whisperer III",
            "BTN": "Tree Whisperer III",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/843df14fcebfdad27b59677769b65070400370c3.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/9704bb137f07f8acd19c20dc66002378b006326e.png",
         },
         "level": '21',
         "content": {
            "MIN": "Позволяет лучше определить характеристики mineral deposit или rocky outcrop, что увеличивает количество получаемых предметов во время сбора при соблюдении условий.",
            "BTN": "Позволяет лучше определить свойства mature tree or patch или lush vegetation, что увеличивает количество получаемых предметов во время сбора при соблюдении условий.",
         },
      },
      // Gatherer Traits 05
      "Gatherer Traits 05": {
         "name": {
            "MIN": "Stone Whisperer IV",
            "BTN": "Tree Whisperer IV",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/fe226b4734bed3934007217697ae2ed73ca05bc3.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/edea1feee35b95906517594b5663c25fa6a62162.png",
         },
         "level": '26',
         "content": {
            "MIN": "Позволяет лучше определить характеристики mineral deposit или rocky outcrop, что увеличивает количество получаемых предметов во время сбора при соблюдении условий.",
            "BTN": "Позволяет лучше определить свойства mature tree or patch или lush vegetation, что увеличивает количество получаемых предметов во время сбора при соблюдении условий.",
         },
      },
      // Gatherer Traits 06
      "Gatherer Traits 06": {
         "name": 'Auto Sneak',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/3d22d20b1f68cd608fba4c7eacd960b11f1371b0.png',
         "level": '27',
         "content": "Автоматически активирует эффект Sneak при выборе класса. Эффект также автоматически активируется при смене области.<br/>Sneak не будет автоматически активирован в зонах, где это умение не может быть использовано.",
      },
      // Gatherer Traits 07
      "Gatherer Traits 07": {
         "name": "Enhanced Twelve's Bounty",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/ae6e96cee267d095fcc7f653bff10ab4dfe79034.png',
         "level": '41',
         "content": "Умение Twelve's Bounty распространяется на crystals.",
      },
      // Gatherer Traits 08
      "Gatherer Traits 08": {
         "name": "Nymeia's Ward",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/be1b467f4b07e4642f7e463639e320ba23af2b34.png',
         "level": '42',
         "content": "С некоторой вероятностью увеличивает количество получаемых предметов во время сбора, включая crystals.",
      },
      // Gatherer Traits 09
      "Gatherer Traits 09": {
         "name": "Enhanced Twelve's Bounty II",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/911e8f8f7e98f94e9fd7e266cf0cebe8df7a36f1.png',
         "level": '50',
         "content": "Умение Twelve's Bounty распространяется на clusters.",
      },
      // Gatherer Traits 10
      "Gatherer Traits 10": {
         "name": {
            "MIN": "Stone Whisperer V",
            "BTN": "Tree Whisperer V",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/37d48024782d5839f2d59e7e3913c0c237b8a655.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/481e884cf2c4e249e3636ab07514d6a34555cb2f.png",
         },
         "eorzeadb": {
            "MIN": "https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/0a9f7c076e6/",
            "BTN": "https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/8d620eecdda/",
         },
         "level": '53',
         "content": {
            "MIN": "Позволяет лучше оценить характеристики mineral deposit или rocky outcrop, что еще больше повышает шансы сбора при соблюдении условий.",
            "BTN": "Позволяет лучше определить свойства mature tree или patch of lush vegetation, что еще больше повышает шансы сбора при соблюдении условий.",
         },
      },
      // Gatherer Traits 11
      "Gatherer Traits 11": {
         "name": {
            "MIN": "One with the Mountain",
            "BTN": "One with the Forest",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/bdf8284f66ed9fb16e69a92ed83092627ca99305.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/bf08d69a7b9a2fe9e23943b478a6f1211bd6b592.png",
         },
         "level": '60',
         "content": {
            "MIN": "Автоматически активирует эффект Truth of Mountains при смене класса на шахтера.",
            "BTN": "Автоматически активирует эффект Truth of Forests при смене класса на ботаника.",
         },
      },
      // Gatherer Traits 12
      "Gatherer Traits 12": {
         "name": {
            "MIN": "Bountiful Yield Mastery",
            "BTN": "Bountiful Harvest Mastery",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/c045f323cf179b46f4a46754c2f547d52249970e.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/e7506b15fb74081ab4b6c610cd0f67d9fb99520c.png",
         },
         "eorzeadb": {
            "MIN": "https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/9e9f9b79ae4/",
            "BTN": "https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/b82804dfe4c/",
         },
         "level": '68',
         "content": {
            "MIN": "Улучшает умение Bountiful Yield до Bountiful Yield II.",
            "BTN": "Улучшает умение Bountiful Harvest до Bountiful Harvest II.",
         },
      },
      // Gatherer Traits 13
      "Gatherer Traits 13": {
         "name": 'Enhanced GP Regeneration',
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/30e7baabae4846e25a686b52adfdbb53a1a2f492.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/4aeeba59b6d9a36514a28c9ef7243b6a64f91a66.png",
         },
         "eorzeadb": {
            "MIN": "https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/03c4eb77b3a/",
            "BTN": "https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/66987f9e4f2/",
         },
         "level": '70',
         "content": "Повышает базовую скорость регенерации GP на единицу.",
      },
      // Gatherer Traits 14
      "Gatherer Traits 14": {
         "name": "Enhanced Twelve's Bounty III",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/6dfca7c56c9f211af4ea8fd6c2cf55aa0447aef6.png',
         "level": '71',
         "content": "Увеличивает базовое количество получаемых во время сбора предметов от Twelve's Bounty на один.",
      },
      // Gatherer Traits 15
      "Gatherer Traits 15": {
         "name": 'Enhanced GP Regeneration II',
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/705fba4f808fe8935f2855e7b53850f9e26d77c1.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/7847dbc45282148f89e53d07cb1d3400c344e8d3.png",
         },
         "level": '80',
         "content": "Повышает базовую скорость регенерации GP на два. При сборе повышает базовый уровень регенерации на один.",
      },
      // Gatherer Traits 16
      "Gatherer Traits 16": {
         "name": 'Enhanced GP Regeneration III',
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/82bb7f7edd92a4d6973d03fbff021fab414dd68d.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/f134c409fcf23011c8ad835c2adc3c9aac8ab4af.png",
         },
         "level": '83',
         "content": "Повышает базовую скорость регенерации GP на три. При сборе повышает базовый уровень регенерации на один.",
      },
      // Gatherer Traits 17
      "Gatherer Traits 17": {
         "name": {
            "MIN": "Enhanced Solid Reason",
            "BTN": "Enhanced Ageless Words",
         },
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/aeb928223c51a892ae43390e06c2b17b8fb05406.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/ebe8d217bd3132aa7fa055720afbcdebf40e16c2.png",
         },
         "level": '90',
         "content": {
            "MIN": "Дает умению Solid Reason 50% шанс на получение игроком эффекта Eureka Moment.",
            "BTN": "Дает умению Ageless Words 50% шанс на получение игроком эффекта Eureka Moment.",
         },
      },
      // Gatherer Traits 18 NEW
      "Gatherer Traits 18": {
         "name": "Revisit",
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/663d79ba01de16b8c6050604ac1b2ff2c60d8bbf.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/65d6a139e00d6e2743cf716d2f672d5d2e2da5bb.png",
         },
         "level": '91',
         "content": " ",
      },
      // Gatherer Traits 19 NEW
      "Gatherer Traits 19": {
         "name": "Collector's High Standard",
         "skill_icon": {
            "MIN": "https://lds-img.finalfantasyxiv.com/d/57f0c5155877e1323e79c4e3a7388e1b4f014b39.png",
            "BTN": "https://lds-img.finalfantasyxiv.com/d/3b3a32464ee2b7ebb1d9d46bdf3c75b5512cb2a5.png",
         },
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/a94b1abd066/',
         "level": '100',
         "content": {
            "MIN": " ",
            "BTN": " ",
         },
      },
   };
   FILL_DB_VALUES(db);
   FILL_DB_SKILLS_GATHERING(db);
   FILL_DB_GATHERING_PASSIVE(db);
})();