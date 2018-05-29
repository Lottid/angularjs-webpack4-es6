class hostModule {
  constructor() {
    let NODE_ENV = process.env.NODE_ENV;
    // console.log(NODE_ENV, 'NODE_ENV', process.env.NODE_ENV);
    let HOST_OBJ = null;
    switch (NODE_ENV) {
      case 'prod': //生产
        HOST_OBJ = {
          pythonAPI: 'http://plus-api.brandwisdom.cn/otb/v1',
          serverAPI: '//plus-node.brandwisdom.cn/api/v1/otbgroup',
          serverRS: 'http://plus-api.brandwisdom.cn/plus/v1', //生产  新添加
          serverStr: 'plus-node.brandwisdom.cn',
          URL: 'http://t-otb.brandwisdom.cn/fe_otb/build/views/index.html#/',
          sourceURL: '//t-www.brandwisdom.cn',
          commentURL: 'http://lxh.like.brandwisdom.cn'
        };
        break;
      case 'uat': //uat
        HOST_OBJ = {
          pythonAPI: 'http://plus-api.brandwisdom.cn:443/otb/v1', //uat
          serverAPI: '//plus-node.brandwisdom.cn/api/v1/otbgroup', //uat
          serverRS: 'http://plus-api.brandwisdom.cn/plus/v1', //生产  新添加
          serverStr: 'plus-node.brandwisdom.cn',
          URL: 'http://t-otb.brandwisdom.cn/fe_otb/build/views/index.html#/',
          sourceURL: '//t-www.brandwisdom.cn',
          commentURL: 'http://lxh.like.brandwisdom.cn'
        };
        break;
      case 'dev': //测试
        HOST_OBJ = {
          pythonAPI: 'http://192.168.19.190:8088/otb/v1',
          serverAPI: '//plus-node-dev.brandwisdom.cn/api/v1/otbgroup', //dv测试
          serverRS: 'http://192.168.19.190:8086/plus/v1', //rs新添加
          serverStr: 'plus-node-dev.brandwisdom.cn',
          URL: 'http://dv-otb.brandwisdom.cn/fe_otb/build/views/index.html#/',
          sourceURL: '//dv-www.brandwisdom.cn',
          commentURL: 'http://lxh.like.brandwisdom.cn'
        };
        break;
      case 'test': //本地
        HOST_OBJ = {
          pythonAPI: 'http://192.168.19.190:8088/otb/v1',
          serverAPI: '//plus-node-dev.brandwisdom.cn/api/v1/otbgroup', //本地
          serverRS: 'http://192.168.19.190:8086/plus/v1', //rs新添加
          serverStr: 'plus-node-dev.brandwisdom.cn',
          URL: 'http://otb.bw.cn/fe_otb/build/views/index.html#/',
          sourceURL: '//www.bw.cn',
          commentURL: 'http://lxh.like.brandwisdom.cn'
        };
        break;
    }
    return HOST_OBJ;
  }

}
export default hostModule;
// export default angular
//   .module('$HOST', [])
//   .service('$HOST', hostModule)
//   .name;
