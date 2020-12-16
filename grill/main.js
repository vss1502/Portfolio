$(document).ready(function (){

   
    
        $(':radio').click(function (){
            $(".culc_img").attr("src", "./img/tumba" + $('input[name=tumba]:checked').val() + "-chasha" + $('input[name=chasha]:checked').val() + ".png");
            
            if ($('input[name=chasha]:checked').val() == '3'){
                $(".diametr_span").html("1000");
               
                }
                else {
                    $(".diametr_span").html("850");
                }

                if ($('input[name=chasha]:checked').val() == '1' & $('input[name=tumba]:checked').val() == '1'){
                    $(".rezult_answ").html("38000 ₽");
                }
                if ($('input[name=chasha]:checked').val() == '2' & $('input[name=tumba]:checked').val() == '1'){
                    $(".rezult_answ").html("42000 ₽");
                }
                if ($('input[name=chasha]:checked').val() == '3' & $('input[name=tumba]:checked').val() == '1'){
                    $(".rezult_answ").html("48000 ₽");
                }
                if ($('input[name=tumba]:checked').val() == '2' || $('input[name=tumba]:checked').val() == '3' || $('input[name=tumba]:checked').val() == '4'){
                    $(".rezult_answ").html("ПОД ЗАКАЗ");
                }

                if ($('input[name=chasha]:checked').val() == '1' & $('input[name=tumba]:checked').val() == '5'){
                    $(".rezult_answ").html("37000 ₽");
                }
                if ($('input[name=chasha]:checked').val() == '2' & $('input[name=tumba]:checked').val() == '5'){
                    $(".rezult_answ").html("40000 ₽");
                }
                if ($('input[name=chasha]:checked').val() == '3' & $('input[name=tumba]:checked').val() == '5'){
                    $(".rezult_answ").html("47000 ₽");
                }

                
        });

        $('.plavn').on('click', function(event) {
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

          $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.menu_fix').addClass('fixed');
            } else {
                $('.menu_fix').removeClass('fixed');
                $('.gamburger').css("display", "block");
            }
      });

      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.menu_fix_mob').addClass('fixed');
        } else {
            $('.menu_fix_mob').removeClass('fixed');
        }
        });

        $('.gamburger').on('click', function(event) {
            $('#menu__toggle').prop('checked', true);
            $('.menu_fix_mob').addClass('fixed');
            $('.gamburger').css("display", "none");
           
            
         });

         $('.plavn').on('click', function(event) {
            $('#menu__toggle').prop('checked', false);
            
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
});
    
    


