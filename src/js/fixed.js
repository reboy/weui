/* global $:true */
+function ($) {
  $.fn.fixedtop = function(npx,gpx) {
    var $this = $(this);
    var startPos = $this.offset().top;
    $.event.add(window, "scroll", function () {
      var p = $(window).scrollTop();
        // $this.css("position", (p) >= (startPos-npx) ? "fixed" : "static");
      if(npx&&gpx){
        if((p)>=gpx){
          $this.css("display","block");
        }else {
          $this.css("display","none");
        }
      }else {
        var thisH = $this.height();
        if ((p) >= (startPos - npx)) {
          $this.css("position", "fixed");
          // $this.prev().css("display", "block");
          if($this.prev().hasClass("fill")){

          }else {
            $this.before("<div class='fill' style='height: "+thisH+"px;'></div>")
          }
        } else {
          $this.css("position", "static");
          if($this.prev().hasClass("fill")){
            $this.prev().remove();
          }
        }
        $this.css("top", (p) >= (startPos - npx) ? npx + "px" : "");
      }
    });
  };
}($);