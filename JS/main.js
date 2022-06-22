// сначала загрузится весь html, а потом будет обрабатываться JS
$(function () {
	// назначаем два слайдера slick.min.js через из родителей slider__inner и news__slider-inner https://kenwheeler.github.io/slick/
	$('.slider__inner, .news__slider-inner').slick({
		// настроим слайдер и добавим класс slick-btn, чтобы настроить кнопки 
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		// ограничиваем число прокруток на слайдере
		infinite: false,
	});
	
	// подключаем плагин jquery form styler
	$('select').styler();

	// добавляем выпадающий список меню при нажатии на бургер меню
	$('.header__btn-menu').on('click', function(){
		$('.menu ul').slideToggle();
	})




});
var audio = new Audio('id="music"');
audio.play();