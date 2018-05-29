export default {
  url: '/subordinateDataAnalysis',
  templateProvider: ['$q', function($q) {
    let deferred = $q.defer();
    require.ensure([], function() {
      let template = require('./app.html');
      deferred.resolve(template);
    });
    return deferred.promise;
  }],
  controller: 'SubordinateDataAnalysisController',
  resolve: {
    load: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
      let deferred = $q.defer();
      require.ensure([], function() {
        let module = require('./index.js');
        $ocLazyLoad.load({
          name: 'myApp.subordinateDataAnalysis'
        });
        deferred.resolve(module);
      });

      return deferred.promise;
    }]
  }
};