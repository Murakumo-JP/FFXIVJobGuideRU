let CONFIG = {};

async function loadConfig() {
	try {
		const res = await fetch("../DB/Config.json");
		CONFIG = await res.json();
		initUpdate();
	} catch (e) {
		console.error("Не удалось загрузить config.json", e);
	}
}

function initUpdate() {
	const addUpdateInfo = (date, patchVersion, patchLink) => {
		$("#inner_update").prepend(`<p>Последнее обновление: ${date} | Патч: ${patchVersion}</p>`);
		$("#patch_info").prepend(`Все описания основаны на активных умениях и бонусах, полученных на 100 уровне.<br/>Более подробную информацию об изменениях в активных и пассивных умениях можно найти в примечаниях к <a target="_blank" href="${patchLink}">патчноутам</a>.`);
	};
	addUpdateInfo(CONFIG.update_info.date, CONFIG.update_info.patch, CONFIG.update_info.url);
}

$(document).ready(() => {
	const WarningEnabled = false;
	const DebugEnabled = false;
	const MENU_PATH = "../DB/Menu.json";
	// Info Update
	loadConfig();
	// const addUpdateInfo = (date, patchVersion, patchLink) => {
	// 	$("#inner_update").prepend(`<p>Последнее обновление: ${date} | Патч: ${patchVersion}</p>`);
	// 	$("#patch_info").prepend(`Все описания основаны на активных умениях и бонусах, полученных на 100 уровне.<br/>Более подробную информацию об изменениях в активных и пассивных умениях можно найти в примечаниях к <a target="_blank" href="${patchLink}">патчноутам</a>.`);
	// };
	// addUpdateInfo("25.03.2025", "7.2", "https://eu.finalfantasyxiv.com/lodestone/topics/detail/e8dc09ebc782c9c57de6489532ed55804541e0c7");

	$(".SE").append('<p>All images on the site are the property of SQUARE ENIX© and are used under the <a href="https://support.na.square-enix.com/rule.php?id=5382&tag=authc">Materials Usage License</a></p>');

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
		$("html, body").animate({scrollTop: 0}, 1000);
	});
	// Tabs
	const activateTab = (id) => {
		const $tabTriggers = $(".js-tab-trigger");
		const $tabContents = $(".js-tab-content");

		$tabTriggers.each(function () {
			$(this).toggleClass("active", $(this).data("tab") === id);
		});

		$tabContents.each(function () {
			$(this).toggleClass("active", $(this).data("tab") === id);
		});
		history.replaceState(null, null, `#${id}`);
	};

	$(".js-tab-trigger").on("click", function (e) {
		e.preventDefault();
		const id = $(this).data("tab");
		activateTab(id);
	});
	$(document).ready(() => {
		const hash = location.hash.substring(1);
		if (hash) {
			activateTab(hash);
		}
	});
	// Menu JobGuide
	const $menuContainer = $("[data-menu-type]");
	const menuType = $menuContainer.data("menu-type");

	if (menuType === "MenuDoWDoM" || menuType === "MenuDoHDoL") {
		$.getJSON(MENU_PATH, (menuData) => {
			let menuArray = menuData[menuType];

			if (!menuArray) {
				console.error(`Меню для типа "${menuType}" не найдено.`);
				return;
			}

			if (menuData.Links && Array.isArray(menuData.Links)) {
				menuArray = [...menuArray, ...menuData.Links];
			}

			const $menuList = $('<ul class="jobguide_menu_list"></ul>');
			menuArray.forEach((category) => {
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
		}).fail(() => console.error("Ошибка Menu.json не был загружен."));
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
			$(".job_skil_list, .warn_info").prepend(`<div class="error_info" id="warnInfo"><h5>Важная информация!</h5><span id="closeInfo">✖</span><p>${info}</p></div>`);
			if (getCookie("warnInfoHidden") === "true") {
				$("#warnInfo").addClass("hidden");
			}
			$("#closeInfo").click(() => {
				$("#warnInfo").addClass("hidden");
				setCookie("warnInfoHidden", "true", 7);
			});
		};
		showErrorInfo("Error");
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
			$("html, body").animate({scrollTop: target.offset().top - 48}, 500);
		}
	});
});
// Global Search
$(document).ready(function () {
	let jsonData = [];

	$.getJSON("../DB/GlobalSearch.json").done(function (data) {
		jsonData = data;
	});

	function debounce(func, wait) {
		let timeout;
		return function (...args) {
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(this, args), wait);
		};
	}

	$("#search").on(
		"keyup",
		debounce(function () {
			let query = $(this).val().trim().toLowerCase();
			let results = $("#results").empty();

			if (query && jsonData.length) {
				let hasResults = false;

				jsonData.forEach((job) => {
					const safeJobName = job.job.replace(/\s+/g, "_").toLowerCase();
					job.skills.forEach((skill) => {
						if (skill.skill.toLowerCase().includes(query)) {
							let encodedSkill = btoa(skill["db-skill"]);
							let fullUrl = `${window.location.origin}/${job.page_job}?skill=${encodedSkill}`;

							results.append(
								`<li>
									<a class="copy-link" data-url="${fullUrl}"><img src="./Assets/img/svg/link.svg"></a>
									<a target="_blank" href="${fullUrl}" db-skill="${skill["db-skill"]}">
										<div class="icon_search">
											<img src="./Assets/img/DoWDoM/search/${safeJobName}/${skill.icon}" class="skill-icon" alt="${skill.skill}">
										</div>
										<div>
											${skill.skill} <span>[${job.job}: ${skill.level}]</span>
										</div>
									</a>
								</li>`
							);
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
		}, 300)
	);

	$(document).on("click", ".copy-link", function () {
		navigator.clipboard
			.writeText($(this).attr("data-url"))
			.then(() => {
				let tooltip = $("<span class='copy-tooltip'>Скопировано!</span>");
				$(this).after(tooltip);
				setTimeout(() => tooltip.fadeOut(200, () => tooltip.remove()), 350);
			})
			.catch((err) => console.error("Ошибка копирования: ", err));
	});

	let urlParams = new URLSearchParams(window.location.search);
	let encodedSkill = urlParams.get("skill");

	if (encodedSkill) {
		try {
			let scrollToSkill = atob(encodedSkill);
			let attempts = 0;
			let maxAttempts = 20;
			let interval = setInterval(() => {
				let target = $(`[db-skill='${scrollToSkill}']`);
				if (target.length) {
					$("html, body").animate({scrollTop: target.offset().top - 48}, 500);
					clearInterval(interval);
				} else if (++attempts >= maxAttempts) {
					clearInterval(interval);
					console.warn("Элемент не найден для прокрутки:", scrollToSkill);
				}
			}, 100);
		} catch (error) {
			console.error("Ошибка декодирования параметра skill:", error);
		}
	}
});
