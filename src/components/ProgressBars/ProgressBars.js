import React from 'react'
import {Progress} from 'semantic-ui-react';
import {numbersToPercentage} from './../../utils/util';

function ProgressBars({selectedStateInfo ,colorPalette}) {
  const percentArr = numbersToPercentage(
    [
      selectedStateInfo.confirmed,
      selectedStateInfo.active,
      selectedStateInfo.recovered,
      selectedStateInfo.deaths
    ]
    )
  return (
    <React.Fragment>
      <span className="ui red ribbon label">Progress Bars</span>
      <div className="ui top right attached label">
        Last Updated: <div className="detail">{selectedStateInfo.lastupdatedtime}</div>
      </div>

      <div className="ui horizontal divider">
        {selectedStateInfo.state}
      </div>

      <Progress  percent={percentArr[0]} active progress color={colorPalette.confirmed.name} >
        Confirmed
      </Progress>
      <Progress  percent={percentArr[1]} active progress color={colorPalette.active.name}>
        Active
      </Progress>
      <Progress  percent={percentArr[2]} active progress color={colorPalette.recovered.name}>
        Recovered
      </Progress>
      <Progress  percent={percentArr[3]} active progress color={colorPalette.deaths.name}>
        Deaths
      </Progress>
    </React.Fragment>
  )
}

export default ProgressBars;
