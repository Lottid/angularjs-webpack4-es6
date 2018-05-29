class SetStandrangeController {
  constructor($scope) {
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
    /*
    * title:头部标题文字
    * smallTip  头部小子描述
    * initFab   初始化是否点赞  true false
    * isFab     是否显示点赞
    * hrefs     头部右侧超链接
    * changeFab 点赞callBack
    * */
    $scope.titleConfig = {
      title: '设置考核',
      smallTip: '',
      isFab: true,
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
    $scope.selChange = (sel) => {
      $scope.active = sel.key;
    };
  }
}
SetStandrangeController.$inject = ['$scope'];
export default SetStandrangeController;