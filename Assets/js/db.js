function FILL_DB_VALUES(DB) {
	function get_value_recursive(key, tempDB) {
		let index = key.indexOf(".");
		if (index == -1) {
			return tempDB[key];
		}
		let firstKey = key.substring(0, index);
		tempDB = tempDB[firstKey];
		key = key.substring(index + 1);
		return get_value_recursive(key, tempDB);
	}
	$("*[db-value]").each(function () {
		let key = this.getAttribute("db-value");
		let value = get_value_recursive(key, DB);
		if (typeof value == "undefined") {
			this.innerHTML = '<span class="text_error">Value not founded [' + key + "]</span>";
			return;
		}
		this.innerHTML = value;
	});
}

function FILL_DB_SKILLS_LIMITED(DB) {
	$("*[db-skill-limited]").each(function () {
		let key = this.getAttribute("db-skill-limited");
		let skill = DB[key];
		if (skill === undefined) {
			console.error('Skill "' + key + '" not found');
			return;
		}
		this.innerHTML =
			`
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="job_skill_icon">
						<img src="` +
			skill["skill_icon"] +
			`"/>
					</div>
				</div>
				<p><strong>` +
			skill["name"] +
			`</strong></p>
			</div>
		</td>
		<td class="classification">` +
			skill["classification"] +
			`</td>
		<td class="cast">` +
			skill["cast"] +
			`</td>
		<td class="recast">` +
			skill["recast"] +
			`</td>
		<td class="cost">` +
			skill["cost"] +
			`</td>
		<td class="distant_range">
			<div class="range">
				<img src="../Assets/img/main/Range.png">
				<p>` +
			skill["range"] +
			`</p>
			</div>
			<div class="radius">
				<img src="../Assets/img/DoWDoM/Radius/` +
			skill["radius_img"] +
			`.png">
				<p>` +
			skill["radius"] +
			`</p>
			</div>
		</td>
		<td class="content">` +
			skill["content"] +
			`</td>`;
	});
}

function FILL_DB_SKILLS_CRAFT(DB) {
	const job_name = document.querySelector("body").getAttribute("job-name");
	$("*[db-skill-craft]").each(function () {
		let key = this.getAttribute("db-skill-craft");
		let skill = DB[key];
		if (skill === undefined) {
			console.error('Skill "' + key + '" not found');
			return;
		}
		let skill_icon = skill["skill_icon"];
		let eorzeadb = skill["eorzeadb"] ? '<br/><a class="eorzeadb_link class_quest" href="' + skill["eorzeadb"] + '">Классовое задание</a>' : "";
		if (typeof skill_icon !== "string") {
			skill_icon = skill_icon[job_name];
		}
		this.innerHTML =
			`
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="guide-skill_icon">
						<img src="` +
			skill_icon +
			`"/>
					</div>
				</div>
				<p>
					<strong>` +
			skill["name"] +
			`</strong>
					` +
			eorzeadb +
			`
				</p>
			</div>
		</td>
		<td class="jobclass">
			<div class="jobclass_wrapper">
				<div class="jobclass_wrapper_icon">
					<img src="../Assets/img/DoWDoM/Job/` +
			job_name +
			`.png"/>
				</div>
				<p>Ур. ` +
			skill["level"] +
			`</p>
			</div>
		</td>
		<td class="cost">` +
			skill["cost"] +
			` CP</td>
		<td class="content">` +
			skill["content"] +
			`</td>`;
	});
}

function FILL_DB_CRAFT_PASSIVE(DB) {
	const job_name = document.querySelector("body").getAttribute("job-name");
	$("*[db-craft-passive]").each(function () {
		let key = this.getAttribute("db-craft-passive");
		let skill = DB[key];
		if (skill === undefined) {
			console.error('Skill "' + key + '" not found');
			return;
		}
		let skill_icon = skill["skill_icon"];
		let eorzeadb = skill["eorzeadb"] ? '<br/><a class="eorzeadb_link class_quest" href="' + skill["eorzeadb"] + '">Классовое задание</a>' : "";
		let cost = skill["cost"] ? '<td class="cost">' + skill["cost"] + " CP</td>" : "";
		if (typeof skill_icon !== "string") {
			skill_icon = skill_icon[job_name];
		}
		this.innerHTML =
			`
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="guide-skill_icon">
						<img src="` +
			skill_icon +
			`"/>
					</div>
				</div>
				<p>
					<strong>` +
			skill["name"] +
			`</strong>
					` +
			eorzeadb +
			`
				</p>
			</div>
		</td>
		<td class="jobclass">
			<div class="jobclass_wrapper">
				<div class="jobclass_wrapper_icon">
					<img src="../Assets/img/DoWDoM/Job/` +
			job_name +
			`.png"/>
				</div>
				<p>Ур. ` +
			skill["level"] +
			`</p>
			</div>
		</td>
		` +
			cost +
			`
		<td class="content">` +
			skill["content"] +
			`</td>`;
	});
}

