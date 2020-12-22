$(function(){

		$('.lazyYT').lazyYT(); 
		$('.lazy').Lazy();


    $('.head-slider').slick({
        autoplay: true,
        autoplaySpeed: 6000,
    });
    $('.otzyvy-slider').slick({
       dots: true,
       arrows: false,
	});
	$('.katalog2015_slider').slick({
	});
	$('.katalog2023_slider').slick({
	});
	$('.katalog2037_slider').slick({
	});
	$('.katalog2060_slider').slick({
	});

	$('.katalog_23').slick({
	});
	

    $('.dopolnit-slider').slick({
	 });
	 

	 $.fn.setCursorPosition = function(pos) {
		if ($(this).get(0).setSelectionRange) {
		  $(this).get(0).setSelectionRange(pos, pos);
		} else if ($(this).get(0).createTextRange) {
		  var range = $(this).get(0).createTextRange();
		  range.collapse(true);
		  range.moveEnd('character', pos);
		  range.moveStart('character', pos);
		  range.select();
		}
	  };
	  
	  $("input[type='tel']").click(function(){
		$(this).setCursorPosition(3);
	  }).mask("+389999999999");
     




     $('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});

    



    var $menu_popup = $('.menu-popup');
 
	$(".menu-triger").click(function(){
		$('body').addClass('body_pointer');		
		$menu_popup.show(0);
		$menu_popup.animate(
			{right: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300
		);
		return false;
	});	
	
	$(".menu-close").click(function(){
		$('body').removeClass('body_pointer');		
		$menu_popup.animate(
			{right: parseInt($menu_popup.css('right'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300, 
			function(){
				$menu_popup.hide(0);
			}
		);
		return false;
	});	
	
	$(document).on('click', function(e){
		if ($(e.target).closest('.menu_popup').length == 0){
			$('body').removeClass('body_pointer');
			$menu_popup.animate(
				{right: parseInt($menu_popup.css('right'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
				300, 
				function(){
					$menu_popup.hide(0);
				}
			);
		}
    });
    



	$('input[name="year"]').click(function(){
		var target = $('#start-' + $(this).val());
	 
		$('.year').not(target).hide(0);
		target.fadeIn(500);
	});

	$('.button_year').click(function(){
		$('.button_year').removeClass('active');
		$(this).addClass('active');
	  });


		$('input[name="litr2019"]').click(function(){
			var target = $('.start2019-' + $(this).val());
			
			$('.litr2019').not(target).hide(0);
			target.fadeIn(500);
		});

		$('input[name="litr2020"]').click(function(){
			var target = $('.start2020-' + $(this).val());
			
			
			$('.litr2020').not(target).hide(0);
			target.fadeIn(500);
			$('.litr2020').find('.kat_slider').slick('unslick');
			$('.start2020-' + $(this).val()).find('.kat_slider').slick();
			//$('.katalog_23').slick('reinit');
		});

		$('.button_litr2019').click(function(){
			$('.button_litr2019').removeClass('litr_active');
			$(this).addClass('litr_active');
			});

			$('.button_litr2020').click(function(){
				$('.button_litr2020').removeClass('litr_active');
				$(this).addClass('litr_active');
				});


			$('.moreinfo').click(function(){
				$('.obem').removeClass('addobem');
				$(this).parent().find('.obem').addClass('addobem');
				$('.info_obem').append($('.addobem').text());

				$('.visotakuba').removeClass('addvisotakuba');
				$(this).parent().find('.visotakuba').addClass('addvisotakuba');
				$('.info_visotakuba').append($('.addvisotakuba').text());

				$('.ves').removeClass('addves');
				$(this).parent().find('.ves').addClass('addves');
				$('.info_ves').append($('.addves').text());

				$('.diam').removeClass('adddiam');
				$(this).parent().find('.diam').addClass('adddiam');
				$('.info_diam').append($('.adddiam').text());

				$('.litr_price').removeClass('addlitr_price');
				$(this).parent().find('.litr_price').addClass('addlitr_price');
				$('.info_litr_price').append($('.addlitr_price').text());

				$('.description-hide').removeClass('adddescription-hide');
				$(this).parent().find('.description-hide').addClass('adddescription-hide');
				$('.info_title').append($('.adddescription-hide').text());

				$('.img_hide').removeClass('addimg_hide');
				$(this).parent().find('.img_hide').addClass('addimg_hide');
				$('.info_img').attr('src', $('.addimg_hide').text());
					
					
			});
			

			$('.moreinfo').click(function() {
				$('.popup-fade2').fadeIn();
				return false;
			});	
			
			$('.popup-close').click(function() {
				$(this).parents('.popup-fade2').fadeOut();
				$('.info_obem').empty();
				$('.info_visotakuba').empty();
				$('.info_ves').empty();
				$('.info_diam').empty();
				$('.info_litr_price').empty();
				$('.info_title').empty();

				return false;
			});		
		 
			$('.popup-fade2').click(function(e) {
				if ($(e.target).closest('.popup').length == 0) {
					$(this).fadeOut();
					$('.info_obem').empty();
					$('.info_visotakuba').empty();
					$('.info_ves').empty();
					$('.info_diam').empty();
					$('.info_litr_price').empty();
					$('.info_title').empty();

				}
			});

			$('.bolshe').click(function(){
				$(this).css("display", "none");
				$(this).siblings().fadeIn(1000);

			});
		

});


