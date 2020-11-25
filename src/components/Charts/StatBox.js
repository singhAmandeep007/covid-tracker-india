import React from 'react';
import LineChart from './LineChart';
import DonutChart from './DonutChart';


export default function StatBox({ selectedStateInfo, timelineInfo }) {

  return (
    <div className="card mb-5 shadow  bg-white rounded">
      <div className="card-body">

        <div className="row">
          <div className="col-xl-6 sm-12 themed-grid-col">
            <DonutChart
              selectedStateInfo={selectedStateInfo}
            ></DonutChart>
          </div>
          <div className="col-xl-6 themed-grid-col">
            <LineChart
              timelineInfo={timelineInfo}
            ></LineChart>
          </div>
        </div>

      </div>
    </div>
  )
}