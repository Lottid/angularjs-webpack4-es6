/* $(".test1").wordLimit(); 自动获取css宽度进行处理，如果css中未对.test1给定宽度，则不起作用
	$(".test2").wordLimit(24); 截取字符数，值为大于0的整数，这里表示class为test2的标签内字符数最多24个
*/

(function($) {
  $.fn.wordLimit = function(num) {
    this.each(function() {
      if (!num) {
        var copyThis = $(this.cloneNode(true)).hide().css({
          'position': 'absolute',
          'width': 'auto',
          'overflow': 'visible'
        });
        $(this).after(copyThis);
        if (copyThis.width() > $(this).width()) {
          if ($(this).find('i').length) {
            $(this).find('span').text($(this).find('span').text().substring(0, $(this).find('span').text().length - 4));
            $(this).find('span').html($(this).find('span').html() + '...');
          } else {
            $(this).text($(this).text().substring(0, $(this).text().length - 4));
            $(this).html($(this).html() + '...');
          }
          copyThis.remove();
          $(this).wordLimit();
        } else {
          copyThis.remove(); //清除复制
          return;
        }
      } else {
        var maxwidth = num;
        if ($(this).text().length > maxwidth) {
          $(this).find('span').text($(this).find('span').text().substring(0, maxwidth));
          if ($(this).find('i').length) {
            $(this).find('span').html($(this).find('span').html() + '...');
          } else {
            $(this).html($(this).html() + '...');
          }
        }
      }
    });
  };
})(jQuery);