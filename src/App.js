import React, { useState, useEffect } from 'react';
import StatBox from './components/Charts/StatBox';

import Table from './components/Table/Table';
import InfoBox from './components/InfoBox/InfoBox';

import Map from './components/Map/Map';
import Loader from './Loader';
import './css/App.css';

function App() {
  const [info, setInfo] = useState([]);
  const [selectedStateInfo, setSelectedStateInfo] = useState({});
  const [weeklyData, setWeeklyData] = useState([]);
  // const[selectedState,setSelectedState]=useState('TT');

  const [loading, setLoading] = useState(true);

  const colors = ['red', 'blue', 'green', 'grey'];

  //National Level :Time series, State-wise stats and Test counts
  async function getInfo() {

    try {
      const { cases_time_series, statewise } = await (await fetch('https://api.covid19india.org/data.json')).json();

      setInfo(statewise);

      setSelectedStateInfo(statewise[0]);

      setWeeklyData(cases_time_series.slice(cases_time_series.length - 7));
      // console.log('cases_time_series: ', cases_time_series)
      setLoading(false)
    }
    catch (e) {
      console.error('There has been a problem with your fetch operation:', e);
      setLoading(true);
    }
  }


  useEffect(() => {
    getInfo();
  }, []);

  const handleHover = (statecode) => {
    //console.log(selectedStateInfo);
    setSelectedStateInfo(info.find(i => i.statecode === statecode))
  }

  if (loading) {
    return (
      <Loader></Loader>
    )
  }

  else {

    return (
      <div className="container-fluid m2">

        <div className="row">
          {/* left side */}
          <div className="col-lg-6 themed-grid-col  ">
            <div className="white">
              <h2 className="mt-4"><span className="badge badge-secondary">India Covid-19 tracker</span></h2>
              <p>Let's all pray to make our Earth <strong className="text-success">Covid-19 free </strong>soon. <strong className="text-warning">Stay Safe</strong> and <strong className="text-warning">Stay Home .</strong></p>
            </div>


            {/* Stats */}

            <StatBox
              selectedStateInfo={selectedStateInfo}
              weeklyData={weeklyData}
            ></StatBox>

            {/* table */}
            <Table
              info={info}
              handleHover={handleHover}
            ></Table>



          </div>
          {/* right side */}
          <div className="col-lg-6 themed-grid-col ">
            <div className="white">
              <h2 className="mt-4"><span className="badge badge-secondary">India Map</span></h2>
              <p> <strong className="text-primary">Hover over</strong> a state, table row, donut chart or line chart to see <strong className="text-primary">more details .</strong></p>
            </div>
            <div className="card mb-3 shadow  bg-white rounded">
              <div className="card-body ">
                <div className="row">
                  {/* infobox */}
                  <div className="col-xl-12 themed-grid-col mb-3">
                    <div className="card-group">
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
                  <div className="col-xl-12 themed-grid-col mb-3 ">
                    <div className="float-right"><p><span className="font-weight-light">Last Updated: </span> {selectedStateInfo.lastupdatedtime}</p>
                    </div>
                  </div>
                  {/* map */}
                  <div className="col-xl-12 themed-grid-col mb-3">

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
        <footer className="page-footer font-small white">
          <div className="footer-copyright text-center py-3">Amandeep Singh © 2020 Copyright</div>
        </footer>
      </div>
    )

  }
}

export default App;
