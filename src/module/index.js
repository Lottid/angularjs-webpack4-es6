import userModule from './module-user/index';

export default function(ngModule) {  
  ngModule.service('$user', userModule);
}