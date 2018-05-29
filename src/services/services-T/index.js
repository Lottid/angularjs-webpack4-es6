class TService {
  constructor($filter) {
    this.$filter = $filter;
  }
  T(key, str) {
    if (key) {
      if (str) {
        return this.$filter('T')(key).replace('{{key}}', str);
      }
      return this.$filter('T')(key);
    }
    return key;
  }
}
TService.$inject = ['$filter'];
export default TService;
// export default angular.module('$T', [])
//   .service('$T', TService)
//   .name;