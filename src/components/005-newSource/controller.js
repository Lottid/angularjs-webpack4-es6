class NewSourceController {
  constructor($scope) {
    $scope.titleConfig = {
      title: '设置数据类型',
      smallTip: '',
      isFab: true,
      hrefs: [],
      changeFab: function (number, flag) {
        //number 为功能编号，flag 为点赞状态 true 赞 false 取消 发送点赞请求
        console.log(number, flag);
        return false;
      }
    };

    $scope.typeSel = $scope.sel = $scope.active = '1';
    $scope.typeSelChange = (active)=> {
      $scope.typeSel = active.key;
    };
    $scope.allSelChange = (active)=> {
      $scope.sel = active.key;
    };
    $scope.allSelData = [
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
    $scope.radioData = [
      {
        'key': '1',
        'value': '点评（宾客在线点评）'
      }, {
        'key': '2',
        'value': '宾客满意度调查（已购买的问卷模块）'
      }, {
        'key': '3',
        'value': '结构化数据（题目及打分，例如神秘客，内部质检）'
      }, {
        'key': '4',
        'value': '非结构化数据（文本数据，例如投诉）'
      }
    ];
  }
}
NewSourceController.$inject =['$scope'];
export default NewSourceController;