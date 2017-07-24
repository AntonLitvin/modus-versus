$(function () {

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg"></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg"></a>
	$(".fancybox").fancybox();

	$(".contacts-popup").fancybox({
		'autoSize': false,
		'width': 240,
		'maxHeight': 80,
		'scrolling': 'no'
	});


//Show and hide searchform onclick
$('.search-btn').on('click', function(){

var searchField = $('.search-field');

	if($(window).width() >= '992') {
		$(searchField).fadeToggle('fast');
	}

	searchField.on('change', function(){
		if((searchField.value !== "")) {
			$('.js-search').submit();
		}
	});

});


$(window).resize(function(){
	if($(window).width() <= '992') {
		$('.search-field').removeAttr('style');
	}
});


//Carousel slider
$('.carousel').carousel({
	interval: 10000,
	pause: 'hover'
});


//Swiper slider
var mySwiper = new Swiper ('.swiper-container', {
	nextButton: '.swiper-right',
	prevButton: '.swiper-left',
	direction: 'horizontal',
	loop: true,
	slidesPerView: 6,
	autoplay: 10000,
	spaceBetween: 30,
	breakpoints: {
		// when window width is <= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window width is <= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window width is <= 768px
		768: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		// when window width is <= 992px
		992: {
			slidesPerView: 4,
			spaceBetween: 30
		}
	}
});

//Theme color changer
$('.theme-teal').on('click', function(){
	$('#color-styles').attr('href', 'css/style-teal.css');
});
$('.theme-purple').on('click', function(){
	$('#color-styles').attr('href', 'css/style-purple.css');
});
$('.theme-green').on('click', function(){
	$('#color-styles').attr('href', 'css/style-green.css');
});


});