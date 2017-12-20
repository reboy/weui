/* global $:true */
+function ($) {
  "use strict";

  var LIST_ON = "open_on";

  var showList = function(a) {
    var $a = $(a);
    if($a.hasClass(LIST_ON)) return;
    //var listid = $a.attr("id");
    //if(!/^#/.test(listid)) return;
    $a.parent().parent().find("."+LIST_ON).removeClass(LIST_ON);

    $a.parent().parent().find(".icon-shang").removeClass("icon-shang").addClass("icon-xia");

    $a.addClass(LIST_ON);
    $a.find('i').removeClass("icon-xia");
    $a.find('i').addClass("icon-shang");

    $a.parent().parent().find('p').css("display","none");
    $a.parent().find('p').css("display","block");
  };

  $.showList = showList;

  $(document).on("click", ".openlist li div", function(e) {
    var $a = $(e.currentTarget);
    //var listid = $a.attr("id");
    if($a.hasClass(LIST_ON)){
      $a.parent().find('p').css("display","none");
      $a.removeClass(LIST_ON);
      $a.find('i').removeClass("icon-shang");
      $a.find('i').addClass("icon-xia");
      return;
    }
    //if(!/^#/.test(listid)) return;
    e.preventDefault();
    showList($a);
  });

}($);
