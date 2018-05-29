import navBox from './directives-nav/index';
import comment from './directives-comment/index';
import title from './directives-title';
import time from './directives-time';
import selectTree from './directives-selectTree';
import radioGroup from './directives-radioGroup';
import crumbs from './directives-crumbs';
import mask from './directives-mask';
import selectCheck from './directives-selectCheck';
import fabulous from './directives-fabulous';

export default function(ngModule) {
  ngModule.directive('comment', comment);
  ngModule.directive('crumbs', crumbs);
  ngModule.directive('setFabulous', fabulous);
  ngModule.directive('maskBox', mask);
  ngModule.directive('navbox', navBox);
  ngModule.directive('radios', radioGroup);
  ngModule.directive('selectCheck', selectCheck);
  ngModule.directive('selectTree', selectTree);
  ngModule.directive('dirTime', time);
  ngModule.directive('title', title);
}