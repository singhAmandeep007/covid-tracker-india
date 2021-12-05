import React from 'react';
import { Helmet } from 'react-helmet';

const schemaMarkup = () => ({
  '@context': 'http://schema.org/',
  '@type': 'NewsMediaOrganization',
  name: 'Coronavirus World & India Live Dashboard',
  alternateName: 'COVID-19 Tracker',
  url: 'https://covidindia2020.web.app/',
  description:
    'Provides real-time live tracking of Coronavirus cases in World & India.',
  identifier: 'https://covidindia2020.web.app/',
});

const HelmetDefault = (props) => (
  <Helmet>
    <title itemProp="name" lang="en">
      {props.title} | Live Coronavirus Tracker
    </title>
    <meta
      name="description"
      content="Dashboard to track the spread of Coronavirus"
    />
    <meta
      name="keywords"
      content="coronavirus,corona,covid,covid19,covid-19,covid india,india,virus,world"
    />
  </Helmet>
);

export { schemaMarkup, HelmetDefault };
