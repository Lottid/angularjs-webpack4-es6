import $ from '$';
// import Host from '../module-Host/index'; console.log(Host,'Host')

class ajaxModule {
  constructor($rootScope, $http, $q, $log, $HOST) {
    this.$rootScope = $rootScope;
    this.$http = $http;
    this.$q = $q;
    this.$log = $log;
    this.$HOST = $HOST;
  }
  ajax(config) {
    config.api = config.api || this.$HOST.serverAPI;
    let deferred = this.$q.defer();

    config.method = (config.method || config.type || 'get').toUpperCase();
    if (config.api.indexOf(this.$HOST.serverStr) !== -1) {
      config.dataType = 'jsonp';
      config.jsonp = 'callback';
    }

    !config.data && (config.data = {});
    config.data.st = new Date().getTime();

    config.url = config.api + config.url;
    if (config.method !== 'POST') {
      config.params = config.data;
    }
    $.ajax(config).success((res) => {
      let status = res.status;
      if (res.result) {
        deferred.resolve(res);
      } else if (status.code === 200 || status.code === '200') {
        //$log.info(JSON.stringify(res.data));
        deferred.resolve(res.data);
      } else if (status.code <= 100) {
        this.$log.error('[AJAX]', config.url, status.code, status.msg);
      } else if (status.code >= 500) {
        this.$log.warn(JSON.stringify(config), res.status.msg);
        deferred.resolve(res.data);
      } else if (status.code === '111') {
        window.location.href = res.data.Url;
      } else {
        this.$log.warn(JSON.stringify(config), res.status.msg);
        deferred.reject(res.status.msg);
      }
    })
      .error((error) => {
        deferred.reject('网络错误，请稍后重试！', error);
      });
    return deferred.promise;
  }
}
ajaxModule.$inject = ['$rootScope', '$http', '$q', '$log', '$HOST'];

export default ajaxModule;
// export default angular
//   .module('$ajax', [])
//   .service('$ajax', ajaxModule)
//   .name;
