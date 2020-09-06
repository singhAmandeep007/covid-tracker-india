import React, { useState,useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';

const INDIA_TOPO_JSON = require('./india.topo.json');

const PROJECTION_CONFIG = {
  scale: 390,
  center: [81.9629, 21.5937] 
};

// Yellow Variants
const COLOR_RANGE = [
  '#fefacd',
  '#fff67d',
  '#feee75',
  '#ffff00',
  '#ffdf00',
  '#ffd800',
  '#ffbe00',
  '#ffb900',
  '#ee9b0f'
];

const DEFAULT_COLOR = '#EEE';
const geographyStyle = {
  default: {
    outline: 'none'
  },
  hover: {
    fill: '#ccc',
    transition: 'all 250ms',
    outline: 'none'
  },
  pressed: {
    outline: 'none'
  }
};

// will generate random heatmap data on every call
const getHeatMapData = (info) => {

return info.slice(1).map(s=>{
      return {
        id:s.statecode,
        state:s.state,
        value:s.confirmed
      }
    })
 }

function Map({handleHover,info}) {

  const [tooltipContent, setTooltipContent] = useState('');
  const [data, setData] = useState([]);


  useEffect(()=>{
    
    if(info && info.length>1){
      setData(getHeatMapData(info))
    }
  },[info])

  //set color
  const colorScale = scaleQuantile()
    .domain(data.map(d => d.value))
    .range(COLOR_RANGE);
  //handle hover
  const onMouseEnter = (geo, current = { value: 'NA' }) => {
    return () => {
      handleHover(geo.id);
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };
  //handle mouse out
  const onMouseLeave = () => {
    handleHover('TT');
    setTooltipContent('');
  };

  return (
    <div className="full-width-height container">
      <h6 className="no-margin center">States and UTs</h6>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={200}
          height={220}
          data-tip=""
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map(geo => {
               
                //returns either true or false for geo.id 
                const current = data.find(s => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                    style={geographyStyle}
                    onMouseEnter={onMouseEnter(geo, current)}
                    onMouseLeave={onMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
       
    </div>
  );
}

export default Map;
