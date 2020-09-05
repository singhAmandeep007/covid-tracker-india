import React,{useState,useEffect} from 'react'
//import $ from "jquery";

export default function Table(props) {
  const[data,setData]=useState(props.data)

  const arr=[];
  useEffect(()=>{

    renderTable();

    // $(document).ready(function () {
    //   $('#dtBasicExample').DataTable();
    //   $('.dataTables_length').addClass('bs-select');
    //   });

  },[])




  const renderTable=(data)=>{
    console.log(data.length)
     for (let i = 1; i < data.length; i++ ) {
      arr.push(
        <tr key={i}>
        <th scope="row">{data[i].state}</th>
        <td>{data[i].confirmed}</td>
        <td>{data[i].active}</td>
        <td>{data[i].recovered}</td>
        <td>{data[i].deaths}</td>
      </tr>
      )
    }
  }

    return (
     
        <div>
           {console.log('updated')}
          <div class="card mb-3">
          <div class="card-body">
          <div class="table-responsive-xl table-wrapper-scroll-y my-custom-scrollbar">
            <table id="dtBasicExample" class="table table-striped table-bordered table-hover">
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
                <tr>
                  <th scope="row">India</th>
                  <td>{data[0].confirmed}</td>
                  <td>{data[0].active}</td>
                  <td>{data[0].recovered}</td>
                  <td>{data[0].deaths}</td>
                </tr>
                {arr}
              </tbody>
            </table>
          </div>
          </div>
        </div>
        </div>
    )
}
