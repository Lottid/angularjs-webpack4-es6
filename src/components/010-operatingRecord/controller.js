class OperatingRecordController {
  constructor($scope) {
    $scope.active = '1';
    $scope.title = '条件筛选';
    $scope.data = {
      inspection: ['全部'],
      opera: ['全部']
    };
    $scope.titleConfig = {
      title: '操作记录',
      smallTip: '',
      initFab: false,
      isFab: true,
      fabcount: 123,
      hrefs: [],
      changeFab: (number, flag) => {
        //number 为功能编号，flag 为点赞状态 true 赞 false 取消 发送点赞请求
        console.log(number, flag);
        return false;
      }
    };
    $scope.des = '描述文字';
    let H = $scope.height = '20';
    $scope.mt = -parseInt(H) / 2;
    $scope.$watch('active', (newValue, oldValue) => {
      console.log(newValue, oldValue);
      console.log($scope.active);
    });
  }
}
OperatingRecordController.$inject = ['$scope'];
export default OperatingRecordController;