import React from 'react';
import LineChart from './LineChart';
import DonutChart from './DonutChart';


export default function StatBox({ selectedStateInfo, weeklyData }) {
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
              weeklyData={weeklyData}
            ></LineChart>
          </div>
        </div>

      </div>
    </div>
  )
}
