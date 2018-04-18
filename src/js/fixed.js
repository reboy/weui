/* global $:true */
+function ($) {
  $.fn.fixedtop = function(margintop) {
    var $this = $(this);
    var startPos = $this.offset().top;
    $.event.add(window, "scroll", function () {
      var p = $(window).scrollTop();
      console.log(startPos,p);
      console.log(p > startPos);
      $this.css("position", (p > startPos) ? "fixed" : "static");
      $this.css('top', ((p) > startPos) ? '0px' : '');
    });
  };
}($);