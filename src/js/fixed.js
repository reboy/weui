/* global $:true */
+function ($) {
  $.fn.fixedtop = function(npx) {
    var $this = $(this);
    var startPos = $this.offset().top;
    $.event.add(window, "scroll", function () {
      var p = $(window).scrollTop();
      if(npx){
        $this.css("position", (p) > (startPos-npx) ? "fixed" : "static");
        $this.css("top",npx);
        $this.css('top', ((p) > startPos-npx) ? npx : '');
      }else {
      $this.css("position", (p) > startPos ? "fixed" : "static");
        $this.css('top', ((p) > startPos) ? '0px' : '');
      }
    });
  };
}($);