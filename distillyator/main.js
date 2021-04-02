
   window.onscroll = function() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 80) {
        document.getElementById("header").style.background = "#ffffff";
    } else {
        document.getElementById("header").style.background = "none";
    }
   }


   $('.garant_slider').slick({
	dots: true,
	arrows: true
    });

    $('.reviews_slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: false,
        responsive: [
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
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


        $(".menu").on("click","a", function (event) {
              //отменяем стандартную обработку нажатия по ссылке
              /* event.preventDefault(); */
         
                  //забираем идентификатор бока с атрибута href
              var id  = $(this).attr('href'),
         
                  //узнаем высоту от начала страницы до блока на который ссылается якорь
                   top = $(id).offset().top;
             //анимируем переход на расстояние - top за 1500 мс
              $('body,html').animate({scrollTop: top}, 1500);
          
              });

              $(".top_btn").on("click","a", function (event) {
                event.preventDefault();
                var id  = $(this).attr('href'),
                     top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1500);
                });


                initMask();
          

                function initMask() {
                  jQuery("input[type='tel']").mask("+389999999999");
                }

