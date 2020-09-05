import React from 'react';
import LineChart from './LineChart';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default function StatBox() {
    return (
         <div class="card mb-3">
          
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6 themed-grid-col">



                
              
              
              
              
              
              
              
              
              
              
              
              
              
              </div>
                <div class="col-sm-6 themed-grid-col">
                <LineChart></LineChart>
                </div>
            </div>
          
           
          </div>
       </div>
    )
}
