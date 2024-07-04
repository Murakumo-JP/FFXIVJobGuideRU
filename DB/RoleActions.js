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
      "": {
         "name": '',
         "skill_icon": '',
         "job_class_01": '',
         "level": '',
         "classification": '',
         "cast": '',
         "recast": 'сек.',
         "cost": '',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // Role Action 01
      "Role Action 01": {
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
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Передает 25% от уровня угрозы персонажа другому сопартийцу.',
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