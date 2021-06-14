import React, { useState, useEffect } from 'react';
import {
  Grid,
  Segment,
  Label,
  Divider
} from 'semantic-ui-react'
import {getCovidData} from './services/covidData.api';

import LineChart from './components/Charts/LineChart';
import DonutChart from './components/Charts/DonutChart';
import TestedChart from './components/Charts/TestedChart';
import StatewiseTable from './components/Table/Table';
import InfoBox from './components/InfoBox/InfoBox';
import ProgressBars from './components/ProgressBars/ProgressBars'
import Map from './components/Map/Map';
import Loader from './Loader';

import covidLogo from './covid-19.svg';
import 'semantic-ui-css/semantic.min.css';
import './css/App.css';

function App() {
  const [statewiseInfo, setStatewiseInfo] = useState([]);
  const [selectedStateInfo, setSelectedStateInfo] = useState({});
  const [casesInfo, setCasesInfo] = useState([]);
  const [testSeriesInfo,setTestSeriesInfo] = useState([])
  const [colorPalette,setColorPalette]=useState({
    confirmed:{
      type:"confirmed",
      color:"#db2828",
      shadeLight:"#fbedec",
      shadeDark:"#db2828",
      name:"red"
    },
    active:{
      type:'active',
      color:"#2185d0",
      shadeLight:"#ecf5fc",
      shadeDark:"#2185d0",
      name:"blue"
    },
    recovered:{
      type:'recovered',
      color:"#21ba45",
      shadeLight:"#ecfcf1",
      shadeDark:"#21ba45",
      name:"green"
    },
    deaths:{
      type:'deaths',
      color:"#767676",
      shadeLight:"#f4f4f4",
      shadeDark:"#767676",
      name:"grey"
    }
  })
  const [loading, setLoading] = useState(true);

  async function getInfo() {

    try {
      const response =  await getCovidData();
      if(!response.ok) throw new Error(`Error!: Status Code: ${response.status} `);

      const { cases_time_series, statewise,tested } = await response.json();

      setStatewiseInfo(statewise);

      setSelectedStateInfo(statewise[0]);

      setCasesInfo(cases_time_series);

      setTestSeriesInfo(tested)
      
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

  let timerId = -1;
  const handleHover = (statecode) => {
    if(timerId!==-1){
      clearTimeout(timerId)
    }
    timerId=setTimeout(()=>{
      setSelectedStateInfo(statewiseInfo.find(i => i.statecode === statecode))
    },200)
  }

  if (loading) {
    return (
      <Loader></Loader>
    )
  }

  else {

    return (
      <div>

        <div className="ui inverted vertical masthead center aligned segment">
          
          <img className="ui tiny centered image" src={covidLogo} alt="icon" width="72" height="57" style={{marginBottom:"15px"}}/>

          <div className="ui text container">
            <h1 className="ui inverted header">
              India's Covid-19 Tracker 
            </h1>
            <p>
              Below are some interactive charts, information tiles, map ,table etc. which graphically represents real-time accurate statistics of India.
            </p>
            <div className="ui divider"></div>

              <p>
                <a className="ignored" href="https://api.covid19india.org" target="blank">
                  <i className="attention icon"></i>
                  Data Source
                </a>

                <span style={{marginLeft:"15px"}}>
                  <i className="sync icon"></i>
                  Last Updated: {selectedStateInfo.lastupdatedtime}
                </span> 
              </p>  
          </div>

        </div>

        
        <Grid stackable verticalAlign="top" padded>
          <Grid.Row centered columns={2}  >
            <Grid.Column width={7} >
              <Grid.Row >
                <Segment raised style={{margin:"1em 0em"}}>
                  <Label color='red' ribbon>
                    Donut Chart
                  </Label>
                  <Divider horizontal>{selectedStateInfo.state}</Divider>
                  <DonutChart
                    selectedStateInfo={selectedStateInfo}
                    colorPalette={colorPalette}
                  ></DonutChart>
                </Segment>
              </Grid.Row>
              <Grid.Row >
              <Segment raised style={{margin:"1em 0em"}}>
                  <Label color='red' ribbon>
                    Table
                  </Label>
                  <Divider horizontal>{selectedStateInfo.state}</Divider>
                  <div style={{ overflow: 'auto',height:'700px' ,margin:'10px 0px'}}>
                    <StatewiseTable
                      statewiseInfo={statewiseInfo}
                      handleHover={handleHover}
                    ></StatewiseTable>
                  </div>
                  </Segment>
            
              </Grid.Row>
              
            </Grid.Column>
            <Grid.Column  width={7}>
              <Grid.Row>
                <Segment raised style={{margin:"1em 0em"}}>
                    <Label  color='red' ribbon>
                      Statistics
                    </Label>
                    <Divider horizontal>{selectedStateInfo.state}</Divider>
                    <Grid columns={4} stackable padded="vertically">
                      <Grid.Row verticalAlign="middle">
                        <Grid.Column>
                        <InfoBox
                          title={'CONFIRMED'}
                          total={selectedStateInfo.confirmed}
                          color={colorPalette.confirmed.name}
                        ></InfoBox>
                        </Grid.Column>
                        <Grid.Column>
                        <InfoBox
                          title={'ACTIVE'}
                          total={selectedStateInfo.active}
                          color={colorPalette.active.name}
                        ></InfoBox>
                        </Grid.Column>
                        <Grid.Column>
                        <InfoBox
                          title={'RECOVERED'}
                          total={selectedStateInfo.recovered}
                          color={colorPalette.recovered.name}
                        ></InfoBox>
                      
                        </Grid.Column>
                        <Grid.Column>
                        <InfoBox
                          title={'DECEASED'}
                          total={selectedStateInfo.deaths}
                          color={colorPalette.deaths.name}
                        ></InfoBox>
                        </Grid.Column>

                      </Grid.Row>
                    </Grid>
                </Segment>
                <Segment raised style={{margin:"1em 0em"}}>
                  <Label  color='red' ribbon>
                    Progress Bars
                  </Label>
                  <Divider horizontal>{selectedStateInfo.state}</Divider>
                  <ProgressBars
                    selectedStateInfo={selectedStateInfo}
                    colorPalette={colorPalette}
                  />
                </Segment>
              
              </Grid.Row>
              <Grid.Row>

                <Segment raised style={{margin:"1em 0em"}}>
                  <Label color='red' ribbon>
                      Map
                  </Label>
                  <Map
                    statewiseInfo={statewiseInfo}
                    handleHover={handleHover}
                    colorPalette={colorPalette}
                  ></Map>
                </Segment>
              
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid stackable verticalAlign='top'>
          <Grid.Row centered columns={2} >
            <Grid.Column width={7}>
              <Segment raised style={{margin:"1em 0em"}}>
                <Label color='red' ribbon>
                  Tested Timeline Series
                </Label>
                <Divider horizontal>Tested Timeline Series</Divider>
                <TestedChart
                  testSeriesInfo={testSeriesInfo}
                  />
              </Segment>
            
            </Grid.Column>
            <Grid.Column width={7}>
              <Segment raised style={{margin:"1em 0em"}}>
                  <Label color='red' ribbon>
                  Cases Timeline Series
                  </Label>
                  <Divider horizontal>Cases Timeline Series</Divider>
                <LineChart
                  casesInfo={casesInfo}
                  colorPalette={colorPalette}
                ></LineChart>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          
        </Grid>
      
        <div style={{margin:"0px 3em"}}>
        <Divider horizontal>Covid-19 Tracker</Divider>
          <div role="list" className="ui horizontal right floated list">
            <a role="listitem" className="item" target="blank" href="https://github.com/amandeepmicro/Covid-19-Tracker_India">
              GitHub
            </a>
            <a role="listitem" className="item" target="blank" href="https://www.linkedin.com/in/amandeep-singh-0803/">
              LinkedIn
            </a>
          </div>
          <div role="list" className="ui horizontal list">
            <span role="listitem" className="item">
              Made By Amandeep Singh © 2020 
            </span>
          </div>
        </div>
      
      </div>
    )

  }
}

export default App;
