import lang_cn from '../../lang/cn';
import lang_en from '../../lang/en';
const language = 'Zh';

function TFilter() {
  return function(key) {
    if (language === 'En') {
      return lang_en[key];
    }
    return lang_cn[key];
  };
}
export default TFilter;