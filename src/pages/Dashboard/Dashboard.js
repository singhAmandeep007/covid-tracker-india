import React, { useState, useEffect } from 'react';
import { Grid, Segment, Divider, Button, Label } from 'semantic-ui-react';
import { FaPalette } from 'react-icons/fa';
import LazyLoad from './../../hooks/LazyLoad';
import { COVID_SAMPLE_DATA } from './../../services/COVID_DATA_SAMPLE';
import { getCovidData } from './../../services/covidData.api';

import LineChart from './../../components/Charts/LineChart';
import DonutChart from './../../components/Charts/DonutChart';
import TestedChart from './../../components/Charts/TestedChart';
import StatewiseTable from './../../components/Table/Table';
import InfoBox from './../../components/InfoBox/InfoBox';
import ProgressBars from './../../components/ProgressBars/ProgressBars';
import Map from './../../components/Map/Map';
import PlaceholderComment from './../../components/PlaceholderComment/PlaceholderComment';
import PlaceholderImage from './../../components/PlaceholderImage/PlaceholderImage';

import covidLogo from './../../assets/covid-19.svg';

import chartTheme from './chartTheme';

import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
   const [statewiseInfo, setStatewiseInfo] = useState(null);
   const [selectedStateInfo, setSelectedStateInfo] = useState(null);
   const [casesInfo, setCasesInfo] = useState(null);
   const [testSeriesInfo, setTestSeriesInfo] = useState(null);
   const [colorPalette, setColorPalette] = useState({
      ...chartTheme['first'],
   });
   const [loading, setLoading] = useState(true);

   async function getInfo() {
      try {
         let response = await getCovidData();
         //const response = COVID_SAMPLE_DATA;
         if (!response.ok) {
            throw new Error(`Error!: Status Code: ${response.status} `);
         }
         const { cases_time_series, statewise, tested } = await response.json();

         setStatewiseInfo(statewise);

         setSelectedStateInfo(statewise[0]);

         setCasesInfo(cases_time_series);

         setTestSeriesInfo(tested);

         setLoading(false);
      } catch (e) {
         console.error('There has been a problem with your fetch operation:');
         // NOTE: if fetch error still show some data
         setStatewiseInfo(COVID_SAMPLE_DATA.statewise);

         setSelectedStateInfo(COVID_SAMPLE_DATA.statewise[0]);

         setCasesInfo(COVID_SAMPLE_DATA.cases_time_series);

         setTestSeriesInfo(COVID_SAMPLE_DATA.tested);

         setLoading(false);

         // setLoading(true);
      }
   }

   useEffect(() => {
      getInfo();
   }, []);

   let timerId = -1;
   const handleHover = (statecode) => {
      if (timerId !== -1) {
         clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
         setSelectedStateInfo(
            statewiseInfo.find((i) => i.statecode === statecode)
         );
      }, 200);
   };

   const changeTheme = (themeName) => {
      setColorPalette(chartTheme[themeName]);
   };

   return (
      <div id="dashboard">
         <div className="ui inverted vertical masthead center aligned segment">
            <img
               className="ui tiny centered image"
               src={covidLogo}
               alt="icon"
               width="72"
               height="57"
               style={{ marginBottom: '15px' }}
            />

            <div className="ui text container">
               <h1 className="ui inverted header">India's Covid-19 Tracker</h1>
               <p>
                  Below are some interactive charts, information tiles, map
                  ,table etc. which graphically represents real-time accurate
                  statistics of India.
               </p>
               <div className="ui divider"></div>

               <p>
                  <a
                     className="ignored"
                     href="https://api.covid19india.org"
                     target="blank"
                  >
                     <i className="attention icon"></i>
                     Data Source
                  </a>
               </p>

               <Button animated primary as={Link} to="/">
                  <Button.Content visible>Home</Button.Content>
                  <Button.Content hidden>
                     <i className="arrow circle left icon"></i>
                  </Button.Content>
               </Button>
            </div>

            <Label.Group
               circular
               style={{ cursor: 'pointer', marginTop: '2em' }}
            >
               <Label>
                  {' '}
                  <FaPalette />
               </Label>

               <Label color={'red'} onClick={() => changeTheme('first')}>
                  1
               </Label>
               <Label color={'blue'} onClick={() => changeTheme('second')}>
                  2
               </Label>
               <Label color={'olive'} onClick={() => changeTheme('third')}>
                  3
               </Label>
               <Label color={'pink'} onClick={() => changeTheme('fourth')}>
                  4
               </Label>
               <Label color={'yellow'} onClick={() => changeTheme('fifth')}>
                  5
               </Label>
            </Label.Group>
         </div>

         <Grid stackable verticalAlign="top" padded>
            <Grid.Row centered columns={2}>
               <Grid.Column width={8}>
                  <Grid.Row style={{ margin: '1em 0em' }}>
                     <Segment raised>
                        {loading ? (
                           <PlaceholderImage />
                        ) : (
                           <DonutChart
                              selectedStateInfo={selectedStateInfo}
                              colorPalette={colorPalette}
                           ></DonutChart>
                        )}
                     </Segment>
                  </Grid.Row>
                  <Grid.Row style={{ margin: '1em 0em' }}>
                     <Segment raised>
                        {loading ? (
                           <PlaceholderImage />
                        ) : (
                           <LazyLoad>
                              <StatewiseTable
                                 selectedStateInfo={selectedStateInfo}
                                 statewiseInfo={statewiseInfo}
                                 handleHover={handleHover}
                                 colorPalette={colorPalette}
                              ></StatewiseTable>
                           </LazyLoad>
                        )}
                     </Segment>
                  </Grid.Row>
               </Grid.Column>
               <Grid.Column width={8}>
                  <Grid.Row>
                     <Segment raised style={{ margin: '1em 0em' }}>
                        {loading ? (
                           <PlaceholderImage />
                        ) : (
                           <LazyLoad>
                              <span className="ui red ribbon label">
                                 Statistics
                              </span>
                              <div className="ui top right attached label">
                                 Last Updated:{' '}
                                 <div className="detail">
                                    {selectedStateInfo.lastupdatedtime}
                                 </div>
                              </div>

                              <div className="ui horizontal divider">
                                 {selectedStateInfo.state}
                              </div>

                              <Grid columns={1} stackable padded="vertically">
                                 <Grid.Row
                                    centered
                                    columns={2}
                                    verticalAlign="middle"
                                 >
                                    <Grid.Column width={8}>
                                       <InfoBox
                                          title={'CONFIRMED'}
                                          total={selectedStateInfo.confirmed}
                                          color={colorPalette.confirmed}
                                       ></InfoBox>

                                       <InfoBox
                                          title={'ACTIVE'}
                                          total={selectedStateInfo.active}
                                          color={colorPalette.active}
                                       ></InfoBox>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                       <InfoBox
                                          title={'RECOVERED'}
                                          total={selectedStateInfo.recovered}
                                          color={colorPalette.recovered}
                                       ></InfoBox>

                                       <InfoBox
                                          title={'DECEASED'}
                                          total={selectedStateInfo.deaths}
                                          color={colorPalette.deaths}
                                       ></InfoBox>
                                    </Grid.Column>
                                 </Grid.Row>
                              </Grid>
                           </LazyLoad>
                        )}
                     </Segment>
                     <Segment raised style={{ margin: '1em 0em' }}>
                        {loading ? (
                           <PlaceholderComment num={4} />
                        ) : (
                           <LazyLoad>
                              <ProgressBars
                                 selectedStateInfo={selectedStateInfo}
                                 colorPalette={colorPalette}
                              />
                           </LazyLoad>
                        )}
                     </Segment>
                  </Grid.Row>
                  <Grid.Row style={{ margin: '1em 0em' }}>
                     <Segment raised>
                        {loading ? (
                           <PlaceholderImage />
                        ) : (
                           <LazyLoad>
                              <Map
                                 statewiseInfo={statewiseInfo}
                                 handleHover={handleHover}
                                 colorPalette={colorPalette}
                              ></Map>
                           </LazyLoad>
                        )}
                     </Segment>
                  </Grid.Row>
               </Grid.Column>
            </Grid.Row>
         </Grid>

         <Grid stackable verticalAlign="top">
            <Grid.Row centered columns={2}>
               <Divider horizontal style={{ margin: '0px 5em' }}>
                  <h3>Timeline Series</h3>
               </Divider>
               <Grid.Column width={7} style={{ margin: '1em 0em' }}>
                  <Segment raised>
                     {loading ? (
                        <PlaceholderImage />
                     ) : (
                        <LazyLoad rootMargin={'200px'}>
                           <TestedChart testSeriesInfo={testSeriesInfo} />
                        </LazyLoad>
                     )}
                  </Segment>
               </Grid.Column>
               <Grid.Column width={7} style={{ margin: '1em 0em' }}>
                  <Segment raised>
                     {loading ? (
                        <PlaceholderImage />
                     ) : (
                        <LazyLoad rootMargin={'200px'}>
                           <LineChart casesInfo={casesInfo}></LineChart>
                        </LazyLoad>
                     )}
                  </Segment>
               </Grid.Column>
            </Grid.Row>
         </Grid>

         <div style={{ margin: '0px 5em', fontSize: '0.5rem' }}>
            <Divider horizontal>
               <img
                  className="ui tiny centered image"
                  src={covidLogo}
                  alt="icon"
                  style={{ width: '40px', marginBottom: '5px' }}
               />
               Covid-19 Tracker
            </Divider>
            <div role="list" className="ui horizontal right floated list">
               <a
                  role="listitem"
                  className="item"
                  target="blank"
                  href="https://github.com/amandeepmicro/Covid-19-Tracker_India"
               >
                  GitHub
               </a>
               <a
                  role="listitem"
                  className="item"
                  target="blank"
                  href="https://www.linkedin.com/in/amandeep-singh-0803/"
               >
                  LinkedIn
               </a>
            </div>
            <div role="list" className="ui horizontal list">
               <span role="listitem" className="item">
                  By Amandeep © 2020
               </span>
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
