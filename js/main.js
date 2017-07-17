/**
 * Created by Nazar on 09.07.2017.
 */
$(function () {
    var scrollEl = $("#scroll");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        b = scroll;
        if (scroll >= 50) {
            scrollEl.css("display","block");
        } else {
            scrollEl.css("display", "none");
        }
    });
    var divText = $('.text-inside-dish');
    $(window).resize(function () {
        var  screenWidth = $(window).outerWidth();
        var topValue = screenWidth *  0.2;
        var leftValue = screenWidth * 0.25;
        divText.css('top',topValue);
        divText.css('left', leftValue);
    });

});