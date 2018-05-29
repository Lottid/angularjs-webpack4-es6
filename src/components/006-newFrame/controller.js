class NewFrameController {
  constructor($scope) {
    $scope.titleConfig = {
      title: '考核架构',
      smallTip: '',
      isFab: true,
      hrefs: [],
      changeFab: (number, flag) => {
        //number 为功能编号，flag 为点赞状态 true 赞 false 取消 发送点赞请求
        console.log(number, flag);
        return false;
      }
    };
  }
}
NewFrameController.$inject = ['$scope'];
export default NewFrameController;