// Doom Load
$(document).ready(function () {
	// Open JobMenu
	$('.nav_floating_icon').click(() => {
		$('.nav_floating_list').fadeToggle();
	});
	// Info Update
	$('#inner_update').prepend('<p class="latest_update">Последнее обновление: ??.??.2024 | Патч: 7.1</p>');
	$('#jq_patch').prepend('Все описания основаны на активных умениях и бонусах, полученных на 100 уровне.<br/>Более подробную информацию об изменениях в активных и пассивных умениях можно найти в примечаниях к <a target="_blank" href="https://eu.finalfantasyxiv.com/lodestone/topics/detail/da01b0d2d5434cd2ccfcc87f733df7a590f97c00/">патчноутам</a>.');
	//$('.job_skil_list, .warn_info').prepend('<div class="error_info"><h5>Важная информация!</h5><p>Обновлены все старые классы кроме двух новых.</p></div>');
	$('.SE').append('<p>All images on the site are the property of SQUARE ENIX© and are used under the <a href="https://support.na.square-enix.com/rule.php?id=5382&tag=authc">Materials Usage License</a></p>')
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

// Debag href link
// document.addEventListener("DOMContentLoaded", function() {
// 	const links = document.querySelectorAll('a');
// 	links.forEach(link => {
// 		 link.addEventListener('click', function(event) {
// 			  event.preventDefault();
// 			  const url = this.getAttribute('href') + '.html';
// 			  window.location.href = url;
// 		 });
// 	});
// });

// Menu JobGuide
$(document).ready(function() {
	const $menuContainer = $('[data-menu-type]');
	const menuType = $menuContainer.data('menu-type');

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

// Сортировка тест

$(document).ready(function() {
	let isSortedByClass = false;
	let isSortedByDbSkill = false;

	const $tbody = $('tbody[data-sort="true"]');
	if ($tbody.length === 0) return;

	const $rows = $tbody.children('tr');

	function sortRowsByClass() {
		$rows.sort((a, b) => {
			const aIsSpecial = $(a).hasClass('skill_update');
			const bIsSpecial = $(b).hasClass('skill_update');
			return (aIsSpecial === bIsSpecial) ? 0 : aIsSpecial ? -1 : 1;
		});
		$tbody.empty().append($rows);
		isSortedByClass = true;
		isSortedByDbSkill = false;
	}

	function sortRowsByDbSkill() {
		$rows.sort((a, b) => {
			const aSkill = $(a).attr('db-skill') || '';
			const bSkill = $(b).attr('db-skill') || '';
			return aSkill.localeCompare(bSkill);
		});
		$tbody.empty().append($rows);
		isSortedByDbSkill = true;
		isSortedByClass = false;
	}

	function toggleSortRows() {
		if (!isSortedByClass) {
			sortRowsByClass();
		} else if (!isSortedByDbSkill) {
			sortRowsByDbSkill();
		}
	}

	$('#sortButton').on('click', toggleSortRows);
});

// Обводка для обновлёных скилов 
$(document).ready(function() {
	$('tr.skill_update').each(function() {
		 if (!$(this).find('.overlay').length) {
			  $(this).css('position', 'relative');
			  var overlay = $('<div class="overlay"><div><img src="../Assets/img/main/bluli2.png"><p>Обновлён</p><div></div>');
			  $(this).append(overlay);
		 }
	});
});
 