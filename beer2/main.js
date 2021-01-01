$(document).ready(function(){

  $(function() {
    $('.lazy:visible').Lazy();
  });

  $('.lazyYT').lazyYT(); 

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


  $('.popup2-open').click(function() {
    $('.popup-fade2').fadeIn();
    return false;
  });	
  
  $('.popup-close').click(function() {
    $(this).parents('.popup-fade2').fadeOut();
    return false;
  });		
 
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade2').fadeOut();
    }
  });
  
  $('.popup-fade2').click(function(e) {
    if ($(e.target).closest('.popup2').length == 0) {
      $(this).fadeOut();					
    }
  });


});