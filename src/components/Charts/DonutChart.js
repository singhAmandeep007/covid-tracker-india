import React,{useRef,useLayoutEffect} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Enable theme(s) */
am4core.useTheme(am4themes_animated);

function DonutChart({selectedStateInfo}){

    const donutChart = useRef(null);

    useLayoutEffect(()=>{
      // Create chart instance
      let x = am4core.create("donutChartDiv", am4charts.PieChart);
      const stateData = [
        {
          type: "Confirmed",
          count: selectedStateInfo.confirmed,
          "color": am4core.color("#db2828")
        },
        {
          type: "Active",
          count: selectedStateInfo.active,
          "color": am4core.color("#2185d0")
        },
        {
          type: "Recovered",
          count: selectedStateInfo.recovered,
          "color": am4core.color("#21ba45")
        },
        {
          type: "Deaths",
          count: selectedStateInfo.deaths,
          "color": am4core.color("#767676")
        }
      ];
      x.data = stateData;
      // radius
      x.innerRadius = am4core.percent(50);
      // Add and configure Series
      let pieSeries = x.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "count";
      pieSeries.dataFields.category = "type";
      pieSeries.slices.template.propertyFields.fill = "color";
      // labels
      pieSeries.alignLabels = false;
      pieSeries.labels.template.text = "{type}: {value.formatNumber('#,###.a')}";
      // Center Label
      let centerLabel = pieSeries.createChild(am4core.Label);
      centerLabel.text = `${selectedStateInfo.state}`;
      centerLabel.truncate=true;
      centerLabel.maxWidth=150
      centerLabel.wrap=true;
      centerLabel.fontSize = 20;
      centerLabel.horizontalCenter = "middle";
      centerLabel.verticalCenter = "middle";
      // Set up fills
      pieSeries.slices.template.fillOpacity = 1;
      // hover effect
      pieSeries.slices.template.states.getKey("hover").properties.scale = 1;
      pieSeries.slices.template.states.getKey("hover").properties.fillOpacity = 0.5;
      
      // Add a legend
      x.legend = new am4charts.Legend();
      x.legend.align = "right";
      x.legend.position = "right";
      x.legend.valueLabels.template.align = "left";
      x.legend.valueLabels.template.textAlign = "start"; 

      // Updating
      x.dataSource.updateCurrentData = true;

      donutChart.current = x;
      return () => {
        x.dispose();
      };
    },[selectedStateInfo])
    
    return (
      <div
        id="donutChartDiv"
        style={{ height: "300px" }}
      />
    );
}


export default DonutChart;