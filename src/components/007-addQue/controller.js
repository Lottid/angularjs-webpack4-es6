class AddQueController {
  constructor($scope) {
    $scope.titleConfig = {
      title: '新增问卷数据',
      smallTip: '',
      isFab: true,
      hrefs: [],
      changeFab: (number, flag) => {
        //number 为功能编号，flag 为点赞状态 true 赞 false 取消 发送点赞请求
        console.log(number, flag);
        return false;
      }
    };
    $scope.active = '1';
    $scope.radioData = [
      {
        'key': '1',
        'value': '全选'
      }, {
        'key': '2',
        'value': '反选'
      }, {
        'key': '3',
        'value': '取消选择'
      }
    ];

    $scope.change = (active) => {
      $scope.active = active.key;
    };
  }
}
AddQueController.$inject = ['$scope'];
export default AddQueController;