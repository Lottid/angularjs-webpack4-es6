class StandListController {
  constructor($scope) {
    console.log(this, 'this');
    $scope.titleConfig = {
      title: '考核方案1234',
      smallTip: '',
      isFab: true,
      hrefs: [{
        href: '#/standRange',
        text: '新建考核方案'
      }, {
        href: '#/IntegratedDataAnalysis',
        text: '查看结果'
      }
      ]
    };
    $scope.des = '描述文字';
    let H = $scope.height = '20';
    $scope.mt = -parseInt(H) / 2;
  }
}

export default StandListController;