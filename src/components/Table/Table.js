import React from 'react';
import CountUp from "react-countup";
import './Table.css';

export default function Table({data,handleHover}) {
  
    return (
     
        <div>
          <div class="card mb-3 shadow  bg-white rounded">
          <div class="card-body">
          <div class="table-responsive-xl table-wrapper-scroll-y my-custom-scrollbar">
            <table id="dtBasicExample" class="table table-bordered table-hover" >
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
                      <td>{isFinite(d.confirmed)?<CountUp 
                          end= {Number(d.confirmed)}     
                          duration={1}
                          separator={","}
                          ></CountUp>:0}</td>
                      <td>{isFinite(d.active)?<CountUp 
                          end= {Number(d.active)}     
                          duration={1}
                          separator={","}
                          ></CountUp>:0}</td>
                      <td>{isFinite(d.recovered)?<CountUp 
                          end= {Number(d.recovered)}     
                          duration={1}
                          separator={","}
                          ></CountUp>:0}</td>
                      <td>{isFinite(d.deaths)?<CountUp 
                          end= {Number(d.deaths)}     
                          duration={1}
                          separator={","}
                          ></CountUp>:0}</td>
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
