class singleStoreController {
  constructor($scope,$document ) {
    $scope.active = '1';
    $scope.title = '众荟酒店集团2018全面综合质检报告--旗下酒店得分排名';
    $scope.data = {
      time: [
        '上一周期', '去年周期', '自定义'
      ],
      table: [
        {
          name: '长春众荟酒店',
          href: '#/singleStoreDataAnalysis',
          score: '95.33',
          com: '86.50',
          rank: '1'
        }, {
          name: '南京众荟酒店',
          href: '',
          score: '92.40',
          com: '94.00',
          rank: '2'
        }, {
          name: '湖南张家界众荟酒店',
          href: '',
          score: '88.5',
          com: '81.00',
          rank: '3'
        }, {
          name: '上海外滩众荟酒店酒店',
          href: '',
          score: '83.00',
          com: '84.51',
          rank: '4'
        }, {
          name: '南京佳盛众荟酒店',
          href: '',
          score: '81.00',
          com: '74.00',
          rank: '5'
        }, {
          name: '苏州众荟酒店',
          href: '',
          score: '74.00',
          com: '68.00',
          rank: '6'
        }, {
          name: '丹阳都市众荟酒店',
          href: '',
          score: '72.00',
          com: '73.40',
          rank: '7'
        }, {
          name: '临湘众荟酒店',
          href: '',
          score: '66.00',
          com: '73.00',
          rank: '8'
        }, {
          name: '榆林众荟酒店',
          href: '',
          score: '62.7',
          com: '56.00',
          rank: '9'
        }, {
          name: '丽水华侨众荟酒店',
          href: '',
          score: '61.00',
          com: '56.00',
          rank: '10'
        }
      ]
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
      changeFab: (number, flag)=> {
        //number 为功能编号，flag 为点赞状态 true 赞 false 取消 发送点赞请求
        console.log(number, flag);
        return false;
      }
    };
    $scope.des = '描述文字';
    $scope.avgVal = 78;
    $scope.avgOn = false;
    $scope.avgOff = true;
    $scope.avgChange =  () =>{ //修改平均值
      $scope.avgOn = true;
      $scope.avgOff = false;
    };
    $scope.myKeyup =  (e)=> { //修改平均值
      var keycode = window.event
        ? e.keyCode
        : e.which;
      if (keycode === 13) {
        $scope.avgOn = false;
        $scope.avgOff = true;
      }
    };
    $document.on('click',  (e) =>{
      if (e.target.id !== 'avgClickNoActive' && e.target.id !== 'avgClickNoActives') {
        $scope.avgOn = false;
        $scope.avgOff = true;
      }
    });
    $scope.$watch('active',  (newValue, oldValue)=> {
      console.log(newValue, oldValue);
      console.log($scope.active);
    });
  }
}
singleStoreController.$inject = ['$scope','$document'];
export default singleStoreController;