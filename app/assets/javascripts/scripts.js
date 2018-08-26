// Because of the way this file is set up, this works the same
// as a document.ready statement.
// Add your code, either within the misc: section, or create your own function
// if you create your own, make sure to add a line at the bottom to run that code
// ie: Engine.ui.misc();
$(function () {
	"use strict";
	var Engine = {
		ui: {
			fastclick: function () {
				FastClick.attach(document.body);
			}, // end fastclick
			
			placeholder: function () {
				$('input, textarea').placeholder();
			}, // end placeholder
			
			parallax: function () {
				$('.parallax-window').jarallax({
					speed: 0.5, 
					imgWidth: 1366, 
					imgHeight: 768
				})
				
			}, // end parallax
			
			BGfillBox: function () {
				$('.fill-box').fillBox();
			}, // end BG fill Box
			
			RangeSlider: function () {
				$(".rangePrice").ionRangeSlider({
					hide_min_max: true, 
					keyboard: true, 
					min: 0, 
					max: 1500, 
					from: 0, 
					to: 7689256, 
					type: 'double', 
					step: 1, 
					prefix: "$", 
					grid: true
				});
			}, // end RangeSlider
			
						
			misc: function () {
				$(".navbar-expand-toggle").on('click', function () {
					$(".app-container").toggleClass("expanded");
					return $(".navbar-expand-toggle").toggleClass("fa-rotate-90");
				});
				$("#cart.shopping-cart,.cart-close").on('click', function () {
					$("body").toggleClass("CartOpen");
					return ;
				});
				
				var SideContentHeight = $('.block-cart-header').height() + + $('.block-cart-footer').height();
				$('.cart-middle-items').css('height',$( window ).height() - SideContentHeight + 'px')
				$('.navbar-expand-toggle').on('click', function() {
                    $(this).toggleClass('open');
                    
                });
				
				
				
				/*---------   Home 4 side Menu     ---------*/
				
				if ($(window).width() < 992) {
					
					
				}
				
				/*---------   Quantity Counter   ---------*/
				
				$('.plus').on('click', function () {
					var $qty = $(this).parents('.CartItem').find("ul.QuantityBox li .QuantityInput");
					var currentVal = parseInt($qty.val(), 10);
					if (!isNaN(currentVal)) {
						$qty.val(currentVal + 1);
					}
				});
				$('.minus').on('click', function () {
					var $qty = $(this).parents('.CartItem').find("ul.QuantityBox li .QuantityInput");
					var currentVal = parseInt($qty.val(), 10);
					if (!isNaN(currentVal) && currentVal > 1) {
						$qty.val(currentVal - 1);
					}
				});
				
				
				 

				
				
				
				
			}, // end misc
			metisNavMenu: function () {
				 $("#side-menu,#SBC_Nav").metisMenu();
			}, // end metisMenu
			
		}, // end ui
		utils: {
			sliders: function () {
				//  Home Slider
				$('.Homeslider').slick({arrows: true, speed: 1000, dots: false, slidesToShow: 1, slidesToScroll: 1, centerMode: false, touchMove: true, slide: 'li'});
			
				//  3 columns Slider
				$('.col-3-slider').slick({arrows: true, infinite: true, speed: 1000, slide: 'li', slidesToShow: 3, slidesToScroll: 1, adaptiveHeight: true, autoplay: false, dots: false, 
						responsive: [{breakpoint: 992, settings: {slidesToShow: 2, slidesToScroll: 1, infinite: true, }},{breakpoint: 568, settings: {slidesToShow: 1, slidesToScroll: 1, infinite: true, }},]
				});
				//  4 columns Slider
				$('.col-4-slider').slick({arrows: true, infinite: true, speed: 1000, slide: 'li', slidesToShow: 4, slidesToScroll: 1, adaptiveHeight: true, autoplay: false, dots: false,
					 responsive: [{breakpoint: 801, settings: {slidesToShow: 3, slidesToScroll: 1, infinite: true, }}, {breakpoint: 568, settings: {slidesToShow: 2, slidesToScroll: 1, infinite: true, }}, 
					 {breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1, infinite: true, }},]
				});
				
				
				$('.popular-slider').slick({
					dots: false,
					infinite: false,
					arrows:true,
					speed: 300,
					rows: 3,
					slidesPerRow: 1,
				});
				
				
				$('.shop_slider').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					slide:'li',
					infinite: true,
					asNavFor: '.shop_thumb'
				});
						
				
				$('.shop_thumb').slick({
                    autoplay: false,
                    arrows: true,
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    draggable: false,
                    centerPadding: "60px",
                    infinite: true,
                    
                    speed: 1000,
                    centerMode: true,
                    autoplaySpeed: 2000,
                    asNavFor: '.shop_slider',
                    useTransform: true,
                   
                    
                    focusOnSelect: true,
                   responsive: [
				    {
					   breakpoint: 480,
					   settings: {
						   centerPadding: "30px",
					   }
				    }
				   ]

                }); 
				
				$('.client_slider').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					slide:'li',
					infinite: true,
					asNavFor: '.client_thumb'
				});
						
				
				$('.client_thumb').slick({
                    autoplay: false,
                    arrows: false,
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    draggable: false,
                    centerPadding: "60px",
                    infinite: true,                    
                    speed: 1000,
                    centerMode: true,
                    autoplaySpeed: 2000,
                    asNavFor: '.client_slider',
                    useTransform: true,                   
                    focusOnSelect: true,
                    responsive: [
				    {
					   breakpoint: 480,
					   settings: {
						   centerPadding: "20px",
					   }
				    }
				   ]

                }); 
				
				
							
				
			}, 
			
			
			
			
			
			
			magnific: function () {
				$('#pro_slider').magnificPopup({
						delegate: 'a', 
						type: 'image', 
						gallery: {
							enabled: true
							}
						// other options
				});				

				
			}
			
		, }, // end utils
	};
	
	Engine.ui.fastclick();
	Engine.ui.placeholder();
	
	Engine.ui.parallax();
	Engine.ui.BGfillBox();
	
	Engine.ui.misc();
	Engine.ui.metisNavMenu();
	Engine.ui.RangeSlider();
	Engine.utils.sliders();
	
	Engine.utils.magnific();
	
	
});


$(document).ready(function(e) {
	var $filterSidebar = $('#shop-widgets-filters');
    var $toggleButton = $('#open-filters');
    var $overlay = $('body').find('.widgets-filter-overlay');
    function _open() {
        $filterSidebar.addClass('open');

        if (! $overlay.length) {
            $('body').append('<div class="widgets-filter-overlay"></div>');
        }

        $('body').addClass('open-filters-open');
    }

    function _close() {
        $filterSidebar.removeClass('open');
        $(document).find('.widgets-filter-overlay').remove();
        $('body').removeClass('open-filters-open');
    }

    $toggleButton.on('click', function() {
        if (! $filterSidebar.hasClass('open')) {
            _open();
        } else {
            _close();
        }
    });

    $('body').on('click', '.widgets-filter-overlay', function() {
        _close();
    });
});


