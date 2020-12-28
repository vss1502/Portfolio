$(document).ready(function(){

 
$('.steps_slider').slick();
$('.otzivi_slider').slick();


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


if ($(window).width() < 769) {
  $('.sravnenie_content').slick({
    dots: true,
  });
 };

$(".ustroistvo_dno").hover(function () {
    $('.kak_dno-foto').toggleClass("hovered");
 });

 $(".ustroistvo_kran2").hover(function () {
  $('.kak_kran1-foto').toggleClass("hovered");
});

$(".ustroistvo_chiller").hover(function () {
  $('.kak_chiller-foto').toggleClass("hovered");
});

$(".ustroistvo_ten").hover(function () {
  $('.kak_ten-foto').toggleClass("hovered");
});

$(".ustroistvo_blok").hover(function () {
$('.kak_block-foto').toggleClass("hovered");
});

$(".ustroistvo_kran").hover(function () {
$('.kak_kran2-foto').toggleClass("hovered");
});

$(".ustroistvo_dno").click(function () {
  $('.kak_dno-foto').toggleClass("clicked");
  $('.text-dno').toggleClass("clicked");
  $(this).find(".kak_button").toggleClass("clicked_btn");
});

$(".ustroistvo_kran2").click(function () {
  $('.kak_kran1-foto').toggleClass("clicked");
  $('.text-kran2').toggleClass("clicked");
  $(this).find(".kak_button").toggleClass("clicked_btn");
});

$(".ustroistvo_chiller").click(function () {
  $('.kak_chiller-foto').toggleClass("clicked");
  $('.text-chiller').toggleClass("clicked");
  $(this).find(".kak_button").toggleClass("clicked_btn");
});

$(".ustroistvo_ten").click(function () {
  $('.kak_ten-foto').toggleClass("clicked");
  $('.text-ten').toggleClass("clicked");
  $(this).find(".kak_button").toggleClass("clicked_btn");
});

$(".ustroistvo_blok").click(function () {
  $('.kak_block-foto').toggleClass("clicked");
  $('.text-block').toggleClass("clicked");
  $(this).find(".kak_button").toggleClass("clicked_btn");
});

$(".ustroistvo_kran").click(function () {
  $('.kak_kran2-foto').toggleClass("clicked");
  $('.text-kran').toggleClass("clicked");
  $(this).find(".kak_button").toggleClass("clicked_btn");
});

  $('.litr_item').click(function(){
    $('.litr_item').removeClass('litr_active');
    $(this).addClass('litr_active');
  });

  $('.korz800').click(function(){
    $('.korz').html("800 грн")
  });

  $('.korz900').click(function(){
    $('.korz').html("900 грн")
  });

  $('.korz1000').click(function(){
    $('.korz').html("1000 грн")
  });

  $('.korz1200').click(function(){
    $('.korz').html("1200 грн")
  });


  $('.dopolnit_item-dobavit input').click(function(){
    $( this).parent().parent().toggleClass('dopolnit_item-dobavleno');
    });

    $('.dopolnit_item-dobavit input').click(function(){
      if (!$(this).data('status')) {
        $(this).siblings().html('Добавлено &#10003');
        $(this).data('status', true);
      }
      else {
        $(this).siblings().html('Добавить к заказу');
        $(this).data('status', false);
      }
    });



    var $menu_popup = $('.menu-popup');
 
	$(".header_burger").click(function(){
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

    $('.header_burger').click(function() {
      $('.menu-fade').fadeIn();
      return false;
    });	
    
    $('.menu-close').click(function() {
      $(this).parents('.menu-fade').fadeOut();
      return false;
    });		
   
    $(document).keydown(function(e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $('.menu-fade').fadeOut();
      }
    });
    
    $('.menu-fade').click(function(e) {
      if ($(e.target).closest('.popup').length == 0) {
        $(this).fadeOut();					
      }
    });


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
});