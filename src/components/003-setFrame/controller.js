class SetFrameController {
  constructor($scope) {
    $scope.titleConfig = {
      title: '选择考核架构',
      smallTip: '',
      isFab: true,
      hrefs: [
        {
          href: '#/newFrame',
          text: '新建考核架构'
        }
      ],
      changeFab: (number, flag) => {
        //number 为功能编号，flag 为点赞状态 true 赞 false 取消 发送点赞请求
        console.log(number, flag);
        return false;
      }
    };
  }
}
SetFrameController.$inject = ['$scope'];
export default SetFrameController;