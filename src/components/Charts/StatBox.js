import React from 'react';
import LineChart from './LineChart';
import DonutChart from './DonutChart';

export default function StatBox({selectedStateInfo}) {

    return (
         <div class="card mb-3 shadow  bg-white rounded">
          
          <div class="card-body">
            <div class="row">
              <div class="col-sm-7 themed-grid-col">
                <DonutChart  
                 selectedStateInfo={selectedStateInfo}></DonutChart>       
               </div>
                <div class="col-sm-5 themed-grid-col">
                <LineChart></LineChart>
                </div>
            </div>
          
           
          </div>
       </div>
    )
}
