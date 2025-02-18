$(document).ready(() => {
	const WarningEnabled = false;
	const DebugEnabled = false;
	// Info Update
	const addUpdateInfo = (date, patchVersion, patchLink) => {
		$("#inner_update").prepend(`<p>Последнее обновление: ${date} | Патч: ${patchVersion}</p>`);
		$("#patch_info").prepend(
			`Все описания основаны на активных умениях и бонусах, полученных на 100 уровне.<br/>Более подробную информацию об изменениях в активных и пассивных умениях можно найти в примечаниях к <a target="_blank" href="${patchLink}">патчноутам</a>.`
		);
	};
	addUpdateInfo("21.01.2025", "7.16", "https://eu.finalfantasyxiv.com/lodestone/topics/detail/3c04a3a968d20cad8b17e35d37aa9cae6ff8960a");

	$(".SE").append(
		'<p>All images on the site are the property of SQUARE ENIX© and are used under the <a href="https://support.na.square-enix.com/rule.php?id=5382&tag=authc">Materials Usage License</a></p>'
	);

	// Open JobMenu
	$(".nav_floating_icon").click(() => {
		$(".nav_floating_list").fadeToggle();
	});

	// Back to Top
	const button = $(".nome_app_top");
	$(window).on("scroll", () => {
		$(window).scrollTop() >= 200 ? button.fadeIn() : button.fadeOut();
	});

	button.on("click", (e) => {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, 1000);
	});

	// Tabs
	const activateTab = (id) => {
		$(`.js-tab-trigger[data-tab="${id}"]`).addClass("active");
		$(`.js-tab-trigger:not([data-tab="${id}"])`).removeClass("active");
		$(`.js-tab-content[data-tab="${id}"]`).addClass("active");
		$(`.js-tab-content:not([data-tab="${id}"])`).removeClass("active");
	};

	$(".js-tab-trigger").click(function (e) {
		e.preventDefault();
		const id = $(this).data("tab");
		activateTab(id);
	});

	// Menu JobGuide
	const $menuContainer = $("[data-menu-type]");
	const menuType = $menuContainer.data("menu-type");

	if (menuType === "MenuDoWDoM" || menuType === "MenuDoHDoL") {
		const menuPath = menuType === "MenuDoWDoM" ? "../DB/MenuDoWDoM.json" : "../DB/MenuDoHDoL.json";
		$.getJSON(menuPath, (menuData) => {
			const $menuList = $('<ul class="jobguide_menu_list"></ul>');

			menuData.forEach((category) => {
				const $category = $('<li class="jobguide_menu_list"></li>');
				$category.append(`<span class="job_name_menu">${category.name}</span>`);
				const $subMenu = $('<ul class="jobguide_sub_menu"></ul>');

				category.jobs.forEach((job) => {
					const $job = $(`<li${job.hidden ? " hidden" : ""}></li>`);
					$job.append(`<a href="${job.link}"><p>${job.name}</p></a>`);
					$subMenu.append($job);
				});
				$category.append($subMenu);
				$menuList.append($category);
			});
			$menuContainer.append($menuList);
		}).fail(() => console.error("Данные пропили Муглы, все вопросы к ним."));
	}

	// Warning Info
	if (WarningEnabled) {
		const setCookie = (name, value, days) => {
			const date = new Date();
			date.setTime(date.getTime() + days * 86400000);
			document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
		};

		const getCookie = (name) => {
			return (
				document.cookie
					.split("; ")
					.find((cookie) => cookie.startsWith(`${name}=`))
					?.split("=")[1] || null
			);
		};

		const showErrorInfo = (info) => {
			$(".job_skil_list, .warn_info").prepend(
				`<div class="error_info" id="warnInfo"><h5>Важная информация!</h5><span id="closeInfo">✖</span><p>${info}</p></div>`
			);
			if (getCookie("warnInfoHidden") === "true") {
				$("#warnInfo").addClass("hidden");
			}
			$("#closeInfo").click(() => {
				$("#warnInfo").addClass("hidden");
				setCookie("warnInfoHidden", "true", 7);
			});
		};

		showErrorInfo("fff ");
	}

	// Debug
	if (DebugEnabled) {
		document.addEventListener("DOMContentLoaded", () => {
			$("a").click(function (e) {
				e.preventDefault();
				window.location.href = `${$(this).attr("href")}.html`;
			});
		});

		$("tr").each(function () {
			const titleText = ["db-skill", "db-role-action", "db-skill-passive", "db-role-traits", "db-skill-pvp"]
				.map((attr) => $(this).attr(attr))
				.filter(Boolean)
				.join(", ");
			if (titleText) $(this).attr("title", titleText);
		});
	}

	// Search
	const initSearch = () => {
		const $searchInput = $("#searchInput");
		const $searchContainer = $(".search");
		if ($searchInput.length && $searchContainer.length) {
			$searchInput.on("input", (e) => {
				const query = e.target.value.toLowerCase();
				$(`tbody[data-search='true'] tr`).each(function () {
					const skillName = $(this).find(".skill p strong").text().toLowerCase() || "";
					$(this).toggle(skillName.includes(query));
				});
			});
		}
	};
	initSearch();
	// Preloader
	setTimeout(function () {
		const $preloader = $("#page-preloader");
		if ($preloader.length && !$preloader.hasClass("done")) {
			$preloader.addClass("done");
			$("body").css("overflow-y", "visible");
		}
		const id = window.location.hash;
		if (id) activateTab(id.substring(1));
	}, 500);
	// Smooth Scrolling
	$("a[href*='#']").click(function (e) {
		e.preventDefault();
		const target = $($(this).attr("href"));
		if (target.length) {
			$("html, body").animate({ scrollTop: target.offset().top - 48 }, 500);
		}
	});
});
// Global Search
$(document).ready(function () {
	let jsonData = [];

	$.getJSON("../DB/GlobalSearch.json", function (data) {
		jsonData = data;
	});

	$("#search").on("keyup", function () {
		let query = $(this).val().trimStart().toLowerCase();
		let results = $("#results").empty();

		if (query.length > 0) {
			let hasResults = false;

			jsonData.forEach((job) => {
				job.skills.forEach((skill) => {
					if (skill.skill.toLowerCase().includes(query)) {
						results.append(`
									<li>
										 <a target="_blank" href="${job.page_job}" data-skill="${skill["db-skill"]}">
										     <div class="icon_search">
											  		<img src="${skill.icon}" class="skill-icon" alt="${skill.skill}">
											  </div>
											  <div>
													${skill.skill}
											  		<span>[${job.job}: ${skill.level}]</span>
											  </div>
										 </a>
									</li>
							  `);
						hasResults = true;
					}
				});
			});

			if (!hasResults) {
				results.append("<li>Ничего не найдено</li>");
			}

			$(".search-results").show();
		} else {
			$(".search-results").hide();
		}
	});

	$(document).click(function (event) {
		if (!$(event.target).closest(".search-container").length) {
			$(".search-results").hide();
		}
	});

	$(document).on("click", "#results a", function () {
		localStorage.setItem("scrollToSkill", $(this).data("skill"));
	});

	let scrollToSkill = localStorage.getItem("scrollToSkill");
	if (scrollToSkill) {
		localStorage.removeItem("scrollToSkill");
		let target = $(`[db-skill='${scrollToSkill}']`);
		if (target.length) {
			$("html, body").animate({ scrollTop: target.offset().top - 48 }, 500);
		}
	}
});
