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
$('.search-btn').on('click', function(e){
	if($(window).width() >= '992') {
		$('.search-field').fadeToggle('fast');
		$(window).resize(function(){
			if($(window).width() <= '992') {
				$('.search-field').removeAttr('style');
			}
		});
	}
	e.preventDefault();
});

$(window).resize(function(){
	if($(window).width() > '768')   {
		$('.search-btn button').removeAttr('type', 'submit');
	} else {
		$('.search-btn button').attr('type', 'submit');
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


//Add slideUp animation to dropdown
//some trouble if navbar is collapsed
// $('.portfolio').on('show.bs.dropdown', function(e){
// 	$(this).find('.dropdown-menu').first().stop(true, true).show(200);
// });

// $('.portfolio').on('hide.bs.dropdown', function(e){
// 	$(this).find('.dropdown-menu').first().stop(true, true).hide(200);
// });


});