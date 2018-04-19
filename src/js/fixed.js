/* global $:true */
+function ($) {
  $.fn.fixedtop = function(npx,hei) {
    var $this = $(this);
    var startPos = $this.offset().top;
    $.event.add(window, "scroll", function () {
      var p = $(window).scrollTop();
      if(npx&&hei){
        $this.css("position", (p) >= (startPos-npx) ? "fixed" : "static");
        $this.css("top",(p) >= (startPos-npx)? hei+"px" :"");
      }else {
      $this.css("position", (p) >= startPos ? "fixed" : "static");
        $this.css('top', ((p) >= startPos) ? '0px' : '');
      }
    });
  };
}($);