$(document).ready(function(){
    
    $('.form').submit(function() {
        $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()    
        }).done(function() {
        alert("Thanks for trust! We`ll contact you.")
        });
        return false;
    });
    
    
    
    
    
    var touch = $('#touch-menu');
    var menu = $('.menu');
    
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    
    $(window).resize(function(){
    var wid = $(window).width();
        if(wid > 760 && menu.is(':hidden')){
            menu.removeAttr('style');
        }
    }); 
    
    $(window).scroll(function() {
    if ($(this).scrollTop() > 300){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
    });
    
    
//    var servicesItem = $('.servicses-item');
//    $(window).resize(function(){
//    var wid = $(window).width();
//        if(wid < 640){
//            servicesItem.removeClass('none-margin-l');
//        }
//    });
    
    
//    var height = $("#philosofy img").height();
//    $('#philosofy').height(height);
    
    
    
    
});