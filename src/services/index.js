import TService from './services-T';
import {MD5} from './swevices-MD';
import bwSystem from './services-System';

export {
  TService,
  MD5
};
export default function(ngModule) {
  ngModule.service('$T', TService);
  ngModule.service('$MD5', MD5);
  ngModule.service('$bwSystem', bwSystem);
}