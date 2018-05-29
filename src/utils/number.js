class $Number {
  isDiff(numA, numB) {
    let reg = /^[0-9]+$/i;
    if (reg.test(numA) && reg.test(numB) && numB !== 0) {
      return true;
    }
    return false;
  }
  is(num) {
    if (/^[0-9]+$/i.test(num)) {
      return true;
    }
    return false;
  }
  mul(arg1, arg2) {
    var m = 0;
    var s1 = (arg1 + '').toString();
    var s2 = (arg2 + '').toString();
    try {
      m += s1.split('.')[1].length;
    } catch (e) {}
    try {
      m += s2.split('.')[1].length;
    } catch (e) {}
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
  }
  thousand(num) {
    if (/^[0-9]+$/i.test(num)) {
      if (num > 999) {

      }
    }
    return num;
  }
}
//number方法
window.$Number = new $Number();