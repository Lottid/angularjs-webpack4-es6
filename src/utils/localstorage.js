window._localStorage = {
  'isExist': function() {
    return !!window.localStorage;
  },
  'setItem': function(name, data) {
    if (_localStorage.isExist()) {
      window.localStorage.removeItem(name);
      if (JSON.stringify)
        window.localStorage.setItem(name, JSON.stringify(data));
      else
        console.log('JSON.stringify is none');
    }
  },
  'getItem': function(name) {
    if (_localStorage.isExist()) {
      if (JSON.parse)
        return JSON.parse(window.localStorage.getItem(name));
      else
        console.log('JSON.parse is none');
    }
  },
  'remove': function(name) {
    window.localStorage.removeItem(name);
  }
};
