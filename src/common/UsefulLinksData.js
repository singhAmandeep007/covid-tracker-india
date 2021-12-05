import { v4 as uuidv4 } from 'uuid';
const USEFUL_LINKS_DATA = [
   {
      id: uuidv4(),
      FooterTitle: 'India Govt.',
      links: [
         {
            id: uuidv4(),
            href: 'https://www.mygov.in/covid-19',
            ariaLabel: 'MyGov',
            text: 'MyGov Covid19',
         },
         {
            id: uuidv4(),
            href: 'https://www.mohfw.gov.in/',
            ariaLabel: 'mohfw',
            text: 'MoHFW',
         },
         {
            id: uuidv4(),
            href: 'https://delhi.gov.in/',
            ariaLabel: 'DelhiGovt.',
            text: 'Delhi Govt.',
         },
         {
            id: uuidv4(),
            href: 'https://www.icmr.gov.in/',
            ariaLabel: 'icmr',
            text: 'ICMR',
         },
         {
            id: uuidv4(),
            href: 'https://covid19.india.gov.in/',
            ariaLabel: 'helpline',
            text: 'Helpline',
         },
      ],
   },
   {
      id: uuidv4(),
      FooterTitle: 'WHO',
      links: [
         {
            id: uuidv4(),
            href:
               'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters',
            ariaLabel: 'Mythbusters',
            text: 'Mythbusters',
         },
         {
            id: uuidv4(),
            href:
               'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/technical-guidance',
            ariaLabel: 'Technical Guidance.',
            text: 'Technical Guidance',
         },
         {
            id: uuidv4(),
            href:
               'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public',
            ariaLabel: 'Advice for the public',
            text: 'Advice for the public',
         },
         {
            id: uuidv4(),
            href:
               'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov',
            ariaLabel: 'Research',
            text: 'Research',
         },
         {
            id: uuidv4(),
            href:
               'https://www.who.int/en/activities/tracking-SARS-CoV-2-variants/',
            ariaLabel: 'SARS-CoV-2 variants',
            text: 'SARS-CoV-2 variants',
         },
      ],
   },
   {
      id: uuidv4(),
      FooterTitle: 'CDC',
      links: [
         {
            id: uuidv4(),
            href: 'https://www.cdc.gov/coronavirus/2019-ncov/',
            ariaLabel: 'ncov',
            text: "What's Covid",
         },
         {
            id: uuidv4(),
            href: 'https://www.cdc.gov/coronavirus/2019-nCoV/hcp/index.html',
            ariaLabel: 'Healthcare Workers',
            text: 'Healthcare Workers',
         },
         {
            id: uuidv4(),
            href:
               'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html',
            ariaLabel: 'vaccine.',
            text: 'Vaccine',
         },
         {
            id: uuidv4(),
            href:
               'https://www.cdc.gov/coronavirus/2019-ncov/science/science-agenda-covid19.html',
            ariaLabel: 'Science Agenda',
            text: 'Science Agenda',
         },
         {
            id: uuidv4(),
            href:
               'https://www.cdc.gov/coronavirus/2019-ncov/travelers/index.html',
            ariaLabel: 'Travel',
            text: 'Travel',
         },
      ],
   },
];

export default USEFUL_LINKS_DATA;
