class OperatingRecordController {
  constructor($scope,$document) {
    $scope.active = '1';
    $scope.title = '众荟酒店集团2018全面综合质检报告--下级酒店得分排名';
    $scope.data = {
      time: ['上一周期', '去年周期', '自定义']
    };
    $scope.checkData = [
      {
        name: '点评',
        check: 1
      }, {
        name: '问卷',
        check: 1
      }, {
        name: '神秘客',
        check: 1
      }, {
        name: '宾客意见',
        check: 1
      }, {
        name: '集团明访表',
        check: 1
      }
    ];
    $scope.titleScore = {
      title: '得分排名',
      smallTip: '',
      initFab: false,
      isFab: true,
      fabcount: 123,
      hrefs: [],
      changeFab: function (number, flag) {
        //number 为功能编号，flag 为点赞状态 true 赞 false 取消 发送点赞请求
        console.log(number, flag);
        return false;
      }
    };
    $scope.titleAll = {
      title: '全酒店排名',
      smallTip: '',
      initFab: false,
      isFab: true,
      fabcount: 123,
      hrefs: [],
      changeFab: (number, flag) => {
        // number 为功能编号，flag 为点赞状态 true 赞 false 取消 发送点赞请求
        console.log(number, flag);
        return false;
      }
    };
    $scope.des = '描述文字';
    $scope.avgVal = 78;
    $scope.avgOn = false;
    $scope.avgOff = true;
    $scope.avgChange = () => { //修改平均值
      $scope.avgOn = true;
      $scope.avgOff = false;
    };
    $scope.myKeyup = (e) => { //修改平均值
      var keycode = window.event
        ? e.keyCode
        : e.which;
      if (keycode === 13) {
        $scope.avgOn = false;
        $scope.avgOff = true;
      }
    };
    $document.on('click', (e) => {
      if (e.target.id !== 'avgClickNoActive' && e.target.id !== 'avgClickNoActives') {
        $scope.avgOn = false;
        $scope.avgOff = true;
      }
    });
    $scope.$watch('active', (newValue, oldValue) => {
      console.log($scope.active,newValue, oldValue);
    });
  }
}
OperatingRecordController.$inject = ['$scope','$document'];
export default OperatingRecordController;