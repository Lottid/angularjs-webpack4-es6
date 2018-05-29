class SetWeightController {
  constructor($scope) {
    $scope.titleConfig = {
      title: '设置架构权重',
      smallTip: '',
      isFab: true,
      hrefs: [
        {
          href: '#/newSource',
          text: '新增来源'
        }
      ],
      changeFab: (number, flag) => {
        //number 为功能编号，flag 为点赞状态 true 赞 false 取消
        //发送点赞请求
        console.log(number, flag);
        return false;
      }
    };
  }
}
SetWeightController.$inject = ['$scope'];
export default SetWeightController;