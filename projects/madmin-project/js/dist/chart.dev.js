"use strict";

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Kursai"
    },
    axisY: {
      title: "Trukmė valandomis (val.)",
      suffix: "val."
    },
    axisX: {
      title: "2020"
    },
    data: [{
      type: "column",
      yValueFormatString: "#,##0.0#\"val.\"",
      dataPoints: [{
        label: "sausis",
        y: 1
      }, {
        label: "vasaris",
        y: 1
      }, {
        label: "kovas",
        y: 1
      }, {
        label: "balandis",
        y: 1
      }, {
        label: "gegužė",
        y: 1
      }, {
        label: "birželis",
        y: 1
      }, {
        label: "liepa",
        y: 1
      }, {
        label: "rugpūjtis",
        y: 1
      }, {
        label: "rugsėjis",
        y: 1
      }, {
        label: "spalis",
        y: 63.5
      }, {
        label: "lapkritis",
        y: 69.4
      }, {
        label: "gruodis",
        y: 1
      }]
    }]
  });
  setTimeout(function () {
    chart.render();
  }, 1200);
};