import TFilter from './filter-T/index';
import trustHtml from './filter-trustHtml/index';

export {
  TFilter,
  trustHtml
};

export default function(ngModule) {
  ngModule.filter('T', TFilter);
  ngModule.filter('trustHtml', trustHtml);
}