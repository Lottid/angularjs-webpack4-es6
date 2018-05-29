window._sessionStorage = {
  'isExist': function() {
    return !!window.sessionStorage;
  },
  'setItem': function(name, data) {
    if (_sessionStorage.isExist()) {
      window.sessionStorage.removeItem(name);
      if (JSON.stringify)
        window.sessionStorage.setItem(name, JSON.stringify(data));
      else
        console.log('JSON.stringify is none');
    }
  },
  'getItem': function(name) {
    if (_sessionStorage.isExist()) {
      if (JSON.parse)
        return JSON.parse(window.sessionStorage.getItem(name));
      else
        console.log('JSON.parse is none');
    }
  },
  'remove': function(name) {
    window.sessionStorage.removeItem(name);
  }
};
