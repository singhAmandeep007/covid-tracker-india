import { v4 as uuidv4 } from 'uuid';

const questions = [
   {
      id: uuidv4(),
      title: 'Should I get a COVID-19 vaccine?',
      info:
         'Yes. Three COVID-19 vaccines have been authorized for emergency use among specific age groups by the U.S. Food and Drug Administration (FDA), and now the Pfizer vaccine has received full FDA approval. Johns Hopkins Medicine views all authorized and approved COVID-19 vaccines as highly effective at preventing serious disease, hospitalization and death from COVID-19.',
   },
   {
      id: uuidv4(),
      title:
         'What’s the difference between the new coronavirus and other coronaviruses?',
      info:
         'There are many different kinds of coronavirus. Some only affect animals. Some have been circulating among human beings for years, causing respiratory illness and colds. Others have caused small, severe human disease outbreaks in the past, such as the coronaviruses that caused severe acute respiratory syndrome (SARS) in 2003 and Middle East respiratory syndrome (MERS) in 2012. The new coronavirus is different from these, and was first identified in December 2019.',
   },
   {
      id: uuidv4(),
      title: 'Do COVID-19 cases decline when it gets warm outside?',
      info:
         'While some viral illnesses, like the flu, seem to be less common in warmer months, it is still possible to catch them during that time. Researchers are exploring the effects of temperature, ventilation and weather on the spread of the coronavirus. Regardless of the season, people gathering indoors can spread the coronavirus.',
   },
   {
      id: uuidv4(),
      title: 'Is the coronavirus airborne?',
      info:
         'Yes, the coronavirus can be transmitted through the air by tiny respiratory particles that contain the virus. These infectious particles are dispersed into the air when a person carrying the coronavirus breathes, talks, sings, coughs or sneezes. The CDC has updated its information on airborne spread of the coronavirus.',
   },
   {
      id: uuidv4(),
      title: 'Can you catch the coronavirus from surfaces?',
      info:
         'Although the coronavirus weakens and dies over time outside the human body, studies suggest it can live on surfaces for a few hours or up to several days, depending on the surface, temperature and other environmental factors. For instance, a small amount of the coronavirus is detectable on plastic surfaces for up to three days, on stainless steel for up to two days and up to one day on cardboard, but it’s at less than 0.1% of the starting virus material.',
   },
];

export default questions;
