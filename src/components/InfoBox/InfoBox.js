import React from 'react';
import CountUp from "react-countup";

import './InfoBox.css';

export default function InfoBox({title,total,color}) {
    return (
        <div class="card">
                    
        <div className={`card-body ${color}`}>
          <h6 className={`card-title `} style={{minHeight:'50px'}}>{title}</h6>
          <p class="card-text" > {isFinite(total)?<CountUp 
                            end= {Number(total)}     
                            duration={1}
                            separator={","}
                          ></CountUp>:0}</p> 
         
        </div>
      </div>
    )
}
