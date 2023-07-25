
(function($) {
	
	"use strict";
	
	$(".owl-carousel").owlCarousel({
		loop:true,
		items:3,
		margin: 30,
		autoplay: true,
		smartSpeed: 2000,
		autoplayTimeout: 3000,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }

	});

	jQuery('.main-menu-area').meanmenu({
		meanScreenWidth: "767",
	});

})(window.jQuery);