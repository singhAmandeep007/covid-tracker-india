import React, { useLayoutEffect,useRef,useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_india2020High from "@amcharts/amcharts4-geodata/india2020High";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {Popup,Icon} from 'semantic-ui-react';

/* Enable theme(s) */
am4core.useTheme(am4themes_animated);
const caseTypeOptions = [
  { key: 1, text: 'Confirmed', value: 'confirmed' },
  { key: 2, text: 'Active', value: 'active' },
  { key: 3, text: 'Recovered', value: 'recovered' },
  { key: 4, text: 'Deaths', value: 'deaths' },
]
function Map({ handleHover, statewiseInfo ,colorPalette}) {

  const [caseType,setCaseType]=useState('confirmed');

  function handleCaseTypeChange(e){
    console.log(e.target.value)
    setCaseType(e.target.value)
  }

  const mapRef = useRef(null);
  const lastUpdateRef = useRef(null);

  useLayoutEffect(()=>{
    const statecodes = ["AN","AP","AR","AS","BR","CH","CT","DN","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LA","LD","MP","MH","MN","ML","MZ","NL","OR","PY","PB","RJ","SK","TN","TG","TR","UP","UT","WB"];
    const getMapData = (info) => {
      return info.slice(1).filter((s)=> statecodes.indexOf(s.statecode)!== -1).map(s => {
        if(s.statecode === "LA"){
          return {
            id: `IN-LK`,
            state: s.state,
            value: s[caseType],
            lastupdatedtime:s.lastupdatedtime
          }
        }
        if(s.statecode === "DN"){
          return {
            id: `IN-DNDD`,
            state: s.state,
            value: s[caseType],
            lastupdatedtime:s.lastupdatedtime
          }
        }
        return {
          id: `IN-${s.statecode}`,
          state: s.state,
          value: s[caseType],
          lastupdatedtime:s.lastupdatedtime
        }
      })
    }
    
    let map = am4core.create("mapDiv", am4maps.MapChart);
  
    // Set values for each state
    let data = getMapData(statewiseInfo)
    // Set map definition
    map.geodata = am4geodata_india2020High;
    //map.projection = new am4maps.projections.Miller();
    // Set projection
    map.projection = new am4maps.projections.Mercator();
    // this is map polygon 
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());  
    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;
    
    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: am4core.color(colorPalette[caseType]["shadeLight"]),
      max: am4core.color(colorPalette[caseType]["shadeDark"]),
      logarithmic: true
    });

    polygonSeries.data = data;
    
    // hover and detail tool
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#000000");

   // Set up heat legend
    let heatLegend = map.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.valign = "bottom";
    heatLegend.height = am4core.percent(80);
    heatLegend.orientation = "vertical";
    heatLegend.valign = "middle";
    heatLegend.marginRight = am4core.percent(1);
    heatLegend.valueAxis.renderer.opposite = true;
    heatLegend.valueAxis.renderer.dx = - 22;
    heatLegend.valueAxis.strictMinMax = false;
    heatLegend.valueAxis.fontSize = 9;
    heatLegend.valueAxis.logarithmic = true;

    // heat legend behavior
    function handleHover(column) {
      if (!isNaN(column.dataItem.value)) {
        lastUpdateRef.current.innerText = column.dataItem.dataContext.lastupdatedtime
        heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
      }
      else {
        heatLegend.valueAxis.hideTooltip();
      }
    }
    polygonSeries.mapPolygons.template.events.on("over", function (event) {
      handleHover(event.target);
    })

    polygonSeries.mapPolygons.template.events.on("hit", function (event) {
      console.log('hit',event.target)
      handleHover(event.target);
    })

    polygonSeries.mapPolygons.template.events.on("out", function (event) {
      lastUpdateRef.current.innerText = "Select a State"
      heatLegend.valueAxis.hideTooltip();
    })
    mapRef.current = map;
    return()=> {
      map.dispose();
    }
  },[statewiseInfo,caseType,colorPalette])
  return (
    <>
    <div className="ui red ribbon label">
      Map &nbsp;&nbsp;
      <Popup
          content={
            <>
              <b>Select</b> case type to interact.<br/> <b>Hover/Click</b> a state to see details.
            </>
          }
          on={['hover', 'click']}
          popper={{ id: 'map-popper-container', style: { zIndex: 2000 } }}
          trigger={<Icon name='info circle' />}
          hideOnScroll
        />
    </div>

    <div className="ui top right attached label">
      Last Updated: <div className="detail" ref={lastUpdateRef}>Select a State</div>
    </div>

    <div className="ui horizontal divider">
      {caseType.toUpperCase()}
    </div>
    <div style={{ height: "50px" }}>
      <select style={{float:"left"}} value={caseType} onChange={handleCaseTypeChange} className="ui dropdown">  
            {caseTypeOptions.map((e)=>{
              return <option key={e.key} value={e.value}>{e.text}</option>
            })}          
      </select>
    </div>
    <div id="mapDiv" style={{ height: "660px" }}></div>

    </>
  )
}

export default  Map;