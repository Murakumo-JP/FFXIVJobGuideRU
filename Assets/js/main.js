// Doom Load
$(document).ready(function () {
	// Info Update
	function addUpdateInfo(date, patchVersion, patchLink) {
		$("#inner_update").prepend('<p>Последнее обновление: ' + date + " | Патч: " + patchVersion + "</p>");
		$("#patch_info").prepend('Все описания основаны на активных умениях и бонусах, полученных на 100 уровне.<br/>Более подробную информацию об изменениях в активных и пассивных умениях можно найти в примечаниях к <a target="_blank" href="' +	patchLink +'">патчноутам</a>.');
	}
	addUpdateInfo("17.12.2024", "7.15", "https://eu.finalfantasyxiv.com/lodestone/topics/detail/78bd87d42626b597d2a3a5d7075b56c2604cd14b");
	$(".SE").append('<p>All images on the site are the property of SQUARE ENIX© and are used under the <a href="https://support.na.square-enix.com/rule.php?id=5382&tag=authc">Materials Usage License</a></p>');
	// Open JobMenu
	$(".nav_floating_icon").click(() => {
		$(".nav_floating_list").fadeToggle();
	});
	// Back to Top
	let button = $('.nome_app_top');

	$(window).on('scroll', function () {
		if ($(this).scrollTop() >= 200) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});

	button.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 1000);
	});
});
// Preloader
document.body.onload = function () {
	setTimeout(function () {
		var preloader = document.getElementById('page-preloader');
		var loader = document.getElementById('page-loader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
			$('body').css('overflow-y', 'visible');
		}
		var id = window.location.hash;
		if (id != '') {
			activate_tab(id.substring(1));
		}
	}, 500);
};
// Smooth Scrolling
$('a[href*="#"]').click(function () {
	var page = $('html, body');
	page.animate(
		{
			scrollTop: $($(this).attr('href')).offset().top - 48,
		},
		500
	);
	return false;
});
// Tabs
function activate_tab(id) {
	$('.js-tab-trigger[data-tab="' + id + '"]').toggleClass('active', true);
	$('.js-tab-trigger:not([data-tab="' + id + '"])').toggleClass('active', false);

	$('.js-tab-content[data-tab="' + id + '"]').toggleClass('active', true);
	$('.js-tab-content:not([data-tab="' + id + '"])').toggleClass('active', false);
}
$('.js-tab-trigger').click(function () {
	var id = $(this).attr('data-tab');
	activate_tab(id);
	window.location.hash = '#' + id;
});

// Menu JobGuide
$(document).ready(function() {
	const $menuContainer = $('[data-menu-type]');
	const menuType = $menuContainer.data('menu-type');

	if (menuType !== 'MenuDoWDoM' && menuType !== 'MenuDoHDoL') {
		return;
  	}  

	let menuPath;
	if (menuType === 'MenuDoWDoM') {
		 menuPath = '../DB/MenuDoWDoM.json';
	} else if (menuType === 'MenuDoHDoL') {
		 menuPath = '../DB/MenuDoHDoL.json';
	} else {
		 console.error('Failed to load json');
		 return;
	}

	$.getJSON(menuPath, function(menuData) {
		 const $menuList = $('<ul class="jobguide_menu_list"></ul>');

		 menuData.forEach(function(category) {
			  const $category = $('<li class="jobguide_menu_list"></li>');
			  $category.append(`<span class="job_name_menu">${category.name}</span>`);

			  const $subMenu = $('<ul class="jobguide_sub_menu"></ul>');
			  category.jobs.forEach(function(job) {
					const $job = $('<li></li>');
					if (job.hidden) {
						 $job.attr('hidden', 'true');
					}
					$job.append(`<a href="${job.link}"><p>${job.name}</p></a>`);
					$subMenu.append($job);
			  });
			  $category.append($subMenu);
			  $menuList.append($category);
		 });
		 $menuContainer.append($menuList);
	}).fail(function() {
		 console.error('Данные пропили Муглы, все вопросы к ним.');
	});
});

