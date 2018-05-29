import './index.less';
import template from './index.html';
import $ from '$';

/**
 * 左侧导航nav
 */
navBox.$inject = ['$rootScope', '$location', '$T'];
function navBox($rootScope, $location, $T) {
  return {
    template: template,
    restrict: 'ECA',
    replace: true,
    scope: {
      suburl: '=',
      rooturl: '=',
      msgContent: '='
    },
    link: function($scope) {
      $scope
        .$watch('suburl', function() {
          $scope.navUrl = $scope.suburl;
          switch ($scope.rooturl) {
            case '/standList':
              $scope.navUrl = 'standList';
              break;
          }
        });
      $scope.msgContent = '<i>1234567</i>';
      $scope.navDirectory = [
        {
          id: 1,
          url: '/standList',
          setUrl: 'standList',
          name: $T.T('100199'),
          isSubset: false,
          isEnable: true,
          cid: '10879'
        }, {
          id: 2,
          url: '/operatingRecord',
          setUrl: 'operatingRecord',
          name: $T.T('100213'),
          isSubset: true,
          isEnable: true,
          cid: '10881',
          items: [
            {
              url: '/operatingRecord',
              setUrl: 'operatingRecord',
              name: $T.T('100206'),
              isEnable: true,
              cid: '10881'
            }, {
              url: '/documentManagement',
              setUrl: 'documentManagement',
              name: $T.T('100207'),
              isEnable: true,
              cid: '10882'
            }
          ]
        }, {
          id: 3,
          url: '/IntegratedDataAnalysis',
          setUrl: 'IntegratedDataAnalysis',
          name: $T.T('100214'),
          isSubset: true,
          isEnable: true,
          cid: '10883',
          items: [
            {
              url: '/IntegratedDataAnalysis',
              setUrl: 'IntegratedDataAnalysis',
              name: $T.T('100208'),
              isEnable: true,
              cid: '10883'
            }, {
              url: '/subordinateDataAnalysis',
              setUrl: 'subordinateDataAnalysis',
              name: $T.T('100209'),
              isEnable: true,
              cid: '10884'
            }, {
              url: '/singleStore',
              setUrl: 'singleStore',
              name: $T.T('100210'),
              isEnable: true,
              cid: '10885'
            }
          ]
        }
      ];
      //切换报表左侧的菜单展开关闭
      $scope.changeSub = ($event, item) => {
        console.log(item, 'item');
        $scope.navUrl = item.setUrl;
        $rootScope.locationUrl = $scope.rooturl = item.url
          ? item.url
          : $scope.rooturl;
        document.title = item.name;
        $location.url(item.url);
      // setTimeout(function(){     _getQuest($event.target, null , item.cid); },10);
      };


      $('#innerFetch').html(`
        <script type="text/javascript"> 
            $(function () { //首页账户设置展开隐藏 
                $('.accset_link').click(function () {
                    if ($('.accset_posul').is(":visible")) {
                        $('.accset_posul').hide();
                        $(this).removeClass('accsetShow');
                    } else {
                        $('.accset_posul').show();
                        $(this).addClass('accsetShow');
                    }
                });
                $('.accset_posul li a').click(function () {
                    $(this).parents('.accset_posul').hide();
                    $('.accset_link').removeClass('accsetShow');
                });
                $('body').click(function (el) {
                    var $elTar = el.target;
                    if ($elTar.className != 'index-icon set accset_link accsetShow' && $elTar.className != 'accset_posul') {
                        $('.accset_posul').hide();
                        if ($('.accset_link').hasClass('accsetShow')) {
                            $('.accset_link').removeClass('accsetShow');
                        }
                    }
                });
                returnTop();
            });
             
            function returnTop() {
                $('.scrollTop').hide();
                $(window).scroll(function () {
                    if ($(window).scrollTop() > 50) {
                        $('.scrollTop').fadeIn(500);
                    } else {
                        $('.scrollTop').fadeOut(500);
                    }
                }); //当点击返回顶部后，回到页面顶部位置
                $('.scrollTop').click(function () {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 100);
                    return false;
                });
            };
            getMessage();
             
            function getMessage() {
                var _url = "http://hotel.bw.cn";
                $.getJSON(_url + "/PushMessage?callback=?", function (data) {
                    if (data != null && data.code == 1) {
                        if ($('#aloud')) {
                            $('#aloud').remove();
                        }
                        $("#sys_msg_aload").append(data._notice_html);
                        $('#sys_msg_aload').fadeIn();
                        $("#sys_msg_aload").css("display", "block");
                    }
                });
                //setTimeout('getMessage()',1000*60*10); 
            };
            $(document).on("click", ".closeAlouder", function () {
                $('.aloud').fadeOut();
                getMessage();
            });
            $(function () {
                $('.Group_btn').click(function () {
                    $(this).hide();
                    $('.GroupCompany_box').fadeToggle("slow");
                    $('.GroupCompany_box_iframe').attr("src", "http://hotel.bw.cn/Groupselect/Group");
                });
                $('.close_grcombtn').click(function () {
                    $('.GroupCompany_box').hide('slow');
                    $('.Group_btn').show('slow');
                });
            });
            $(".downLoadBox").mouseover(function (e) {
                $(".downIco").show();
            }).mouseout(function () {
                $(".downIco").hide();
            });
        </script>
        <div class="Group_btn">集<br>团<br>管<br>理</div>
        <div class="GroupCompany_box " style="height: 500px;width: 600px;"><a href="#" class="close_grcombtn">x</a>
            <h1>集团导航</h1>
            <iframe allowtransparency="true" frameborder="0" width="100%" height="100%" class="GroupCompany_box_iframe" src=''></iframe>
        </div>"
        `);

    }
  };
}
export default navBox;
// export default angular
//   .module('navbox', [])
//   .directive('navbox', navBox)
//   .name;