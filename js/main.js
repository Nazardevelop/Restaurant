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

});
var b;