const JSON_URLS = {
	UPDATES: "https://cdn.ff14jobguide.ru/data/UpdatesPatch.json",
	MENU: "../DB/Menu.json",
	SEARCH: "https://cdn.ff14jobguide.ru/data/GlobalSearch.json",
};

$(document).ready(() => {
	const WarningEnabled = false;
	// Info Update
	fetch(`${JSON_URLS.UPDATES}?v=${Date.now()}`)
		.then((response) => response.json())
		.then((data) => {
			$("#inner_update").prepend(`<p>Последнее обновление: ${data.lastUpdate} | Патч: ${data.patchVersion}</p>`);

			$("#patch_info").prepend(
				`Все описания основаны на активных умениях и бонусах, полученных на 100 уровне.<br/>
                 Более подробную информацию об изменениях в активных и пассивных умениях можно найти 
                 в примечаниях к <a target="_blank" href="${data.patchLink}">патчноутам</a>.`
			);
		});

	const year = new Date().getFullYear();

	$(".SE").html(`
		  <p>FINAL FANTASY XIV © 2010–${year} SQUARE ENIX CO., LTD. All Rights Reserved. | FFXIV Job Guide RU © 2024–${year} · <a href="https://github.com/Murakumo-JP/FFXIVJobGuideRU/blob/main/LICENSE" target="_blank" rel="noopener">MIT License</a></p>
		  <p>
			 All images on the site are the property of SQUARE ENIX© and are used under the
			 <a href="https://support.na.square-enix.com/rule.php?id=5382&tag=authc" target="_blank" rel="noopener">
				Materials Usage License
			 </a>.
		  </p>
		`);

	// Open JobMenu
	$(".nav_floating_icon").click(() => {
		$(".nav_floating_list").fadeToggle();
	});
	// Back to Top
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
		$.getJSON(`${JSON_URLS.MENU}`, (menuData) => {
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

const ASSETS_PATH = "../Assets/";
const PAGES_PATH = "/Page/";

function safeBtoa(str) {
	const bytes = new TextEncoder().encode(str);
	let result = "";
	for (let i = 0; i < bytes.length; i++) {
		result += String.fromCharCode(bytes[i]);
	}
	return btoa(result);
}

function debounce(fn, delay) {
	let timer = null;

	return function () {
		clearTimeout(timer);
		timer = setTimeout(fn, delay);
	};
}

$.getJSON(`${JSON_URLS.SEARCH}?v=${Date.now()}`, function (data) {
	jsonData = data;

	jsonData.forEach((job) => {
		job.skills.forEach((skill) => {
			skill._search = skill.skill.toLowerCase();
		});
	});
});

function createItem(job, skill) {
	const jobName = job.job.replace(/\s+/g, "_").toLowerCase();
	const encodedSkill = safeBtoa(skill["db-skill"]);

	const pageUrl = `${PAGES_PATH}${job.page_job}?skill=${encodedSkill}`;
	const fullUrl = location.origin + pageUrl;

	const $li = $("<li>");

	const $copy = $("<a>", {
		class: "copy-link",
		"data-url": fullUrl,
	}).append($("<img>", {src: ASSETS_PATH + "img/svg/link.svg"}));

	const $link = $("<a>", {
		href: pageUrl,
		target: "_blank",
		"db-skill": skill["db-skill"],
	});

	const $icon = $("<div>", {class: "icon_search"}).append(
		$("<img>", {
			src: `${ASSETS_PATH}img/DoWDoM/search/${jobName}/${skill.icon}`,
			alt: skill.skill,
			class: "skill-icon",
		})
	);

	const $text = $("<div>");
	$text.text(skill.skill + " ");
	$text.append($("<span>").text(`[${job.job}: ${skill.level}]`));

	$link.append($icon, $text);
	$li.append($copy, $link);

	return $li;
}

function doSearch($input, $list) {
	const value = $input.val().trim().toLowerCase();

	$list.empty();

	if (!value || !jsonData.length) {
		$list.hide();
		return;
	}

	let hasResult = false;

	jsonData.forEach((job) => {
		job.skills.forEach((skill) => {
			if (skill._search.includes(value)) {
				$list.append(createItem(job, skill));
				hasResult = true;
			}
		});
	});

	if (!hasResult) {
		$list.append($("<li>").text("Ничего не найдено"));
	}

	$list.show();
}

function initSearch(inputSelector, resultSelector) {
	const $input = $(inputSelector);
	const $result = $(resultSelector);

	if (!$input.length) return;

	const handler = debounce(() => doSearch($input, $result), 300);
	$input.on("input", handler);
}

function initPopupSearch() {
	const $btn = $("#floatingSearchBtn");
	const $popup = $("#searchPopup");
	const $input = $("#searchPopupInput");
	const $results = $("#searchPopupResults");

	if (!$btn.length) return;

	function close() {
		$popup.fadeOut(200);
		$input.val("");
		$results.empty().hide();
	}

	$btn.on("click", (e) => {
		e.preventDefault();
		e.stopPropagation();
		$popup.fadeIn(200, () => $input.focus());
	});

	$("#closeSearchPopup").on("click", close);

	$popup.on("click", (e) => {
		if (e.target === e.currentTarget) close();
	});

	$(document).on("keydown", (e) => {
		if (e.key === "Escape" && $popup.is(":visible")) close();
	});

	initSearch("#searchPopupInput", "#searchPopupResults");
}

$(document).on("click", ".copy-link", function (e) {
	e.preventDefault();
	e.stopPropagation();

	const url = $(this).data("url");

	navigator.clipboard.writeText(url).then(() => {
		const $msg = $("<span>").addClass("copy-tooltip").text("Скопировано!");

		$(this).after($msg);

		setTimeout(() => {
			$msg.fadeOut(200, () => $msg.remove());
		}, 1000);
	});
});

$(function () {
	initSearch("#search", "#results");
	initPopupSearch();
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
// Debug Code
$(document).ready(() => {
	const DebugEnabled = false;
	if (!DebugEnabled) return;

	function fixLinks() {
		$("a").each(function () {
			const href = $(this).attr("href");
			if (!href || href.startsWith("mailto:") || href.startsWith("#") || href.endsWith(".html")) return;

			const [path, query] = href.split("?");
			let newHref;

			newHref = href.startsWith("/Page/") || href.startsWith("Page/") ? path + ".html" : !href.includes("/") ? "/Page/" + path + ".html" : path + ".html";

			if (query) newHref += "?" + query;
			$(this).attr("href", newHref);
		});
	}

	$("tr").each(function () {
		const titleText = ["db-skill", "db-role-action", "db-skill-passive", "db-role-traits", "db-skill-pvp"]
			.map((attr) => $(this).attr(attr))
			.filter(Boolean)
			.join(", ");
		if (titleText) $(this).attr("title", titleText);
	});

	const $menu = $(`
		 <div id="debug-menu">
		 		<a>DEBUG</a>
			 	<button id="btn-fix-links">Add .html</button>
		 </div>
	`);

	$("body").append($menu);
	$("#btn-fix-links").click(fixLinks);
	fixLinks();
});

// Снег и да эту дичь писал не я пришлось просить AI, но зато красиво.

function createSVGSnowfall() {
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
	const flakes = [];

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

	for (let i = 0; i < flakeCount; i++) flakes.push(createFlake());

	const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
            <path d="M50,10 L50,90 M10,50 L90,50 M20,20 L80,80 M80,20 L20,80 M25,50 L75,50 M50,25 L50,75"
                  stroke="white" stroke-width="8" stroke-linecap="round"/>
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

			if (flake.y > height + 30) {
				Object.assign(flake, createFlake(), {y: -30});
			}
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
}

createSVGSnowfall();
