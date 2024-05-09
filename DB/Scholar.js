(() =>{
   let db = {
      "PVE Update": `Последнее обновление: 02/10/2023`,
      "PVP Update": `Последнее обновление: 16/01/2024`,
      // PVE Skill
      "Ruin": `Удар, наносящий нестихийный урон с силой атаки 150.`,
      "Bio": `Периодический нестихийный урон.<br/>Сила атаки: 20<br/>Продолжительность: 30 сек.`,
      "Physick": `Восстанавливает HP цели.<br/>Сила лечения: 450`,
      "Summon Eos": `Призывает фею Eos, которая будет сражаться на стороне персонажа.<br/>Фея со статусом Guard автоматически накладывает эффект Embrance на сопартийцев, которые получают урон.`,
      "Resurrection": `Воскрешает цель, накладывая эффект слабости (weakeness).`,
      "Whispering Dawn": `Приказывает фее использовать умение Whispering Dawn. Если призвана Seraph, приказывает ей использовать Angel's Whisper.<br/>Эффект Whispering Dawn/Angel's Whisper: постепенно восстанавливает HP ближайших сопартийцев<br/>Сила лечения: 80<br/>Продолжительность: 21 сек.`,
      "Bio II": `Периодический нестихийный урон.<br/>Сила атаки: 40<br/>Продолжительность: 30 сек.`,
      "Adloquium": `Восстанавливает HP цели.<br/>Сила лечения: 300<br/>Дополнительный эффект: накладывает на цель эффект Galvanize, который предотвращает получение урона, равного 180% от количества восстановленных HP. При критическом восстановлении HP также накладывает эффект Catalyze, который предотвращает получение урона, равного 180% от количества восстановленных HP<br/>Продолжительность: 30 сек.<br/>Эффект не складывается с некоторыми эффектами барьеров сейджа.`,
      "Succor": `Восстанавливает HP персонажа и всех ближайших сопартийцев.<br/>Сила лечения: 200<br/>Дополнительный эффект: создает магический барьер, который предотвращает получение урона, равного 160% от количества восстановленных HP<br/>Продолжительность: 30 сек.<br/>Эффект не складывается с некоторыми эффектами барьеров сейджа.`,
      "Ruin II": `Удар, наносящий нестихийный урон с силой атаки 220.`,
      "Fey Illumination": `Приказывает фее использовать умение Fey Illumination. Если призвана Seraph, приказывает ей использовать Seraphic Illumination.<br/>Эффект Fey Illumination/Seraphic Illumination: увеличивает эффективность магии лечения всех ближайших сопартийцев на 10% и снижает получаемый ближайшими сопартийцами магический урон на 5%.<br/>Продолжительность: 20 сек.<br/>Эффект не складывается с эффектом Seraphic Illumination.`,
      "Aetherflow": `Восстанавливает 20% от максимума MP.<br/>Дополнительный эффект: Aetherflow III<br/>Может использоваться только в бою.`,
      "Energy Drain": `Удар, наносящий нестихийный урон с силой атаки 100.<br/>Дополнительный эффект: поглощает часть нанесенного урона в виде HP<br/>Дополнительный эффект: восполняет шкалу Faerie Gauge на 10<br/>Стоимость: 1 Aetherflow Gauge`,
      "Lustrate": `Восстанавливает HP цели.<br/>Сила лечения: 600<br/>Дополнительный эффект: восполняет шкалу Faerie Gauge на 10<br/>Стоимость: 1 Aetherflow Gauge`,
      "Art of War": `Удар, наносящий нестихийный урон с силой атаки 165 по всем окружающим противникам.`,
      "Sacred Soil": `В указанном месте создает область, в которой сопартийцы будут получать только 90% от входящего урона.<br/>Продолжительность: 15 сек.<br/>Дополнительный эффект: периодическое лечение (regen)<br/>Сила лечения: 100<br/>Дополнительный эффект: восполняет шкалу Faerie Gauge на 10<br/>Стоимость: 1 Aetherflow Gauge`,
      "Indomitability": `Восстанавливает HP персонажа и всех ближайших сопартийцев.<br/>Сила лечения: 400<br/>Дополнительный эффект: восполняет шкалу Faerie Gauge на 10<br/>Стоимость: 1 Aetherflow Gauge`,
      "Broil": `Удар, наносящий нестихийный урон с силой атаки 220.`,
      "Deployment Tactics": `Распространяет эффект Galvanize, наложенный персонажем на себя или на сопартийца, на всех ближайших сопартийцев.<br/>Продолжительность: имеет общее время восстановления с оригинальным эффектом<br/>Умение не будет иметь эффекта, если изначальная цель не находится под действием Galvanize.`,
      "Emergency Tactics": `Преобразует следующие эффекты Galvanize и Catalyze в восстановление HP, равное количеству сниженного урона, предназначенного для барьера.<br/>Продолжительность: 15 сек.`,
      "Dissipation": `Отзывает фею с поля битвы, давая максимум стаков Aetherflow. Также увеличивает эффективность магии лечения на 20%.<br/>Продолжительность: 30 сек.<br/>Отозванная фея вернется, как только закончится эффект умения.<br/>Умение Summon Eos не может быть использовано, пока персонаж находится под действием эффекта Dissipation.<br/>Может использоваться только в бою.`,
      "Excogitation": `Накладывает на персонажа или сопартийца эффект Excogitation, который восстанавливает HP в момент, когда запас HP падает ниже 50% или заканчивается время действия эффекта.<br/>Сила лечения: 800<br/>Продолжительность: 45 сек.<br/>Дополнительный эффект: восполняет Faerie Gauge на 10<br/>Стоимость: 1 Aetherflow Gauge`,
      "Broil II": `Удар, наносящий нестихийный урон с силой атаки 240.`,
      "Chain Stratagem": `Увеличивает шанс получения целью критического (critical) удара на 10%.<br/>Продолжительность: 15 сек.`,
      "Aetherpact": `Приказывает фее использовать Fey Union на выбранного сопартийца. Умение отменяется при повторном использовании.<br/>Стоимость: 10 Faerie Gauge<br/>Эффект Union Effect: постепенно восстанавливает HP сопартийца, на которого фея использовала Fey Union<br/>Сила лечения: 300<br/>Шкала Faerie Gauge расходуется по 10, пока восстанавливается HP. Эффект Fey Union завершается при использовании других умений феи или когда сопартиец находится за пределами 30 ялмов от феи.<br/>Шкала Faerie Gauge восполняется, если фея или Seraph призваны и успешно применяют умение Aetherflow в бою.`,
      "Dissolve Union": `Отменяет эффект Fey Union.`,
      "Biolysis": `Периодический нестихийный урон.<br/>Сила атаки: 70<br/>Продолжительность: 30 сек.`,
      "Broil III": `Удар, наносящий нестихийный урон с силой атаки 255.`,
      "Recitation": `Позволяет использовать Adloquium, Succor, Indomitability или Excogitation без использование ресурсов, а также с гарантированным критическим эффектом восстановления HP.<br/>Продолжительность: 15 сек.`,
      "Fey Blessing": `Приказывает фее использовать Fey Blessing.<br/>Эффект Fey Blessing: восстанавливает HP всем ближайшим сопартийцам<br/>Сила лечения: 320`,
      "Summon Seraph": `Призывает фею Seraph, которая будет сражаться на стороне персонажа. Фея со статусом Guard автоматически накладывает эффект Seraphic Veil на сопартийцев, которые получают урон.<br/>Нельзя призвать Seraph, если другой питомец не был призван. Призванный питомец покинет поле боя на время призыва Seraph и вернется после.<br/>Продолжительность: 22 сек.<br/><br/>※Умение меняется на Consolation после использования.`,
      "Consolation": `Приказывает Seraph использовать Consolation.<br/>Эффект Consolation: восстанавливает HP всех ближайших сопартийцев<br/>Сила лечения: 250<br/>Дополнительный эффект: создает магический барьер, который поглощает получаемый урон, равный восстановленному HP<br/>Продолжительность: 30 сек.<br/>Максимум зарядов: 2<br/><br/>※Это умение нельзя поместить на хотбар.`,
      "Broil IV": `Удар, наносящий нестихийный урон с силой атаки 295.`,
      "Art of War II": `Удар, наносящий нестихийный урон с силой атаки 180 по всем окружающим противникам.`,
      "Protraction": `Увеличивает максимальный запас HP персонажа или сопартийца на 10% и восстанавливает увеличенное количество.<br/>Дополнительный эффект: увеличивает силу лечебных умений на 10%<br/>Продолжительность: 10 сек.`,
      "Expedient": `Накладывает Expedience и Desperate Measures на всех ближайших сопартийцев.<br/>Эффект Expedience: увеличивает скорость передвижения<br/>Продолжительность: 10 сек.<br/>Эффект Desperate Measures: снижает получаемый урон на 10%<br/>Продолжительность: 20 сек.`,
      // Pet Actions
      "Embrace": `Восстанавливает HP цели.<br/>Сила лечения: 180<br/><br/>※Это умение нельзя поместить на хотбар.`,
      "Whispering Dawn": `Постепенно восстанавливает HP персонажа и всех ближайших сопартийцев.<br/>Сила лечения: 80<br/>Продолжительность: 21 сек.<br/><br/>※Это умение нельзя поместить на хотбар`,
      "Fey Illumination": `Увеличивает эффективность магии лечения всех ближайших сопартийцев на 10% и снижает получаемый ближайшими сопартийцами магический урон на 5%.<br/>Продолжительность: 20 сек.<br/>Эффект не складывается с Seraphic Illumination.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      "Fey Union": `Постепенно восстанавливает HP сопартийца, к которому фея привязана с помощью Fey Union.<br/>Сила лечения: 300<br/>Шкала Faerie Gauge тратится, в то время как восстанавливается HP. Эффект Fey Union спадает, когда фея использует другие умения. Цель умения должна быть не более чем в 30 ялмах.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      "Fey Blessing": `Восстанавливает HP всех ближайших сопартийцев.<br/>Сила лечения: 320<br/><br/>※Это умение нельзя поместить на хотбар.`,
      "Seraphic Veil": `Восстанавливает HP цели.<br/>Сила лечения: 180<br/>Дополнительный эффект: создает магический барьер, который поглощает получаемый урон, равный восстановленному HP<br/>Продолжительность: 30 сек.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      "Angel's Whisper": `Постепенно восстанавливает HP всех ближайших сопартийцев.<br/>Сила лечения: 80<br/>Продолжительность: 21 сек.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      "Seraphic Illumination": `Увеличивает эффективность магии лечения всех ближайших сопартийцев на 10% и снижает получаемый магический урон ближайшими сопартийцами на 5%.<br/>Продолжительность: 20 сек.<br/>Эффект не складывается с эффектом Fey Illumination.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      "Consolation": `Восстанавливает HP всех ближайших сопартийцев.<br/>Сила лечения: 250<br/>Дополнительный эффект: создает магический барьер, который поглощает получаемый урон, равный восстановленному HP<br/>Продолжительность: 30 сек.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // Pet Actions (Commands)
      "Away": `Приказ питомцу покинуть поле боя.`,
      "Heel": `Приказ питомцу следовать за персонажем.`,
      "Place": `Приказ питомцу переместиться в указанную область.`,
      "Stay": `Приказ питомцу находиться на месте.`,
      "Guard": `Приказ питомцу не атаковать, пока персонаж не атакует.`,
      "Steady": `Приказ питомцу не атаковать до тех пор, пока ему напрямую не приказано.`,
      // Trait
      "Maim and Mend": `Увеличивает базовый урон умений и восстановления HP на 10%.<br/>Также увеличивает базовый урон и восстановление HP питомца на 10%.`,
      "Corruption Mastery": `Улучшает умение Bio до Bio II.`,
      "Maim and Mend II": `Увеличивает базовый урон умений и восстановления HP на 30%.<br/>Также увеличивает базовый урон и восстановление HP питомца на 30%.`,
      "Broil Mastery": `Улучшает умение Ruin до Broil и увеличивает силу атаки Ruin II до 160 и Art of War до 165.`,
      "Broil Mastery II": `Улучшает умение Broil до Broil II и увеличивает силу атаки Ruin II до 180.`,
      "Corruption Mastery II": `Улучшает умение Bio II до Biolysis.`,
      "Broil Mastery III": `Улучшает умение Broil II до Broil III и увеличивает силу атаки Ruin II до 200.`,
      "Enhanced Sacred Soil": `Наделяет дополнительным эффектом Sacred Soil, который периодически восстанавливает HP.`,
      "Broil Mastery IV": `Улучшает Broil III до Broil IV и увеличивает силу атаки Ruin II до 220.`,
      "Art of War Mastery": `Улучшает умение Art of War до Art of War II.`,
      "Enhanced Healing Magic": `Увеличивает силу исцеляющих умений Physick до 450, Embrace до 180 и Seraphic Veil до 180.<br />Увеличивает прочность барьеров умений Adloquium до 180% от восстановленного HP и Succor до 160% от восстановленного HP.`,
      "Enhanced Deployment Tactics": `Уменьшает время восстановления умения Deployment Tactics до 90 сек.`,
      // PVP
      "PVP Broil IV": `Удар, наносящий нестихийный урон с силой атаки 5,000.`,
      "PVP Adloquium": `Восстанавливает HP цели.<br/>Сила лечения: 3,000<br/>Дополнительный эффект: накладывает на цель Galvanize и Catalyze<br/>Эффект Galvanize: поглощающий урон равный силе лечения 6,000<br/>Продолжительность: 15 сек.<br/>Сила барьера увеличивается на 50%, когда персонаж находится под действием Recitation.<br/>Эффект Catalyze: увеличивает наносимый урон на 8%<br/>Продолжительность: 15 сек.<br/>Максимум зарядов: 2<br/>Этот умение не имеет общего времени восстановления с другими умениями.`,
      "PVP Biolysis": `Накладывает на цель Biolysis and Biolytic.<br/>Эффект Biolysis: периодический урон<br/>Сила атаки: 3,000<br/>Продолжительность: 15 сек.<br/>Сила атаки увеличивается на 50%, когда персонаж находится под действием Recitation.<br/>Эффект Biolytic: снижает наносимый целью урон на 8%<br/>Продолжительность: 15 сек.<br/>Этот умение не имеет общего времени восстановления с другими умениями.`,
      "PVP Deployment Tactics": `Распространяет эффект Galvanize, примененный персонажем на себя или на сопартийца, на всех ближайших сопартийцев.<br/>При выборе противника распространяет эффекты Biolysis and Biolytic по всем окружающим противникам.<br/>Продолжительность: время, оставшееся от первоначального эффекта<br/>Не действует на неигровых персонажей, игроков под действием Guard или находящихся в роботах.<br/>Максимум зарядов: 2`,
      "PVP Mummification": `Удар, наносящий нестихийный урон с силой атаки 6,000 по всем противникам в конусе перед персонажем.<br/>Дополнительный эффект: уменьшает количество HP, восстанавливаемых целью умениями лечения, на 25%<br/>Продолжительность: 10 сек.`,
      "PVP Expedient": `Накладывает Expedience и Desperate Measures на персонажа и всех ближайших сопартийцев.<br/>Эффект Expedience: увеличивает скорость передвижения на 25%<br/>Продолжительность: 10 сек.<br/>Эффект Desperate Measures: снижает получаемый урон на 10%<br/>Продолжительность: 10 сек.<br/>Дополнительный эффект: накладывает эффект Recitation<br/>Эффект Recitation: увеличивает силу умений Galvanize, Biolysis и Biolytic<br/>Продолжительность: 15 сек.`,
      "PVP Consolation": `Приказывает Seraph использовать Consolation.<br/>Эффект Consolation: восстанавливает HP всех ближайших сопартийцев<br/>Сила лечения: 4,000<br/>Дополнительный эффект: создаёт магический барьер, который поглощает получаемый урон, равный силе лечения 4,000<br/>Продолжительность: 10 сек.<br/>Можно использовать только во время призыва Seraph.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      "PVP Seraphic Veil": `Восстанавливает HP цели.<br/>Сила лечения: 4,000<br/>Дополнительный эффект: создаёт магический барьер, который поглощает получаемый урон, равный равный силе лечения 4,000<br/>Продолжительность: 10 сек.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      "PVP Consolation": `Восстанавливает HP всех ближайших сопартийцев.<br/>Сила лечения: 4,000<br/>Дополнительный эффект: создаёт магический барьер, который поглощает получаемый урон, равный силе лечения 4,000.<br/>Продолжительность: 10 сек.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      "PVP Summon Seraph": `Призывает фею Seraph для сражения в указанную область.<br/>Сразу после вызова Seraph использует Seraph Flight.<br/>Автоматически накладывает Seraphic Veil на сопартийцев, получающих урон.<br/>Дополнительный эффект: накладывает эффект Recitation<br/>Эффект Recitation: увеличивает силу умений Galvanize, Biolysis и Biolytic<br/>Продолжительность: 15 сек.<br/>Может быть использовано только тогда, когда шкала лимит брейка (limit gauge) заполнена.<br/>Время зарядки шкалы: 90 сек.<br/><br/>※Умением меняется на Consolation после использования.`,
      "PVP Seraph Flight": `Накладывает Seraph Flight и Excogitation на всех ближайших сопартийцев.<br/>Эффект Seraph Flight: обнуляет следующий статусный эффект, который может быть снят Purify<br/>Продолжительность: 20 сек.<br/>Эффект Excogitation: восстанавливает HP, когда оно падает ниже 50% или по истечении срока действия эффекта<br/>Сила лечения: 8,000<br/>Продолжительность: 20 сек.<br/><br/>※Это умение нельзя поместить на хотбар.`,
   };
   FILL_DB_VALUES(db);
   FILL_DB_SKILLS(db);
   FILL_DB_SKILLS_PASSIVE(db);
   FILL_DB_SKILLS_PVP(db);
})();