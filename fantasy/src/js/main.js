$(function() {
    $(".scroll").on("click", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),
			top = $(id).offset().top; 
	$('body,html').animate({scrollTop: top}, 1000);
	$("#menu__toggle").prop('checked', false);
	});
	
  });


 
