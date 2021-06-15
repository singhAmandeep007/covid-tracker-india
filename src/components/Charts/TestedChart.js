import React,{ useRef, useLayoutEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {stringToDate} from './../../utils/util';

/* Enable theme(s) */
am4core.useTheme(am4themes_animated);

function TestedChart({testSeriesInfo}) {

  const testedChart = useRef(null);

  function Tooltip({ name, value }) {
    return (
      <div>
        {name}: {value}
      </div>
    );
  }

  useLayoutEffect(() => {
    let x = am4core.create("testedChartDiv", am4charts.XYChart);
    // data
    const timelineData = testSeriesInfo.slice(-365).map((d) => {
      return {
        date:stringToDate(d.testedasof,"dd/MM/yyyy",'/'),
        firstdoseadministered:d.firstdoseadministered,
        seconddoseadministered:d.seconddoseadministered,
        totaldosesadministered:d.totaldosesadministered
      }
    });
    x.data = timelineData;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.tooltipDateFormat = "MMM dd, yyyy";

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    // Gradient
    let fillModifier = new am4core.LinearGradientModifier();
    fillModifier.opacities = [1, 0.1];
    fillModifier.offsets = [0,0.5, 1];
    fillModifier.gradient.rotation = 90;
    // FIRST DOSE
    let seriesFirstDose = x.series.push(new am4charts.LineSeries());
    seriesFirstDose.name = "First Dose";
    seriesFirstDose.dataFields.dateX = "date";
    seriesFirstDose.dataFields.valueY = "firstdoseadministered";
    seriesFirstDose.stroke = "#ffff00";
    seriesFirstDose.fill = "#ffff00";

    seriesFirstDose.tooltipHTML = renderToStaticMarkup(
      <Tooltip name="First Dose" value="{valueY.value}" />
    );

    seriesFirstDose.strokeWidth = 3;
    seriesFirstDose.fillOpacity = 0.3;
    seriesFirstDose.segments.template.fillModifier = fillModifier;

    // SECOND DOSE
    let seriesSecondDose = x.series.push(new am4charts.LineSeries());
    seriesSecondDose.name = "Second Dose";
    seriesSecondDose.dataFields.dateX = "date";
    seriesSecondDose.dataFields.valueY = "seconddoseadministered";
    seriesSecondDose.stroke = "#39FF14";
    seriesSecondDose.fill = "#39FF14";

    seriesSecondDose.tooltipHTML = renderToStaticMarkup(
      <Tooltip name="Second Dose" value="{valueY.value}" />
    );

    seriesSecondDose.strokeWidth = 3;
    seriesSecondDose.fillOpacity = 0.3;
    seriesSecondDose.segments.template.fillModifier = fillModifier;

    // TOTAL DOSE
    let seriesTotalDose = x.series.push(new am4charts.LineSeries());
    seriesTotalDose.name = "Total Dose";
    seriesTotalDose.dataFields.dateX = "date";
    seriesTotalDose.dataFields.valueY = "totaldosesadministered";
    seriesTotalDose.stroke = "#03bd1b";
    seriesTotalDose.fill = "#03bd1b";
    seriesTotalDose.strokeWidth = 3;
    seriesTotalDose.fillOpacity = 0.3;

    seriesTotalDose.tooltipHTML = renderToStaticMarkup(
      <Tooltip name="Total Dose" value="{valueY.value}" />
    );

    seriesTotalDose.segments.template.fillModifier = fillModifier;

    x.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(seriesFirstDose);
    scrollbarX.series.push(seriesSecondDose);
    scrollbarX.series.push(seriesTotalDose);
    x.scrollbarX = scrollbarX;
    // Pre Zoom
    x.events.on("ready", function () {
      dateAxis.zoomToDates(
        new Date().setMonth(new Date().getMonth() - 6), // 6 months ago
        new Date(),
        false,
        true // this makes zoom instant
      );
    });
    // Lengends
    x.legend = new am4charts.Legend();

    testedChart.current = x;

    return () => {
      x.dispose();
    };
  },[testSeriesInfo]);

  return (
  <>
    <span className="ui red ribbon label">Tested Timeline Series</span>
    <div className="ui horizontal divider">
    Tested Timeline Series
    </div>
    <div id="testedChartDiv" 
      style={{ width: "100%", height: "500px" }}>
    </div>			
</>
  )
}

export default TestedChart;
