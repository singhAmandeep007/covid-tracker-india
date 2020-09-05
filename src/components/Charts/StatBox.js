import React, {useState, useEffect } from 'react';
import LineChart from './LineChart';
import PieExample from './DonutChart';

export default function StatBox({info, updateInfo}) {
const[data,setData]=useState(info)
    useEffect(()=>{
     setData(info)
     
    },[info])
    return (
         <div class="card mb-3">
          
          <div class="card-body">
            <div class="row">
              <div class="col-sm-7 themed-grid-col">
                <PieExample  
                updateInfo={updateInfo}
                info={info}></PieExample>       
               </div>
                <div class="col-sm-5 themed-grid-col">
                <LineChart></LineChart>
                </div>
            </div>
          
           
          </div>
       </div>
    )
}
