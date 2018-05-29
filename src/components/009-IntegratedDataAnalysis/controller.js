class IntegratedDataAnalysisController {
  constructor($scope) {
    $scope.active = '1';
    $scope.title = '众荟酒店集团2018全面综合质检报告--综合考察概要';
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
    $scope.titleConfig = {
      title: '数据对比',
      smallTip: '',
      initFab: false,
      isFab: true,
      fabcount: 123,
      hrefs: [],
      changeFab: (number, flag) =>{
        //number 为功能编号，flag 为点赞状态 true 赞 false 取消 发送点赞请求
        console.log(number, flag);
        return false;
      }
    };
    $scope.titleIntm = {
      title: '综合得分',
      smallTip: '',
      initFab: false,
      isFab: true,
      fabcount: 123,
      hrefs: [],
      changeFab: (number, flag) =>{
        //number 为功能编号，flag 为点赞状态 true 赞 false 取消 发送点赞请求
        console.log(number, flag);
        return false;
      }
    };
    $scope.titleSub = {
      title: '下级排名TOP 3',
      smallTip: '',
      initFab: false,
      isFab: true,
      fabcount: 123,
      hrefs: [
        {
          href: 'index.html#/subordinateDataAnalysis',
          text: '下级排名详情'
        }
      ],
      changeFab: (number, flag) =>{
        //number 为功能编号，flag 为点赞状态 true 赞 false 取消 发送点赞请求
        console.log(number, flag);
        return false;
      }
    };
    $scope.titleSin = {
      title: '单店排名TOP3',
      smallTip: '',
      initFab: false,
      isFab: true,
      fabcount: 123,
      hrefs: [
        {
          href: 'index.html#/singleStore',
          text: '单店排名详情'
        }
      ],
      changeFab: (number, flag) =>{
        //number 为功能编号，flag 为点赞状态 true 赞 false 取消 发送点赞请求
        console.log(number, flag);
        return false;
      }
    };
    $scope.powerCss = 'powerImg';
    $scope.powerOn = false;
    $scope.powerOff = true;
    $scope.power = ()=> { //权重显示
      if ($scope.powerCss === 'powerImgs') {
        $scope.powerCss = 'powerImg';
        $scope.powerOn = false;
        $scope.powerOff = true;
      } else {
        $scope.powerCss = 'powerImgs';
        $scope.powerOn = true;
        $scope.powerOff = false;

      }
    };
    $scope.des = '描述文字';
    let H = $scope.height = '20';
    $scope.mt = -parseInt(H) / 2;
    $scope.$watch('active', (newValue, oldValue)=> {
      console.log(newValue, oldValue);
      console.log($scope.active);
    });
  }
}
IntegratedDataAnalysisController.$inject = ['$scope'];
export default IntegratedDataAnalysisController;