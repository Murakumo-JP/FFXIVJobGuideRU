function FILL_DB_RENDERER(DB) {
	const renderers = {
		"db-skill": renderSkill,
		"db-skill-passive": renderSkillPassive,
		"db-skill-pvp": renderSkillPVP,
		"db-role-action": renderRoleAction,
		"db-role-traits": renderRoleTraits,
		"db-skill-menu": renderSkillMenu,
	};

	Object.keys(renderers).forEach((attr) => {
		document.querySelectorAll(`[${attr}]`).forEach((el) => {
			const key = el.getAttribute(attr);
			const skill = DB[key];
			if (!skill) {
				console.error(`Skill "${key}" not found`);
				return;
			}
			el.innerHTML = renderers[attr](skill);
		});
	});
}

function renderSkill(skill) {
	return `
	  <td class="skill">
		 <div class="skill_wrapper">
			<div class="skill_wrapper_icon">
			  <div class="job_skill_icon">
				 <img src="${skill.skill_icon ?? ""}">
			  </div>
			</div>
			<p><strong>${skill.name ?? ""}</strong>${skill.eorzeadb ? `<br/><a class="eorzeadb_link class_quest" href="${skill.eorzeadb}">Задание на получение</a>` : ""}</p>
		 </div>
	  </td>
	  <td class="jobclass">
		 <div class="jobclass_wrapper">
			<div class="jobclass_wrapper_icon">
			  <img src="../Assets/img/DoWDoM/Job/${skill.job_icon ?? "default"}.png">
			</div>
			<p>Ур. ${skill.level ?? ""}</p>
		 </div>
	  </td>
	  <td class="classification">${skill.classification ?? ""}</td>
	  <td class="cast">${skill.cast ?? ""}</td>
	  <td class="recast">${skill.recast ?? ""}</td>
	  ${skill.cost ? `<td class="cost">${skill.cost}</td>` : ""}
	  <td class="distant_range">
		 <div class="range">
			<img src="../Assets/img/main/Range.png">
			<p>${skill.range ?? ""}</p>
		 </div>
		 <div class="radius">
			<img src="../Assets/img/DoWDoM/Radius/${skill.radius_img ?? "None"}.png">
			<p>${skill.radius ?? ""}</p>
		 </div>
	  </td>
	  <td class="content">${skill.content ?? ""}</td>`;
}

function renderSkillPassive(skill) {
	return `
	  <td class="skill">
		 <div class="skill_wrapper">
			<div class="skill_wrapper_icon">
			  <div class="job_skill_icon">
				 <img src="${skill.skill_icon ?? ""}">
			  </div>
			</div>
			<p><strong>${skill.name ?? ""}</strong>${skill.eorzeadb ? `<br/><a class="eorzeadb_link class_quest" href="${skill.eorzeadb}">Задание на получение</a>` : ""}</p>
		 </div>
	  </td>
	  <td class="jobclass">
		 <div class="jobclass_wrapper">
			<div class="jobclass_wrapper_icon">
			  <img src="../Assets/img/DoWDoM/Job/${skill.job_icon ?? "default"}.png">
			</div>
			<p>Ур. ${skill.level ?? ""}</p>
		 </div>
	  </td>
	  <td class="content">${skill.content ?? ""}</td>`;
}

function renderSkillPVP(skill) {
	return `
	  <td class="skill">
		 <div class="skill_wrapper">
			<div class="skill_wrapper_icon">
			  <div class="job_skill_icon">
				 <img src="${skill.skill_icon ?? ""}"/>
			  </div>
			</div>
			<p><strong>${skill.name ?? ""}</strong></p>
		 </div>
	  </td>
	  ${skill.classification ? `<td class="classification">${skill.classification}</td>` : ""}
	  <td class="cast">${skill.cast ?? ""}</td>
	  <td class="recast">${skill.recast ?? ""}</td>
	  <td class="distant_range">
		 <div class="range">
			<img src="../Assets/img/main/Range.png">
			<p>${skill.range ?? ""}</p>
		 </div>
		 <div class="radius">
			<img src="../Assets/img/DoWDoM/Radius/${skill.radius_img ?? "None"}.png">
			<p>${skill.radius ?? ""}</p>
		 </div>
	  </td>
	  <td class="content">${skill.content ?? ""}</td>`;
}

function renderRoleAction(skill) {
	const jobclass_01 = skill.job_class_01 ? `<img src="../Assets/img/main/${skill.job_class_01}.png">` : "";
	const jobclass_02 = skill.job_class_02 ? `<img src="../Assets/img/main/${skill.job_class_02}.png">` : "";
	const jobclass_03 = skill.job_class_03 ? `<img src="../Assets/img/main/${skill.job_class_03}.png">` : "";
	return `
	  <td class="skill">
		 <div class="skill_wrapper">
			<div class="skill_wrapper_icon">
			  <div class="job_skill_icon">
				 <img src="${skill.skill_icon ?? ""}">
			  </div>
			</div>
			<p><strong>${skill.name ?? ""}</strong></p>
		 </div>
	  </td>
	  <td class="jobclass">
		 <div class="jobclass_wrapper">
			<div class="jobclass_wrapper_icon">
			  ${jobclass_01}${jobclass_02}${jobclass_03}
			</div>
			${skill.level ? `<p>Ур. ${skill.level}</p>` : ""}
		 </div>
	  </td>
	  <td class="classification">${skill.classification ?? ""}</td>
	  <td class="cast">${skill.cast ?? ""}</td>
	  <td class="recast">${skill.recast ?? ""}</td>
	  ${skill.cost ? `<td class="cost">${skill.cost}</td>` : ""}
	  <td class="distant_range">
		 <div class="range">
			<img src="../Assets/img/main/Range.png">
			<p>${skill.range ?? ""}</p>
		 </div>
		 <div class="radius">
			<img src="../Assets/img/DoWDoM/Radius/${skill.radius_img ?? "None"}.png">
			<p>${skill.radius ?? ""}</p>
		 </div>
	  </td>
	  <td class="content">${skill.content ?? ""}</td>`;
}

function renderRoleTraits(skill) {
	const jobclass_01 = skill.job_class_01 ? `<img src="../Assets/img/main/${skill.job_class_01}.png">` : "";
	const jobclass_02 = skill.job_class_02 ? `<img src="../Assets/img/main/${skill.job_class_02}.png">` : "";
	const jobclass_03 = skill.job_class_03 ? `<img src="../Assets/img/main/${skill.job_class_03}.png">` : "";
	return `
	  <td class="skill">
		 <div class="skill_wrapper">
			<div class="skill_wrapper_icon">
			  <div class="job_skill_icon"><img src="${skill.skill_icon ?? ""}"></div>
			</div>
			<p><strong>${skill.name ?? ""}</strong></p>
		 </div>
	  </td>
	  <td class="jobclass">
		 <div class="jobclass_wrapper">
			<div class="jobclass_wrapper_icon">
			  ${jobclass_01}${jobclass_02}${jobclass_03}
			</div>
			<p>Ур. ${skill.level ?? ""}</p>
		 </div>
	  </td>
	  <td class="content">${skill.content ?? ""}</td>`;
}

function renderSkillMenu(skill) {
	return `<p title="${skill.name ?? ""}"></p><img src="${skill.skill_icon ?? ""}">`;
}
