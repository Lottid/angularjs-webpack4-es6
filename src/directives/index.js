import greetingDirectives from './directives-greeting/index';

export default function(ngModule) {  
  ngModule.directive('greeting', greetingDirectives);
}