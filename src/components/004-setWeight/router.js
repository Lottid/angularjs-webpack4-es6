export default {
  url: '/setWeight',
  templateProvider: ['$q', function($q) {
    let deferred = $q.defer();
    require.ensure([], function() {
      let template = require('./app.html');
      deferred.resolve(template);
    });
    return deferred.promise;
  }],
  controller: 'SetWeightController',
  resolve: {
    load: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
      let deferred = $q.defer();
      require.ensure([], function() {
        let module = require('./index.js');
        $ocLazyLoad.load({
          name: 'myApp.setWeight'
        });
        deferred.resolve(module);
      });

      return deferred.promise;
    }]
  }
};