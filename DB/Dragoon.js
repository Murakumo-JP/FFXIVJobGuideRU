(() =>{
   let db = {
      "PVE Update": `Последнее обновление: 27/06/2024`,
      "PVP Update": `Последнее обновление: 27/06/2024`,
      // PVE Skill 01
      "PVE Skill 01": {
         "name": 'True Thrust',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a456526b20c613a31c9ff03a7cd8d69ab328a4c8.png',
         "job_icon": 'LNC',
         "level": '1',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 230.<br/><br/>※Умение меняется на Raiden Thrust под эффектом Draconian Fire.',
      },
      // PVE Skill 02
      "PVE Skill 02": {
         "name": 'Vorpal Thrust',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/85a78cf7b49d80ab94aa206b385563ffa0222346.png',
         "job_icon": 'LNC',
         "level": '4',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 130<br/>Комбо умение: True Thrust<br/>Сила в комбо: 280',
      },
      // PVE Skill 03
      "PVE Skill 03": {
         "name": 'Life Surge',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/eb7e59cbec93afbdf7a3cecd0e164c545ea8dec2.png',
         "job_icon": 'LNC',
         "level": '6',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '40 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Гарантирует критический (critical) урон при использовании первого боевого навыка, пока активен Life Surge.<br/>Продолжительность: 5 сек.<br/>Наносимый урон увеличивается под действием эффектов, повышающих вероятность критического (critical) урона.<br/>Эффект не может быть применен к периодическому урону.<br/>Дополнительный эффект: поглощает часть наносимого урона в виде HP<br/>Максимум зарядов: 2',
      },
      // PVE Skill 04
      "PVE Skill 04": {
         "name": 'Piercing Talon',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/23a925ec7fe/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b34933ec0ea122c75fd1deeb69f3b9df942dbdc1.png',
         "job_icon": 'LNC',
         "level": '15',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '20y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Дальний удар, наносящий урон с силой атаки 150.',
      },
      // PVE Skill 05
      "PVE Skill 05": {
         "name": 'Disembowel',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/d5052c9c0d1bf846c9a4fb70497dd1cea97ceca6.png',
         "job_icon": 'LNC',
         "level": '18',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 140.<br/>Комбо умение: True Thrust<br/>Сила в комбо: 250<br/>Комбо бонус: накладывает эффект Power Surge<br/>Эффект Power Surge: увеличивает наносимый урон на 10%<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 06
      "PVE Skill 06": {
         "name": 'Full Thrust',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/34a78b866a4906267ee8f0e93457cb22b5550b9d.png',
         "job_icon": 'LNC',
         "level": '26',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 100.<br/>Комбо умение: Vorpal Thrust<br/>Сила в комбо: 380',
      },
      // PVE Skill 07
      "PVE Skill 07": {
         "name": 'Lance Charge',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/256148b3e98/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/cb90fa2f691cd58f5b068f6088550b3d56c2bd73.png',
         "job_icon": 'LNC',
         "level": '30',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '60 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Увеличивает наносимый урон на 10%.<br/>Продолжительность: 20 сек.',
      },
      // PVE Skill 08
      "PVE Skill 08": {
         "name": 'Jump',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/0533230f632/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/f33d8ab6bf2a7e902b9292016eefbbb0fe551548.png',
         "job_icon": 'DRG',
         "level": '30',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "range": '20y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар с прыжком, наносящий урон с силой атаки 320. После атаки возвращает персонажа в исходное положение.<br/>Дополнительный эффект: накладывает эффект Dive Ready<br/>Продолжительность: 15 сек.',
      },
      // PVE Skill 09
      "PVE Skill 09": {
         "name": 'Elusive Jump',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/c223d7cb994/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/410e90de2429654f6a4912e15c1d07597f765f53.png',
         "job_icon": 'DRG',
         "level": '35',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Совершает прыжок на место, находящееся в 15 ялмах позади персонажа.<br/>Невозможно использовать, если персонаж находится под эффектами, ограничивающими перемещение.',
      },
      // PVE Skill 10
      "PVE Skill 10": {
         "name": 'Doom Spike',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/28e426096d9/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/1e6e09c76f8847d3caf2ee330400848219460dfa.png',
         "job_icon": 'DRG',
         "level": '40',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '10y',
         "radius_img": 'R6',
         "radius": '10y',
         "content": 'Удар, наносящий урон с силой атаки 110 по всем противникам по прямой линии перед персонажем.',
      },
      // PVE Skill 11
      "PVE Skill 11": {
         "name": 'Winged Glide',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/6191bc4391f/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/970713e35721fcecc8fce83a6064c984bdeb22c3.png',
         "job_icon": 'DRG',
         "level": '45',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '60 сек.',
         "range": '20y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Рывок к выбранному противнику.<br/>Количество зарядов: 2<br/>Невозможно использовать, если персонаж находится под эффектами ограничивающими перемещение.',
      },
      // PVE Skill 12
      "PVE Skill 12": {
         "name": 'Chaos Thrust',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b77850f0a67953c4b4a13228788bdc1ec41c20fc.png',
         "job_icon": 'LNC',
         "level": '50',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 100, при выполнении удара со спины цели 140.<br/>Комбо умение: Disembowel<br/>Сила в комбо: 220<br/>Сила в комбо со спины: 260<br/>Комбо бонус: периодический урон<br/>Сила атаки: 40<br/>Продолжительность: 24 сек.',
      },
      // PVE Skill 13
      "PVE Skill 13": {
         "name": 'Dragonfire Dive',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/f8e7dbb803b/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/1ccffd13759a4491f95494464c6d10dc33c006af.png',
         "job_icon": 'DRG',
         "level": '50',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "range": '20y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": "Удар с прыжком, наносящий огненный урон с силой атаки 500 по цели и всем ближайшим противникам.<br/>Дополнительный эффект: накладывает эффект Dragon's Flight<br/>Продолжительность: 30 сек.<br/>Невозможно использовать, если персонаж находится под эффектами, ограничивающими перемещение.",
      },
      // PVE Skill 14
      "PVE Skill 14": {
         "name": 'Battle Litany',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/29631d50fda/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/508f9edf2563db3319c3f623ce5d94517062263c.png',
         "job_icon": 'DRG',
         "level": '52',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '30y',
         "content": 'Увеличивает шанс нанесения критического (critical) урона персонажем и всеми ближайшими сопартийцами на 10%.<br/>Продолжительность: 20 сек.',
      },
      // PVE Skill 15
      "PVE Skill 15": {
         "name": 'Fang and Claw',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/aa012aec581/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4fe2230dcc26896793e2936288fd25252dcfc56c.png',
         "job_icon": 'DRG',
         "level": '56',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": "Удар, наносящий урон с силой атаки 140, при выполнении удара в бок цели 180.<br/>Комбо умение: Heavens' Thrust<br/>Сила в комбо: 300<br/>Сила в комбо сбоку: 340",
      },
      // PVE Skill 16
      "PVE Skill 16": {
         "name": 'Wheeling Thrust',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/b176ac13bc3/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a8a45f08c2c5db904616f91470667fe4aaa6bcc5.png',
         "job_icon": 'DRG',
         "level": '58',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 140, при выполнении со спины цели 180.<br/>Комбо умение: Chaotic Spring<br/>Сила в комбо: 300<br/>Сила в комбо сбоку: 340',
      },
      // PVE Skill 17
      "PVE Skill 17": {
         "name": 'Geirskogul',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/373f3c4375b/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/9997d1e9e3008de62095f170806afc46bf8c0512.png',
         "job_icon": 'DRG',
         "level": '60',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "range": '15y',
         "radius_img": 'R6',
         "radius": '15y',
         "content": 'Удар, наносящий физический урон по всем противникам по прямой линии перед персонажем с силой атаки 280 для первого и на 50% меньше для остальных.<br/>Дополнительный эффект: накладывает эффект Life of the Dragon<br/>Эффект Life of the Dragon: увеличивает наносимый урон на 15%<br/>Продолжительность: 20 сек.<br/>Дополнительный эффект: накладывает эффект Nastrond Ready<br/>Продолжительность: 20 сек.',
      },
      // PVE Skill 18
      "PVE Skill 18": {
         "name": 'Sonic Thrust',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/9457aa084f7bf99d66ad2c32318a7377886fa5b1.png',
         "job_icon": 'DRG',
         "level": '62',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '10y',
         "radius_img": 'R6',
         "radius": '10y',
         "content": 'Удар, наносящий физический урон по всем противникам по прямой линии перед персонажем с силой атаки 100.<br/>Комбо умение: Doom Spike<br/>Сила в комбо: 120<br/>Комбо бонус: накладывает эффект Power Surge<br/>Эффект Power Surge: увеличивает наносимый урон на 10%<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 19
      "PVE Skill 19": {
         "name": 'Drakesbane',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/1bc31e46fb90bda5697cf272e0df8b9ac8086b13.png',
         "job_icon": 'DRG',
         "level": '64',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 440.<br/>Комбо умение: Wheeling Thrust или Fang and Claw<br/>Комбо бонус: накладывает эффект Draconian Fire<br/>Продолжительность: 30 сек.<br/>Может быть использовано только после успешного применения Wheeling Thrust или Fang and Claw в качестве комбо умения.<br/><br/>※Это умение нельзя поместить на хотбар.<br/>※Wheeling Thrust и Fang and Claw меняется на Drakesbane при соблюдении требований к выполнению.',
      },
      // PVE Skill 20
      "PVE Skill 20": {
         "name": 'Mirage Dive',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/83da9c48674e13d357d7ff8ba8fba6b49f287f79.png',
         "job_icon": 'DRG',
         "level": '68',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '20y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 200.<br/>Можно использовать только при Dive Ready.',
      },
      // PVE Skill 21
      "PVE Skill 21": {
         "name": 'Nastrond',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/d522a7e2ce9/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/97ac6d936a5ade6f37ed4395355893eb976a477a.png',
         "job_icon": 'DRG',
         "level": '70',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '10 сек.',
         "range": '15y',
         "radius_img": 'R6',
         "radius": '15y',
         "content": 'Удар, наносящий физический урон по всем противникам по прямой линии перед персонажем с силой атаки 360 для первого и на 50% меньше для остальных.<br/>Может быть использовано только под действием эффекта Nastrond Ready.',
      },
      // PVE Skill 22
      "PVE Skill 22": {
         "name": 'Coerthan Torment',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/673868536e6be70ed3ae3e1b4be66579b572e324.png',
         "job_icon": 'DRG',
         "level": '72',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '10y',
         "radius_img": 'R6',
         "radius": '10y',
         "content": 'Удар, наносящий физический урон по всем противникам по прямой линии перед персонажем с силой атаки 100.<br/>Комбо умение: Sonic Thrust<br/>Сила в комбо: 150<br/>Комбо бонус: накладывает эффект Draconian Fire<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 23
      "PVE Skill 23": {
         "name": 'High Jump',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/864834c5502d69496057326478a42ef74a504af3.png',
         "job_icon": 'DRG',
         "level": '74',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "range": '20y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар с прыжком, наносящий урон с силой атаки 400. Возвращает персонажа на позицию с которой была произведена атака после неё.<br/>Дополнительный эффект: Накладывает эффект Dive Ready<br/>Продолжительность: 15 сек.',
      },
      // PVE Skill 24
      "PVE Skill 24": {
         "name": 'Raiden Thrust',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/d63e1dd2c2cb09e371caf50f997b65f8148c578b.png',
         "job_icon": 'DRG',
         "level": '76',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 320.<br/>Дополнительный эффект: усиливает Firstminds Focus на 1<br/>Может быть использовано только под эффектом Draconian Fire.<br/><br/>※Это умение нельзя поместить на хотбар.<br/>※True Thrust меняется на Raiden Thrust при соблюдении требований к выполнению.',
      },
      // PVE Skill 25
      "PVE Skill 25": {
         "name": 'Stardiver',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/235f159d863cc53374d2029a1bfb141828fad5b5.png',
         "job_icon": 'DRG',
         "level": '80',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "range": '20y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Удар с прыжком, наносящий огненный урон с силой атаки 720 по цели и на 50% меньше для остальных.<br/>Дополнительный эффект: накладывает эффект Starcross Ready<br/>Продолжительность: 20 сек.<br/>Может быть использовано только под эффектом Life of the Dragon.<br/>Невозможно использовать, если персонаж находится под эффектами ограничивающими перемещение.',
      },
      // PVE Skill 26
      "PVE Skill 26": {
         "name": 'Draconian Fury',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/51e0251a0915bf36c3c804a760c8b3eaa3fe869e.png',
         "job_icon": 'DRG',
         "level": '82',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '10y',
         "radius_img": 'R6',
         "radius": '10y',
         "content": 'Удар, наносящий физический урон по всем противникам по прямой линии перед персонажем с силой атаки 130.<br/>Дополнительный эффект: усиливает Firstminds Focus на 1<br/>Может быть использовано только под действием эффекта Draconian Fire.<br/><br/>※Это умение нельзя поместить на хотбар.<br/>※Doom Spike меняется на Draconian Fire при соблюдении требований к выполнению.',
      },
      // PVE Skill 27
      "PVE Skill 27": {
         "name": "Heavens' Thrust",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e8ab8aa66c28e6c6fd4acf489417d7e7e2d5acc6.png',
         "job_icon": 'DRG',
         "level": '86',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 140.<br/>Комбо умение: Lance Barrage<br/>Сила в комбо: 440',
      },
      // PVE Skill 28
      "PVE Skill 28": {
         "name": 'Chaotic Spring',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e34337371ce368cb087a6c9cf3cad150271b7077.png',
         "job_icon": 'DRG',
         "level": '86',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 140, при выполнении удара со спины цели 180.<br/>Комбо умение: Spiral Blow<br/>Сила в комбо: 300<br/>Сила в комбо при ударе со спины: 340<br/>Комбо бонус: периодический урон<br/>Сила атаки: 45<br/>Продолжительность: 24 сек.',
      },
      // PVE Skill 29
      "PVE Skill 29": {
         "name": 'Wyrmwind Thrust',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e61f89ed9db5020d7733920451f4d1809fe52c6b.png',
         "job_icon": 'DRG',
         "level": '90',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '10 сек.',
         "range": '15y',
         "radius_img": 'R6',
         "radius": '15y',
         "content": 'Удар, наносящий урон по прямой линии перед персонажем с силой атаки 440 для первого и на 50% меньше для остальных.<br/>Стоимость Firstminds Focus: 2',
      },
      // PVE Skill 30 NEW
      "PVE Skill 30": {
         "name": 'Rise of the Dragon',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/f8e7dbb803b/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4d7cca717dd43f7598d848d99886ccaec3835bad.png',
         "job_icon": 'DRG',
         "level": '92',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '20y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": "Удар, наносящий нестихийный урон по цели и всем окружающим противникам с силой атаки 550 для первого и на 50% меньше для остальных.<br/>Может быть использовано только под действием эффекта Dragon's Flight.",
      },
      // PVE Skill 31 NEW
      "PVE Skill 31": {
         "name": 'Lance Barrage',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a5743cd6a29dd664a044690a6e98f3ddeb05eb5a.png',
         "job_icon": 'DRG',
         "level": '96',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 130.<br/>Комбо умение: True Thrust<br/>Сила в комбо: 340',
      },
      // PVE Skill 32 NEW
      "PVE Skill 32": {
         "name": 'Spiral Blow',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b87f6aa2ebc0b8c4a858b76c6be82094738a6247.png',
         "job_icon": 'DRG',
         "level": '96',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 140.<br/>Комбо умение: True Thrust<br/>Сила в комбо: 300<br/>Комбо бонус: накладывает эффект Power Surge<br/>Эффект Power Surge: увеличивает наносимый урон на 10%<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 33 NEW
      "PVE Skill 33": {
         "name": 'Starcross',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/fa02faafe16ebea100212e1ae3b89298bc249a7f.png',
         "job_icon": 'DRG',
         "level": '100',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '3y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Удар, наносящий нестихийный урон по цели и всем окружающим противникам с силой атаки 900 для первого и на 50% меньше для остальных.<br/>Может быть использовано только под действием эффекта Starcross Ready.',
      },
      // Trait 01
      "Trait 01": {
         "name": 'Enhanced Jump',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/3c1cf888f4c/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4c5dedb70ceeba4055bd3ae73297953f986e4019.png',
         "job_icon": 'DRG',
         "level": '54',
         "content": 'Увеличивает силу атаки Jump до 320.',
      },
      // Trait 02
      "Trait 02": {
         "name": 'Life of the Dragon',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/d522a7e2ce9/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/c9d5b7f74c9107188eec0bb2cad21e3081113382.png',
         "job_icon": 'DRG',
         "level": '70',
         "content": 'Улучшает Blood of the Dragon до Life of the Dragon.<br/>Эффект Life of the Dragon: увеличивает наносимый урон на 15%.<br/>При успешном использования Geirskogul, дает 3 стака Nastrond Ready.<br/>Продолжительность: 20 сек.',
      },
      // Trait 03
      "Trait 03": {
         "name": 'Jump Mastery',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/487203b1d939fa5da7aaec335a10c30bae150ca5.png',
         "job_icon": 'DRG',
         "level": '74',
         "content": 'Улучшает умение Jump до High Jump.',
      },
      // Trait 04
      "Trait 04": {
         "name": 'Lance Mastery',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4da1e6e139afd6c3c1d6db696410641aab50b31d.png',
         "job_icon": 'DRG',
         "level": '76',
         "content": 'Увеличивает силу атаки True Thrust до 230, Vorpal Thrust до 130, и Disembowel до 140.<br/>Накладывает эффект Draconian Fire, если Drakesbane выполнено после Fang and Claw или Wheeling Thrust.<br/>Продолжительность: 30 сек.<br/>Эффект Draconian Fire заканчивается при выполнении любого боевого навыка ближнего боя.<br/>Улучшает True Thrust до Raiden Thrust, пока персонаж находится под эффектом Draconian Fire.',
      },
      // Trait 05
      "Trait 05": {
         "name": 'Enhanced Coerthan Torment',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a5cb24b338a7fda93626df156a3a6ef0352103a0.png',
         "job_icon": 'DRG',
         "level": '82',
         "content": 'Накладывает эффект Draconian Fire после успешного завершения комбо с Coerthan Torment.<br/>Продолжительность: 30 сек.<br/>Эффект Draconian Fire заканчивается при выполнении любого боевого навыка ближнего боя.<br/>Улучшает Doom Spike до Draconian Fire, пока персонаж находится под эффектом Draconian Fire.',
      },
      // Trait 06
      "Trait 06": {
         "name": 'Enhanced Winged Glide',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/ccdadc18ab7137d11372e01419e8589ef06a94e8.png',
         "job_icon": 'DRG',
         "level": '84',
         "content": 'Позволяет накапливать заряды для последовательного использования Winged Glide.<br/>Максимум зарядов: 2',
      },
      // Trait 07
      "Trait 07": {
         "name": 'Lance Mastery II',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/1d331630aba68af2ef45a7c0b7270529c9b7b9ea.png',
         "job_icon": 'DRG',
         "level": '86',
         "content": "Улучшает умение Full Thrust до Heavens' Thrust и Chaos Thrust до Chaotic Spring. Также увеличивает силу атаки Drakesbane до 400.",
      },
      // Trait 08
      "Trait 08": {
         "name": 'Enhanced Life Surge',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/518467072242157cd4a519d8f99ee64cc2a51769.png',
         "job_icon": 'DRG',
         "level": '88',
         "content": 'Позволяет накапливать заряды для последовательного использования Life Surge.<br/>Максимум зарядов: 2',
      },
      // Trait 09
      "Trait 09": {
         "name": 'Lance Mastery III',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2f3e1a3378cc09d6e54c6be2a920c432b47845cc.png',
         "job_icon": 'DRG',
         "level": '90',
         "content": 'Увеличивает силу атаки Geirskogul до 280 и Nastrond до 360.<br/>Позволяет усилить Firstminds Focus при успешном использовании Raiden Thrust или Draconian Fury, вплоть до 2 зарядов.',
      },
      // Trait 10
      "Trait 10": {
         "name": 'Enhanced Dragonfire Dive',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/9620c52ce9377062039809fc58e3b38a00872b97.png',
         "job_icon": 'DRG',
         "level": '92',
         "content": "Накладывает эффект Dragon's Flight после использования Dragonfire Dive.<br/>Продолжительность: 30 сек.",
      },
      // Trait 11
      "Trait 11": {
         "name": 'Melee Mastery',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4c948f409f459cc6cc4983962f78d071f06ef5b8.png',
         "job_icon": 'DRG',
         "level": '94',
         "content": "Увеличивает силу атаки Fang and Claw до 140, Wheeling Thrust до 140, Drakesbane до 440, Raiden Thrust до 320, Stardiver до 720, Heavens' Thrust до 140 и Chaotic Spring до 140.",
      },
      // Trait 12
      "Trait 12": {
         "name": 'Lance Mastery IV',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/846403f0c92dee00d9b075f5133f9eb5096afdc1.png',
         "job_icon": 'DRG',
         "level": '96',
         "content": 'Улучшает умение Vorpal Thrust до Lance Barrage и Disembowel до Spiral Blow.',
      },
      // Trait 13
      "Trait 13": {
         "name": 'Enhanced Stardiver',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/73946f68f294a53d5bcdbeca5e43b9016e07d91f.png',
         "job_icon": 'DRG',
         "level": '100',
         "content": 'Накладывает эффект Starcross Ready после использования Stardiver.<br/>Продолжительность: 20 сек.',
      },
      // PVP Skill 01
      "PVP Skill 01": {
         "name": 'Raiden Thrust',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/69697b76c80e8029d46328c3572547055f18e601.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.4 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 3,000.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 02
      "PVP Skill 02": {
         "name": 'Fang and Claw',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/7f0a2f77c976f12ddcb056cbfa85e58f298cc85b.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.4 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 4,000.<br/>Комбо умение: Raiden Thrust<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 03
      "PVP Skill 03": {
         "name": 'Wheeling Thrust',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4fa45b91f8400b979b436964d31b6c98ce0a40b6.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.4 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 5,000.<br/>Комбо умение: Fang and Claw<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 04
      "PVP Skill 04": {
         "name": 'Chaotic Spring',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/beed1dd5940d6a1c73a65d2df23e0bba94553e70.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '15 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 8,000.<br/>Дополнительный эффект: поглощает 150% нанесенного урона в виде HP<br/>Этот боевой навык не имеет общее время восстановления с другими умениями.',
      },
      // PVP Skill 05
      "PVP Skill 05": {
         "name": 'Geirskogul',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/40d9f18cff0687b38369f777aa53289e7b9fbdec.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '20 сек.',
         "range": '15y',
         "radius_img": 'R6',
         "radius": '15y',
         "content": 'Удар, наносящий урон по всем противникам по прямой линии перед персонажем с силой атаки 4,000.<br/>Дополнительный эффект: накладывает эффект Life of the Dragon<br/>Эффект Life of the Dragon: увеличивает наносимый и получаемый урон на 25%<br/>Продолжительность: 10 сек.<br/><br/>※При использовании умение меняется на Nastrond.',
      },
      // PVP Skill 06
      "PVP Skill 06": {
         "name": 'High Jump',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/bbb6cc31f11ffe457f6e893d48924739c1ded02a.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '10 сек.',
         "range": '20y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": "Удар с прыжком, наносящий урон с силой атаки 4,000.<br/>Дополнительный эффект: накладывает эффект Heavensent<br/>Продолжительность: 10 сек.<br/>Невозможно использовать, если персонаж находится под эффектами, ограничивающими перемещение.<br/><br/>※Combo Wheeling Thrust меняется на Heavens' Thrust под действием эффекта Heavensent.",
      },
      // PVP Skill 07
      "PVP Skill 07": {
         "name": 'Elusive Jump',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/c8b07f7484cef5f2ea4a7a3b11fd71d2526a7eb6.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '20 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Совершает прыжок в место, находящееся в 15 ялмах позади персонажа.<br/>Дополнительный эффект: снимает тяжесть (heavy) и связывание (bind)<br/>Дополнительный эффект: увеличивает скорость передвижения на 25%<br/>Продолжительность: 5 сек.<br/>Дополнительный эффект: накладывает эффект Firstminds Focus<br/>Продолжительность: 10 сек.<br/><br/>※Умение меняется на Wyrmwind Thrust под действием эффекта Firstminds Focus.',
      },
      // PVP Skill 08
      "PVP Skill 08": {
         "name": 'Horrid Roar',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b1f27df2db64f7037b01bd9bd45118f4f6a68411.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '25 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '10y',
         "content": 'Удар, наносящий нестихийный урон с силой атаки 4,000 по всем ближайшим противникам.<br/>Дополнительный эффект: накладывает на цель эффект Horrid Roar<br/>Эффект Horrid Roar: снижает наносимый персонажу урон на 50%<br/>Продолжительность: 10 сек.',
      },
      // PVP Skill 09
      "PVP Skill 09": {
         "name": "Heavens' Thrust",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/fae7c03f0a715ea2494d384a5a4b38fd3a7a558b.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.4 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 12,000.<br/>Может быть использовано только под эффектом Heavensent.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 10
      "PVP Skill 10": {
         "name": 'Nastrond',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/077f033d215fc2852c0a24294344701a413d7fc6.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '15y',
         "radius_img": 'R6',
         "radius": '15y',
         "content": 'Удар, наносящий урон по всем противникам по прямой линии перед персонажем с силой атаки 4,000.<br/>Сила атаки увеличивается до 8,000 по мере уменьшения HP цели и достигает максимального значения, когда у цели остается 50% HP или меньше.<br/>Может быть использовано только под действием эффекта Life of the Dragon. Эффект исчезает после использования.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 11
      "PVP Skill 11": {
         "name": 'Wyrmwind Thrust',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/82a09097dac30def5de8b72764c3858736210818.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.4 сек.',
         "range": '20y',
         "radius_img": 'R6',
         "radius": '20y',
         "content": 'Удар, наносящий урон по всем противникам по прямой линии перед персонажем с силой атаки 8,000.<br/>Сила атаки увеличивается пропорционально расстоянию до цели, вплоть до 16,000, когда цель находится на расстоянии 15 ялмов.<br/>Может быть использовано только под действием эффекта Firstminds Focus.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 12
      "PVP Skill 12": {
         "name": 'Sky High',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/7024a69ca8e1a03ac68e8680380d47e443f6e6a3.png',
         "cast": 'Мгновенная',
         "recast": '10 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Персонаж совершает высокий прыжок, становясь недоступным для противников. Перемещение возможно до момента приземления.<br/>Продолжительность: 5 сек.<br/>Дополнительный эффект: снимает негативные эффекты - тяжесть (heavy), связывание (bind) и полу сон (Half-asleep)<br/>По истечении эффекта автоматически использует Sky Shatter.<br/>Может быть использовано только тогда, когда шкала лимит брейка (limit gauge) заполнена.<br/>Время зарядки шкалы: 90 сек.<br/><br/>※При использовании умение меняется на Sky Shatter.',
      },
      // PVP Skill 13
      "PVP Skill 13": {
         "name": 'Sky Shatter',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/82f321a762fc70566c427f2e2dfda71ce4e0718b.png',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '10y',
         "content": 'Удар, наносящий урон по всем окружающим противникам с силой атаки 16,000.<br/>Сила атаки удваивается, если цель находится в пределах 5 ялмов.<br/>Дополнительный эффект: создает вокруг себя барьер, поглощающий урон, равный силе лечения 24,000<br/>Продолжительность: 10 сек.<br/>Может быть использовано только под действием эффекта Sky High.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
   };
   FILL_DB_VALUES(db);
   FILL_DB_SKILLS(db);
   FILL_DB_SKILLS_PASSIVE(db);
   FILL_DB_SKILLS_PVP(db);
   FILL_DB_SKILLS_MENU(db);
})();