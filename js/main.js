
$(document).ready(function(){
    //Шрифти
    function fontSize() {
    var fontSizevar=($("html").width)*32/1360;
    $("html").css("font-size",fontSizevar);
        setTimeout(fontSize, 0);
    }
    fontSize();
    //$("html").css("font-size", ($("html").width)*32/1360);
    
    
    //Меню навігації
    var touch = $('#touch-menu');
    var menu = $('.site-nav');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.fadeToggle();
        });
    $(window).resize(function(){
        var width = $(window).width();
        if(width > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
                
    //Слайдер
    function slider (){
        if($("#slider ul li").hasClass("slide-active")) {
            if($("#slider ul li.slide-active").is("#slider ul li:last")){
                $(".slide-active").fadeOut(2000);
                $(".slide-active").removeClass("slide-active");
                $("#slider ul li:first").addClass("slide-active");
                $(".slide-active").fadeIn(2000);
            }
            else {
                $(".slide-active").fadeOut(2000);
                $(".slide-active").next().addClass("slide-active");
                $(".slide-active:first").removeClass("slide-active");
                $(".slide-active").fadeIn(2000);
            }
        }
        else {
            $("#slider ul li:first").addClass("slide-active").show();
        }
        setTimeout(slider, 10000);
    }
    slider();
                
    //Висота
    function sliderHeight() {
    var slideHeight=$(".slide-active").height();
    $("#slider").height(slideHeight);
        setTimeout(sliderHeight, 0);
    }
    sliderHeight();
                
                
    //Анімаційний рух по сайту
    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 400);
        e.preventDefault();
    });
                
    //Новини
    $(".news-item").click(function(){
        $(this).find(".news-open").slideToggle();
    })
                
    //Галерея
    $(".photo").click(function(){    
        $(this).addClass("current-photo")
        var galleryContent=$(".current-photo").html();
        var openPhotoContent=$(".open-photo").html();
        $(".open-photo").html(galleryContent);
        $("#gallery-content").show();
                     
    })
    
    
    $(".photo-right").click(function(){
        if($(".current-photo").is(".photo:last")){
            $(".photo:first").addClass("current-photo");
            $(".photo:last").removeClass("current-photo");
        }
        else{
            $(".current-photo").next().addClass("current-photo");
            $(".current-photo:first").removeClass("current-photo");
        }
        var galleryContent=$(".current-photo").html();
        $(".open-photo").html(galleryContent); 
    })
    $(".photo-left").click(function(){
        if($(".current-photo").is(".photo:first")){
            $(".photo:last").addClass("current-photo");
            $(".photo:first").removeClass("current-photo");
        }
        else{
            $(".current-photo").prev().addClass("current-photo");
            $(".current-photo:last").removeClass("current-photo");
        }
        var galleryContent=$(".current-photo").html();
        $(".open-photo").html(galleryContent); 
    })
    
    $(".photo-wrap").not(".open-photo").click(function(){
        $("#gallery-content").hide();
        $(".current-photo").removeClass("current-photo");
    })
    
    function buttonsMarg() {
        var htmlWidth=$("html").width()-605;
        var photoMarg=htmlWidth/2;
        //$("html").css({"font-size": photoWidth});
        //alert (photoMarg);
        $(".photo-right").css({"margin-right": photoMarg});
        $(".photo-left").css({"margin-left": photoMarg});
        
        setTimeout(buttonsMarg, 0);
    }
    buttonsMarg();
    
    
    
                
    //Інформація
    $(".info-item").click(function(){
        if($(this).hasClass("active")){
            $(".active").removeClass("active");
            $("#info-content").hide();
        } 
        else {
            var infoContent=$(this).find(".info-open").html();
            $(".active").removeClass("active");
            $(this).addClass("active");
            $("#info-content").html(infoContent).show();
        }       
    })
    return false;
});