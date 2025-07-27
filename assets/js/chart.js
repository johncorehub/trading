(function ($) {
    "use strict";

        // chart 1
        var options1 = {
            series: [
              {
                data: [
                  20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
                ],
              },
            ],
            colors: ["#09BE8B"],
            chart: {
              type: "area",
              width: 100,
              height: 40,
              sparkline: { enabled: !0 },
            },
            plotOptions: { bar: { columnWidth: "50%" } },
            xaxis: { crosshairs: { width: 1 } },
            stroke: {
              show: true,
              curve: "smooth",
              lineCap: "butt",
              colors: undefined,
              width: 2,
              dashArray: 0,
            },
            tooltip: {
              fixed: { enabled: !1 },
              fillSeriesColor: true,
              x: { show: !1 },
              y: {
                title: {
                  formatter: function (e) {
                    return "";
                  },
                },
              },
              marker: { show: !1 },
            },
            states: {
              hover: {
                filter: {
                  type: "none",
                  value: 0,
                },
              },
            },
          },
          chart1 = new ApexCharts(
            document.querySelector("#chart1"),
            options1
          );
        chart1.render();


         // chart 2
         var options2 = {
            series: [
              {
                data: [
                  20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
                ],
              },
            ],
            colors: ["#09BE8B"],
            chart: {
              type: "area",
              width: 100,
              height: 40,
              sparkline: { enabled: !0 },
            },
            plotOptions: { bar: { columnWidth: "50%" } },
            xaxis: { crosshairs: { width: 1 } },
            stroke: {
              show: true,
              curve: "smooth",
              lineCap: "butt",
              colors: undefined,
              width: 2,
              dashArray: 0,
            },
            tooltip: {
              fixed: { enabled: !1 },
              fillSeriesColor: true,
              x: { show: !1 },
              y: {
                title: {
                  formatter: function (e) {
                    return "";
                  },
                },
              },
              marker: { show: !1 },
            },
            states: {
              hover: {
                filter: {
                  type: "none",
                  value: 0,
                },
              },
            },
          },
          chart2 = new ApexCharts(
            document.querySelector("#chart2"),
            options2
          );
        chart2.render();


        // chart 3
        var options3 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart3 = new ApexCharts(
        document.querySelector("#chart3"),
        options3
        );
    chart3.render();


    // chart 4
    var options4 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart4 = new ApexCharts(
        document.querySelector("#chart4"),
        options4
        );
    chart4.render();


    // chart 5
    var options5 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart5 = new ApexCharts(
        document.querySelector("#chart5"),
        options5
        );
    chart5.render();


    // chart 6
    var options6 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart6 = new ApexCharts(
        document.querySelector("#chart6"),
        options6
        );
    chart6.render();


    // chart 7
    var options7 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart7 = new ApexCharts(
        document.querySelector("#chart7"),
        options7
        );
    chart7.render();


    // chart 8
    var options8 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart8 = new ApexCharts(
        document.querySelector("#chart8"),
        options8
        );
    chart8.render();


    // chart 9
    var options9 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart9 = new ApexCharts(
        document.querySelector("#chart9"),
        options9
        );
    chart9.render();


    // chart 10
    var options10 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart10 = new ApexCharts(
        document.querySelector("#chart10"),
        options10
        );
    chart10.render();


    // chart 11
    var options11 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart11 = new ApexCharts(
        document.querySelector("#chart11"),
        options11
        );
    chart11.render();


    // chart 12
    var options12 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart12 = new ApexCharts(
        document.querySelector("#chart12"),
        options12
        );
    chart12.render();


    // chart 13
    var options13 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart13 = new ApexCharts(
        document.querySelector("#chart13"),
        options13
        );
    chart13.render();


    // chart 14
    var options14 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart14 = new ApexCharts(
        document.querySelector("#chart14"),
        options14
        );
    chart14.render();


    // chart 15
    var options15 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart15 = new ApexCharts(
        document.querySelector("#chart15"),
        options15
        );
    chart15.render();


    // chart 16
    var options16 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart16 = new ApexCharts(
        document.querySelector("#chart16"),
        options16
        );
    chart16.render();


    // chart 17
    var options17 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart17 = new ApexCharts(
        document.querySelector("#chart17"),
        options17
        );
    chart17.render();


    // chart 18
    var options18 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart18 = new ApexCharts(
        document.querySelector("#chart18"),
        options18
        );
    chart18.render();


    // chart 19
    var options19 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart19 = new ApexCharts(
        document.querySelector("#chart19"),
        options19
        );
    chart19.render();


    // chart 20
    var options20 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart20 = new ApexCharts(
        document.querySelector("#chart20"),
        options20
        );
    chart20.render();



    // chart 21
    var options21 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart21 = new ApexCharts(
        document.querySelector("#chart21"),
        options21
        );
    chart21.render();


    // chart 22
    var options22 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart22 = new ApexCharts(
        document.querySelector("#chart22"),
        options22
        );
    chart22.render();



    // chart 23
    var options23 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart23 = new ApexCharts(
        document.querySelector("#chart23"),
        options23
        );
    chart23.render();


    // chart 24
    var options24 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart24 = new ApexCharts(
        document.querySelector("#chart24"),
        options24
        );
    chart24.render();



    // chart 25
    var options25 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart25 = new ApexCharts(
        document.querySelector("#chart25"),
        options25
        );
    chart25.render();


    // chart 26
    var options26 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart26 = new ApexCharts(
        document.querySelector("#chart26"),
        options26
        );
    chart26.render();



    // chart 27
    var options27 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart27 = new ApexCharts(
        document.querySelector("#chart27"),
        options27
        );
    chart27.render();



    // chart 28
    var options28 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart28 = new ApexCharts(
        document.querySelector("#chart28"),
        options28
        );
    chart28.render();



    // chart 29
    var options29 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart29 = new ApexCharts(
        document.querySelector("#chart29"),
        options29
        );
    chart29.render();



    // chart 30
    var options30 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart30 = new ApexCharts(
        document.querySelector("#chart30"),
        options30
        );
    chart30.render();


    // chart 31
    var options31 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart31 = new ApexCharts(
        document.querySelector("#chart31"),
        options31
        );
    chart31.render();



    // chart 32
    var options32 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart32 = new ApexCharts(
        document.querySelector("#chart32"),
        options32
        );
    chart32.render();


    // chart 33
    var options33 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart33 = new ApexCharts(
        document.querySelector("#chart33"),
        options33
        );
    chart33.render();



    // chart 34
    var options34 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart34 = new ApexCharts(
        document.querySelector("#chart34"),
        options34
        );
    chart34.render();


    // chart 35
    var options35 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart35 = new ApexCharts(
        document.querySelector("#chart35"),
        options35
        );
    chart35.render();



    // chart 36
    var options36 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart36 = new ApexCharts(
        document.querySelector("#chart36"),
        options36
        );
    chart36.render();



    // chart 37
    var options37 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart37 = new ApexCharts(
        document.querySelector("#chart37"),
        options37
        );
    chart37.render();


    // chart 38
    var options38 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart38 = new ApexCharts(
        document.querySelector("#chart38"),
        options38
        );
    chart38.render();


    // chart 39
    var options39 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart39 = new ApexCharts(
        document.querySelector("#chart39"),
        options39
        );
    chart39.render();



    // chart 40
    var options40 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart40 = new ApexCharts(
        document.querySelector("#chart40"),
        options40
        );
    chart40.render();



    // chart 41
    var options41 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart41 = new ApexCharts(
        document.querySelector("#chart41"),
        options41
        );
    chart41.render();


    // chart 42
    var options42 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart42 = new ApexCharts(
        document.querySelector("#chart42"),
        options42
        );
    chart42.render();


    // chart 43
    var options43 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart43 = new ApexCharts(
        document.querySelector("#chart43"),
        options43
        );
    chart43.render();



    // chart 44
    var options44 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart44 = new ApexCharts(
        document.querySelector("#chart44"),
        options44
        );
    chart44.render();



    // chart 45
    var options45 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart45 = new ApexCharts(
        document.querySelector("#chart45"),
        options45
        );
    chart45.render();



    // chart 46
    var options46 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart46 = new ApexCharts(
        document.querySelector("#chart46"),
        options46
        );
    chart46.render();


    // chart 47
    var options47 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart47 = new ApexCharts(
        document.querySelector("#chart47"),
        options47
        );
    chart47.render();



    // chart 48
    var options48 = {
        series: [
            {
            data: [
                20, 90, 48, 85, 65, 28, 49, 24, 50, 46, 59, 90, 67, 26, 82,
            ],
            },
        ],
        colors: ["#09BE8B"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        xaxis: { crosshairs: { width: 1 } },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        tooltip: {
            fixed: { enabled: !1 },
            fillSeriesColor: true,
            x: { show: !1 },
            y: {
            title: {
                formatter: function (e) {
                return "";
                },
            },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
            filter: {
                type: "none",
                value: 0,
            },
            },
        },
        },
        chart48 = new ApexCharts(
        document.querySelector("#chart48"),
        options48
        );
    chart48.render();


})(jQuery);