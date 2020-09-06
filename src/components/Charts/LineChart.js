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
          death:data2[2].tt,
          date: data2[0].date,
          id: 1,
          confirmVal: data2[0].tt,
          recoverVal: data2[1].tt,
          deathVal:data2[2].tt,
        },
        {
          confirmed: data2[3].tt,   
          recovered:data2[4].tt,
          death:data2[5].tt,
          date: data2[3].date,
          id: 1,
          confirmVal: data2[3].tt,
          recoverVal: data2[4].tt,
          deathVal:data2[5].tt,
          
        },
        {
            confirmed: data2[6].tt,
         
          recovered: data2[7].tt,
          death:data2[8].tt,
          date: data2[6].date,
          id: 1,
          confirmVal: data2[6].tt,
          recoverVal: data2[7].tt,
          deathVal:data2[8].tt,
        },
        {
            confirmed: data2[9].tt,
          
          recovered: data2[10].tt,
          death:data2[11].tt,
          date: data2[9].date,
          id: 1,
          confirmVal: data2[9].tt,
          recoverVal: data2[10].tt,
          deathVal:data2[11].tt,
        },
        {
            confirmed: data2[12].tt,
          
          recovered:data2[13].tt,
          death:data2[14].tt,
          date: data2[12].date,
          id: 1,
          confirmVal: data2[12].tt,
          recoverVal: data2[13].tt,
          deathVal:data2[14].tt,
        },
        {
          confirmed:data2[15].tt,
         
          recovered: data2[16].tt,
          death:data2[17].tt,
          date: data2[15].date,
          id: 1,
          confirmVal: data2[15].tt,
          recoverVal: data2[16].tt,
          deathVal:data2[17].tt,
        },
        {
          confirmed: data2[18].tt,
         
          recovered: data2[19].tt,
          death:data2[20].tt,
          date:data2[18].date,
          id: 1,
          confirmVal:  data2[18].tt,
          recoverVal: data2[19].tt,
          deathVal:data2[20].tt,
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
          max: 200000,
          min: 0,
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
            valueY: "confirmVal",
            categoryX: "date"
          },
          stroke: "#fa0504",
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
          fill: am4core.color("#fa0504"),
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
            valueY: "recoverVal",
            categoryX: "date"
          },
          zIndex: 0,
          stroke: "#009900",
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
          fill: am4core.color("#009900"),
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
          id: "deaths",
          name: "Deaths",
          type: "LineSeries",
          dataFields: {
            valueY: "deathVal",
            categoryX: "date"
          },
          zIndex: 0,
          stroke: "#666666",
          strokeWidth: 2,
          yAxis: "areaAxis",
          tooltipText: "Deaths: {death}",
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
          fill: am4core.color("#666666"),
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
          style={{ height: "290px" }}
        />
     
    );
  }
}

export default LineChart;
