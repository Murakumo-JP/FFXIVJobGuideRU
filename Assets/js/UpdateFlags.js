class UpdateFlags {
	constructor() {
		this.flags = {};
		this.url = "https://raw.githubusercontent.com/Murakumo-JP/FFXIVJobUpdatesRU/refs/heads/main/data/updated_flags.json";
	}

	async load() {
		try {
			const response = await fetch(`${this.url}?v=${Date.now()}`);
			const data = await response.json();
			this.flags = data.flags || {};
			return true;
		} catch (error) {
			console.warn("Не удалось загрузить флаги:", error);
			return false;
		}
	}

	getCurrentJobFlags() {
		const jobCode = document.body.id;
		return this.flags[jobCode] || {};
	}

	isSkillUpdated(skillKey) {
		const jobFlags = this.getCurrentJobFlags();
		return jobFlags[skillKey] === true;
	}

	apply() {
		const elements = document.querySelectorAll("[db-skill], [db-skill-pvp]");

		elements.forEach((element) => {
			const skillKey = element.getAttribute("db-skill") || element.getAttribute("db-skill-pvp");
			if (skillKey && this.isSkillUpdated(skillKey)) {
				element.classList.add("skill_update");
			}
		});

		const jobCode = document.body.id;
		console.log(`Применены флаги для ${jobCode}`);
	}

	async init() {
		await this.load();
		this.apply();
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new UpdateFlags().init();
});
