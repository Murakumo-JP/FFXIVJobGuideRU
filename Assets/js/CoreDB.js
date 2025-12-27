const DB_VERSION = "22.12.2025";

async function loadUpdateFlags() {
	try {
		const url = "https://raw.githubusercontent.com/Murakumo-JP/FFXIVJobUpdatesRU/main/data/UpdateFlags.json";
		const response = await fetch(`${url}?v=${Date.now()}`);
		const data = await response.json();
		return data.flags || {};
	} catch (error) {
		console.debug("Не удалось загрузить флаги обновлений");
		return {};
	}
}

async function CORE_DB_LOAD(fileNames, version = Date.now()) {
	const renderers = {
		"db-skill": renderSkill,
		"db-skill-passive": renderSkill,
		"db-skill-pvp": renderSkill,
		"db-role-action": renderSkill,
		"db-role-traits": renderSkill,
		"db-pvp-actions": renderSkill,
		"db-skill-limited": renderSkill,
		"db-skill-craft": renderSkillCraft,
		"db-craft-passive": renderSkillCraft,
		"db-skill-gathering": renderSkillCraft,
		"db-gathering-passive": renderSkillCraft,
		"db-skill-menu": renderSkillMenu,
		"db-value": renderValue,
	};

	const DB = {};
	await Promise.all(
		fileNames.map(async (file) => {
			const path = `${file}?v${version}`;
			try {
				const res = await fetch(path);
				const data = await res.json();
				Object.assign(DB, data);
			} catch (e) {
				console.error(`Не удалось загрузить файл: ${path}`, e);
			}
		})
	);

	const updateFlags = await loadUpdateFlags();
	const currentJobCode = document.body.id;
	const jobData = updateFlags[currentJobCode] || {};

	const jobSkills = {};
	const jobUpdates = {};

	Object.entries(jobData).forEach(([key, value]) => {
		if (key.includes("Skill") || key.includes("Trait")) {
			jobSkills[key] = value;
		} else if (key.includes("Update")) {
			jobUpdates[key] = value;
		}
	});

	Object.keys(renderers).forEach((attr) => {
		document.querySelectorAll(`[${attr}]`).forEach((el) => {
			const key = el.getAttribute(attr);

			if (attr === "db-value") {
				if (jobUpdates[key]) {
					el.textContent = jobUpdates[key];
					return;
				}

				const value = getValueRecursive(key, DB);
				if (typeof value === "undefined") {
					console.error(`db-value "${key}" не найден ни в Update.json, ни в базе`);
					return;
				}

				el.textContent = renderValue(value);
				return;
			}

			const value = getValueRecursive(key, DB);
			if (typeof value === "undefined") {
				console.error(`${attr} "${key}" не найден`);
				return;
			}

			const isMainTable = el.closest("tbody.job_tbody");
			const prefix = isMainTable ? "skill" : "menu";

			if (jobSkills[key]) {
				el.classList.add(`${prefix}_update`);
			}

			el.innerHTML = renderers[attr](value);
		});
	});

	const urlParams = new URLSearchParams(window.location.search);
	const encodedSkill = urlParams.get("skill");

	if (encodedSkill) {
		try {
			const decodedSkill = decodeURIComponent(atob(encodedSkill));

			const waitForJQuery = (callback, maxAttempts = 50, interval = 100) => {
				let attempts = 0;

				const checkJQuery = () => {
					if (typeof jQuery !== "undefined" && jQuery.fn) {
						callback();
					} else if (++attempts < maxAttempts) {
						setTimeout(checkJQuery, interval);
					} else {
						console.warn("jQuery не загрузилась, используем нативную прокрутку");
						nativeScrollToSkill(decodedSkill);
					}
				};

				checkJQuery();
			};

			const nativeScrollToSkill = (skillId) => {
				let attempts = 0;
				const maxAttempts = 30;
				const offset = 48;

				const scrollInterval = setInterval(() => {
					const target = document.querySelector(`[db-skill='${skillId}']`);
					if (target) {
						const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
						const scrollPosition = targetPosition - offset;

						window.scrollTo({
							top: scrollPosition,
							behavior: "smooth",
						});

						const tabElement = target.closest(".js-tab-content");
						if (tabElement && tabElement.dataset.tab) {
							if (typeof window.activateTab === "function") {
								window.activateTab(tabElement.dataset.tab);
							} else {
								const tabTrigger = document.querySelector(`.js-tab-trigger[data-tab="${tabElement.dataset.tab}"]`);
								if (tabTrigger) {
									tabTrigger.click();
								}
							}
						}

						clearInterval(scrollInterval);
					} else if (++attempts >= maxAttempts) {
						clearInterval(scrollInterval);
						console.warn("Не найден элемент:", skillId);
					}
				}, 100);
			};

			waitForJQuery(() => {
				scrollToSkillWithJQuery(decodedSkill);
			});

			function scrollToSkillWithJQuery(skillId) {
				let attempts = 0;
				const maxAttempts = 30;
				const offset = 48;

				const interval = setInterval(() => {
					const target = $(`[db-skill='${skillId}']`);
					if (target.length) {
						const targetPosition = target.offset().top;
						const scrollPosition = targetPosition - offset;

						$("html, body").animate(
							{
								scrollTop: scrollPosition,
							},
							500
						);

						const tabElement = target.closest(".js-tab-content");
						if (tabElement.length && tabElement.data("tab")) {
							if (typeof window.activateTab === "function") {
								window.activateTab(tabElement.data("tab"));
							} else {
								const tabTrigger = $(`.js-tab-trigger[data-tab="${tabElement.data("tab")}"]`);
								if (tabTrigger.length) {
									tabTrigger.trigger("click");
								}
							}
						}

						clearInterval(interval);
					} else if (++attempts >= maxAttempts) {
						clearInterval(interval);
						console.warn("Не найден элемент:", skillId);
					}
				}, 100);
			}
		} catch (error) {
			console.error("Ошибка декодирования skill:", error);
		}
	}
}

