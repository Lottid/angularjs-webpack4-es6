window.bwChart = {
  addCharLine: function(obj) {
    var chart = $('#' + obj.id).highcharts();
    var charObj = {
      id: obj.getID,
      data: obj.data,
      color: obj.color,
      name: obj.name,
      dashStyle: obj.dashStyle
    };
    if (obj['type']) {
      charObj['type'] = obj['type'];
    }
    if (obj['yAxis']) {
      charObj['yAxis'] = obj['yAxis'];
    }
    if (obj['zIndex']) {
      charObj['zIndex'] = obj['zIndex'];
    }
    if (obj['borderColor']) {
      charObj['borderColor'] = obj['borderColor'];
    }
    if (obj['borderWidth']) {
      charObj['borderWidth'] = obj['borderWidth'];
    }
    chart.addSeries(charObj);
  },
  //清空图表线
  removeChar: function(obj) {
    if ($('#' + obj.id).highcharts()) {
      var seriesLength = $('#' + obj.id).highcharts().series.length;
      for (var i = 0; i < seriesLength; i++) {
        $('#' + obj.id).highcharts().series[0].remove();
      }
    }
  },
  //删除指定id图表线
  removeCharLine: function(obj) {
    if ($('#' + obj.id).highcharts()) {
      var chart = $('#' + obj.id).highcharts();
      chart.get(obj.removeID).remove();
    }
  },
  reflowChart: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if ($('#' + arr[i]).highcharts()) {
        $('#' + arr[i]).highcharts().reflow();
      }
    }
  },
  destroyChart: function() {
    for (var i = 0; i < Highcharts.charts.length; i++) {
      Highcharts.charts[i] = undefined;
    }
  },
  linkageChart: function(id) {
    $(id).on('mousemove touchmove touchstart', function(e) {
      var chart,
        point,
        i,
        event;
      for (i = 0; i < Highcharts.charts.length; i = i + 1) {
        chart = Highcharts.charts[i];
        if (chart) {
          event = chart.pointer.normalize(e.originalEvent); // Find coordinates within the chart
          point = chart.series[0].searchPoint(event, true); // Get the hovered point
          if (point) {
            point.highlight(e);
          }
        }
      }
    });
    /**
     * 重写内部的方法， 这里是将提示框即十字准星的隐藏函数关闭
     */
    Highcharts.Pointer.prototype.reset = function() {
      return undefined;
    };
    /**
     * 高亮当前的数据点，并设置鼠标滑动状态及绘制十字准星线
     */
    Highcharts.Point.prototype.highlight = function(event) {
      this.onMouseOver(); // 显示鼠标激活标识
      //this.series.chart.tooltip.refresh(this); // 显示提示框
      this.series.chart.xAxis[0].drawCrosshair(event, this); // 显示十字准星线
    };
    /**
     * 同步缩放效果，即当一个图表进行了缩放效果，其他图表也进行缩放
     */
    /* eslint-disable */
    function syncExtremes(e) {
    /* eslint-enable */
      var thisChart = this.chart;
      if (e.trigger !== 'syncExtremes') {
        Highcharts.each(Highcharts.charts, function(chart) {
          if (chart !== thisChart) {
            if (chart.xAxis[0].setExtremes) {
              chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, {
                trigger: 'syncExtremes'
              });
            }
          }
        });
      }
    }
  }
};