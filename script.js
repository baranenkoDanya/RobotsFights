$(window).scroll(function () {    
     if ($(this).scrollTop() !== 0) {
         $header.addClass("sticky"); 
     } else if ($(this).scrollTop() == 0) {
         $header.removeClass("sticky").hide();
         $header.fadeIn(1000);
     }
 });


$(window).load(function(){
     $header = $('header');
});



