$(document).ready(function(){
    
//    $('.form').submit(function() {
//        $.ajax({
//        type: "POST",
//        url: "mail.php",
//        data: $(this).serialize()    
//        }).done(function() {
//        alert("Thanks for trust! We`ll contact you.")
//        });
//        return false;
//    });
//    
//    $('.form-button').submit(function() {
//        $.ajax({
//        type: "POST",
//        url: "mail.php",
//        data: $(this).serialize()    
//        }).done(function() {
//        alert("Thanks for trust! We`ll contact you.")
//        });
//        return false;
//    });
    
    
//      $(".menu a").click(function(){
//        if($(this).hasClass("active")){
//            $(".active").removeClass("active");
//            $("#info-content").hide();
//        } 
//        else {
//            var infoContent=$(this).find(".info-open").html();
//            $(".active").removeClass("active");
//            $(this).addClass("active");
//            $("#info-content").html(infoContent).show();
//        }       
//    })
      
//         $(".menu a").click(function(){
////            $(".active").removeClass("active");
//            $(this).addClass("active");
//        }); 
      
    
    
    
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
        if(wid < 1080){
            $(".footer-item").addClass('none-margin-l');
        }
         if(wid > 1080){
            $(".footer-item").removeClass('none-margin-l');
        }
    }); 
    
    
    ////////////FOOTER
     $(window).resize(function(){
    var wid = $(window).width();
        if(wid < 1005){
            $("#clients .img-wrapper").removeClass('none-margin-l');
        }
         if(wid > 1005){
            $("#clients .img-wrapper").addClass('none-margin-l');
        }
    }); 
    
    ////////////UP
    $('#scrollup img').mouseover( function(){
		$( this ).animate({opacity: 0.7},100);
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).click( function(){
		window.scroll(0 ,0); 
		return false;
	});

	$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('#scrollup').fadeIn('fast');
		} else {
			$('#scrollup').fadeOut('fast');
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