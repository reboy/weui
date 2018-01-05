/* global $:true */
+function($) {
  "use strict";


  var clientHeight = $(window).height(); //窗口高度
  var letterHeight = clientHeight * 0.8 / 22; //单个字母高度
  var letterContainerHeight = clientHeight * 0.1; // 字母列表高度
  var $jumpLi = $('.weui-abclist').children('.jump-li');
  var $jumpTag = $('.weui-abclist');
  var $jumpTip = $('.weui-abclist-tip');
  var jumplis = document.getElementsByClassName('jump-li');

  $.each(jumplis, function (index, item) {
    item.addEventListener('touchstart', function (e) {
      e.preventDefault();
      var letter = calLetter(e.touches[0].clientY); //当前触摸点的纵向坐标
      if (letter) {
        $jumpTip.css('display', 'block');
        $jumpTip.find('span').text(letter);
        $('body').scrollTop($('#jump-' + letter).offset().top);
      }
      $jumpTag.addClass('weui-abclist-active');
    });

    item.addEventListener('touchmove', function (e) {
      e.preventDefault();
      var letter = calLetter(e.touches[0].clientY);
      if (letter) {
        $jumpTip.css('display', 'block');
        $jumpTip.find('span').text(letter);
        $('body').scrollTop($('#jump-' + letter).offset().top);
      }
    });
    item.addEventListener('touchend', function () {
      $jumpTip.css('display', 'none');
      $jumpTag.removeClass('weui-abclist-active');
    });
  });


  function calLetter(clientY) {
    var index = Math.floor((clientY - letterContainerHeight) / letterHeight);
    var currentLetterDom = $jumpLi[index];
    return currentLetterDom ? currentLetterDom.innerText : null;
  }

}($);