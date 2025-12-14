$(document).ready(() => {
	const CONFIG = {
		WARNING_ENABLED: false,
		DEBUG_ENABLED: false,
		SCROLL_THRESHOLD: 200,
		SCROLL_ANIMATION_DURATION: 1000,
		PRELOADER_TIMEOUT: 500,
		SEARCH_DEBOUNCE: 300,
		COOKIE_EXPIRE_DAYS: 7,
	};

	const appState = {
		searchData: null,
		activeTab: "",
		theme: localStorage.getItem("theme") || "light",
		menuData: null,
	};

	const $elements = {
		window: $(window),
		document: $(document),
		body: $("body"),
		searchInput: $("#searchInput"),
		searchResults: $(".search-results"),
		resultsContainer: $("#results"),
		preloader: $("#page-preloader"),
		backToTopBtn: $(".nome_app_top"),
		floatingIcon: $(".nav_floating_icon"),
		floatingList: $(".nav_floating_list"),
		tabTriggers: $(".js-tab-trigger"),
		tabContents: $(".js-tab-content"),
		menuContainer: $("[data-menu-type]"),
		themeToggle: $("#themeToggle"),
		SE: $(".SE"),
	};

	function initApplication() {
		addUpdateInfo();
		addCopyrightNotice();
		setupEventHandlers();
		initMenu();
		initSearch();
		initTheme();
		initDebugTools();
		initPreloader();
		initGlobalSearch();

		const hash = window.location.hash.substring(1);
		if (hash) {
			activateTab(hash);
		}
	}

	function addUpdateInfo() {
		const updateDate = "16.12.2025";
		const patchVersion = "7.4";
		const patchLink = "https://eu.finalfantasyxiv.com/lodestone/topics/detail/";

		$("#inner_update").prepend(`<p>Последнее обновление: ${updateDate} | Патч: ${patchVersion}</p>`);

		$("#patch_info").prepend(`Все описания основаны на активных умениях и бонусах, полученных на 100 уровне.<br/>` + `Более подробную информацию об изменениях в активных и пассивных умениях можно найти в ` + `примечаниях к <a target="_blank" href="${patchLink}">патчноутам</a>.`);
	}

	function addCopyrightNotice() {
		$elements.SE.append(`<p>All images on the site are the property of SQUARE ENIX© and are used under the ` + `<a href="https://support.na.square-enix.com/rule.php?id=5382&tag=authc">Materials Usage License</a></p>`);
	}

	function setupEventHandlers() {
		$elements.floatingIcon.on("click", () => {
			$elements.floatingList.fadeToggle();
		});

		let scrollTimeout;
		$elements.window.on("scroll", () => {
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(() => {
				const shouldShow = $elements.window.scrollTop() >= CONFIG.SCROLL_THRESHOLD;
				shouldShow ? $elements.backToTopBtn.fadeIn() : $elements.backToTopBtn.fadeOut();
			}, 100);
		});

		$elements.backToTopBtn.on("click", (e) => {
			e.preventDefault();
			$("html, body").animate({scrollTop: 0}, CONFIG.SCROLL_ANIMATION_DURATION);
		});

		$elements.tabTriggers.on("click", function (e) {
			e.preventDefault();
			const tabId = $(this).data("tab");
			activateTab(tabId);
		});

		$(document).on("click", 'a[href*="#"]', function (e) {
			const href = $(this).attr("href");
			if (href === "#" || href.startsWith("#")) {
				e.preventDefault();
				const target = $(href);
				if (target.length) {
					$("html, body").animate({scrollTop: target.offset().top - 48}, 500);
				}
			}
		});
	}

	function activateTab(id) {
		appState.activeTab = id;

		$elements.tabTriggers.each(function () {
			$(this).toggleClass("active", $(this).data("tab") === id);
		});

		$elements.tabContents.each(function () {
			$(this).toggleClass("active", $(this).data("tab") === id);
		});

		const url = new URL(window.location);
		url.hash = id;
		window.history.replaceState(null, null, url.toString());
	}

	function initMenu() {
		const menuType = $elements.menuContainer.data("menu-type");
		if (!menuType || !(menuType === "MenuDoWDoM" || menuType === "MenuDoHDoL")) {
			return;
		}

		$.getJSON("../DB/Menu.json")
			.done((menuData) => {
				appState.menuData = menuData;
				renderMenu(menuType, menuData);
			})
			.fail(() => {
				console.error("Ошибка: Menu.json не был загружен.");
			});
	}

	function renderMenu(menuType, menuData) {
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
				const $job = $("<li></li>");
				if (job.hidden) $job.hide();

				const $link = $("<a></a>").attr("href", job.link);
				$link.append(`<p>${job.name}</p>`);
				$job.append($link);
				$subMenu.append($job);
			});

			$category.append($subMenu);
			$menuList.append($category);
		});

		$elements.menuContainer.empty().append($menuList);
	}

	function initWarnings() {
		if (!CONFIG.WARNING_ENABLED) return;

		const CookieManager = {
			set(name, value, days) {
				const date = new Date();
				date.setTime(date.getTime() + days * 86400000);
				document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/;SameSite=Lax`;
			},

			get(name) {
				const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
				return match ? decodeURIComponent(match[2]) : null;
			},
		};

		function showWarningInfo(info) {
			const warningHtml = `
					<div class="error_info" id="warnInfo">
						 <h5>Важная информация!</h5>
						 <span id="closeInfo">✖</span>
						 <p>${info}</p>
					</div>
			  `;

			$(".job_skil_list, .warn_info").prepend(warningHtml);

			if (CookieManager.get("warnInfoHidden") === "true") {
				$("#warnInfo").addClass("hidden");
			}

			$("#closeInfo").on("click", () => {
				$("#warnInfo").addClass("hidden");
				CookieManager.set("warnInfoHidden", "true", CONFIG.COOKIE_EXPIRE_DAYS);
			});
		}

		showWarningInfo("Error");
	}

	function initSearch() {
		if (!$elements.searchInput.length) return;

		const $searchableRows = $(`tbody[data-search='true'] tr`);
		$elements.searchInput.on(
			"input",
			debounce(function (e) {
				const query = e.target.value.trim().toLowerCase();

				if (!query) {
					$searchableRows.show();
					return;
				}

				$searchableRows.each(function () {
					const skillName = $(this).find(".skill p strong").text().toLowerCase();
					$(this).toggle(skillName.includes(query));
				});
			}, CONFIG.SEARCH_DEBOUNCE)
		);
	}

	function initPreloader() {
		setTimeout(() => {
			if ($elements.preloader.length && !$elements.preloader.hasClass("done")) {
				$elements.preloader.addClass("done");
				$elements.body.css("overflow-y", "visible");

				if (appState.activeTab) {
					activateTab(appState.activeTab);
				}
			}
		}, CONFIG.PRELOADER_TIMEOUT);
	}

	function initGlobalSearch() {
		loadSearchData();

		$("#search").on(
			"keyup",
			debounce(function () {
				performGlobalSearch($(this).val().trim());
			}, CONFIG.SEARCH_DEBOUNCE)
		);

		$(document).on("click", ".copy-link", handleCopyLink);
	}

	async function loadSearchData() {
		try {
			const response = await fetch("../DB/GlobalSearch.json");
			if (!response.ok) throw new Error("Network response was not ok");
			appState.searchData = await response.json();
		} catch (error) {
			console.error("Ошибка загрузки данных для поиска:", error);
		}
	}

	function performGlobalSearch(query) {
		if (!query || !appState.searchData || !appState.searchData.length) {
			$elements.searchResults.hide();
			return;
		}

		const results = [];
		const normalizedQuery = query.toLowerCase();

		appState.searchData.forEach((job) => {
			const safeJobName = job.job.replace(/\s+/g, "_").toLowerCase();

			job.skills.forEach((skill) => {
				if (skill.skill.toLowerCase().includes(normalizedQuery)) {
					const encodedSkill = btoa(encodeURIComponent(skill["db-skill"]));
					const fullUrl = `${window.location.origin}/${job.page_job}?skill=${encodedSkill}`;

					results.push({
						job: job.job,
						skill: skill.skill,
						level: skill.level,
						icon: skill.icon,
						url: fullUrl,
						dbSkill: skill["db-skill"],
						safeJobName: safeJobName,
					});
				}
			});
		});

		renderSearchResults(results, normalizedQuery);
	}

	function renderSearchResults(results, query) {
		$elements.resultsContainer.empty();

		if (!results.length) {
			$elements.resultsContainer.append("<li>Ничего не найдено</li>");
			$elements.searchResults.show();
			return;
		}

		const limitedResults = results.slice(0, 50);

		limitedResults.forEach((result) => {
			const $li = $("<li></li>");
			const $copyBtn = $('<a class="copy-link"></a>').attr("data-url", result.url).append('<img src="./Assets/img/svg/link.svg" alt="Копировать ссылку">');
			const $mainLink = $("<a></a>").attr({
				target: "_blank",
				href: result.url,
				"db-skill": result.dbSkill,
			});
			const $iconDiv = $('<div class="icon_search"></div>').append(`<img src="./Assets/img/DoWDoM/search/${result.safeJobName}/${result.icon}" class="skill-icon" alt="${result.skill}">`);

			const $textDiv = $("<div></div>").html(`${result.skill} <span>[${result.job}: ${result.level}]</span>`);

			$mainLink.append($iconDiv, $textDiv);
			$li.append($copyBtn, $mainLink);
			$elements.resultsContainer.append($li);
		});

		$elements.searchResults.show();
	}

	function handleCopyLink(event) {
		event.preventDefault();
		const url = $(this).attr("data-url");

		if (!url) return;

		if (navigator.clipboard && window.isSecureContext) {
			navigator.clipboard
				.writeText(url)
				.then(() => showCopyTooltip(this))
				.catch((err) => {
					console.error("Ошибка копирования:", err);
					fallbackCopy(url);
				});
		} else {
			fallbackCopy(url);
		}
	}

	function fallbackCopy(text) {
		const textArea = document.createElement("textarea");
		textArea.value = text;
		textArea.style.position = "fixed";
		textArea.style.opacity = "0";
		document.body.appendChild(textArea);
		textArea.select();

		try {
			document.execCommand("copy");
			showCopyTooltip(event.target);
		} catch (err) {
			console.error("Fallback copy failed:", err);
		}

		document.body.removeChild(textArea);
	}

	function showCopyTooltip(element) {
		const $tooltip = $('<span class="copy-tooltip">Скопировано!</span>');
		$(element).after($tooltip);

		setTimeout(() => {
			$tooltip.fadeOut(200, () => $tooltip.remove());
		}, 350);
	}

	function initTheme() {
		applyTheme(appState.theme);
		$elements.themeToggle.on("click", () => {
			const newTheme = appState.theme === "dark" ? "light" : "dark";
			setTheme(newTheme);
		});
	}

	function applyTheme(theme) {
		appState.theme = theme;
		$elements.body.removeClass("light-theme dark-theme").addClass(`${theme}-theme`);
		const iconPath = theme === "dark" ? "../Assets/img/svg/sun.svg" : "../Assets/img/svg/moon.svg";
		$elements.themeToggle.find(".icon").attr("src", iconPath);
	}

	function setTheme(theme) {
		applyTheme(theme);
		localStorage.setItem("theme", theme);
	}

	function debounce(func, wait) {
		let timeout;
		return function executedFunction(...args) {
			const later = () => {
				clearTimeout(timeout);
				func.apply(this, args);
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	}

	function initDebugTools() {
		if (!CONFIG.DEBUG_ENABLED) return;

		function fixLinks() {
			$("a").each(function () {
				const $link = $(this);
				const href = $link.attr("href");

				if (!href || href.startsWith("mailto:") || href.startsWith("#") || href.endsWith(".html")) {
					return;
				}

				const [path, query] = href.split("?");
				let newHref = path;

				if (href.startsWith("/Page/") || href.startsWith("Page/")) {
					newHref = path + ".html";
				} else if (!href.includes("/")) {
					newHref = "/Page/" + path + ".html";
				} else {
					newHref = path + ".html";
				}

				if (query) newHref += "?" + query;
				$link.attr("href", newHref);
			});
		}

		$("tr").each(function () {
			const attributes = ["db-skill", "db-role-action", "db-skill-passive", "db-role-traits", "db-skill-pvp"];
			const titles = attributes.map((attr) => $(this).attr(attr)).filter(Boolean);

			if (titles.length) {
				$(this).attr("title", titles.join(", "));
			}
		});

		const $debugMenu = $(`
			  <div id="debug-menu">
					<a>DEBUG</a>
					<button id="btn-fix-links">Add .html</button>
			  </div>
		 `);

		$elements.body.append($debugMenu);
		$("#btn-fix-links").on("click", fixLinks);

		fixLinks();
	}

	initApplication();
	initWarnings();
});

window.activateTab = function (id) {
	$(document).ready(() => {
		$('.js-tab-trigger[data-tab="' + id + '"]').trigger("click");
	});
};
