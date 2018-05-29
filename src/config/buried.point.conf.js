var buriedPoint = {
  init: function() {
    buriedPoint.getConfig();
    console.log('---');
    if (window.cookie.get('uinf')) {
      let uinf = window.cookie.get('uinf').split('%7C');
      /*eslint-disable */
      M2.setUserInfo({
        uid: uinf[0],
        hid: uinf[1]
      });
      /*eslint-enable */
    }
  },
  getConfig: function() {
    var M2_PNAME = '项目ID';
    var M2_URL = 'http://analysis.brandwisdom.cn/m.gif';
    window['M2_PNAME'] = M2_PNAME;
    window['M2_URL'] = M2_URL;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'http://analysis.brandwisdom.cn/monit.js?t=' + new Date().getTime();
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
};
buriedPoint.init();
