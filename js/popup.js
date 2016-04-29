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

});