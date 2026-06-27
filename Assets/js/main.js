const ENABLE_DEBUG = true;
const ENABLE_WARNING = false;
const cdnBase = "https://cdn.ff14jobguide.ru";
const JSON_URLS = {
	UPDATES: `/DB/changelog.json`,
	MENU: "/DB/Menu.json",
	SEARCH: `${cdnBase}/data/GlobalSearch.json`,
};

let jsonData = [];

const lockScroll = () => document.body.classList.add("no-scroll");
const unlockScroll = () => document.body.classList.remove("no-scroll");

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

// Фигня ради фигни
const topButton = document.querySelector(".nome_app_top");
const footer = document.querySelector(".footer_info");

function preventFooterOverlap() {
	if (!footer) return;

	const footerRect = footer.getBoundingClientRect();
	const windowHeight = window.innerHeight;
	const moveUpButton = document.querySelector(".move-up");
	const topBtnBase = 20;
	const moveUpBase = 80;

	if (footerRect.top < windowHeight) {
		const overlap = windowHeight - footerRect.top;
		if (topButton) {
			topButton.style.bottom = `${overlap + topBtnBase}px`;
		}

		if (moveUpButton) {
			moveUpButton.style.bottom = `${overlap + moveUpBase}px`;
		}
	} else {
		if (topButton) topButton.style.bottom = "";
		if (moveUpButton) moveUpButton.style.bottom = "";
	}
}

window.addEventListener("scroll", preventFooterOverlap);
window.addEventListener("resize", preventFooterOverlap);

// Снег на новый год
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

