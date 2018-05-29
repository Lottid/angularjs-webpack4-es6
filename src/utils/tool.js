/* eslint-disable */
let Util = window.Util = {
/* eslint-enable */
  getRequest: function(name) {
    let url = location.href;
    let paraString = url.substring(url.indexOf('?') + 1, url.length).split('&');
    let paraObj = {};
    for (let i = 0; i < paraString.length; i++) {
      let j = paraString[i];
      paraObj[j.substring(0, j.indexOf('=')).toLowerCase()] = j.substring(j.indexOf('=') + 1, j.length);
    }
    var returnValue = paraObj[name.toLowerCase()];
    if (typeof (returnValue) == 'undefined') {
      return '';
    } else {
      return returnValue.replace(/#(\w+)$/, '');
    }
  },
  changeLeftHeight: function() {
    setTimeout(function() {
      $('.bw_nav_box').height($('.container').height() + 56);
    }, 0);
  }
};

Array.prototype.indexOf = function(el) {
  for (let i = 0, n = this.length; i < n; i++) {
    if (this[i] === el) {
      return i;
    }
  }
  return -1;
};

