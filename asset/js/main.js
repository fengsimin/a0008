$(document).ready(function () {

	var $items = JSON.parse(items);

    var swiper_options = {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		keyboardControl: true,
		mousewheelControl: true,
//      hashnav: true,
		slidesPerView: 'auto',
		spaceBetween: 20,
		onInit: function(swiper) {

            var count = swiper.slides.length;

            for(var i=0; i<count; i++) {
                $slide = $(swiper.slides[i]);
                $slide.css('background-image', 'url('+$slide.data('path')+'/'+$slide.data('image')+'?v='+$slide.data('utime')+')');
            }

            $(swiper.slides[0]).find('h1').addClass('fadeInDown')
                .end().find('p').addClass('fadeInLeft')
                .end().find('a').addClass('fadeInUp');
		},
		onSlideChangeStart: function(swiper) {
			swiper.disableMousewheelControl();

			var count = swiper.slides.length;

            for(var i=0; i<count; i++) {
                $(swiper.slides[i]).find('h1').removeClass('fadeInDown')
                    .end().find('p').removeClass('fadeInLeft')
                    .end().find('a').removeClass('fadeInUp');
            }
		},
		onSlideChangeEnd: function(swiper) {
			setTimeout(function(){
            	swiper.enableMousewheelControl();
            }, 1000);
		},
		onTransitionEnd: function(swiper) {

            $(swiper.slides[swiper.activeIndex]).find('h1').addClass('fadeInDown')
                .end().find('p').addClass('fadeInLeft')
                .end().find('a').addClass('fadeInUp');
		}
    };

	var swiper = new Swiper('.swiper-container', $.extend(swiper_options, swiper_options_custom));
});
