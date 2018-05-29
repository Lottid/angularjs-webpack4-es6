window.helper = {
  /**
     * 保留几位小数
     * @param str 字符或者数字
     * @param number 数字
     * */
  toFixed(str, number = 2) {
    let num = Number(str);
    if (!isNaN(num)) {
      let numStr = num.toFixed(number);
      if (numStr.indexOf('.00') > -1) {
        numStr = numStr.split('.')[0];
      }
      return parseFloat(numStr);
    }
    return str;
  },
  /**
     * 将‘--’转为null
     * @param arrary 数组
     * @returns {Number}
     */
  Formatnull: function (arr) {
    let newNum = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--') {
        newNum.push(null);
      } else {
        newNum.push(arr[i]);
      }
    }
    return newNum;
  },
  /**
     * 两个数相除函数
     * @param num1 {Number} 分子
     * @param num2 {Number} 分母
     * @returns {Number}
     */
  divides: function (num1, num2, str) {
    if (num1 === '' || num2 === '') {
      return null;
    }
    if (num1 === null || num2 === null) {
      return null;
    }
    if (num2 === 0) {
      return 0;
    }
    // 非数字类型处理
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
      return null;
    }
    if (str === '%') {
      return this.rideNumber(this.exceptNumber(num1, num2, 4), 100);
    }
    return this.exceptNumber(num1, num2, 2);
  },
  /**
     * 两个数相除函数  前提num1 num2  必须为数字
     * @param num1 {Number} 分子
     * @param num2 {Number} 分母
     * @param sum {Number} 保存几位小数
     * @returns {Number}
     */
  exceptNumber: function (num1, num2, sum) {
    var baseNum1 = 0,
      baseNum2 = 0;
    var baseNum3,
      baseNum4;

    try {
      baseNum1 = num1
        .toString()
        .split('.')[1]
        .length;

    } catch (e) {
      baseNum1 = 0;
    }
    try {
      baseNum2 = num2
        .toString()
        .split('.')[1]
        .length;
    } catch (e) {
      baseNum2 = 0;
    }
    baseNum3 = Number(num1.toString().replace('.', ''));
    baseNum4 = Number(num2.toString().replace('.', ''));
    return Number(((baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1)).toFixed(sum));
  },
  /**
     * 两个数相乘函数  前提num1 num2  必须为数字
     * @param num1 {Number}
     * @param num2 {Number}
     * @returns {Number}
     */
  rideNumber: function (num1, num2) {
    let t1;
    let t2;
    let r1;
    let r2;
    try {
      t1 = num1
        .toString()
        .split('.')[1]
        .length;
    } catch (e) {
      t1 = 0;
    }
    try {
      t2 = num2
        .toString()
        .split('.')[1]
        .length;
    } catch (e) {
      t2 = 0;
    }
    r1 = Number(num1.toString().replace('.', ''));
    r2 = Number(num2.toString().replace('.', ''));
    return (r1 / r2) * Math.pow(10, t2 - t1);
  }
};
