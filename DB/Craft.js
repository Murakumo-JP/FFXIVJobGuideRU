(() =>{
   let db = {
      "Craft Update": "Последнее обновление: 27/06/2024",
      // Action 01
      "Action 01": {
         "name": 'Basic Synthesis',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Basic Synthesis.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Basic Synthesis.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Basic Synthesis.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Basic Synthesis.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Basic Synthesis.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Basic Synthesis.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Basic Synthesis.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Basic Synthesis.png",
         },
         "level": '1',
         "cost": '0',
         "content": "Пополняет шкалу progress.<br/>Эффективность: 120%<br/>Шанс успеха: 100%",
      },
      // Action 02
      "Action 02": {
         "name": 'Basic Touch',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Basic Touch.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Basic Touch.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Basic Touch.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Basic Touch.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Basic Touch.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Basic Touch.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Basic Touch.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Basic Touch.png",
         },
         "level": '5',
         "cost": '18',
         "content": "Пополняет шкалу quality.<br/>Эффективность: 100%<br/>Шанс успеха: 100%",
      },
      // Action 03
      "Action 03": {
         "name": "Master's Mend",
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Masters Mend.png",
         "level": '7',
         "cost": '88',
         "content": "Восстанавливает durability предмета на 30.",
      },
      // Action 04
      "Action 04": {
         "name": 'Hasty Touch',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Hasty Touch.png",
         "level": '9',
         "cost": '0',
         "content": "Пополняет шкалу quality, без затрат CP.<br/>Эффективность: 100%<br/>Шанс успеха: 60%<br/>Дополнительный эффект: накладывает эффект Expedience на 1 шаг",
      },
      // Action 05
      "Action 05": {
         "name": 'Rapid Synthesis',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Rapid Synthesis.png",
         "level": '9',
         "cost": '0',
         "content": "Пополняет шкалу quality.<br/>Эффективность: 500%<br/>Шанс успеха: 50%",
      },
      // Action 06
      "Action 06": {
         "name": 'Observe',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Observe.png",
         "level": '13',
         "cost": '7',
         "content": "Бездействовать в течении одного шага.",
      },
      // Action 07
      "Action 07": {
         "name": 'Tricks of the Trade',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Tricks of the Trade.png",
         "level": '13',
         "cost": '0',
         "content": "Восстанавливает 20 CP.<br/><br/>Доступно только при состоянии материала Good или Excellent.",
      },
      // Action 08
      "Action 08": {
         "name": 'Waste Not',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Waste Not.png",
         "level": '15',
         "cost": '56',
         "content": "Снижает потерю durability на 50% в течение следующих четырех шагов.",
      },
      // Action 09
      "Action 09": {
         "name": 'Veneration',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Veneration.png",
         "level": '15',
         "cost": '18',
         "content": "Повышает эффективность умения Synthesis на 50 % в течение следующих четырех шагов.",
      },
      // Action 10
      "Action 10": {
         "name": 'Standard Touch',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Standard Touch.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Standard Touch.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Standard Touch.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Standard Touch.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Standard Touch.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Standard Touch.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Standard Touch.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Standard Touch.png",
         },
         "level": '18',
         "cost": '32',
         "content": "Пополняет шкалу quality.<br/>Эффективность: 125%<br/>Шанс успеха: 100%<br/>Комбо умение: Basic Touch<br/>Комбо бонус: стоимость СР снижается до 18",
      },
      // Action 11
      "Action 11": {
         "name": 'Great Strides',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Great Strides.png",
         "level": '21',
         "cost": '32',
         "content": "Повышает эффективность следующего умения категории Touch на 100%. Эффект действует в течение трех шагов.",
      },
      // Action 12
      "Action 12": {
         "name": 'Innovation',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Innovation.png",
         "level": '26',
         "cost": '18',
         "content": "Повышает эффективность умений категории Touch на 50% в течение следующих четырех шагов.",
      },
      // Action 13
      "Action 13": {
         "name": 'Final Appraisal',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Final Appraisal.png",
         "level": '42',
         "cost": '1',
         "content": "Оставит шкалу progress с незаполненной на одно очко.<br/>Эффект действует в течение пяти шагов.",
      },
      // Action 14
      "Action 14": {
         "name": 'Waste Not II',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Waste Not II.png",
         "level": '47',
         "cost": '98',
         "content": "Снижает потерю durability на 50% в течение следующих восьми шагов.",
      },
      // Action 15
      "Action 15": {
         "name": "Byregot's Blessing",
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Byregots Blessing.png",
         "level": '50',
         "cost": '24',
         "content": "Пополняет шкалу quality. Эффект Inner Quiet заканчивается после использования.<br/>Эффективность: 100% плюс 20% за каждый стак Inner Quiet, максимум 300%.<br/>Шанс успеха: 100%<br/>Требует как минимум один стак эффекта Inner Quiet для использования.",
      },
      // Action 16
      "Action 16": {
         "name": 'Precise Touch',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Precise Touch.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Precise Touch.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Precise Touch.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Precise Touch.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Precise Touch.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Precise Touch.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Precise Touch.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Precise Touch.png",
         },
         "level": '53',
         "cost": '18',
         "content": "Пополняет шкалу quality.<br/>Дополнительный эффект: увеличивает количество стаков эффекта Inner Quiet на один (вплоть до 10).<br/>Эффективность: 150%<br/>Шанс успеха: 100%<br/><br/>Доступно только когда состояние материала Good или Excellent.",
      },
      // Action 17
      "Action 17": {
         "name": 'Muscle Memory',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Muscle Memory.png",
         "level": '54',
         "cost": '6',
         "content": "Пополняет шкалу progress.<br/>Эффективность: 300%<br/>Шанс успеха: 100%<br/>Дополнительный эффект: эффективность следующего умения категории Synthesis увеличивается на 100%.<br/><br/>Может использоваться только на первом шаге.<br/>Дополнительный эффект действует в течение пяти шагов.",
      },
      // Action 18
      "Action 18": {
         "name": 'Careful Synthesis',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Careful Synthesis.png",
         "level": '62',
         "cost": '7',
         "content": "Пополняет шкалу progress.<br/>Эффективность: 180%<br/>Шанс успеха: 100%",
      },
      // Action 19
      "Action 19": {
         "name": 'Manipulation',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/b572f8d00fd/',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Manipulation.png",
         "level": '65',
         "cost": '96',
         "content": "Восстанавливает 5 очков durability после каждого шага в течение следующих восьми шагов.",
      },
      // Action 20
      "Action 20": {
         "name": 'Prudent Touch',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Prudent Touch.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Prudent Touch.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Prudent Touch.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Prudent Touch.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Prudent Touch.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Prudent Touch.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Prudent Touch.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Prudent Touch.png",
         },
         "level": '66',
         "cost": '25',
         "content": "Заполняет шкалу quality. Расход durability при использовании умения снижен на 50%.<br/>Эффективность: 100%<br/>Шанс успеха: 100%<br/><br/>Недоступно, когда активны эффекты Waste Not или Waste Not II.",
      },
      // Action 21
      "Action 21": {
         "name": 'Advanced Touch',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Advanced Touch.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Advanced Touch.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Advanced Touch.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Advanced Touch.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Advanced Touch.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Advanced Touch.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Advanced Touch.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Advanced Touch.png",
         },
         "level": '68',
         "cost": '46',
         "content": "Пополняет шкалу quality.<br/>Эффективность: 150%<br/>Шанс успеха: 100%<br/>Комбо умение: Standard Touch или Observe<br/>Комбо бонус: стоимость CP снижена до 18",
      },
      // Action 22
      "Action 22": {
         "name": 'Reflect',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Reflect.png",
         "level": '69',
         "cost": '6',
         "content": "Пополняет шкалу quality.<br/>Эффективность: 300%<br/>Шанс успеха: 100%<br/>Дополнительный эффект: увеличивает количество стаков эффекта Inner Quiet на один (вплоть до 10).<br/>Может использоваться только на первом шаге.",
      },
      // Action 23
      "Action 23": {
         "name": 'Preparatory Touch',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Preparatory Touch.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Preparatory Touch.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Preparatory Touch.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Preparatory Touch.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Preparatory Touch.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Preparatory Touch.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Preparatory Touch.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Preparatory Touch.png",
         },
         "level": '71',
         "cost": '40',
         "content": "Заполняет шкалу quality. Расход durability на использование умения повышен на 100%.<br/>Дополнительный эффект: увеличивает количество стаков эффекта Inner Quiet на один (вплоть до 10).<br/>Эффективность: 200%<br/>Шанс успеха: 100%<br/>Стоимость durability: 20",
      },
      // Action 24
      "Action 24": {
         "name": 'Groundwork',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Groundwork.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Groundwork.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Groundwork.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Groundwork.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Groundwork.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Groundwork.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Groundwork.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Groundwork.png",
         },
         "level": '72',
         "cost": '18',
         "content": "Заполняет шкалу progress.<br/>Расход durability на использование умения повышен на 100%.<br/>Эффективность: 360%<br/>Шанс успеха: 100%<br/>Стоимость durability: 20",
      },
      // Action 25
      "Action 25": {
         "name": 'Delicate Synthesis',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Delicate Synthesis.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Delicate Synthesis.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Delicate Synthesis.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Delicate Synthesis.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Delicate Synthesis.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Delicate Synthesis.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Delicate Synthesis.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Delicate Synthesis.png",
         },
         "level": '76',
         "cost": '32',
         "content": "Заполняет обе шкалы progress и quality одновременно.<br/>Эффективность умения Synthesis Action: 150%<br/>Эффективность умения Touch: 100%<br/>Шанс успеха: 100%",
      },
      // Action 26
      "Action 26": {
         "name": 'Intensive Synthesis',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Intensive Synthesis.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Intensive Synthesis.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Intensive Synthesis.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Intensive Synthesis.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Intensive Synthesis.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Intensive Synthesis.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Intensive Synthesis.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Intensive Synthesis.png",
         },
         "level": '78',
         "cost": '6',
         "content": "Пополняет шкалу progress.<br/>Эффективность: 400%<br/>Шанс успеха: 100%<br/>Доступно только, когда состояние материала Good или Excellent.",
      },
      // Action 27
      "Action 27": {
         "name": 'Trained Eye',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Trained Eye.png",
         "level": '80',
         "cost": '250',
         "content": "Пополняет шкалу quality на 100%<br/><br/>Доступно только на первом шаге<br/>Уровень рецепта должен быть как минимум на 10 уровней ниже уровня персонажа.<br/>Не может использоваться для expert crafting рецептов.",
      },
      // Action 28
      "Action 28": {
         "name": 'Prudent Synthesis',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Prudent Synthesis.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Prudent Synthesis.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Prudent Synthesis.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Prudent Synthesis.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Prudent Synthesis.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Prudent Synthesis.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Prudent Synthesis.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Prudent Synthesis.png",
         },
         "level": '88',
         "cost": '18',
         "content": "Пополняет шкалу progress, расходуя вдвоем меньше durability.<br/>Эффективность: 180%<br/>Шанс успеха: 100%<br/><br/>Недоступно, когда активны эффекты Waste Not или Waste Not II.",
      },
      // Action 29
      "Action 29": {
         "name": 'Trained Finesse',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Trained Finesse.png",
         "level": '90',
         "cost": '32',
         "content": "Пополняет шкалу quality без затрат durability.<br/>Эффективность: 100%<br/>Шанс успеха: 100%<br/><br/>Может быть использовано только при наличии 10 стаков эффекта Inner Quiet.",
      },
      // Action 30 NEW
      "Action 30": {
         "name": 'Refined Touch',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Refined Touch.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Refined Touch.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Refined Touch.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Refined Touch.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Refined Touch.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Refined Touch.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Refined Touch.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Refined Touch.png",
         },
         "level": '92',
         "cost": '24',
         "content": "Пополняет шкалу quality.<br/>Эффективность: 100%<br/>Шанс успеха: 100%<br/>Комбо умение: Basic Touch<br/>Комбо бонус: увеличивает количество стаков эффекта Inner Quiet на один (вплоть до 10)",
      },
      // Action 31 NEW
      "Action 31": {
         "name": 'Daring Touch',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Daring Touch.png",
         "level": '96',
         "cost": '0',
         "content": "Пополняет шкалу quality без затрат CP.<br/>Эффективность: 150%<br/>Шанс успеха: 60%<br/>Может быть использовано только под действием эффекта Expedience.<br/><br/>※Это умение нельзя поместить на хотбар.",
      },
      // Action 32 NEW
      "Action 32": {
         "name": 'Immaculate Mend',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Immaculate Mend.png",
         "level": '98',
         "cost": '112',
         "content": "Полностью восстанавливает шкалу durability предмета.",
      },
      // Action 33 NEW
      "Action 33": {
         "name": 'Trained Perfection',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Trained Perfection.png",
         "level": '100',
         "cost": '0',
         "content": "Уменьшает потерю durability при применении следующего умения до 0.<br/>Можно использовать только один раз за синтез.",
      },
      // Specialist Actions 01
      "Specialist Actions 01": {
         "name": 'Careful Observation',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/dc1b5d359e7/',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Careful Observation.png",
         "level": '55',
         "cost": '0',
         "content": "Умение специалиста.<br/><br/>Бездействовать в течении одного шага, сохраняя статус всех умений, которые действуют в данный момент.<br/>При применении используется crafter's delineation.<br/>Можно использовать не более трех раз за синтез.<br/>Это умение не увеличивает количество шагов.",
      },
      // Specialist Actions 02
      "Specialist Actions 02": {
         "name": 'Heart and Soul',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/dc1b5d359e7/',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Heart and Soul.png",
         "level": '86',
         "cost": '0',
         "content": "Умение специалиста.<br/><br/>Позволяет использовать Precise Touch, Intensive Synthesis или Tricks of the Trade независимо от состояния материала.<br/>Эффект прекращается, если вышеупомянутые умения используются, когда состояние материала не является Good или Excellent.<br/><br/>При выполнении используется crafter's delineation.<br/>Можно использовать только один раз за синтез.<br/>Это умение не увеличивает количество шагов.",
      },
      // Specialist Actions 03 NEW
      "Specialist Actions 03": {
         "name": 'Quick Innovation',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/dc1b5d359e7/',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Quick Innovation.png",
         "level": '96',
         "cost": '0',
         "content": "Умение специалиста.<br/><br/>Дает Innovation на 1 ход.<br/>Не может быть использовано под действием эффекта Innovation.<br/><br/>При применении используется crafter's delineation.<br/>Можно использовать только один раз за синтез.<br/>Это умение не увеличивает количество шагов.",
      },
      // Traits 01
      "Traits 01": {
         "name": 'Inner Quiet',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Inner Quiet.png",
         "level": '11',
         "content": "Добавляет один стак Inner Quiet при каждом заполнении шкалы quality, максимум 10 стаков.<br/>Эффект Inner Quiet: дает 10% бонус к эффективности умений категории Touch за каждый стак",
      },
      // Traits 02
      "Traits 02": {
         "name": 'Practice Makes Perfect',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Practice Makes Perfect.png",
         "level": '15',
         "content": "Позволяет выполнять trial synthesis.",
      },
      // Traits 03
      "Traits 03": {
         "name": 'Basic Synthesis Mastery',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Basic Synthesis Mastery.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Basic Synthesis Mastery.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Basic Synthesis Mastery.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Basic Synthesis Mastery.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Basic Synthesis Mastery.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Basic Synthesis Mastery.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Basic Synthesis Mastery.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Basic Synthesis Mastery.png",
         },
         "level": '31',
         "content": "Бонус к эффективности умений повышается до 120%.",
      },
      // Traits 04
      "Traits 04": {
         "name": 'Quality Assurance',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/3dfb1f7ebe1/',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Quality Assurance.png",
         "level": '63',
         "content": "Незначительно повышает вероятность того, что состояние материала станет Good.",
      },
      // Traits 05
      "Traits 05": {
         "name": 'Rapid Synthesis Mastery',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Rapid Synthesis Mastery.png",
         "level": '63',
         "content": "Эффективность повышается до 500%.",
      },
      // Traits 06
      "Traits 06": {
         "name": 'Careful Synthesis Mastery',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Careful Synthesis Mastery.png",
         "level": '82',
         "content": "Эффективность повышается до 180%.",
      },
      // Traits 07
      "Traits 07": {
         "name": 'Groundwork Mastery',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Groundwork Mastery.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Groundwork Mastery.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Groundwork Mastery.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Groundwork Mastery.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Groundwork Mastery.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Groundwork Mastery.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Groundwork Mastery.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Groundwork Mastery.png",
         },
         "level": '86',
         "content": "Эффективность повышается до 360%.",
      },
      // Traits 08 NEW
      "Traits 08": {
         "name": 'Delicate Synthesis Mastery',
         "skill_icon": {
            "CRP": "../Assets/img/DoHDoL/SkillJob/CRP/Delicate Synthesis Mastery.png",
            "BSM": "../Assets/img/DoHDoL/SkillJob/BSM/Delicate Synthesis Mastery.png",
            "ARM": "../Assets/img/DoHDoL/SkillJob/ARM/Delicate Synthesis Mastery.png",
            "GSM": "../Assets/img/DoHDoL/SkillJob/GSM/Delicate Synthesis Mastery.png",
            "LTW": "../Assets/img/DoHDoL/SkillJob/LTW/Delicate Synthesis Mastery.png",
            "WVR": "../Assets/img/DoHDoL/SkillJob/WVR/Delicate Synthesis Mastery.png",
            "ALC": "../Assets/img/DoHDoL/SkillJob/ALC/Delicate Synthesis Mastery.png",
            "CUL": "../Assets/img/DoHDoL/SkillJob/CUL/Delicate Synthesis Mastery.png",
         },
         "level": '94',
         "content": "Эффективность повышается до 150%.",
      },
      // Traits 09 NEW
      "Traits 09": {
         "name": 'Expedience',
         "skill_icon": "../Assets/img/DoHDoL/SkillJob/Expedience.png",
         "level": '96',
         "content": "При использовании Hasty Touch накладывает эффект Expedience на 1 шаг.<br/>Эффект Expedience: Улучшает Hasty Touch до Daring Touch.",
      },
   };
   FILL_DB_VALUES(db);
   FILL_DB_SKILLS_CRAFT(db);
   FILL_DB_CRAFT_PASSIVE(db);
})();