// Sort Skill
// Длоя релиза пока не готова возможно потом.
$(document).ready(function() {
	const $tbody = $('tbody[data-sort="true"]');
	const $sortButton = $('#sortButton');
	const $rows = $tbody.children('tr');
	const $sortIcon = $('#sortIcon');
	const $sortText = $('#sortText');

	let sortState = 1;

	if (!$tbody.length) return $sortButton.hide();
	$sortButton.show();

	function updateSortIconAndText() {
		const state = sortState === 0
			? { icon: 'sort-descending.svg', text: 'Обновлённые умения' }
			: { icon: 'sort-ascending.svg', text: 'Список по умолчанию' };
			
		$sortIcon.attr('src', `../Assets/img/svg/${state.icon}`);
		$sortText.text(state.text);
	}

	function getSkillAttribute($element) {
		return $element.attr('db-skill') || '';
	}

	function sortRows() {
		$rows.sort((a, b) => {
			if (sortState === 0) {
				return $(b).hasClass('skill_update') - $(a).hasClass('skill_update');
			} else {
				return getSkillAttribute($(a)).localeCompare(getSkillAttribute($(b)));
			}
		});
		$tbody.empty().append($rows);
		updateSortIconAndText();
	}

	$sortButton.on('click', function() {
		sortState = 1 - sortState;
		sortRows();
	});
	sortRows();
});
// Warning Info
let WarningEnabled = false;

function WarningFunctions() {
    if (!WarningEnabled) return;

    function ErrorInfo(info) {
      $('.job_skil_list, .warn_info').prepend(`<div class="error_info" id="warnInfo"><h5>Важная информация!</h5><span id="closeInfo">✖</span><p>${info}</p></div>`);
    }

    ErrorInfo(" ");

    const $warnInfo = $('#warnInfo');
    const $closeInfo = $('#closeInfo');

    if (!$warnInfo.length || !$closeInfo.length) return;

    if (getCookie("warnInfoHidden") === "true") {
        $warnInfo.addClass("hidden");
    }

    $closeInfo.on("click", function () {
        $warnInfo.addClass("hidden");
        setCookie("warnInfoHidden", "true", 7);
    });

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }

    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split("=");
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    }
}
WarningFunctions();
// Debug
let DebugEnabled = false; 

function DebugFunctions() {
    if (!DebugEnabled) return;

    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const url = this.getAttribute('href') + '.html';
                window.location.href = url;
            });
        });
    });

    $('tr').each(function () {
        var titleText = [];
        ['db-skill', 'db-role-action', 'db-skill-passive', 'db-role-traits', 'db-skill-pvp'].forEach(attr => {
            var attrValue = $(this).attr(attr);
            if (attrValue) {
                titleText.push(attrValue);
            }
        });
        if (titleText.length > 0) {
            $(this).attr('title', titleText.join(', '));
        }
    });
}
DebugFunctions();

// Search
function toggleSearch() {
	const tbody = document.querySelector('tbody[data-search]');
	const searchContainer = document.querySelector('.search');
	if (tbody !== 'data-search') {
		return;
  	} 
	if (tbody?.dataset.search === "true") {
		 searchContainer.style.display = '';
	} else {
		 searchContainer.style.display = 'none';
	}
}

function searchTable(event) {
	const query = event.target.value.toLowerCase();
	const tbody = document.querySelector('tbody[data-search="true"]');

	if (!tbody) return;

	tbody.querySelectorAll('tr').forEach(row => {
		 const skillName = row.querySelector('.skill p strong')?.textContent.toLowerCase() || '';

		 row.style.display = skillName.includes(query) ? '' : 'none';
	});
}

function initSearch() {
	toggleSearch();

	const searchInput = document.getElementById('searchInput');
	if (searchInput) {
		 searchInput.addEventListener('input', searchTable);
	}
}
initSearch();