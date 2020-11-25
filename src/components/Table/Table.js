import React, { useEffect } from 'react';
import './Table.css';

export default function Table({ info, handleHover }) {

  //console.log(info)
  useEffect(() => { }, [info]);
  return (
    <div>
      <div className="card mb-3 shadow bg-white rounded">
        <div className="card-body">
          <div className="table-responsive-xl table-wrapper-scroll-y my-custom-scrollbar">
            <table id="dtBasicExample" className="table table-bordered table-hover" >
              <thead className="thead-dark">
                <tr>
                  <th scope="col">State/UT</th>
                  <th scope="col">Confirmed</th>
                  <th scope="col">Active</th>
                  <th scope="col">Recovered</th>
                  <th scope="col">Deceased</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  key={"aja2"}
                >
                  <th scope="row">Total India</th>
                  <td>{(info[0].confirmed)}</td>
                  <td>{(info[0].active)}</td>
                  <td>{(info[0].recovered)}</td>
                  <td>{(info[0].deaths)}</td>
                </tr>
                {info && info.slice(1).map((d, index) => {
                  return (
                    <tr
                      key={index}
                      onMouseOver={() => handleHover(d.statecode)}
                      onMouseOut={() => handleHover('TT')}
                    >
                      <th scope="row">{d.state}</th>
                      <td>{(d.confirmed)}</td>
                      <td>{(d.active)}</td>
                      <td>{(d.recovered)}</td>
                      <td>{(d.deaths)}</td>
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
