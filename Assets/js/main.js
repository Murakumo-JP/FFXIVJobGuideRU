// ============================================================================
// [1] ГЛОБАЛЬНЫЕ КОНСТАНТЫ И НАСТРОЙКИ
// ============================================================================
const JSON_URLS = {
	UPDATES: "https://cdn.ff14jobguide.ru/data/UpdatesPatch.json",
	MENU: "/DB/Menu.json",
	SEARCH: "https://cdn.ff14jobguide.ru/data/GlobalSearch.json",
};

const PAGES_PATH = "/Page/";
let jsonData = [];

// ============================================================================
// [2] ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================================================
const lockScroll = () => $("body").addClass("no-scroll");
const unlockScroll = () => $("body").removeClass("no-scroll");

const safeBtoa = (str) => {
	const bytes = new TextEncoder().encode(str);
	let result = "";
	for (let i = 0; i < bytes.length; i++) {
		result += String.fromCharCode(bytes[i]);
	}
	return btoa(result);
};

const debounce = (fn, delay) => {
	let timer = null;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, args), delay);
	};
};

// Снегопад
const createSVGSnowfall = () => {
	const canvas = document.createElement("canvas");
	canvas.id = "snowCanvas";
	Object.assign(canvas.style, {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		pointerEvents: "none",
		zIndex: 1000,
	});
	document.body.prepend(canvas);

	const ctx = canvas.getContext("2d");
	let width = window.innerWidth;
	let height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;

	window.addEventListener(
		"resize",
		() => {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		},
		{passive: true}
	);

	const flakeCount = 69;
	const flakes = Array.from({length: flakeCount}, () => createFlake());

	function createFlake() {
		return {
			x: Math.random() * width,
			y: Math.random() * height,
			size: 8 + Math.random() * 12,
			speed: 0.3 + Math.random() * 0.9,
			wind: -0.2 + Math.random() * 0.4,
			opacity: 0.3 + Math.random() * 0.4,
			rotation: Math.random() * Math.PI * 2,
			rotationSpeed: (Math.random() - 0.5) * 0.02,
		};
	}

	const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
            <path d="M50,10 L50,90 M10,50 L90,50 M20,20 L80,80 M80,20 L20,80 M25,50 L75,50 M50,25 L50,75" stroke="white" stroke-width="8" stroke-linecap="round"/>
            <circle cx="50" cy="50" r="12" fill="white"/>
        </svg>
    `;
	const snowflakeImg = new Image();
	snowflakeImg.src = URL.createObjectURL(new Blob([svgString], {type: "image/svg+xml;charset=utf-8"}));

	function animate() {
		ctx.clearRect(0, 0, width, height);
		flakes.forEach((flake) => {
			flake.y += flake.speed;
			flake.x += flake.wind;
			flake.rotation += flake.rotationSpeed;
			if (flake.y > height + 30) Object.assign(flake, createFlake(), {y: -30});
			if (flake.x > width + 30) flake.x = -30;
			if (flake.x < -30) flake.x = width + 30;

			ctx.save();
			ctx.translate(flake.x, flake.y);
			ctx.rotate(flake.rotation);
			ctx.globalAlpha = flake.opacity;
			ctx.drawImage(snowflakeImg, -flake.size / 2, -flake.size / 2, flake.size, flake.size);
			ctx.restore();
		});
		requestAnimationFrame(animate);
	}
	snowflakeImg.onload = animate;
};
// createSVGSnowfall();

// ============================================================================
// [3] ГЛАВНЫЙ ИНИЦИАЛИЗАТОР
// ============================================================================
$(function () {
	// ---  Активное меню (Фикс бага с includes) ---
	const currentPath = window.location.pathname.split("/").pop().replace(".html", "") || "index";
	$(".btn_gs_menu").each(function () {
		const href = $(this).attr("href");
		if (!href) return;
		const cleanHref = href.replace(".html", "");
		if (currentPath === cleanHref) {
			$(this).addClass("active");
			$(this).on("click", (e) => e.preventDefault());
		}
	});

	// --- Инфо об обновлениях и Копирайт ---
	fetch(`${JSON_URLS.UPDATES}?v=${Date.now()}`)
		.then((response) => response.json())
		.then((data) => {
			$("#inner_update").prepend(`<p>Последнее обновление: ${data.lastUpdate} | Патч: ${data.patchVersion}</p>`);
			$("#patch_info").prepend(
				`Все описания основаны на активных умениях и бонусах, полученных на 100 уровне.<br/>
                 Более подробную информацию об изменениях в активных и пассивных умениях можно найти 
                 в примечаниях к <a target="_blank" href="${data.patchLink}">патчноутам</a>.`
			);
		})
		.catch((err) => console.error("Ошибка загрузки UpdatesPatch.json", err));

	const year = new Date().getFullYear();
	$(".footer_info").html(`
			<span>FINAL FANTASY XIV © 2010–${year} SQUARE ENIX CO., LTD. All Rights Reserved.</span>
			<span>FFXIV JobGuide RU © 2024–${year} · <a href="https://github.com/Murakumo-JP/FFXIVJobGuideRU/blob/main/LICENSE">MIT License and CC-BY-NC-SA-4.0</a></span>
			<span>
				All images on the site are the property of SQUARE ENIX© and are used under the
				<a href="https://support.na.square-enix.com/rule.php?id=5382&tag=authc">Materials Usage License.</a>
			</span>
    `);

	// ---  UI Взаимодействия ---
	$(".nav_floating_icon").click(() => $(".nav_floating_list").fadeToggle());

	const $topBtn = $(".nome_app_top");
	const $searchBtn = $("#floatingSearchBtn");

	$(window).on("scroll", () => {
		const showTop = $(window).scrollTop() >= 200;
		showTop ? $topBtn.fadeIn() : $topBtn.fadeOut();
		$searchBtn.toggleClass("move-up", showTop);
	});

	$topBtn.on("click", (e) => {
		e.preventDefault();
		$("html, body").animate({scrollTop: 0}, 1000);
	});

	// Табы
	const activateTab = (id) => {
		$(".js-tab-trigger").each(function () {
			$(this).toggleClass("active", $(this).data("tab") === id);
		});
		$(".js-tab-content").each(function () {
			$(this).toggleClass("active", $(this).data("tab") === id);
		});

		const url = new URL(window.location);
		url.searchParams.delete("skill");
		url.hash = id;
		history.replaceState(null, null, url.toString());
	};

	$(".js-tab-trigger").on("click", function (e) {
		e.preventDefault();
		activateTab($(this).data("tab"));
	});

	$("a[href*='#']:not([href='#'])").click(function (e) {
		e.preventDefault();
		const target = $($(this).attr("href"));
		if (target.length) {
			$("html, body").animate({scrollTop: target.offset().top - 48}, 500);
		}
	});

	// --- Динамическое Job Меню ---
	const $menuContainer = $("[data-menu-type]");
	const menuType = $menuContainer.data("menu-type");

	if (menuType === "MenuDoWDoM" || menuType === "MenuDoHDoL") {
		$.getJSON(JSON_URLS.MENU, (menuData) => {
			let menuArray = menuData[menuType];
			if (!menuArray) return console.error(`Меню для типа "${menuType}" не найдено.`);
			if (menuData.Links && Array.isArray(menuData.Links)) menuArray = [...menuArray, ...menuData.Links];

			const $menuList = $('<ul class="jobguide_menu_list"></ul>');
			menuArray.forEach((category) => {
				const $category = $('<li class="jobguide_menu_list"></li>').append(`<span class="job_name_menu">${category.name}</span>`);
				const $subMenu = $('<ul class="jobguide_sub_menu"></ul>');

				category.jobs.forEach((job) => {
					const $job = $(`<li${job.hidden ? " hidden" : ""}></li>`).append(`<a href="${job.link}"><p>${job.name}</p></a>`);
					$subMenu.append($job);
				});
				$category.append($subMenu);
				$menuList.append($category);
			});
			$menuContainer.append($menuList);
		}).fail(() => console.error("Ошибка: Menu.json не был загружен."));
	}

	// --- Система Предупреждений ---
	const WarningEnabled = false;
	if (WarningEnabled) {
		const setCookie = (name, value, days) => {
			const date = new Date();
			date.setTime(date.getTime() + days * 86400000);
			document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
		};
		const getCookie = (name) =>
			document.cookie
				.split("; ")
				.find((c) => c.startsWith(`${name}=`))
				?.split("=")[1] || null;

		const showErrorInfo = (info) => {
			$(".job_skil_list, .warn_info").prepend(`<div class="error_info" id="warnInfo"><h5>Важная информация!</h5><span id="closeInfo">✖</span><p>${info}</p></div>`);
			if (getCookie("warnInfoHidden") === "true") $("#warnInfo").addClass("hidden");
			$("#closeInfo").click(() => {
				$("#warnInfo").addClass("hidden");
				setCookie("warnInfoHidden", "true", 7);
			});
		};
		showErrorInfo("Error");
	}

	// --- Локальный Поиск по Таблице ---
	const $searchInput = $("#searchInput");
	if ($searchInput.length) {
		$searchInput.on("input", (e) => {
			const query = e.target.value.toLowerCase();
			$("tbody[data-search='true'] tr").each(function () {
				const skillName = $(this).find(".skill p strong:not(.blu_number)").text().toLowerCase();
				const skillNumber = $(this).find(".blu_number").text().toLowerCase();
				$(this).toggle(skillName.includes(query) || skillNumber.includes(query));
			});
		});
	}

	// --- Глобальный Поиск (Загрузка и логика) ---
	$.getJSON(`${JSON_URLS.SEARCH}?v=${Date.now()}`, (data) => {
		jsonData = data;
		jsonData.forEach((job) => job.skills.forEach((skill) => (skill._search = skill.skill.toLowerCase())));
	});

	const createItem = (job, skill) => {
		const jobName = job.job.replace(/\s+/g, "_").toLowerCase();
		const encodedSkill = safeBtoa(skill["db-skill"]);
		const pageUrl = `${PAGES_PATH}${job.page_job}?skill=${encodedSkill}`;
		const fullUrl = location.origin + pageUrl;

		const $li = $("<li>");
		const $copy = $("<a>", {class: "copy-link", "data-url": fullUrl}).append($("<img>", {src: `/Assets/images/svg/link.svg`}));
		const $link = $("<a>", {href: pageUrl, target: "_blank", "db-skill": skill["db-skill"]});
		const $icon = $("<div>", {class: "icon_search"}).append($("<img>", {src: `/Assets/images/DoWDoM/search/${jobName}/${skill.icon}`, alt: skill.skill, class: "skill-icon"}));

		const $text = $("<div>")
			.text(`${skill.skill} `)
			.append($("<span>").text(`[${job.job}: ${skill.level}]`));

		return $li.append($copy, $link.append($icon, $text));
	};

	const doSearch = ($input, $list) => {
		const value = $input.val().trim().toLowerCase();
		$list.empty();
		if (!value || !jsonData.length) return $list.hide();

		let hasResult = false;
		jsonData.forEach((job) =>
			job.skills.forEach((skill) => {
				if (skill._search.includes(value)) {
					$list.append(createItem(job, skill));
					hasResult = true;
				}
			})
		);
		if (!hasResult) $list.append($("<li>").text("Ничего не найдено"));
		$list.show();
	};

	const initGlobalSearch = (inputSelector, resultSelector) => {
		const $input = $(inputSelector);
		if ($input.length)
			$input.on(
				"input",
				debounce(() => doSearch($input, $(resultSelector)), 300)
			);
	};

	if ($("#floatingSearchBtn").length) {
		const popupHTML = `
            <div id="searchPopup" class="search-popup-overlay" style="display: none;">
                <div class="search-popup-container">
                    <button class="search-popup-close" id="closeSearchPopup">&times;</button>
                    <div class="search-container">
                        <h2><img src="/Assets/images/main/Search.png">Поиск по умениям</h2>
                        <div class="search_block">
                            <input type="text" id="searchPopupInput" placeholder="Введите название умения..." class="search-input">
                            <ul id="searchPopupResults" class="search-results"></ul>
                        </div>
                    </div>
                </div>
            </div>`;
		$("#floatingSearchBtn").after(popupHTML);

		const $popup = $("#searchPopup"),
			$input = $("#searchPopupInput"),
			$results = $("#searchPopupResults");

		const closePopup = () => {
			$popup.fadeOut(200);
			$input.val("");
			$results.empty().hide();
			unlockScroll();
		};

		$("#floatingSearchBtn").on("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			lockScroll();
			$popup.fadeIn(200, () => $input.focus());
		});

		$("#closeSearchPopup").on("click", closePopup);
		$popup.on("click", function (e) {
			if (e.target === this) closePopup();
		});
		$(document).on("keydown", (e) => {
			if (e.key === "Escape" && $popup.is(":visible")) closePopup();
		});

		initGlobalSearch("#searchPopupInput", "#searchPopupResults");
	}

	$(document).on("click", ".copy-link", function (e) {
		e.preventDefault();
		e.stopPropagation();
		navigator.clipboard.writeText($(this).data("url")).then(() => {
			const $msg = $("<span>").addClass("copy-tooltip").text("Скопировано!");
			$(this).after($msg);
			setTimeout(() => $msg.fadeOut(200, () => $msg.remove()), 1000);
		});
	});

	initGlobalSearch("#search", "#results");

	// --- Дебаг ---
	const ENABLE_HTML_FIX = true;
	const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";

	const fixSingleLink = (el) => {
		const $el = $(el);
		const href = $el.attr("href");
		if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#") || href.includes(".html") || href.endsWith("/")) return;

		const [urlPart, hashPart] = href.split("#");
		const [path, query] = urlPart.split("?");

		if (path && !path.endsWith(".html")) {
			$el.attr("href", `${path}.html${query ? "?" + query : ""}${hashPart ? "#" + hashPart : ""}`);
		}
	};

	if (ENABLE_HTML_FIX && isLocal) {
		$("a").each(function () {
			fixSingleLink(this);
		});

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) =>
				mutation.addedNodes.forEach((node) => {
					if (node.nodeType === 1) {
						if (node.nodeName === "A") fixSingleLink(node);
						$(node)
							.find("a")
							.each(function () {
								fixSingleLink(this);
							});
					}
				})
			);
		});
		observer.observe(document.body, {childList: true, subtree: true});
	}

	$("tr").each(function () {
		const attrs = ["db-skill", "db-role-action", "db-skill-passive", "db-role-traits", "db-skill-pvp"];
		const titleText = attrs
			.map((attr) => $(this).attr(attr))
			.filter(Boolean)
			.join(", ");
		if (titleText) $(this).attr("title", titleText);
	});
	// Preloader
	function hidePreloader() {
		setTimeout(() => {
			const $preloader = $("#page-preloader");
			if ($preloader.length && !$preloader.hasClass("done")) {
				$preloader.addClass("done");
				$("body").css({
					"overflow-y": "visible",
					"padding-right": "0px",
				});
			}
			const hash = location.hash.substring(1);
			if (hash) activateTab(hash);
		}, 1200);
	}

	if (document.readyState === "complete") {
		hidePreloader();
	} else {
		$(window).on("load", hidePreloader);
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const categories = document.querySelectorAll(".gs_menu_nav_category");
	const contentBlocks = document.querySelectorAll(".gs_wrapper_nav");
	const anchorLinks = document.querySelectorAll(".gs_menu_nav_anchor a");

	categories.forEach((category) => {
		category.addEventListener("click", () => {
			const subMenu = category.nextElementSibling;

			if (category.classList.contains("active")) {
				if (subMenu) subMenu.classList.toggle("open");
			} else {
				categories.forEach((c) => c.classList.remove("active"));
				document.querySelectorAll(".gs_menu_nav_sub").forEach((sub) => sub.classList.remove("open"));
				contentBlocks.forEach((b) => b.classList.remove("active"));

				category.classList.add("active");
				if (subMenu) subMenu.classList.add("open");

				const targetId = category.getAttribute("data-target");
				if (targetId) {
					const targetBlock = document.getElementById(targetId);
					if (targetBlock) {
						targetBlock.classList.add("active");
					}
				}
			}
		});
	});

	anchorLinks.forEach((link) => {
		link.addEventListener("click", () => {
			anchorLinks.forEach((l) => l.classList.remove("active"));
			link.classList.add("active");
		});
	});
});
