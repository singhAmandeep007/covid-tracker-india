import React,{useState,useEffect} from 'react';
import StatBox from './components/Charts/StatBox';

import Table from './components/Table/Table';
import InfoBox from './components/InfoBox/InfoBox';

import Map from './components/Map/Map';
import Loader from './Loader';
import './css/App.css';

function App() {
  const[info,setInfo]=useState([]);
  const[timelineInfo,setTimelineInfo]=useState([]);
  const[selectedStateInfo,setSelectedStateInfo]=useState({});

  // const[selectedState,setSelectedState]=useState('TT');

  const[loading,setLoading]=useState(true);

  const colors=['red','blue','green','grey'];

  //National Level :Time series, State-wise stats and Test counts
  async function getInfo() {
    
    try {
      const response = await fetch('https://api.covid19india.org/data.json');
      const data = await response.json();
      setInfo(data.statewise);
      setSelectedStateInfo(data.statewise[0]);
      console.log(data)
      
    }
    catch(e) {
      console.error('There has been a problem with your fetch operation:', e);
      setLoading(true);
    }
  }

  //State Level : Daily changes
  async function getTimelineInfo() {
    try {
      const response = await fetch('https://api.covid19india.org/states_daily.json');
      const data = await response.json();
      setTimelineInfo(data.states_daily);
      setLoading(false)
      console.log(data)
    }
    catch(e) {
      console.error('There has been a problem with your fetch operation:', e);
      setLoading(true);
    }
  }
  
  useEffect(() => {
      getInfo();
      getTimelineInfo();
   }, []);

  const handleHover=(statecode)=>{
    setSelectedStateInfo(info.find(i => i.statecode === statecode))  
  }

      if(loading){
        return(
          <Loader></Loader>
        )       
      }

      else{
      
        return(
          <div className="container-fluid m2">

            <div className="row">
              {/* left side */}
              <div  className="col-lg-6 themed-grid-col  ">
              <div className="white">
              <h2 className="mt-4"><span class="badge badge-secondary">India Covid-19 tracker</span></h2>
              <p>Let's all pray to make out Earth <strong class="text-success">Covid-19 free </strong>soon. <strong class="text-warning">Stay Safe</strong> and <strong class="text-warning">Stay Home .</strong></p>
              </div>
              
             
              {/* Stats */}

              <StatBox 
               selectedStateInfo={selectedStateInfo}
               timelineInfo={timelineInfo}
              ></StatBox>

              {/* table */}
               <Table  
               info={info}
               handleHover={handleHover}
              ></Table> 
              
             
             
              </div>
              {/* right side */}
              <div  className="col-lg-6 themed-grid-col ">
              <div className="white">
              <h2 class="mt-4"><span class="badge badge-secondary">India Map</span></h2>
              <p> <strong class="text-primary">Hover over</strong> a state, table row, donut chart or line chart to see <strong class="text-primary">more details .</strong></p>
              </div>
              <div class="card mb-3 shadow  bg-white rounded">               
                <div class="card-body ">
                  <div class="row">
                    {/* infobox */}
                    <div class="col-xl-12 themed-grid-col mb-3">
                      <div class="card-group">
                        <InfoBox 
                          title={'CONFIRMED'}
                          total={selectedStateInfo.confirmed}
                          color={colors[0]}
                          ></InfoBox>
                        <InfoBox
                          title={'ACTIVE'}
                          total={selectedStateInfo.active}
                          color={colors[1]}
                          ></InfoBox>
                        <InfoBox
                          title={'RECOVERED'}
                          total={selectedStateInfo.recovered}
                          color={colors[2]}
                          ></InfoBox>
                        <InfoBox
                          title={'DECEASED'}
                          total={selectedStateInfo.deaths}
                          color={colors[3]}
                          ></InfoBox>
                      </div>                   
                    </div>
                    {/* last update */}
                    <div class="col-xl-12 themed-grid-col mb-3 ">
                      <div class="float-right"><p><span className="font-weight-light">Last Updated: </span> {selectedStateInfo.lastupdatedtime}</p>
                      </div>
                    </div>
                    {/* map */}
                    <div class="col-xl-12 themed-grid-col mb-3">

                          <Map
                          info={info}
                          handleHover={handleHover}
                          ></Map>
                      
                    </div>
                  
                  </div>
                
                </div>
              </div>

              </div>
            </div>
            <footer class="page-footer font-small white">
                <div class="footer-copyright text-center py-3">Amandeep Singh © 2020 Copyright</div>
            </footer>
          </div>
        )
      
      }
}

export default App;