function renderSkill(skill) {
	let html = `
      <td class="skill">
         <div class="skill_wrapper">
            <div class="skill_wrapper_icon">
              <div class="job_skill_icon">
                 <img src="${skill.skill_icon ?? ""}">
              </div>
            </div>
            <p><strong>${skill.name ?? ""}</strong>
            ${skill.eorzeadb ? `<br/><a class="eorzeadb_link class_quest" href="${skill.eorzeadb}">Задание на получение</a>` : ""}</p>
         </div>
      </td>`;

	if (skill.job_icon || skill.job_class_01 || skill.job_class_02 || skill.job_class_03 || skill.level) {
		html += `<td class="jobclass">
            <div class="jobclass_wrapper">
                <div class="jobclass_wrapper_icon">`;
		if (skill.job_icon) html += `<img src="../Assets/img/DoWDoM/Job/${skill.job_icon}.png">`;
		if (skill.job_class_01) html += `<img src="../Assets/img/main/${skill.job_class_01}.png">`;
		if (skill.job_class_02) html += `<img src="../Assets/img/main/${skill.job_class_02}.png">`;
		if (skill.job_class_03) html += `<img src="../Assets/img/main/${skill.job_class_03}.png">`;
		html += `</div>`;
		if (skill.level) html += `<p>Ур. ${skill.level}</p>`;
		html += `</div></td>`;
	}

	if (skill.classification) html += `<td class="classification">${skill.classification}</td>`;
	if (skill.cast) html += `<td class="cast">${skill.cast}</td>`;
	if (skill.recast) html += `<td class="recast">${skill.recast}</td>`;
	if (skill.cost) html += `<td class="cost">${skill.cost}</td>`;

	if (skill.range || skill.radius || skill.radius_img) {
		html += `<td class="distant_range">
            <div class="range">
                <img src="../Assets/img/main/Range.png">
                <p>${skill.range ?? ""}</p>
            </div>
            <div class="radius">
                <img src="../Assets/img/DoWDoM/Radius/${skill.radius_img ?? "None"}.png">
                <p>${skill.radius ?? ""}</p>
            </div>
        </td>`;
	}

	if (skill.content) html += `<td class="content">${skill.content}</td>`;

	return html;
}

function renderSkillCraft(skill) {
	const jobName = document.body.getAttribute("job-name");
	let skillIcon = skill.skill_icon;
	let skillName = skill.name;
	let eorzeadb = skill.eorzeadb;
	let skillContent = skill.content;

	if (typeof skillIcon !== "string") skillIcon = skillIcon?.[jobName] ?? "";
	if (typeof skillName !== "string") skillName = skillName?.[jobName] ?? "";
	if (typeof eorzeadb !== "string") eorzeadb = eorzeadb?.[jobName] ?? "";
	if (typeof skillContent !== "string") skillContent = skillContent?.[jobName] ?? "";

	const eorzeadbLink = eorzeadb ? `<br/><a class="eorzeadb_link class_quest" href="${eorzeadb}">Задание на получение</a>` : "";
	const classification = skill.classification ? `<td class="classification">${skill.classification}</td>` : "";
	const recast = skill.recast ? `<td class="recast">${skill.recast}</td>` : "";
	const cost = skill.cost ? `<td class="cost">${skill.cost}</td>` : "";

	let html = `
        <td class="skill">
            <div class="skill_wrapper">
                <div class="skill_wrapper_icon">
                    <div class="guide-skill_icon">
                        <img src="${skillIcon}"/>
                    </div>
                </div>
                <p>
                    <strong>${skillName}</strong>
                    ${eorzeadbLink}
                </p>
            </div>
        </td>
        <td class="jobclass">
            <div class="jobclass_wrapper">
                <div class="jobclass_wrapper_icon">
                    <img src="../Assets/img/DoWDoM/Job/${jobName}.png"/>
                </div>
                <p>Ур. ${skill.level}</p>
            </div>
        </td>
        ${classification}
        ${recast}
        ${cost}
        <td class="content">${skillContent}</td>
    `;

	return html;
}

function renderSkillMenu(skill) {
	return `<p title="${skill.name ?? ""}"></p><img src="${skill.skill_icon ?? ""}">`;
}

function renderValue(value) {
	return value;
}

function getValueRecursive(key, obj) {
	return key.split(".").reduce((acc, part) => acc?.[part], obj);
}
