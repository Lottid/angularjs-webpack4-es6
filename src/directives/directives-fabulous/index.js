import './index.less';
import template from './index.html';

function setFabulous($ajax, $HOST) {
  return {
    template: template,
    replace: true,
    scope: {
      fabulous: '=',
      number: '@',
      version: '@',
      page: '@',
      block: '@'
    },
    link: function($scope) {
      let uinf = (window.cookie.get('uinf') || '6%7C101109').split('%7C');
      let pushObj = {
        htl_cd: uinf[1],
        user_id: uinf[0],
        block: $scope.block,
        version: $scope.version,
        pages: $scope.page,
        number: $scope.number
      };
      $ajax
        .ajax({
          url: '/api/v1/like/',
          type: 'get',
          data: pushObj,
          dataType: 'jsonp',
          jsonp: 'callback',
          api: $HOST.commentURL
        })
        .then((res) => {
          if (res.length) {
            let _data = res[0][$scope.number];
            $scope.fabInit = _data.state === 1
              ? true
              : false;
            $scope.fabcount = _data.number;
          }
        });
      $scope.setFabulous = function() {
        pushObj['is_like'] = $scope.fabInit
          ? 2
          : 1;
        $ajax
          .ajax({
            url: '/api/v1/like/insert',
            type: 'get',
            data: pushObj,
            dataType: 'jsonp',
            jsonp: 'callback',
            api: $HOST.commentURL
          })
          .then((res) => {
            console.log(res);
            if (!$scope.fabInit) {
              $scope.fabcount += 1;
            } else {
              $scope.fabcount -= 1;
            }
            $scope.fabInit = !$scope.fabInit;
          });
      };
    }
  };

}

export default setFabulous;
// export default angular
//   .module('setFabulous', [])
//   .directive('setFabulous', setFabulous)
//   .name;