import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class LineChart extends Component {
  
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
  
  getAxisRanges = (minValue, maxValue) => {
    const axisRangesCount = 4,
      axisRanges = [];

    for (let index = 0; index <= axisRangesCount; index++) {
      const axisRange = {};

      axisRange["value"] = minValue + (index * (maxValue - minValue)) / 4;

      const labelText =
        axisRange["value"] && this.getFormattedValue(axisRange["value"]);

      axisRange["label"] = {
        disabled: false,
        text: labelText,
        inside: false,
        opacity: 1,
        fill: "#666666",
        fontSize: "9px"
      };
      axisRange["grid"] = {
        stroke: "#e4e4e4",
        strokeWidth: 1,
        strokeOpacity: 1
      };
      axisRanges.push(axisRange);
    }

    return axisRanges;
  };

//   for(let i=0;i<data1.length;i+=3){
//     let ele={
//         date:data1[i].date,
//         id:1,
//     };
//     for(let j=0;j<3;j++){
//         console.log(i,j)
//         let 
//         ele.ingress=data1[i].tt
//         data2.push({
//             ingress:data1[i].tt,
//             egressBytes:34214,
//             ingressBytes:132123,
//             egress:data1[i].tt,
//             date:,
//             id:1
//         })
//     }
// }

  renderChartUsingConfig = (info) => {
    
    const data2=info.slice(info.length - 21).map((d)=>{
        return {
            tt:d.tt,
            date:d.date
        }
    })
    
    
    

      const data=[
        {
          confirmed: data2[0].tt,
          
          recovered: data2[1].tt,
          date: data2[0].date,
          id: 1,
          egressBytes: 211068461,
          ingressBytes: 597120169,
        },
        {
            confirmed: data2[3].tt,
          egressBytes: 430087035,
          ingressBytes: 553345111,
          recovered:data2[4].tt,
          date: data2[3].date,
          id: 1
        },
        {
            confirmed: data2[6].tt,
          egressBytes: 349351559,
          ingressBytes: 623445549,
          recovered: data2[7].tt,
          date: data2[6].date,
          id: 1
        },
        {
            confirmed: data2[9].tt,
          egressBytes: 76685065,
          ingressBytes: 615997885,
          recovered: data2[10].tt,
          date: data2[9].date,
          id: 1
        },
        {
            confirmed: data2[12].tt,
          egressBytes: 138243743,
          ingressBytes: 14785797,
          recovered:data2[13].tt,
          date: data2[12].date,
          id: 1
        },
        {
            confirmed:data2[15].tt,
          egressBytes: 469731002,
          ingressBytes: 557682299,
          recovered: data2[16].tt,
          date: data2[15].date,
          id: 1
        },
        {
          confirmed: data2[18].tt,
          egressBytes: 129187411,
          ingressBytes: 174391615,
          recovered: data2[19].tt,
          date:data2[18].date,
          id: 1
        },
      ]
   return {
      data: data ,
      mouseWheelBehavior: "none",
      xAxes: [
        {
          height: 15,
          type: "CategoryAxis",
          id: "dateAxis",
          startLocation: 0.5,
          endLocation: 0.5,
          dataFields: {
            category: "date"
          },
          title: {
            text: "Last 7 days",
            fontSize: "12px",
            fill: "#666666",
            marginTop: "10px"
          },
          renderer: {
            inside: false,
            labels: {
              disabled: true,
              template: {
                disabled: true
              }
            },
            grid: {
              disabled: true
            }
          },
          tooltipDateFormat: "MMM dd, yyyy",
          tooltip: {
            background: {
              fill: "#000",
              strokeWidth: 0,
              cornerRadius: 4,
              fillOpacity: 0.7
            },
            filters: [
              {
                type: "DropShadowFilter",
                dx: 1,
                dy: 1,
                blur: 3,
                color: "#373737"
              }
            ]
          }
        }
      ],
      yAxes: [
        {
          type: "ValueAxis",
          max: 770743859,
          min: 14785797,
          strictMinMax: true,
          id: "areaAxis",
          cursorTooltipEnabled: false,
          tooltip: {
            disabled: true
          },
          renderer: {
            opposite: true,
            labels: {
              disabled: true
            },
            grid: {
              stroke: "#dee0e1",
              strokeWidth: 1,
              strokeOpacity: 0.5
            },
            baseGrid: {
              disabled: true
            }
          },
          
        }
      ],



      series: [
        {
          id: "confirmed",
          name: "Confirmed",
          type: "LineSeries",
          dataFields: {
            valueY: "ingressBytes",
            categoryX: "date"
          },
          stroke: "#406096",
          strokeWidth: 2,
          yAxis: "areaAxis",
          tooltipText: "Confirmed: {confirmed}",
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
          fillOpacity: 0.1,
          fill: am4core.color("#406096"),
          segments: {
            fillModifier: {
              type: "LinearGradientModifier",
              opacities: [1, 0.1],
              offsets: [0, 0.5, 1],
              gradient: {
                rotation: 90
              }
            }
          }
        },
        {
          id: "recovered",
          name: "Recovered",
          type: "LineSeries",
          dataFields: {
            valueY: "egressBytes",
            categoryX: "date"
          },
          zIndex: 0,
          stroke: "#f18f51",
          strokeWidth: 2,
          yAxis: "areaAxis",
          tooltipText: "Recovered: {recovered}",
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
          fillOpacity: 0.1,
          fill: am4core.color("#f18f51"),
          segments: {
            fillModifier: {
              type: "LinearGradientModifier",
              opacities: [1, 0.1],
              offsets: [0, 0.5, 1],
              gradient: {
                rotation: 90
              }
            }
          }
        },
          
      ],
      cursor: {
        xAxis: "dateAxis",
        lineX: {
          stroke: "#9eaec9",
          strokeWidth: 2,
          strokeDasharray: ""
        },
        lineY: {
          disabled: "true"
        },
        behavior: "none"
      },
      legend: {
        position: "top",
        paddingTop: 0,
        marginTop: -10,
        contentAlign: "left",
        paddingBottom: 10,
        fontSize: 12,
        useDefaultMarker: true,
        itemContainers: {
          clickable: false,
          focusable: false,
          cursorOverStyle: [
            {
              property: "cursor",
              value: "default"
            }
          ]
        },
        markers: {
          width: 18,
          children: [
            {
              width: 16,
              height: 16,
              valign: "middle",
              horizontalAlign: "center",
              cornerRadiusTopLeft: 12,
              cornerRadiusTopRight: 12,
              cornerRadiusBottomRight: 12,
              cornerRadiusBottomLeft: 12,
              strokeWidth: 2,
              strokeOpacity: 1,
              stroke: "#fff"
            }
          ]
        }
      }
    };
    };


    setConfig(){
        const config=this.renderChartUsingConfig(this.props.timelineInfo)
        this.chart = am4core.createFromConfig(
            config,
            "chart2",
            am4charts.XYChart
          );
    }
    


  render() {
    return (
    
        <div
          id="demo-chart"
          className="chart2"
          style={{ height: "250px" }}
        />
     
    );
  }
}

export default LineChart;