// Global
document.addEventListener("DOMContentLoaded", () => {
	const jsFadeToggle = (el, duration = 300) => {
		if (window.getComputedStyle(el).display === "none") {
			el.style.display = "block";
			el.animate([{opacity: 0}, {opacity: 1}], {duration: duration, fill: "forwards"});
		} else {
			const animation = el.animate([{opacity: 1}, {opacity: 0}], {duration: duration, fill: "forwards"});
			animation.onfinish = () => (el.style.display = "none");
		}
	};
	const jsFadeIn = (el, duration = 300) => {
		if (window.getComputedStyle(el).display !== "none") return;

		el.style.display = "block";
		el.animate([{opacity: 0}, {opacity: 1}], {duration: duration, fill: "forwards"});
	};
	const jsFadeOut = (el, duration = 300) => {
		if (window.getComputedStyle(el).display === "none") return;

		const animation = el.animate([{opacity: 1}, {opacity: 0}], {duration: duration, fill: "forwards"});
		animation.onfinish = () => (el.style.display = "none");
	};

	const currentPath = window.location.pathname.split("/").pop().replace(".html", "") || "index";
	document.querySelectorAll(".btn_gs_menu").forEach((btn) => {
		const href = btn.getAttribute("href");
		if (!href) return;
		const cleanHref = href.replace(".html", "");
		if (currentPath === cleanHref) {
			btn.classList.add("active");
			btn.addEventListener("click", (e) => e.preventDefault());
		}
	});

	fetch(`${JSON_URLS.UPDATES}?v=${Date.now()}`)
		.then((response) => response.json())
		.then((data) => {
			const latestPatch = data.at(-1);
			const linkUpdate = document.querySelector(".link_update");
			const patchInfo = document.getElementById("patch_info");

			if (linkUpdate) linkUpdate.insertAdjacentHTML("afterbegin", `Обновление: ${latestPatch.patch_date} | Патч: ${latestPatch.patch_version} `);
			if (patchInfo)
				patchInfo.insertAdjacentHTML(
					"afterbegin",
					`Все описания основаны на активных умениях и бонусах, полученных на 100 уровне.<br/>
                 Более подробную информацию об изменениях в активных и пассивных умениях можно найти 
                 в примечаниях к <a target="_blank" href="${latestPatch.patch_link}">патчноутам</a>.`
				);
		})
		.catch((err) => console.error("Ошибка загрузки changelog.json", err));

	const year = new Date().getFullYear();
	const footerInfo = document.querySelector(".footer_info");
	if (footerInfo) {
		footerInfo.innerHTML = `
			<span>FINAL FANTASY XIV © 2010–${year} SQUARE ENIX CO., LTD. All Rights Reserved.</span>
			<span>FFXIV JobGuide RU © 2024–${year} · <a href="https://github.com/Murakumo-JP/FFXIVJobGuideRU/blob/main/LICENSE">MIT License and CC BY-NC-SA 4.0</a></span>
			<span>
				All images on the site are the property of SQUARE ENIX© and are used under the
				<a href="https://support.na.square-enix.com/rule.php?id=5382&tag=authc">Materials Usage License.</a>
			</span>
        `;
	}

	const navFloatingIcon = document.querySelector(".nav_floating_icon");
	const navFloatingList = document.querySelector(".nav_floating_list");

	if (navFloatingIcon && navFloatingList) {
		navFloatingIcon.addEventListener("click", () => {
			jsFadeToggle(navFloatingList, 250);
		});
	}

	const topBtn = document.querySelector(".nome_app_top");
	const searchBtn = document.getElementById("floatingSearchBtn");

	window.addEventListener("scroll", () => {
		const showTop = window.scrollY >= 200;
		if (topBtn) {
			if (showTop) {
				jsFadeIn(topBtn, 250);
			} else {
				jsFadeOut(topBtn, 250);
			}
		}
		if (searchBtn) searchBtn.classList.toggle("move-up", showTop);
	});

	if (topBtn) {
		topBtn.addEventListener("click", (e) => {
			e.preventDefault();
			window.scrollTo({top: 0, behavior: "smooth"});
		});
	}

	// Табы
	const activateTab = (id) => {
		document.querySelectorAll(".js-tab-trigger").forEach((el) => {
			el.classList.toggle("active", el.dataset.tab === id);
		});
		document.querySelectorAll(".js-tab-content").forEach((el) => {
			el.classList.toggle("active", el.dataset.tab === id);
		});

		const url = new URL(window.location);
		url.hash = id;
		history.replaceState(null, null, url.toString());
	};

	document.querySelectorAll(".js-tab-trigger").forEach((trigger) => {
		trigger.addEventListener("click", function (e) {
			e.preventDefault();
			activateTab(this.dataset.tab);
		});
	});

	document.querySelectorAll("a[href*='#']:not([href='#'])").forEach((link) => {
		link.addEventListener("click", function (e) {
			const targetElement = document.querySelector(this.getAttribute("href"));
			if (targetElement) {
				e.preventDefault();
				const targetPos = targetElement.getBoundingClientRect().top + window.scrollY - 48;
				window.scrollTo({top: targetPos, behavior: "smooth"});
			}
		});
	});

	// Динамическое Job Меню
	const menuContainer = document.querySelector("[data-menu-type]");

	if (menuContainer) {
		const menuType = menuContainer.dataset.menuType;
		if (menuType === "MenuDoWDoM" || menuType === "MenuDoHDoL") {
			fetch(JSON_URLS.MENU)
				.then((res) => res.json())
				.then((menuData) => {
					let menuArray = menuData[menuType];
					if (!menuArray) return console.error(`Меню для типа "${menuType}" не найдено.`);
					if (menuData.Links && Array.isArray(menuData.Links)) menuArray = [...menuArray, ...menuData.Links];

					let menuHTML = `<ul class="jobguide_menu_list">`;
					menuArray.forEach((category) => {
						menuHTML += `
                            <li class="jobguide_menu_list">
                                <span class="job_name_menu">${category.name}</span>
                                <ul class="jobguide_sub_menu">
                        `;
						category.jobs.forEach((job) => {
							menuHTML += `<li${job.hidden ? " hidden" : ""}><a href="${job.link}"><p>${job.name}</p></a></li>`;
						});
						menuHTML += `</ul></li>`;
					});
					menuHTML += `</ul>`;

					menuContainer.insertAdjacentHTML("beforeend", menuHTML);
				})
				.catch(() => console.error("Ошибка: Menu.json не был загружен."));
		}
	}
	// Локальный Поиск
	const searchInput = document.getElementById("searchInput");
	if (searchInput) {
		searchInput.addEventListener("input", (e) => {
			const query = e.target.value.toLowerCase();
			document.querySelectorAll("tbody[data-search='true'] tr").forEach((row) => {
				const nameEl = row.querySelector(".skill p strong:not(.blu_number)");
				const numberEl = row.querySelector(".blu_number");

				const skillName = nameEl ? nameEl.textContent.toLowerCase() : "";
				const skillNumber = numberEl ? numberEl.textContent.toLowerCase() : "";

				row.style.display = skillName.includes(query) || skillNumber.includes(query) ? "" : "none";
			});
		});
	}

	// Глобальный Поиск
	let flatSkillsData = [];

	fetch(`${JSON_URLS.SEARCH}?v=${Date.now()}`)
		.then((res) => res.json())
		.then((data) => {
			flatSkillsData = data.flatMap((job) =>
				job.skills.map((skill) => ({
					...skill,
					_search: skill.skill.toLowerCase(),
					jobName: job.job,
					jobPage: job.page_job,
				}))
			);
		})
		.catch((err) => console.error("Ошибка загрузки поиска", err));

	const createItemHTML = (skill) => {
		const encodedSkill = safeBtoa(skill["db-skill"]);
		const pageUrl = `/Page/${skill.jobPage}?skill=${encodedSkill}`;
		const fullUrl = location.origin + pageUrl;

		return `
            <li>
                <a class="copy-link" data-url="${fullUrl}"><img src="/Assets/images/svg/link.svg"></a>
                <a href="${pageUrl}" db-skill="${skill["db-skill"]}">
                    <div class="icon_search"><img src="${cdnBase}/data/icons/${skill.icon}" alt="${skill.skill}" class="skill-icon"></div>
                    <div>${skill.skill} <span>[${skill.jobName}: ${skill.level}]</span></div>
                </a>
            </li>
        `;
	};

	const doSearch = (inputEl, listEl) => {
		const value = inputEl.value.trim().toLowerCase();
		listEl.innerHTML = "";

		if (!value || !flatSkillsData.length) {
			listEl.style.display = "none";
			return;
		}

		const results = flatSkillsData.filter((skill) => skill._search.includes(value));

		if (results.length === 0) {
			listEl.innerHTML = "<li>Ничего не найдено</li>";
			listEl.style.display = "block";
			return;
		}

		listEl.innerHTML = results.map(createItemHTML).join("");
		listEl.style.display = "block";
	};

	const initGlobalSearch = (inputSelector, resultSelector) => {
		const inputEl = document.querySelector(inputSelector);
		const listEl = document.querySelector(resultSelector);
		if (inputEl && listEl) {
			inputEl.addEventListener(
				"input",
				debounce(() => doSearch(inputEl, listEl), 300)
			);
		}
	};

	const floatingSearchBtn = document.getElementById("floatingSearchBtn");
	if (floatingSearchBtn) {
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
		floatingSearchBtn.insertAdjacentHTML("afterend", popupHTML);

		const popup = document.getElementById("searchPopup");
		const input = document.getElementById("searchPopupInput");
		const results = document.getElementById("searchPopupResults");
		const closeSearchPopup = document.getElementById("closeSearchPopup");

		const closePopup = () => {
			popup.style.display = "none";
			input.value = "";
			results.innerHTML = "";
			results.style.display = "none";
			unlockScroll();
		};

		floatingSearchBtn.addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			lockScroll();
			popup.style.display = "flex";
			input.focus();
		});

		if (closeSearchPopup) closeSearchPopup.addEventListener("click", closePopup);

		popup.addEventListener("click", function (e) {
			if (e.target === this) closePopup();
		});

		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && popup.style.display !== "none") closePopup();
		});

		initGlobalSearch("#searchPopupInput", "#searchPopupResults");
	}

	document.addEventListener("click", (e) => {
		const copyBtn = e.target.closest(".copy-link");
		if (copyBtn) {
			e.preventDefault();
			e.stopPropagation();
			navigator.clipboard.writeText(copyBtn.dataset.url).then(() => {
				const msg = document.createElement("span");
				msg.className = "copy-tooltip";
				msg.textContent = "Скопировано!";
				copyBtn.insertAdjacentElement("afterend", msg);

				// Аналог fadeOut и remove
				setTimeout(() => {
					msg.style.opacity = "0";
					msg.style.transition = "opacity 0.2s ease";
					setTimeout(() => msg.remove(), 200);
				}, 1000);
			});
		}
	});

	initGlobalSearch("#search", "#results");

	// Preloader
	function hidePreloader() {
		setTimeout(() => {
			const preloader = document.getElementById("page-preloader");
			if (preloader && !preloader.classList.contains("done")) {
				preloader.classList.add("done");
				document.body.style.overflowY = "visible";
				document.body.style.paddingRight = "0px";
			}
			const hash = location.hash.substring(1);
			if (hash) activateTab(hash);
		}, 1200);
	}

	if (document.readyState === "complete") {
		hidePreloader();
	} else {
		window.addEventListener("load", hidePreloader);
	}
});
// ГОЛД СОРСЕР МЕНЮ
document.addEventListener("DOMContentLoaded", () => {
	const mahjongMenu = document.querySelector(".gs_menu_nav");
	if (!mahjongMenu) return;

	const categories = document.querySelectorAll(".gs_menu_nav_category");
	const contentBlocks = document.querySelectorAll(".gs_wrapper_nav");
	const anchorLinks = document.querySelectorAll(".gs_menu_nav_anchor a");

	function activateMenuAndTab(categoryElement, tabId) {
		categories.forEach((c) => c.classList.remove("active"));
		document.querySelectorAll(".gs_menu_nav_sub").forEach((sub) => sub.classList.remove("open"));

		if (categoryElement) {
			categoryElement.classList.add("active");
			const subMenu = categoryElement.nextElementSibling;
			if (subMenu && subMenu.classList.contains("gs_menu_nav_sub")) {
				subMenu.classList.add("open");
			}
		}

		if (tabId) {
			const targetBlock = document.getElementById(tabId);
			if (targetBlock) {
				contentBlocks.forEach((b) => b.classList.remove("active"));
				targetBlock.classList.add("active");
			}
		}
	}

	categories.forEach((category) => {
		category.addEventListener("click", () => {
			const targetId = category.getAttribute("data-target");
			const subMenu = category.nextElementSibling;

			if (category.classList.contains("active")) {
				if (subMenu && subMenu.classList.contains("gs_menu_nav_sub")) {
					subMenu.classList.toggle("open");
				}
			} else {
				activateMenuAndTab(category, targetId);
			}
		});
	});

	document.addEventListener("click", (e) => {
		const link = e.target.closest("a");
		if (!link) return;

		const href = link.getAttribute("href");

		if (href && href.startsWith("#") && href.length > 1) {
			const targetElement = document.querySelector(href);

			if (targetElement) {
				e.preventDefault();

				const parentTab = targetElement.closest(".gs_wrapper_nav");

				if (parentTab) {
					if (!parentTab.classList.contains("active")) {
						const category = document.querySelector(`.gs_menu_nav_category[data-target="${parentTab.id}"]`);
						activateMenuAndTab(category, parentTab.id);
					}

					targetElement.scrollIntoView({behavior: "smooth"});

					anchorLinks.forEach((l) => l.classList.remove("active"));
					if (link.closest(".gs_menu_nav_anchor")) {
						link.classList.add("active");
					}
				}
			}
		}
	});
});
// DEBUG
document.addEventListener("DOMContentLoaded", () => {
	if (!ENABLE_DEBUG) return;

	const fixSingleLink = (el) => {
		const href = el.getAttribute("href");
		if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#") || href.includes(".html") || href.endsWith("/")) return;

		const [urlPart, hashPart] = href.split("#");
		const [path, query] = urlPart.split("?");

		if (path && !path.endsWith(".html")) {
			el.setAttribute("href", `${path}.html${query ? "?" + query : ""}${hashPart ? "#" + hashPart : ""}`);
		}
	};

	document.querySelectorAll("a").forEach(fixSingleLink);

	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) =>
			mutation.addedNodes.forEach((node) => {
				if (node.nodeType === 1) {
					if (node.nodeName === "A") fixSingleLink(node);
					node.querySelectorAll("a").forEach(fixSingleLink);
				}
			})
		);
	});
	observer.observe(document.body, {childList: true, subtree: true});

	document.querySelectorAll("tr").forEach((row) => {
		const attrs = ["db-skill", "db-role-action", "db-skill-passive", "db-role-traits", "db-skill-pvp"];
		const titleText = attrs
			.map((attr) => row.getAttribute(attr))
			.filter(Boolean)
			.join(", ");
		if (titleText) row.setAttribute("title", titleText);
	});
});
// WARNING
document.addEventListener("DOMContentLoaded", () => {
	if (!ENABLE_WARNING) return;
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
		const warnHTML = `<div class="error_info" id="warnInfo"><h5>Важная информация!</h5><span id="closeInfo">✖</span><p>${info}</p></div>`;
		document.querySelectorAll(".job_skil_list, .warn_info").forEach((el) => el.insertAdjacentHTML("afterbegin", warnHTML));

		const warnInfoEl = document.getElementById("warnInfo");
		const closeInfoEl = document.getElementById("closeInfo");

		if (getCookie("warnInfoHidden") === "true" && warnInfoEl) warnInfoEl.classList.add("hidden");

		if (closeInfoEl && warnInfoEl) {
			closeInfoEl.addEventListener("click", () => {
				warnInfoEl.classList.add("hidden");
				setCookie("warnInfoHidden", "true", 7);
			});
		}
	};
	showErrorInfo("Error");
});
