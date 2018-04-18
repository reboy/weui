/* global $:true */
+function ($) {
    var menus = document.getElementsByClassName("menus");
    var arr = [];
    for (var i = 0; i < menus.length; i++) {
        var c = i;
        menus[i].onclick = function () {
            arr[i] = 0;
            $(this).next().slideDown(300);
            $(".mask").fadeIn(400);
        };
        $(".mask").click(function () {
            // alert(menus[c]);
            $(".mask").fadeOut(400);
            $(".list").slideUp(300);
        });
        document.addEventListener("touchmove", function () {
            $(".mask").fadeOut(400);
            $(".list").slideUp(300);
        });
    }
}($);