(() =>{
   let db = {
      //=========================//
      // Tank Action and Traits //
      //========================//
      // Role Action Tank 01
      "Role Action Tank 01": {
         "name": 'Rampart',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/37546679ae5e431c0903b20fa2c91a88c5a8e001.png',
         "job_class_01": 'Tank',
         "level": '8',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '90 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снижает получаемый урон на 20%.Дополнительный эффект: увеличивает восстановление HP исцеляющими умениями, действующих на себя на 15%<br>Продолжительность: 20 сек.',
      },
      // Role Action Tank 02
      "Role Action Tank 02": {
         "name": 'Low Blow',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/af837b3dd467ee9cdf865a06eb2b1633dd2b492a.png',
         "job_class_01": 'Tank',
         "level": '12',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '25 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Оглушает цель (stun).<br>Продолжительность: 5 сек.',
      },
      // Role Action Tank 03
      "Role Action Tank 03": {
         "name": 'Provoke',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2b45fea903bcf1edd9e08110cf95e8bba9a73c0d.png',
         "job_class_01": 'Tank',
         "level": '15',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Угрожающий жест, который помещает персонажа на первое место среди угроз цели и поднимает уровень угрозы.',
      },
      // Role Action Tank 04
      "Role Action Tank 04": {
         "name": 'Interject',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/8442bcce1ec21a449546af9afb79ae9ea8c226cb.png',
         "job_class_01": 'Tank',
         "level": '18',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Прерывает выполнение умения целью.',
      },
      // Role Action Tank 05
      "Role Action Tank 05": {
         "name": 'Reprisal',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/6b83d9368623d5cd20a426d26916021b59a14963.png',
         "job_class_01": 'Tank',
         "level": '22',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '60 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Уменьшает урон наносимый противниками в радиусе действия умения на 10%.<br>Продолжительность: 15 сек.',
      },
      // Role Action Tank 06
      "Role Action Tank 06": {
         "name": "Arm's Length",
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/00ff21ad3e1fb26d7b292a9d912931e7ea64daa4.png',
         "job_class_01": 'Tank',
         "job_class_02": 'MeleeDPS',
         "job_class_03": 'PhysicalRangedDPS',
         "level": '32',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Создает барьер, защищающий от большинства эффектов отбрасывания и притягивания.<br>Дополнительный эффект: замедление (slow) +20% при ударе о барьер.<br>Продолжительность: 15 сек.',
      },
      // Role Action Tank 07
      "Role Action Tank 07": {
         "name": 'Shirk',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4abd24800cb0999fff8ea79ed1085a7b5f8b14cb.png',
         "job_class_01": 'Tank',
         "level": '48',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Передает 25% от уровня угрозы персонажа другому сопартийцу.',
      },
      // Role Traits Tank 01
      "Role Traits Tank 01": {
         "name": 'Enhanced Rampart',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/ad8de6373f0bc939fd654a579d6d06ad123c958b.png',
         "job_class_01": 'Tank',
         "level": '94',
         "content": 'Добавляет дополнительный эффект к Rampart, увеличивает восстановление HP исцеляющими умениями, действующих на себя на 15%.',
      },
      // Role Traits Tank 02
      "Role Traits Tank 02": {
         "name": 'Enhanced Reprisal',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/1a390002a4eabb796458e1a93716060e1ec4d185.png',
         "job_class_01": 'Tank',
         "level": '98',
         "content": 'Увеличивает продолжительность Reprisal до 15 секунд.',
      },
      //===========================//
      // Healer Action and Traits //
      //=========================//
      // Role Action Healer 01
      "Role Action Healer 01": {
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
         "content": 'Накладывает сон (sleep) на цель.<br />Продолжительность: 30 сек.<br />Отменяет авто атаки во время использования',
      },
      // Role Action Healer 02
      "Role Action Healer 02": {
         "name": 'Esuna',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2a6603bc786d73eb3829141482b3d5be5d484199.png',
         "job_class_01": 'Healer',
         "level": '10',
         "classification": 'Заклинание',
         "cast": '1 сек.',
         "recast": '2.5 сек.',
         "cost": '400 MP',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снимает один отрицательный эффект с цели.',
      },
      // Role Action Healer 03
      "Role Action Healer 03": {
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
      // Role Action Healer 04
      "Role Action Healer 04": {
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
      // Role Action Healer 05
      "Role Action Healer 05": {
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
      // Role Action Healer 06
      "Role Action Healer 06": {
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
         "content": 'В большинстве случаев, мгновенно притягивает сопартийца к себе. Не может применяться вне боя или если цель находится под воздействием некоторых отрицательных эффектов.',
      },
      // Role Traits Healer 01
      "Role Traits Healer 01": {
         "name": 'Enhanced Swiftcast',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/0948538a89b748ec2d1f2c6c8ad2afe383a740d3.png',
         "job_class_01": 'Healer',
         "job_class_02": 'MagicalRangedDPS',
         "level": '94',
         "content": 'Сокращает время восстановления Swiftcast до 40 секунд.',
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
         "recast": '30 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снимает эффекты оглушения (stun), сна (sleep), связывания (bind), тяжести (heavy), полу сна (half-asleep), безмолвия (silence), сна (sleep) и глубокой заморозки (deep freeze).<br/>Дополнительный эффект: накладывает эффект Resilience<br/>Эффект Resilience: убирает все статусные негативные эффекты, которые можно снять с помощью Purify<br/>Продолжительность: 5 сек.<br/>Можно использовать даже если персонаж находится под действием некоторых негативных эффектов.',
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
         "content": 'Снижает получаемый урон на 90% и дает иммунитет к эффектам оглушения (stun), сна (sleep), связывания (bind), тяжести (heavy), полу сна (half-asleep), безмолвия (silence), сна (sleep) и глубокой заморозки (deep freeze), а также к отбрасывающим и притягивающим эффектам.<br/>Продолжительность: 5 сек.<br/>Скорость передвижения снижается на 50% на время действия этого эффекта.<br/>Эффект заканчивается при повторном использовании, активации другого умения или по истечении действия эффекта.',
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
         "content": 'величивает скорость передвижения на 50%.<br/>Эффект заканчивается при повторном использовании или активации другого умения.',
      },
   };
   FILL_DB_ROLE_ACTIONS(db);
   FILL_DB_ROLE_TRAITS(db);
   FILL_DB_PVP_ACTIONS(db);
})();