$(document).ready(function() {

    $(".show-popup").click(function() {
        $('.popup').fadeIn(300);
        var iddiv = $(this).attr("iddiv");
        $('#' + iddiv).fadeIn(300);
        $('.popup').attr('opendiv', iddiv);
        return false;
    });

    $('.popup, .close-btn').click(function() {
        var iddiv = $(".popup").attr('opendiv');
        $('.popup').fadeOut(300);
        $('#' + iddiv).fadeOut(300);
    });
    
    
    
    $(".show-project").click(function() {
        $('.project-popup').fadeIn(300);
        var projectdiv = $(this).attr("projectdiv");
        $('#' + projectdiv).fadeIn(300);
        $('.project-popup').attr('opendiv', projectdiv);
        return false;
    });

    $('.project-popup, .close-btn').click(function() {
        var projectdiv = $(".project-popup").attr('opendiv');
        $('.project-popup').fadeOut(300);
        $('#' + projectdiv).fadeOut(300);
    });

});