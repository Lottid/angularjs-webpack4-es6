class bwSystemService {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
    return this.init();
  }
  init() {
    return {
      /**
       * 登录检测
       * */
      isLogin: function() {
        return $.ajax({
          url: '/otbrival/check-login',
          type: 'post',
          async: false,
          dataType: 'json'
        }).success((res) => {
          if (res.status === '200') {

          }
          if (res.status === '111') {
            window.location.href = res.result.Url;
          }
          return res;
        }).error((e) => {
          return e;
        });
      },
      /**
       * 获取公共头
       * */
      code_load_header: function() {
        $.ajax({
          url: '/demand/get-header',
          type: 'post',
          async: false
        }).success((res) => {
          if (res.status.code === '200') {
            let _data = res.data;
            this.$rootScope.HotelId = _data['HotelID'];
            this.$rootScope.HotelName = _data['HotelName'];
            this.$rootScope.AccountID = _data['AccountID'];
            this.$rootScope.AccountName = _data['Account'];
            this.$rootScope.LoginName = _data['LoginName'];
            this.$rootScope.GroupType = _data['GroupType'] === 1 ? false : true; //10007155;
            $('#innerFetch').html(_data.html);
            $('#innerFetch').html(`<script type="text/javascript">
            $(function () {
              //首页账户设置展开隐藏 
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
              $('body').click(function (el) { var $elTar = el.target; if ($elTar.className != 'index-icon set accset_link accsetShow' && $elTar.className != 'accset_posul') { $('.accset_posul').hide(); if ($('.accset_link').hasClass('accsetShow')) { $('.accset_link').removeClass('accsetShow'); } } });
              returnTop();
            });
          
            function returnTop() {
              $('.scrollTop').hide();
              $(window).scroll(function () { if ($(window).scrollTop() > 50) { $('.scrollTop').fadeIn(500); } else { $('.scrollTop').fadeOut(500); } }); //当点击返回顶部后，回到页面顶部位置
              $('.scrollTop').click(function () { $('body,html').animate({ scrollTop: 0 }, 100); return false; });
            };
            getMessage();
          
            function getMessage() {
              var _url = "http://t-hotel.brandwisdom.cn";
              $.getJSON(_url + "/PushMessage?callback=?", function (data) {
                if (data != null && data.code == 1) {
                  if ($('#aloud')) { $('#aloud').remove(); } $("#sys_msg_aload").append(data._notice_html);
                  $('#sys_msg_aload').fadeIn();
                  $("#sys_msg_aload").css("display", "block");
                }
              });
              //
              setTimeout('getMessage()', 1000 * 60 * 10);
            };
            $(document).on("click", ".closeAlouder", function () {
              $('.aloud').fadeOut();
              getMessage();
            });
            $(function () {
              $('.Group_btn').click(function () {
                $(this).hide();
                $('.GroupCompany_box').fadeToggle("slow");
                $('.GroupCompany_box_iframe').attr("src", "http://t-hotel.brandwisdom.cn/Groupselect/Group");
              });
              $('.close_grcombtn').click(function () {
                $('.GroupCompany_box').hide('slow');
                $('.Group_btn').show('slow');
              });
            });
            $(".downLoadBox").mouseover(function (e) { $(".downIco").show(); }).mouseout(function () { $(".downIco").hide(); });
          </script>
          <div class="Group_btn">集
            <br>团
            <br>管
            <br>理</div>
          <div class="GroupCompany_box " style="height: 500px;width: 600px;">
            <a href="#" class="close_grcombtn">x</a>
            <h1>集团导航</h1>
            <iframe allowtransparency="true" frameborder="0" width="100%" height="100%" class="GroupCompany_box_iframe" src=''></iframe>
          </div>`);
          } else if (res.status === '111') {
            window.location.href = res.result.Url;
          }
        }).error((_data) => {
          console.log(_data);
        });
      }
    };
  }
}
bwSystemService.$inject = ['$rootScope'];
export default bwSystemService;