import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class DonutChart extends Component {
  
  chart = null;
  
  componentDidUpdate(){ 
    this.chart.dispose();
    this.setConfig();
  }

  componentDidMount() {
      this.setConfig()
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  
  renderChartUsingConfig = (info) => {
    
    const usersData = [
      {
        userType: "Confirmed",
        count: info.confirmed
      },
      {
        userType: "Active",
        count: info.active
      },
      {
        userType: "Recovered",
        count: info.recovered
      },
      {
        userType: "Deaths",
        count: info.deaths
      }
    ];

    const colors = ["rgb(251, 4, 4)", "rgb(51, 102, 255)", "rgb(0, 153, 0)","rgb(102, 102, 102)"];
    return {
      innerRadius: 80,
      radius: 110,
      data: usersData,
      
      series: [
        {
          type: "PieSeries",
          dataFields: {
            value: "count",
            category: "userType"
          },
          children: [
            {
              type: "Label",
              forceCreate: true,
              text: `[font-weight: 900;text-align;center;]${usersData[0].count} \n [font-weight:400;text-shadow:1px 1px  #b3b3b3]Confirmed`,
              horizontalCenter: "middle",
              verticalCenter: "middle",
              fontSize: 20,
             
              
            }
          ],
          tooltip: {
            getFillFromObject: false,
            background: {
              fill: "#000",
              strokeWidth: 0,
              fillOpacity: 0.7,
              cornerRadius: 4
            },
            fontSize: "12px",
            filters: [
              {
                type: "DropShadowFilter",
                dx: 1,
                dy: 1,
                blur: 3,
                color: "#373737"
              }
            ]
          },
          slices: {
            states: {
              hover: {
                properties: {
                  scale: 1
                }
              },
              active: {
                properties: {
                  shiftRadius: 0
                }
              }
            },
            stroke: "#fff",
            strokeWidth: 1,
            tooltipHTML: `<div class="tooltip_column" style="width: auto">{count} {userType}</div>`
          },
          colors: {
            list: colors
          },
          ticks: {
            disabled: true
          },
          labels: {
            disabled: true
          }
        }
      ]
    };
   
    
  };


    setConfig() {
      
        const config = this.renderChartUsingConfig(this.props.selectedStateInfo);
        this.chart = am4core.createFromConfig(
            config,
            "demo-chart",
            am4charts.PieChart
        );
    }


  


    render() {

        return (
       
            <div
            id="demo-chart"
        
            style={{ height: "250px" }}
            />
            
   
        );
    }
}

export default DonutChart;