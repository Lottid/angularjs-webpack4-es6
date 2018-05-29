import ajaxModule from './module-ajax/index';
import Host from './module-Host/index';
import modal from './module-modal/index';
import dialog from './module-dialog/index';

export { 
  ajaxModule, 
  Host, 
  modal, 
  dialog 
};

export default function(ngModule) {
  ngModule.service('$ajax', ajaxModule);
  ngModule.service('$HOST', Host);
  ngModule.service('vapour.modal', modal);
  ngModule.service('$dialog', dialog);
}