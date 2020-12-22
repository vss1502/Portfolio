$(document).ready(function(){

  $('.lazyYT').lazyYT();
  $('.lazy:visible').Lazy();

    $('.katalog_nabor_slider').slick({lazyLoad: 'ondemand',});
    
    $('.garantia_slider').slick({lazyLoad: 'ondemand',});
    
    $('.dop_slider').slick(
        {
          lazyLoad: 'ondemand',
            dots: true,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  dots: false
                }
              },
            ]

        }
    );
    $('.otzivi_slider').slick(
        {
          lazyLoad: 'ondemand',
            slidesToShow: 3,
             slidesToScroll: 1,
             responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
        }
    );
    
    $('.head_content-slider').slick(
      {
        lazyLoad: 'ondemand',
        dots: true,
        arrows : false,
      }
    );

    $('.action_items-mob').slick({lazyLoad: 'ondemand',});
    $('.dop_slider-mob').slick({lazyLoad: 'ondemand',});
    $('.otzivi_slider-mob').slick(
      {
        lazyLoad: 'ondemand',
        dots: true,
        arrows : false,
      }
    );

    


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
        $('.popup-fade').fadeIn(0);
        return false;
      });	
      
      $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut(0);
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


      $('.popup-open2').click(function() {
        $('.popup-fade2').fadeIn(0);
        $('body').css(overflow, hidden);
        return false;
      });	
      
      $('.popup-close2').click(function() {
        $(this).parents('.popup-fade2').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade2').click(function(e) {
        if ($(e.target).closest('.popup2').length == 0) {
          $(this).fadeOut();					
        }
      });

      $('.popup-open3').click(function() {
        $('.popup-fade3').fadeIn(0);
        return false;
      });	
      
      $('.popup-close3').click(function() {
        $(this).parents('.popup-fade3').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade3').click(function(e) {
        if ($(e.target).closest('.popup3').length == 0) {
          $(this).fadeOut();					
        }
      });

      $('.popup-open4').click(function() {
        $('.popup-fade4').fadeIn(0);
        return false;
      });	
      
      $('.popup-close4').click(function() {
        $(this).parents('.popup-fade4').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade4').click(function(e) {
        if ($(e.target).closest('.popup4').length == 0) {
          $(this).fadeOut();					
        }
      });

      $('.popup-open5').click(function() {
        $('.popup-fade5').fadeIn(0);
        return false;
      });	
      
      $('.popup-close5').click(function() {
        $(this).parents('.popup-fade5').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade5').click(function(e) {
        if ($(e.target).closest('.popup5').length == 0) {
          $(this).fadeOut();					
        }
      });

      $('.popup-open6').click(function() {
        $('.popup-fade6').fadeIn(0);
        return false;
      });	
      
      $('.popup-close6').click(function() {
        $(this).parents('.popup-fade6').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade6').click(function(e) {
        if ($(e.target).closest('.popup6').length == 0) {
          $(this).fadeOut();					
        }
      });

      $('.popup-open7').click(function() {
        $('.popup-fade7').fadeIn(0);
        return false;
      });	
      
      $('.popup-close7').click(function() {
        $(this).parents('.popup-fade7').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade7').click(function(e) {
        if ($(e.target).closest('.popup7').length == 0) {
          $(this).fadeOut();					
        }
      });

      $('.popup-open8').click(function() {
        $('.popup-fade8').fadeIn(0);
        return false;
      });	
      
      $('.popup-close8').click(function() {
        $(this).parents('.popup-fade8').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade8').click(function(e) {
        if ($(e.target).closest('.popup8').length == 0) {
          $(this).fadeOut();					
        }
      });

      $('.popup-open9').click(function() {
        $('.popup-fade9').fadeIn(0);
        return false;
      });	
      
      $('.popup-close9').click(function() {
        $(this).parents('.popup-fade9').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade9').click(function(e) {
        if ($(e.target).closest('.popup9').length == 0) {
          $(this).fadeOut();					
        }
      });

      $('.popup-open10').click(function() {
        $('.popup-fade10').fadeIn(0);
        return false;
      });	
      
      $('.popup-close10').click(function() {
        $(this).parents('.popup-fade10').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade10').click(function(e) {
        if ($(e.target).closest('.popup10').length == 0) {
          $(this).fadeOut();					
        }
      });

      $('.popup-open11').click(function() {
        $('.popup-fade11').fadeIn(0);
        return false;
      });	
      
      $('.popup-close11').click(function() {
        $(this).parents('.popup-fade11').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade11').click(function(e) {
        if ($(e.target).closest('.popup11').length == 0) {
          $(this).fadeOut();					
        }
      });

      $('.popup-open12').click(function() {
        $('.popup-fade12').fadeIn(0);
        return false;
      });	
      
      $('.popup-close12').click(function() {
        $(this).parents('.popup-fade12').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade12').click(function(e) {
        if ($(e.target).closest('.popup12').length == 0) {
          $(this).fadeOut();					
        }
      });

      $('.popup-open13').click(function() {
        $('.popup-fade13').fadeIn(0);
        return false;
      });	
      
      $('.popup-close13').click(function() {
        $(this).parents('.popup-fade13').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade13').click(function(e) {
        if ($(e.target).closest('.popup13').length == 0) {
          $(this).fadeOut();					
        }
      });

      $('.popup-open14').click(function() {
        $('.popup-fade14').fadeIn(0);
        return false;
      });	
      
      $('.popup-close14').click(function() {
        $(this).parents('.popup-fade14').fadeOut(0);
        return false;
      });		
     
      $('.popup-fade14').click(function(e) {
        if ($(e.target).closest('.popup14').length == 0) {
          $(this).fadeOut();					
        }
      });

      

     

      $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();
        
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */
        
        $('html, body').animate({scrollTop: dn}, 2000);
        
        /*
        * 1000 скорость перехода в миллисекундах
        */
      });


      $( "#param_select" ).change(function() { 
        $(".param_img2").attr("src", "./img/app" + $("#param_select").val() + ".png");
           
        if ($( "#param_select").val() == 'otd') {
          $(".param_emkost").css( "display", "none" );
          }
          else {
            $(".param_emkost").css( "display", "block" );
          }


          if ($( "#param_select").val() == 'otd') {
            $(".param_tolshina").css( "display", "none" );
            }
            else {
              $(".param_tolshina").css( "display", "block" );
            }


            if ($( "#param_select").val() == 'otd') {
              $(".param_plita").css( "display", "none" );
              }
              else {
                $(".param_plita").css( "display", "block" );
              }
              
              if ($( "#param_select").val() == '23') {
                $(".param_ves span").html('9,3 кг');
              }

              if ($( "#param_select").val() == '37') {
                $(".param_ves span").html('10,6 кг');
              }

              if ($( "#param_select").val() == '60') {
                $(".param_ves span").html('13,5 кг');
              }

              if ($( "#param_select").val() == '100') {
                $(".param_ves span").html('15,6 кг');
              }

              if ($( "#param_select").val() == 'otd') {
                $(".param_ves span").html('3,5 кг');
              }



        });


      $( "#katalog_param_select" ).change(function() {
        $(".katalog_img2").attr("src", "./img/app" + $("#katalog_param_select").val() + ".png");
            if ($( "#katalog_param_select").val() == 23) {
                $(".price_new span").html("7 450 ₴");
                $(".price_old span").html("8 300 ₴");
            }

            if ($( "#katalog_param_select").val() == 37) {
                $(".price_new span").html("7 950 ₴");
                $(".price_old span").html("8 850 ₴");
            }

            if ($( "#katalog_param_select").val() == 60) {
                $(".price_new span").html("8 900 ₴");
                $(".price_old span").html("9 900 ₴");
            }

            if ($( "#katalog_param_select").val() == 100) {
                $(".price_new span").html("9 900 ₴");
                $(".price_old span").html("11 000 ₴");
            }

            if ($( "#katalog_param_select").val() == 'otd') {
              $(".price_new span").html("3 890 ₴");
              $(".price_old span").html("4 350 ₴");
             
          }

          if ($( "#katalog_param_select").val() == 'otd') {
            $(".kol").css( "display", "none" );
            
            $(".term1").html("1 шт");
           

            }
            else {
              $(".kol").css( "display", "flex" );
             
              $(".term1").html("2 шт");
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
      $('.menu-fade').fadeIn(0);
      return false;
    });	
    
    $('.menu-close').click(function() {
      $(this).parents('.menu-fade').fadeOut(0);
      return false;
    });		
   
    $(document).keydown(function(e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $('.menu-fade').fadeOut(0);
      }
    });
    
    $('.menu-fade').click(function(e) {
      if ($(e.target).closest('.popup').length == 0) {
        $(this).fadeOut(0);					
      }
    });


    

   

  
    
});