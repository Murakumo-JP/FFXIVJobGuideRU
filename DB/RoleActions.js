(() =>{
   let db = {
      // 01 - Rampart
      // 02 - Low Blow
      // 03 - Provoke
      // 04 - Interject
      // 05 - Reprisal
      // 06 - Arm's Length
      // 07 - Shirk
      // 08 - Repose
      // 09 - Esuna
      // 10 - Lucid Dreaming
      // 11 - Swiftcast
      // 12 - Surecast
      // 13 - Rescue
      // 14 - Second Wind
      // 15 - Leg Sweep
      // 16 - Bloodbath
      // 17 - Feint
      // 18 - True North
      // 19 - Leg Graze
      // 20 - Foot Graze
      // 21 - Peloton
      // 22 - Head Graze
      // 23 - Addle
      // 24 - Sleep
      //===============
      // Role Action 01
      "Role Action 01": {
         "name": 'Rampart',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/37546679ae5e431c0903b20fa2c91a88c5a8e001.png',
         "job_class_01": 'Tank',
         "level": '8',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '90 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снижает получаемый урон на 20%.<br/>Дополнительный эффект: увеличивает восстановление HP исцеляющими умениями, действующих на себя на 15%<br>Продолжительность: 20 сек.',
      },
      // Role Action 02
      "Role Action 02": {
         "name": 'Low Blow',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/af837b3dd467ee9cdf865a06eb2b1633dd2b492a.png',
         "job_class_01": 'Tank',
         "level": '12',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '25 сек.',
         "cost": '-',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Оглушает цель (stun).<br/>Продолжительность: 5 сек.',
      },
      // Role Action 03
      "Role Action 03": {
         "name": 'Provoke',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2b45fea903bcf1edd9e08110cf95e8bba9a73c0d.png',
         "job_class_01": 'Tank',
         "level": '15',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Угрожающий жест, который помещает персонажа на первое место среди угроз цели и поднимает уровень угрозы.',
      },
      // Role Action 04
      "Role Action 04": {
         "name": 'Interject',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/8442bcce1ec21a449546af9afb79ae9ea8c226cb.png',
         "job_class_01": 'Tank',
         "level": '18',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "cost": '-',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Прерывает выполнение умения целью.',
      },
      // Role Action 05
      "Role Action 05": {
         "name": 'Reprisal',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/6b83d9368623d5cd20a426d26916021b59a14963.png',
         "job_class_01": 'Tank',
         "level": '22',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '60 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Уменьшает урон наносимый противниками в радиусе действия умения на 10%.<br/>Продолжительность: 15 сек.',
      },
      // Role Action 06
      "Role Action 06": {
         "name": "Arm's Length",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/00ff21ad3e1fb26d7b292a9d912931e7ea64daa4.png',
         "job_class_01": 'Tank',
         "job_class_02": 'MeleeDPS',
         "job_class_03": 'PhysicalRangedDPS',
         "level": '32',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Создает барьер, защищающий от большинства эффектов отбрасывания и притягивания.<br>Продолжительность: 6 сек.<br>Дополнительный эффект: замедление (slow) +20% при ударе о барьер.<br>Продолжительность: 15 сек.',
      },
      // Role Action 07
      "Role Action 07": {
         "name": 'Shirk',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4abd24800cb0999fff8ea79ed1085a7b5f8b14cb.png',
         "job_class_01": 'Tank',
         "level": '48',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Передает 25% от уровня угрозы персонажа другому сопартийцу.',
      },
      // Role Action 08
      "Role Action 08": {
         "name": 'Repose',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/9bd731d47094c2c11b5cd9fb0d1d277bf9c6c89d.png',
         "job_class_01": 'Healer',
         "level": '8',
         "classification": 'Заклинание',
         "cast": '2.5 сек.',
         "recast": '2.5 сек.',
         "cost": '600 MP',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Накладывает сон (sleep) на цель.<br/>Продолжительность: 30 сек.<br/>Отменяет авто атаки во время использования',
      },
      // Role Action 09
      "Role Action 09": {
         "name": 'Esuna',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2a6603bc786d73eb3829141482b3d5be5d484199.png',
         "job_class_01": 'Healer',
         "level": '10',
         "classification": 'Заклинание',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "cost": '400 MP',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снимает один отрицательный эффект с цели.',
      },
      // Role Action 10
      "Role Action 10": {
         "name": 'Lucid Dreaming',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/3629c6854aa559656623925e2489b60c2fa91e18.png',
         "job_class_01": 'Healer',
         "job_class_02": 'MagicalRangedDPS',
         "level": '14',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '60 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Постепенно восстанавливает MP персонажа.<br/>Сила: 55<br/>Продолжительность: 21 сек.',
      },
      // Role Action 11
      "Role Action 11": {
         "name": 'Swiftcast',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/27d401b3cfbf90c846ffeaa9f661afb4bd77ce98.png',
         "job_class_01": 'Healer',
         "job_class_02": 'MagicalRangedDPS',
         "level": '18',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '40 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Следующее заклинание будет использовано мгновенно.<br/>Продолжительность: 10 сек.',
      },
      // Role Action 12
      "Role Action 12": {
         "name": 'Surecast',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/477d1e7f7115db19c344c0f5cadfcfa2ac0cdcc0.png',
         "job_class_01": 'Healer',
         "job_class_02": 'MagicalRangedDPS',
         "level": '44',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Пока действует эффект Surecast, использование заклинаний не сможет быть прервано входящим уроном.<br/>Дополнительный эффект: дает иммунитет к большинству эффектов отталкивания и притягивания<br/>Продолжительность: 6 сек.',
      },
      // Role Action 13
      "Role Action 13": {
         "name": 'Rescue',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/23f8a26b9a0107b6076f5f2e715e14d9be0edc25.png',
         "job_class_01": 'Healer',
         "level": '48',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "cost": '-',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'В большинстве случаев, мгновенно притягивает сопартийца к себе. Не может применяться вне боя или если цель находится под воздействием некоторых отрицательных эффектов',
      },
      // Role Action 14
      "Role Action 14": {
         "name": 'Second Wind',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2b79d78f1ed471ace5708898e3388062fbd555fb.png',
         "job_class_01": 'MeleeDPS',
         "job_class_02": 'PhysicalRangedDPS',
         "level": '8',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Мгновенно восстанавливает HP персонажа.<br/>Сила лечения: 800',
      },
      // Role Action 15
      "Role Action 15": {
         "name": 'Leg Sweep',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/8c9674aba5fe48e73cc80ceb4a49782c1539b942.png',
         "job_class_01": 'MeleeDPS',
         "level": '10',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '40 сек.',
         "cost": '-',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Оглушает (stun) цель.<br/>Продолжительность: 3 сек.',
      },
      // Role Action 16
      "Role Action 16": {
         "name": 'Bloodbath',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/f76d6999b80178e51cfedf68f3af69ce6ed5016f.png',
         "job_class_01": 'MeleeDPS',
         "level": '12',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '90 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Преобразует часть нанесенного физического урона в HP.<br/>Продолжительность: 20 сек.',
      },
      // Role Action 17
      "Role Action 17": {
         "name": 'Feint',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/84c26a86cbbb8a599e5a2441cebcd33b0064bf07.png',
         "job_class_01": 'MeleeDPS',
         "level": '22',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '90 сек.',
         "cost": '-',
         "range": '10y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снижает наносимый целью физический урон на 10% и магический урон на 5%.<br/>Продолжительность: 15 сек.',
      },
      // Role Action 18
      "Role Action 18": {
         "name": 'True North',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2d62e72f5da6d52e189c1ed10dfbd602625fc536.png',
         "job_class_01": 'MeleeDPS',
         "level": '50',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '45 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Отменяет все позиционные требования умений.<br/>Продолжительность: 10 сек.<br/>Максимум зарядов: 2',
      },
      // Role Action 19
      "Role Action 19": {
         "name": 'Leg Graze',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2a6b7be8517f51d8cbcc60be2ae5970668f515eb.png',
         "job_class_01": 'PhysicalRangedDPS',
         "level": '6',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Накладывает на цель эффект тяжесть (heavy) +40%.<br/>Продолжительность: 10 сек.',
      },
      // Role Action 20
      "Role Action 20": {
         "name": 'Foot Graze',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/8b1f979d2b1428f9791f54ad0e429ea94a8d95d6.png',
         "job_class_01": 'PhysicalRangedDPS',
         "level": '10',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Связывает (bind) цель.<br/>Продолжительность: 10 сек.<br>Прерывает авто атаки при использовании<br/>Эффект спадает при получении целью урона',
      },
      // Role Action 21
      "Role Action 21": {
         "name": 'Peloton',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/fb8b0f0ca18af4362d27f6699579bd5a18b40137.png',
         "job_class_01": 'PhysicalRangedDPS',
         "level": '20',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '5 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '30y',
         "content": 'Увеличивает скорость передвижения персонажа и ближайших сопартийцев.<br/>Продолжительность: 30 сек.<br/>Эффект спадает при появлении угрозы. Не может быть использовано во время боя',
      },
      // Role Action 22
      "Role Action 22": {
         "name": 'Head Graze',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/748fe5fc8262b58e9a35aa9e4d40e67a0dd006a5.png',
         "job_class_01": 'PhysicalRangedDPS',
         "level": '20',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Прерывает использование умения цели.',
      },
      // Role Action 23
      "Role Action 23": {
         "name": 'Addle',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b45e688d81b5607246600f904aac008364db0d1e.png',
         "job_class_01": 'MagicalRangedDPS',
         "level": '8',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '90 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снижает наносимый целью физический урон на 5% и магический урон на 10%.<br/>Продолжительность: 15 сек.',
      },
      // Role Action 24
      "Role Action 24": {
         "name": 'Sleep',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/10e9fb5302668c923b8237ffbd4841ccc6c2edb4.png',
         "job_class_01": 'MagicalRangedDPS',
         "level": '10',
         "classification": 'Заклинание',
         "cast": '2.5 сек.',
         "recast": '2.5 сек.',
         "cost": '800 MP',
         "range": '30y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Усыпляет цель и всех ближайших противников (sleep).<br/>Продолжительность: 30 сек<br/>Прерывает авто атаки при использовании умения',
      },
      // Role Traits Tank 01
      "RT Tank 01": {
         "name": 'Enhanced Rampart',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/ad8de6373f0bc939fd654a579d6d06ad123c958b.png',
         "job_class_01": 'Tank',
         "level": '94',
         "content": 'Добавляет дополнительный эффект к Rampart, увеличивает восстановление HP исцеляющими умениями, действующих на себя на 15%.',
      },
      // Role Traits Tank 02
      "RT Tank 02": {
         "name": 'Enhanced Reprisal',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/1a390002a4eabb796458e1a93716060e1ec4d185.png',
         "job_class_01": 'Tank',
         "level": '98',
         "content": 'Увеличивает продолжительность Reprisal до 15 секунд.',
      },
      // Role Traits Healer
      "RT Healer": {
         "name": 'Enhanced Swiftcast',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/0948538a89b748ec2d1f2c6c8ad2afe383a740d3.png',
         "job_class_01": 'Healer',
         "job_class_02": 'MagicalRangedDPS',
         "level": '94',
         "content": 'Сокращает время восстановления Swiftcast до 40 секунд.',
      },
      // Role Traits MeleeDPS 01
      "RT MeleeDPS 01": {
         "name": 'Enhanced Second Wind',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/dccd320d548ebfe264816b020f67211d2a310bb9.png',
         "job_class_01": 'MeleeDPS',
         "job_class_02": 'PhysicalRangedDPS',
         "level": '94',
         "content": 'Увеличивает силу лечения от умения Second Wind до 800.',
      },
      // Role Traits MeleeDPS 02
      "RT MeleeDPS 02": {
         "name": 'Enhanced Feint',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/dda2a9e930cb141e91f00c4f2eda5fd5e1678e07.png',
         "job_class_01": 'MeleeDPS',
         "level": '98',
         "content": 'Увеличивает продолжительность действия Feint до 15 секунд.',
      },
      // Role Traits MagicalDPS 01
      "RT MagicalDPS 01": {
         "name": 'Enhanced Swiftcast',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/0948538a89b748ec2d1f2c6c8ad2afe383a740d3.png',
         "job_class_01": 'Healer',
         "job_class_02": 'MagicalRangedDPS',
         "level": '94',
         "content": 'Сокращает время восстановления Swiftcast до 40 секунд.',
      },
      // Role Traits MagicalDPS 02
      "RT MagicalDPS 02": {
         "name": 'Enhanced Addle',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/590a381c0421f33d428c1dd51293c715a1a53ee7.png',
         "job_class_01": 'MagicalRangedDPS',
         "level": '98',
         "content": 'Увеличивает продолжительность действия Addle до 15 секунд.',
      },
      // PVP Actions 01
      "PVP Actions 01": {
         "name": 'Standard-issue Elixir',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a57f3dd330cf3f55962ccddc7df6858f45718607.png',
         "classification": 'Способность',
         "cast": '4.5 сек.',
         "recast": '5 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Полностью восстанавливает HP и MP персонажа.<br/>Использование будет прервано при получении урона, наложении эффектов контроля или при движении персонажа.',
      },
      // PVP Actions 02
      "PVP Actions 02": {
         "name": 'Recuperate',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2085fa5a3247d8f7648b9eea2874ffb62eaf21c6.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "cost": '2500 MP',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Восстановление HP персонажа.<br/>Сила лечения: 15,000',
      },
      // PVP Actions 03
      "PVP Actions 03": {
         "name": 'Purify',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2fdba29de282257b52e21e33abe5f4fef43519cd.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '24 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снимает эффекты оглушения (stun), связывания (bind), тяжести (heavy), безмолвия (silence), глубокой заморозки (deep freeze) и Miracle of Nature.<br/>Дополнительный эффект: накладывает эффект Resilience<br/>Эффект Resilience: убирает все статусные негативные эффекты, которые можно снять с помощью Purify<br/>Продолжительность: 3 сек.<br/>Можно использовать даже если персонаж находится под действием некоторых негативных эффектов.',
      },
      // PVP Actions 04
      "PVP Actions 04": {
         "name": 'Guard',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/21e24c5bf00677220efb8c1a1e6001537ee26d23.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снижает получаемый урон на 90% и дает иммунитет к эффектам оглушения (stun), тяжести (heavy), связывания (bind), безмолвия (silence), полу сна (half-asleep), сна (sleep), глубокой заморозки (deep freeze), а также к отбрасывающим и притягивающим эффектам.<br/>Продолжительность: 4 сек.<br/>Скорость передвижения снижается на 33% на время действия этого эффекта.<br/>Эффект заканчивается при повторном использовании, активации другого умения или по истечении действия эффекта.',
      },
      // PVP Actions 05
      "PVP Actions 05": {
         "name": 'Sprint',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/1b49a585ab241c7b5b8bb4d6f47ccec6b96fdaee.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1.5 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Увеличивает скорость передвижения на 50%.<br/>Эффект заканчивается при повторном использовании или активации другого умения.',
      },
      // PVP Role Action 01
      "PVP Role Action 01": {
         "name": 'Rampage',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/0025644eea0d29c167038c0fa0c4b7784d88c6dc.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '45 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '10y',
         "content": " ",
      },
      // PVP Role Action 02
      "PVP Role Action 02": {
         "name": 'Rampart',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/d947368973397ac9682cbb74a423247410963fc6.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '60 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": " ",
      },
      // PVP Role Action 03
      "PVP Role Action 03": {
         "name": 'Full Swing',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/47746513d4aeed38aaa5badcc22cd7d6569869d2.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '30 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": " ",
      },
      // PVP Role Action 04
      "PVP Role Action 04": {
         "name": 'Haelan',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/723d97c52696b74e2493aa2c20ad3161f99a5823.png',
         "classification": 'Spell',
         "cast": '1.44 сек.',
         "recast": '2.4 сек.',
         "cost": '2500 MP',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": " ",
      },
      // PVP Role Action 05
      "PVP Role Action 05": {
         "name": 'Stoneskin II',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/246e8261f9049a61874125090da6803554fa02ce.png',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '30 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '15y',
         "content": " ",
      },
      // PVP Role Action 06
      "PVP Role Action 06": {
         "name": 'Diabrosis',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/808a5e2b506ca895c3d5c4187f18ce4ac813a566.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '45 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '10y',
         "content": " ",
      },
   };
   FILL_DB_SKILLS_MENU(db);
   FILL_DB_ROLE_ACTIONS(db);
   FILL_DB_ROLE_TRAITS(db);
   FILL_DB_PVP_ACTIONS(db);
})();