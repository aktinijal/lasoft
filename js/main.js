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
    
    $('.form-button').submit(function() {
        $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()    
        }).done(function() {
        alert("Thanks for trust! We`ll contact you.")
        });
        return false;
    });
    
    /////////HEADER////////  
    $(window).scroll(function() {
    if ($(this).scrollTop() > 300){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
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
    
    
    
    ///////CLIENTS//////////
     $(window).resize(function(){
    var wid = $(window).width();
        if(wid < 1005){
            $("#clients .img-wrapper").removeClass('none-margin-l');
        }
         if(wid > 1005){
            $("#clients .img-wrapper").addClass('none-margin-l');
        }
    }); 
    

    /////////////MAP
//    var map;
//    function initialize() {
//     var Options = {
//      center: new google.maps.LatLng(56, 37),
//      zoom: 8,
//      mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     map = new google.maps.Map(document.getElementById("map_canvas"), Options);
//    }
//    google.maps.event.addDomListener(window, 'load', initialize);


    
});