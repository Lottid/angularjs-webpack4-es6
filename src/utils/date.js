//检测是否定义了format函数
if (!Date.prototype.format) {
  Date.prototype.format = function(format) {
    /*
     * format='yyyy-MM-dd hh:mm:ss';
     */
    var o = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S': this.getMilliseconds()
    };

    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4
        - RegExp.$1.length));
    }

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1
          ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return format;
  };
}
if (!String.prototype.parseDate) {
  String.prototype.parseDate = function() {
    var isoExp = /^\s*(\d{4})[-\/\u4e00-\u9fa5](\d\d?)[-\/\u4e00-\u9fa5](\d\d?)[\u4e00-\u9fa5]?\s*$/,
      date = new Date(),
      month,
      parts = isoExp.exec(this);
    if (parts) {
      month = +parts[2];
      date.setFullYear(parts[1], month - 1, parts[3]);
      if (month !== date.getMonth() + 1) {
        date.setTime(NaN);
      }
    }
    return date;
  };
}
if (!Array.indexOf) {
  Array.prototype.indexOf = function(el) {
    for (var i = 0, n = this.length; i < n; i++) {
      if (this[i] === el) {
        return i;
      }
    }
    return -1;
  };
}


let DH = window.DH = {
  getDay: function(day, time) {
    let zdate = DH.parseDate(time);
    let sdate = zdate.getTime() - (1 * 24 * 60 * 60 * 1000);
    let edate = new Date(sdate - (day * 24 * 60 * 60 * 1000)).format('yyyy/MM/dd');
    return edate;
  },
  /**
   * 获取日期属于一年中第几周 星期几
   * @param date 2016-01-01
   * @param type week/day
   * @returns {Object} year 属于哪一年第几周  num 第几周  week 周几 [0,1,2,3,4,5,6] 星期日为 0
   * {
   *  year:2015,
   *  num:53,
   *  week:5
   * }
   * */
  getLastDate: function(date, type) {
    let thisDate = new Date(date);
    let lastYear = thisDate.getFullYear() - 1;
    let lastMonth = (thisDate.getMonth() + 1) < 10 ? '0' + (thisDate.getMonth() + 1) : (thisDate.getMonth() + 1);
    let lastDay = thisDate.getDate() < 10 ? '0' + thisDate.getDate() : thisDate.getDate();
    let lastDate = '';
    if (type === 'week') {
      lastDate = DH.switchDate(date, 364); // 364 Ϊ52*7
    }
    if (type === 'day') {
      lastDate = lastYear + '-' + lastMonth + '-' + lastDay;
    }
    return lastDate;
  },
  /**
   * 日期段相差多少天
   * @param startTime {Date} 2016-08-01
   * @param endTime {Date} 2016-08-10
   * @returns 10 {Number}
   * */
  switchDate: function(date, num) {
    let thisTime = new Date(date).getTime();
    let lastTime = new Date(thisTime - (num * 86400000));
    let lastYear = lastTime.getFullYear();
    let lastMonth = (lastTime.getMonth() + 1) < 10 ? '0' + (lastTime.getMonth() + 1) : (lastTime.getMonth() + 1);
    let lastDay = lastTime.getDate() < 10 ? '0' + lastTime.getDate() : lastTime.getDate();
    let lastDate = lastYear + '-' + lastMonth + '-' + lastDay;
    return lastDate;

  },
  /**
   * 转换为Date日期类型
   * */
  parseDate: function(dateStr) {
    let isoExp = /^\s*(\d{4})[,-\/\u4e00-\u9fa5](\d\d?)[,-\/\u4e00-\u9fa5](\d\d?)[\u4e00-\u9fa5]?\s*$/;
    let date = new Date();
    let month;
    let parts = isoExp.exec(dateStr);
    if (parts) {
      month = +parts[2];
      date.setFullYear(parts[1], month - 1, parts[3]);
      if (month !== date.getMonth() + 1) {
        date.setTime(NaN);
      }
    }
    return date;
  },
  /**
   * 计算周几
   * @param {String} date  日期，2016-08-01
   * @param {String} lang  语言 2016-08-10
   * @param {Number} len   截取长度 2016-08-10
   * */
  getWeek: function(date, lang, len) {
    if (Object.prototype.toString.call(lang) === '[object Number]') {
      len = lang;
      lang = 'en';
    }
    let _date = DH.parseDate(date),
      windex = _date.getDay(),
      weekAry = {
        'en': ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        'en_all': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        'en_ALL': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'zh': ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        'zh_all': ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      },
      week = weekAry[lang][windex];
    if (!week) {
      week = '';
    }
    return week.substr(0, len);
  },
  getWeekFul: function(date, lang, len) {
    if (Object.prototype.toString.call(lang) === '[object Number]') {
      len = lang;
      lang = 'en';
    }
    let _date = DH.parseDate(date),
      windex = _date.getDay(),
      weekAry = {
        'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'zh': ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      },
      week = weekAry[lang][windex];
    if (!week) {
      week = '';
    }
    return week.substr(0, len);
  },
  /**
   * 获取某一天
   * @day 0 更新时间前一天 1 更新时间当天
   * @newDate 更新时间 Date || String
   * @return  返回时间 Date || String   传入日期，返回日期， 传入日期字符串，返回 日期字符串
   * */
  getDate: function(day, date) {
    day = day ? day : 0;
    let start_dt;
    let type = Object.prototype.toString.call(date) === '[object Date]';
    if (type) {
      start_dt = date;
    } else {
      start_dt = DH.parseDate(date);
    }
    let start_time = start_dt.getTime();
    //24 * 60 * 60 * 1000  === 86400000
    let newDate = new Date(start_time + (day * 86400000));
    if (!type) {
      newDate = newDate.format('yyyy-MM-dd');
    }
    return newDate;
  },
  /**
   * 把格式转化
   * @data 每个页面默认传来的配置
   * @newData 新数据， 把数组数据做下处理，以逗号, 隔开
   * @return  更新后的数据， 把数组数据做下处理，以逗号, 隔开
   * */
  paramChange: function(data) {
    let newData = {};
    for (let key in data) {
      let item = data[key];

      if (item !== undefined) {
        if (Object.prototype.toString.call(item) === '[object Array]') {
          item = item.join(',');
        } else if (Object.prototype.toString.call(item) === '[object Object]') {
          item = JSON.stringify(item);
        }
        newData[key] = item;
      }
    }
    return newData;
  },
  /** 计算时间相差天数
   * @param start 开始时间
   * @param end 结束时间
   * return end-start  相差天数
   * */
  getDiffByDay: function(start, end) {
    let start_date = DH.parseDate(start);
    let end_date = DH.parseDate(end);
    let d_value = end_date - start_date;
    return Math.floor(d_value / 1000 / 60 / 60 / 24);
  },
  /**
   * 获取一个区间内，指定的周有那些天（例如：['2016-07-05', '2016-08-15']中周一那些天是周一）
   * @param dates {Array} 需要筛选的日期有那些, 如果type === 'section'，第一项是开始日期，第二项是结束日期
   * @param weeks {Array} 筛选的周有那些 [0,1,2,3,4,5,6]
   * @param type {String} 默认section
   * @returns {Array}
   */
  filterWeek: function(dates, weeks = [0, 1, 2, 3, 4, 5, 6] , type = 'section') {
    let arr = [];
    if (type === 'section') {
      let startTime = DH.parseDate(dates[0]);
      let endTime = DH.parseDate(dates[1]);
      let currTime = startTime;
      while (currTime.getTime() <= endTime.getTime()) {
        let currYear = currTime.getFullYear();
        let currMonth = currTime.getMonth() + 1;
        if (currMonth < 10) {
          currMonth = `0${currMonth}`;
        }
        let currDate = currTime.getDate();
        if (currDate < 10) {
          currDate = `0${currDate}`;
        }
        let currWeek = currTime.getDay();

        for (let i = 0; i < weeks.length; i++) {
          if (currWeek === weeks[i]) {
            arr.push(`${currYear}-${currMonth}-${currDate}`);
            break;
          }
        }

        currTime.setDate(parseInt(currDate) + 1);

      }
    } else {
      dates.forEach((item) => {
        let currTime = DH.parseDate(item);
        let currYear = currTime.getFullYear();
        let currMonth = currTime.getMonth() + 1;
        if (currMonth < 10) {
          currMonth = `0${currMonth}`;
        }

        let currDate = currTime.getDate();
        if (currDate < 10) {
          currDate = `0${currDate}`;
        }
        let currWeek = currTime.getDay();

        for (let i = 0; i < weeks.length; i++) {
          if (currWeek === weeks) {
            arr.push(`${currYear}-${currMonth}-${currDate}`);
          }
        }
      });
    }


    return arr;

  },
};

/**
 * 时间对象的格式化
 */
String.prototype.formatDate = function(format) {
  let isoExp = /(\s*(\d{4})[-\/](\d\d?)[-\/](\d\d?)\s*)/g;
  format = format || 'yyyy/MM/dd';
  let str = this.replace(isoExp, function(a, b, c, d, e) {
    if (/(y+)/.test(format)) {
      b = format.replace(RegExp.$1, (c + '').substr(4
        - RegExp.$1.length));
    }
    let o = {
      'M+': d,
      'd+': e
    };
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(b)) {
        b = b.replace(RegExp.$1, RegExp.$1.length === 1
          ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return b;
  });
  return str;
};