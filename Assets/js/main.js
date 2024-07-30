// Doom Load
$(document).ready(function () {
	$('#jq_menu').load('Other/MenuJob.html');
	$('#jq_menu_cg').load('Other/MenuCG.html');
	// Open JobMenu
	$('.nav_floating_icon').click(() => {
		$('.nav_floating_list').fadeToggle();
	});
	// Info Update
	$('#inner_update').prepend('<p class="latest_update">Последнее обновление: 30.07.2024 | Патч: 7.05</p>');
	$('#jq_patch').prepend('Все описания основаны на активных умениях и бонусах, полученных на 100 уровне.<br />Более подробную информацию об изменениях в активных и пассивных умениях можно найти в примечаниях к <a target="_blank" href="https://eu.finalfantasyxiv.com/lodestone/topics/detail/da01b0d2d5434cd2ccfcc87f733df7a590f97c00/">патч ноутам</a>.');
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