import React from 'react'
import LineChart from './LineChart'


export default function StatBox() {
    return (
         <div class="card mb-3">
          
         <div class="card-body">
           <div class="row">
            <div class="col-sm-6 themed-grid-col">
              <h5 class="card-title">Stats box donut chart</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="col-sm-6 themed-grid-col">
              <LineChart></LineChart></div>
            </div>
          
           
         </div>
       </div>
    )
}
