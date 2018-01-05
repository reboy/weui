/* global $:true */
+function($) {
  "use strict";
  $(document).on("click",".side_ctrl a", function (e) {
    if($('.carside').width() <= 0){
      $('.carside').animate({width: '230px'}, 150);
      $('.carsideshadow').fadeIn(200);
    }
  });
  $(document).on("click",".carsideshadow", function (e) {
    if($('.carside').width() > 50){
      $('.carside').animate({width: '0px'}, 150);
      $('.carsideshadow').fadeOut(200);
    }
  });
}($);