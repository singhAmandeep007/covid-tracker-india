import React from "react";
import { Helmet } from "react-helmet-async";

const schemaMarkup = () => ({
  "@context": "http://schema.org/",
  "@type": "NewsMediaOrganization",
  name: "Covid-19 Information, Useful Links and Live Dashboard",
  alternateName: "COVID-19 Tracker",
  url: "https://singhamandeep007.github.io/covid-tracker-india",
  description: "Provides covid related information and real-time live tracking of Coronavirus cases in India.",
  identifier: "https://singhamandeep007.github.io/covid-tracker-india",
});

const HelmetDefault = (props) => (
  <Helmet>
    <title
      itemProp="name"
      lang="en"
    >
      {props.title} | CovidTracker
    </title>
    <meta
      name="description"
      content="Covid Information page and Dashboard to track the spread of Coronavirus."
    />
    <meta
      name="keywords"
      content="coronavirus,corona,covid,covid19,covid-19,covid india,india,virus,world"
    />
  </Helmet>
);

export { schemaMarkup, HelmetDefault };
