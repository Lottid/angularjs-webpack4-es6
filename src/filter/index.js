import trustHtml from './filter-trustHtml/index';

export {
  trustHtml
};

export default function(ngModule) {
  ngModule.filter('trustHtml', trustHtml);
}