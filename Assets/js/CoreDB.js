async function CORE_BD_LOAD(jsonPaths) {
	const renderers = {
		"db-skill": renderSkill,
		"db-skill-passive": renderSkill,
		"db-skill-pvp": renderSkill,
		"db-role-action": renderSkill,
		"db-role-traits": renderSkill,
		"db-skill-menu": renderSkillMenu,
		"db-pvp-actions": renderSkill,
		"db-value": renderValue,
	};

	const DB = {};
	await Promise.all(
		jsonPaths.map(async (path) => {
			try {
				const res = await fetch(path);
				const data = await res.json();
				Object.assign(DB, data);
			} catch (e) {
				console.error(`Не удалось загрузить файл: ${path}`, e);
			}
		})
	);

	Object.keys(renderers).forEach((attr) => {
		document.querySelectorAll(`[${attr}]`).forEach((el) => {
			const key = el.getAttribute(attr);
			const value = getValueRecursive(key, DB);
			if (typeof value === "undefined") {
				console.error(`${attr} "${key}" не найден`);
				return;
			}
			el.innerHTML = renderers[attr](value);
		});
	});
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

function renderSkillMenu(skill) {
	return `<p title="${skill.name ?? ""}"></p><img src="${skill.skill_icon ?? ""}">`;
}

function renderValue(value) {
	return value;
}

function getValueRecursive(key, obj) {
	return key.split(".").reduce((acc, part) => acc?.[part], obj);
}
