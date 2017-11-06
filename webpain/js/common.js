$(document).ready(function() {
    var touch = $(".touch-menu");
    var menu = $(".top-menu");
    
    $(touch).on("click", function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function() {
        var wid = $(window).width();
        if(wid > 768 && menu.is(":hidden")) {
            menu.removeAttr("style");
        }
    });
});