function FILL_DB_SKILLS_GATHERING(DB) {
	const job_name = document.querySelector("body").getAttribute("job-name");
	$("*[db-skill-gathering]").each(function () {
		let key = this.getAttribute("db-skill-gathering");
		let skill = DB[key];
		if (skill === undefined) {
			console.error('Skill "' + key + '" not found');
			return;
		}
		let eorzeadb = skill["eorzeadb"];
		if (eorzeadb) {
			if (typeof eorzeadb !== "string") {
				eorzeadb = eorzeadb[job_name];
			}
			eorzeadb = '<br/><a class="eorzeadb_link class_quest" href="' + eorzeadb + '">Задание на получение</a>';
		} else {
			eorzeadb = "";
		}
		let skill_icon = skill["skill_icon"];
		if (typeof skill_icon !== "string") {
			skill_icon = skill_icon[job_name];
		}
		let skill_name = skill["name"];
		if (typeof skill_name !== "string") {
			skill_name = skill_name[job_name];
		}
		this.innerHTML =
			`
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="guide-skill_icon">
						<img src="` +
			skill_icon +
			`"/>
					</div>
				</div>
				<p>
					<strong>` +
			skill_name +
			`</strong>
					` +
			eorzeadb +
			`
				</p>
			</div>
		</td>
		<td class="jobclass">
			<div class="jobclass_wrapper">
				<div class="jobclass_wrapper_icon">
					<img src="../Assets/img/DoWDoM/Job/` +
			job_name +
			`.png"/>
				</div>
				<p>Ур. ` +
			skill["level"] +
			`</p>
			</div>
		</td>
		<td class="classification">` +
			skill["classification"] +
			`</td>
		<td class="recast">` +
			skill["recast"] +
			`</td>
		<td class="cost">` +
			skill["cost"] +
			` GP</td>
		<td class="content">` +
			skill["content"] +
			`</td>`;
	});
}

function FILL_DB_GATHERING_PASSIVE(DB) {
	const job_name = document.querySelector("body").getAttribute("job-name");
	$("*[db-gathering-passive]").each(function () {
		let key = this.getAttribute("db-gathering-passive");
		let skill = DB[key];
		if (skill === undefined) {
			console.error('Skill "' + key + '" not found');
			return;
		}
		let eorzeadb = skill["eorzeadb"];
		if (eorzeadb) {
			if (typeof eorzeadb !== "string") {
				eorzeadb = eorzeadb[job_name];
			}
			eorzeadb = '<br/><a class="eorzeadb_link class_quest" href="' + eorzeadb + '">Задание на получение</a>';
		} else {
			eorzeadb = "";
		}
		let skill_icon = skill["skill_icon"];
		if (typeof skill_icon !== "string") {
			skill_icon = skill_icon[job_name];
		}
		let skill_name = skill["name"];
		if (typeof skill_name !== "string") {
			skill_name = skill_name[job_name];
		}
		let skill_content = skill["content"];
		if (typeof skill_content !== "string") {
			skill_content = skill_content[job_name];
		}
		let classification = skill["classification"] ? '<td class="classification">' + skill["classification"] + "</td>" : "";
		let recast = skill["recast"] ? '<td class="recast">' + skill["recast"] + "</td>" : "";
		this.innerHTML =
			`
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="guide-skill_icon">
						<img src="` +
			skill_icon +
			`"/>
					</div>
				</div>
				<p>
					<strong>` +
			skill_name +
			`</strong>
					` +
			eorzeadb +
			`
				</p>
			</div>
		</td>
		<td class="jobclass">
			<div class="jobclass_wrapper">
				<div class="jobclass_wrapper_icon">
					<img src="../Assets/img/DoWDoM/Job/` +
			job_name +
			`.png"/>
				</div>
				<p>Ур. ` +
			skill["level"] +
			`</p>
			</div>
		</td>
		` +
			classification +
			`
		` +
			recast +
			`
		<td class="content">` +
			skill_content +
			`</td>`;
	});
}
