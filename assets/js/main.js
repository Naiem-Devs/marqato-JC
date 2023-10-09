(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.side_nav').toggleClass('siteBar');   
    $(this).toggleClass('active');   
  }); 

  $(window).scroll(function(){
    if($(this).scrollTop() > 150){
        $('.top_btn').addClass('sticky')
    } else{
        $('.top_btn').removeClass('sticky')
    }
});

$('select').niceSelect();

})(jQuery);
