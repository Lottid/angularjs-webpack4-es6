import {MD5} from './services-MD';
import randomNamesServices from './services-randomNames/index';

export default function(ngModule) {
  ngModule.service('$MD5', MD5);
  ngModule.service('$randomNames', randomNamesServices);
}