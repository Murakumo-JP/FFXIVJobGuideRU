// Doom Load
$(document).ready(function () {
	$('#jq_menu_cg').load('Other/MenuCG.html');
	// Open JobMenu
	$('.nav_floating_icon').click(() => {
		$('.nav_floating_list').fadeToggle();
	});
	// Info Update
	$('#inner_update').prepend('<p class="latest_update">Последнее обновление: ??.??.2024 | Патч: 7.1</p>');
	$('#jq_patch').prepend('Все описания основаны на активных умениях и бонусах, полученных на 100 уровне.<br />Более подробную информацию об изменениях в активных и пассивных умениях можно найти в примечаниях к <a target="_blank" href="https://eu.finalfantasyxiv.com/lodestone/topics/detail/da01b0d2d5434cd2ccfcc87f733df7a590f97c00/">патчноутам</a>.');
	//$('.job_skil_list, .warn_info').prepend('<div class="error_info"><h5>Важная информация!</h5><p>Обновлены все старые классы кроме двух новых.</p></div>');
	$('.SE').append('<p>All images on the site are the property of SQUARE ENIX© and are used under the <a href="https://support.na.square-enix.com/rule.php?id=5382&tag=authc">Materials Usage License</a></p>')
	// Skill Update and New
	$('.skill_update').before('<tr class="jq_skill_update"></tr>');
	$('.jq_skill_update').append('<td colspan="9"><p>Обновлён</p></td>');
	$('.skill_new').before('<tr class="jq_skill_new"></tr>');
	$('.jq_skill_new').append('<td colspan="9"><p>Новый</p></td>');
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
// Back to Top
function backToTop() {
	let button = $('.nome_app_top');
	
	$(window).on('scroll', () => {
		if ($(this).scrollTop() >= 200) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});

	button.on('click', (e) => {
		e.preventDefault();
		$('html').animate({ scrollTop: 0 }, 1000);
	});
}

backToTop();

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

$(document).ready(function () {
	const menuData = [
		{
			name: "Tank",
			jobs: [
				{ name: "Paladin", link: "PLD" },
				{ name: "Warrior", link: "WAR" },
				{ name: "Dark Knight", link: "DRK" },
				{ name: "Gunbreaker", link: "GNB" },
			],
		},
		{
			name: "Healer",
			jobs: [
				{ name: "White Mage", link: "WHM" },
				{ name: "Scholar", link: "SCH" },
				{ name: "Astrologian", link: "AST" },
				{ name: "Sage", link: "SGE" },
			],
		},
		{
			name: "Melee DPS",
			jobs: [
				{ name: "Monk", link: "MNK" },
				{ name: "Dragoon", link: "DRG" },
				{ name: "Ninja", link: "NIN" },
				{ name: "Samurai", link: "SAM" },
				{ name: "Reaper", link: "RPR" },
				{ name: "Viper", link: "VPR" },
			],
		},
		{
			name: "Physical Ranged DPS",
			jobs: [
				{ name: "Bard", link: "BRD" },
				{ name: "Machinist", link: "MCH" },
				{ name: "Dancer", link: "DNC" },
			],
		},
		{
			name: "Magical Ranged DPS",
			jobs: [
				{ name: "Black Mage", link: "BLM" },
				{ name: "Summoner", link: "SMN" },
				{ name: "Red Mage", link: "RDM" },
				{ name: "Pictomancer", link: "PCT" },
				{ name: "Blue Mage", link: "BLU" },
			],
		},
		{
			name: "Ссылки",
			jobs: [
				{ name: "Главная", link: "/" },
				{ name: "Job Guide", link: "../JobGuide" },
				{ name: "Crafting & Gathering Guide", link: "../CraftingGatheringGuide" },
				{ name: "Gold Saucer Guide", link: "../GoldSaucer", hidden: true },
			],
		},
	];

	const $menuList = $('<ul class="jobguide_menu_list"></ul>');

	menuData.forEach(function (category) {
		const $category = $('<li class="jobguide_menu_list"></li>');
		$category.append(`<span class="job_name_menu">${category.name}</span>`);

		const $subMenu = $('<ul class="jobguide_sub_menu"></ul>');
		category.jobs.forEach(function (job) {
			const $job = $("<li></li>");
			if (job.hidden) {
				$job.attr("hidden", "true");
			}
			$job.append(`<a href="${job.link}"><p>${job.name}</p></a>`);
			$subMenu.append($job);
		});
		$category.append($subMenu);
		$menuList.append($category);
	});

	$("#jq_menu").append($menuList);
});