import React, { useRef, useLayoutEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { stringToDate } from './../../utils/util';

/* Enable theme(s) */
am4core.useTheme(am4themes_animated);

function LineChart({ casesInfo }) {
   const casesChart = useRef(null);

   function Tooltip({ name, value }) {
      return (
         <div>
            {name}: {value}
         </div>
      );
   }

   useLayoutEffect(() => {
      let x = am4core.create('casesChartDiv', am4charts.XYChart);
      // data
      const casesData = casesInfo.map((d) => {
         //.slice(-365) to show for past 365 days
         return {
            date: stringToDate(d.dateymd, 'yyyy-MM-dd', '-'),
            dailyconfirmed: d.dailyconfirmed,
            dailydeceased: d.dailydeceased,
            dailyrecovered: d.dailyrecovered,
            totalconfirmed: d.totalconfirmed,
            totaldeceased: d.totaldeceased,
            totalrecovered: d.totalrecovered,
         };
      });
      x.data = casesData;

      let dateAxis = x.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.tooltipDateFormat = 'MMM dd, yyyy';

      let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;
      valueAxis.numberFormatter.numberFormat = '#,###.a';

      // Gradient
      let fillModifier = new am4core.LinearGradientModifier();
      fillModifier.opacities = [1, 0.1];
      fillModifier.offsets = [0, 0.5, 1];
      fillModifier.gradient.rotation = 90;
      // confirmed
      let seriesConfirmed = x.series.push(new am4charts.LineSeries());
      seriesConfirmed.name = 'Confirmed';
      seriesConfirmed.dataFields.dateX = 'date';
      seriesConfirmed.dataFields.valueY = 'dailyconfirmed';
      seriesConfirmed.stroke = `#db2828`;
      seriesConfirmed.fill = `#db2828`;

      seriesConfirmed.tooltipHTML = renderToStaticMarkup(
         <Tooltip name="Confirmed" value="{valueY.value}" />
      );

      seriesConfirmed.strokeWidth = 3;
      seriesConfirmed.fillOpacity = 0.3;
      seriesConfirmed.segments.template.fillModifier = fillModifier;

      // Recovered
      let seriesRecovered = x.series.push(new am4charts.LineSeries());
      seriesRecovered.name = 'Recovered';
      seriesRecovered.dataFields.dateX = 'date';
      seriesRecovered.dataFields.valueY = 'dailyrecovered';
      seriesRecovered.stroke = `#21ba45`;
      seriesRecovered.fill = `#21ba45`;

      seriesRecovered.tooltipHTML = renderToStaticMarkup(
         <Tooltip name="Recovered" value="{valueY.value}" />
      );

      seriesRecovered.strokeWidth = 3;
      seriesRecovered.fillOpacity = 0.3;
      seriesRecovered.segments.template.fillModifier = fillModifier;

      // Deceased
      let seriesDeceased = x.series.push(new am4charts.LineSeries());
      seriesDeceased.name = 'Deceased';
      seriesDeceased.dataFields.dateX = 'date';
      seriesDeceased.dataFields.valueY = 'dailydeceased';
      seriesDeceased.stroke = `#767676`;
      seriesDeceased.fill = `#767676`;
      seriesDeceased.strokeWidth = 3;
      seriesDeceased.fillOpacity = 0.3;

      seriesDeceased.tooltipHTML = renderToStaticMarkup(
         <Tooltip name="Deceased" value="{valueY.value}" />
      );

      seriesDeceased.segments.template.fillModifier = fillModifier;

      x.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(seriesConfirmed);
      scrollbarX.series.push(seriesRecovered);
      scrollbarX.series.push(seriesDeceased);
      x.scrollbarX = scrollbarX;
      // Pre Zoom
      // x.events.on('ready', function () {
      //    dateAxis.zoomToDates(
      //       new Date().setMonth(new Date().getMonth() - 6), // 6 months ago
      //       new Date(),
      //       false,
      //       true // this makes zoom instant
      //    );
      // });
      // Legends
      x.legend = new am4charts.Legend();

      casesChart.current = x;

      return () => {
         x.dispose();
      };
   }, [casesInfo]);

   return (
      <>
         <span className="ui red ribbon label">Cases Timeline Series</span>
         <div className="ui horizontal divider">Cases Timeline Series</div>
         <div
            id="casesChartDiv"
            style={{ width: '100%', height: '500px' }}
         ></div>
      </>
   );
}

export default LineChart;
