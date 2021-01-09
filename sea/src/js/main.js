
//Слайдер фоновых изображений
$(".top").vegas({
    timer: false,
    slides: [
        { src: "../images/slider1.jpg" },
        { src: "../images/slider2.jpg" },
        { src: "../images/slider3.jpg" }, 
    ]
});

//Замена цвета закрепленного меню
var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 100){
        $(".header").css({"background": "#1b232f"})
    }
    if(100 > scrolled){
        $(".header").css({"background": "transparent"})         
    }
}

//Гамбургер
$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){ 
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
}

//Плавный скролл
$(function() {
    $(".scroll").on("click", function (event) {
		event.preventDefault(); 
		var id  = $(this).attr('href'),
			top = $(id).offset().top; 
	$('body,html').animate({scrollTop: top}, 1000);
	});
  });