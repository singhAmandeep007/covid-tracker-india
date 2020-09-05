import React from 'react';
import './Table.css';

export default function Table({data,handleHover}) {

    return (
     
        <div>
          <div class="card mb-3">
          <div class="card-body">
          <div class="table-responsive-xl table-wrapper-scroll-y my-custom-scrollbar">
            <table id="dtBasicExample" class="table table-bordered table-hover">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">State/UT</th>
                  <th scope="col">Confirmed</th>
                  <th scope="col">Active</th>
                  <th scope="col">Recovered</th>
                  <th scope="col">Deceased</th>
                </tr>
              </thead>
              <tbody>
    
                {data && data.slice(1).map((d,index) =>{
                return(                  
                  <tr 
                  key={index} 
                  onMouseOver={()=>handleHover(d.statecode)} 
                  onMouseOut={()=>handleHover('TT')}
                  >
                      <th scope="row">{d.state}</th>
                      <td>{d.confirmed}</td>
                      <td>{d.active}</td>
                      <td>{d.recovered}</td>
                      <td>{d.deaths}</td>
                  </tr>
                )      
                })}

              </tbody>
            </table>
          </div>
          </div>
        </div>
        </div>
    )
}
