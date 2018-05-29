/**
 * Created by Administrator on 2016/11/17.
 */

var PLUMBEROBJ = {
  init: function() {
    PLUMBEROBJ.getConfig();
  },
  getConfig: function() {
    var _reg = /^(([a-zA-Z0-9]+)(\-|\.))([a-zA-Z0-9]+)\./i;
    var _host = window.location.host;
    var _str = '';
    var arr = _reg.exec(_host);
    if (arr) {
      switch (arr[1]) {
        case 't-':
          _str = PLUMBEROBJ.prod;
          break;
        case 'dv-':
          _str = PLUMBEROBJ.test;
          break;
        default:
          _str = PLUMBEROBJ.dev;
          break;
      }
    }
    window.PLUMBERCONFIG = _str;
  },
  prod: {
    hostPlugin: 'http://resource.brandwisdom.cn/bw/plumber/production/',
    headerServer: 'http://t-hotel.brandwisdom.cn',
    bwServer: 'http://t-www.brandwisdom.cn',
    bwLoginURL: 'http://www.brandwisdom.cn/index.php?c=content&a=lo',
    bwLogoutURL: 'http://t-hotel.brandwisdom.cn/Logout'
  },
  test: {
    hostPlugin: 'http://resource.brandwisdom.cn/bw/plumber/develop/',
    headerServer: 'http://dv-hotel.brandwisdom.cn',
    bwServer: 'http://dv-www.brandwisdom.cn',
    bwLoginURL: 'http://dv-officiel.brandwisdom.cn/index.php?c=content&a=lo',
    bwLogoutURL: 'http://dv-hotel.brandwisdom.cn/Logout'
  },
  dev: {
    hostPlugin: 'http://resource.brandwisdom.cn/bw/plumber/develop/',
    headerServer: 'http://hotel.bw.cn',
    bwServer: 'http://www.bw.cn',
    bwLoginURL: 'http://office.bw.cn/index.php?c=content&a=lo',
    bwLogoutURL: 'http://hotel.bw.cn/Logout'
  }
};
PLUMBEROBJ.init();
