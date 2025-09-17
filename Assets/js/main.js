$(document).ready(() => {
	const WarningEnabled = false;
	const DebugEnabled = false;
	// Info Update
	const addUpdateInfo = (date, patchVersion, patchLink) => {
		$("#inner_update").prepend(`<p>Последнее обновление: ${date} | Патч: ${patchVersion}</p>`);
		$("#patch_info").prepend(`Все описания основаны на активных умениях и бонусах, полученных на 100 уровне.<br/>Более подробную информацию об изменениях в активных и пассивных умениях можно найти в примечаниях к <a target="_blank" href="${patchLink}">патчноутам</a>.`);
	};
	addUpdateInfo("02.09.2025", "7.31", "https://eu.finalfantasyxiv.com/lodestone/topics/detail/e0d5d1beea95c9dc0e71f280e24da25c699e1216");

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

		const url = new URL(window.location);
		url.searchParams.delete("skill");
		url.hash = id;
		history.replaceState(null, null, url.toString());
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
		$.getJSON("../DB/Menu.json", (menuData) => {
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
		$("a").each(function () {
			let href = $(this).attr("href");
			if (!href) return;
			if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) return;
			if (!href.endsWith(".html")) {
				$(this).attr("href", href + ".html");
			}
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

// Light/Dark Theme
$(document).ready(() => {
	function applyTheme(theme) {
		document.body.classList.remove("light-theme", "dark-theme");
		document.body.classList.add(`${theme}-theme`);

		const iconPath = theme === "dark" ? "../Assets/img/svg/sun.svg" : "../Assets/img/svg/moon.svg";
		$("#themeToggle .icon").attr("src", iconPath);
	}

	function toggleTheme() {
		const isDark = $("body").hasClass("dark-theme");
		const newTheme = isDark ? "light" : "dark";
		applyTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	}

	const savedTheme = localStorage.getItem("theme") || "light";
	applyTheme(savedTheme);

	$("#themeToggle").on("click", toggleTheme);
});
