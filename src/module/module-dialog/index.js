class dialog {
  constructor(vapourModal, $timeout,$templateCache,$http) {
    console.log(vapourModal,'vapourModal');
    return {
      /**
       * 警告框
       * @param config
       * @returns {*}
       */
      alert: (config) => {

        config.cls = 'alert';
        // let isSelfTemplate = config.isOnly;

        let _template = this.getHtml(this.template, config);
        let alert = vapourModal.modalFactory({
          template: _template
        });
        config = this.initConfig(config);
        config.__cancel = () => {
          alert.deactivate();
        };
        //自动关闭
        if (config.off === 2) {
          $timeout(function() {
            alert.deactivate();
          }, config.time);
        }
        alert.activate(config);
        return alert;
      },
      /**
       * 确认框
       * @param config
       * @param config.submit  确认操作
       * @returns {*}
       */
      confirm: (config) => {
        config.cls = 'confirm';
        config.height = (config.height || 180);

        let confirm = vapourModal.modalFactory({
          template: this.getHtml(this.template)
        });
        config = this.initConfig(config);

        config.__sumbit = () => {
          config.submit();
          confirm.deactivate();
        };
        config.__cancel = () => {
          if (typeof config.cancel == 'function') {
            config.cancel();
          }
          confirm.deactivate();
        };
        confirm.activate(config);
        return confirm;
      },
      open: (config) => {
        console.log(config,'config');
        config.cls = 'open';
        config.status = true;
        let html;
        if (config.template) {
          html = config.template;
        } else {
          $http.get(config.templateUrl, {
            cache: $templateCache
          }).then(function(response) {
            html = response.data;
          });
        }
        let open = vapourModal.modalFactory({
          template: this.getHtml(html)
        });
        config = this.initConfig(config);
        config.cancel = () => {
          config.status = true;
          open.deactivate();
        };
        open.activate(config);
        return open;
      }
    };
  }
  template = `<div class="hd"><i ng-click="__cancel()" class="close"></i></div>
              <div class="ct {{cls}}-ct">{{msg}}</div>
              <div ng-if="cls === 'confirm'" class="bt {{cls}}-bt">
                  <input type="button" class="ok" ng-click="__sumbit()" value="确定"/>
                  <input type="button" ng-if="!noCancel" class="cancel" ng-click="__cancel()"  value="取消"/>
              </div>`;
  getDocumentScroll(name) {
    var type = {
      Left: 'pageXOffset',
      Top: 'pageYOffset'
    };
    return window[type[name]];
  }
  getHtml(html, config = {}) {
    let bg = `<div class="overlay" style="width:100%;height:100%;display: block"></div>`;
    if (config.isNoBg) {
      bg = '';
    }
    return `${bg}<div class="r-divBox ui-dialog" style="display: block;height:{{height}}px;width: {{width}}px;margin-top:{{getMarginTop(height)}}px;margin-left:{{0 - width /2 }}px;">
            ${html}
        </div>`;
  }

  /**
   * 初始设置
   * */
  initConfig(config) {
    var dt = this.getDocumentScroll('Top');
    config.width = config.width || 300;
    config.height = (config.height || 100);
    config.getMarginTop = (height) => {
      height = height > 600 ? height - 100 : height;
      return 0 - height / 2 + dt;
    };
    config.time = config.time || 800;
    // 默认为 2  自动关闭 否则 为不自动关闭
    config.off = config.off || 2;
    return config;
  }

}
dialog.$inject = ['vapour.modal', '$timeout','$templateCache','$http'];

export default dialog;
// export default angular
//   .module('$dialog', [])
//   .service('$dialog', dialog)
//   .name;
