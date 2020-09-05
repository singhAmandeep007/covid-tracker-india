import React from 'react'
import './InfoBox.css';

export default function InfoBox({title,total,color}) {
    return (
        <div class="card">
                    
        <div className={`card-body ${color}`}>
          <h6 className={`card-title `} >{title}</h6>
          <p class="card-text" >{total} </p> 
         
        </div>
      </div>
    )
}
