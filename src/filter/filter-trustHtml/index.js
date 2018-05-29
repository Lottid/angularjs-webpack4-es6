trustHtml.$inject = ['$sce'];

function trustHtml($sce) {
  return function (val) {
    return $sce.trustAsHtml(val);
  };
}
trustHtml.$inject = ['$sce'];
export default trustHtml;