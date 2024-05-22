// Reusable and data driven components
import svg1 from "./../../images/svg-1.svg";
import svg2 from "./../../images/svg-2.svg";
import svg5 from "./../../images/img-5.png";
import svg6 from "./../../images/svg-5.svg";

import NAV_LINKS_DATA from "./../../common/NavLinksData";

// NOTE: these object define the properties which we can use to customise our layout and color
export const homeObjOne = {
  id: NAV_LINKS_DATA[1]["to"],
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  btnLink: "https://www.who.int/health-topics/coronavirus#tab=tab_1",
  topLine: "What is covid-19 ?",
  headline: "COVID-19 is a disease caused by the SARS-CoV-2 virus.",
  description:
    "Early discovered in the 1960s, the name of this virus comes from the crown-like spikes that it has its surface. The word corona came from the Latin word “Crown.” Coronaviruses are a large group of viruses that infect animals and mammals like bats, pigs. Scientists call them zoonotic because they get a transfer from animals to humans.",
  buttonLabel: "Read More",
  imgStart: false,
  img: svg1,
  alt: NAV_LINKS_DATA[0]["to"],
  primary: true,
  darkText: false,
};
export const homeObjTwo = {
  id: NAV_LINKS_DATA[2]["to"],
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  btnLink: "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html",
  topLine: "What are the symptoms ?",
  headline: "COVID-19 affects different people in different ways.",
  description:
    "Most common symptoms are fever, cough, tiredness, loss of taste or smell. Less common symptoms are sore throat, headache, aches and pains, diarrhoea, a rash on skin, or discolouration of fingers or toes, red or irritated eyes. Serious symptoms are difficulty breathing or shortness of breath loss of speech or mobility, or confusion chest pain.Seek immediate medical attention if you have serious symptoms.",
  buttonLabel: "Read More",
  imgStart: true,
  img: svg6,
  alt: NAV_LINKS_DATA[1]["to"],
  primary: true,
  darkText: true,
};
export const homeObjThree = {
  id: NAV_LINKS_DATA[3]["to"],
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "What are the Guidelines ?",
  btnLink: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",
  headline: "Stay aware of the latest COVID-19 information.",
  description: `Keep yourself and others safe.Get vaccinated as soon as it’s your turn and follow local guidance on vaccination. Keep physical distance of at least 1 metre from others. Clean your hands frequently with alcohol-based hand rub or soap and water.If you develop symptoms or test positive for COVID-19, self-isolate until you recover.Avoid the 3Cs: spaces that are closed, crowded or involve close contact. Wear a properly fitted mask when physical distancing is not possible and in poorly ventilated settings.`,
  buttonLabel: "Read More",
  imgStart: false,
  img: svg2,
  alt: NAV_LINKS_DATA[2]["to"],
  primary: true,
  darkText: false,
};

export const homeObjFour = {
  id: NAV_LINKS_DATA[4]["to"],
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  btnLink: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines/advice",
  topLine: "Getting Vaccinated",
  headline: "There are several safe and effective vaccines to prevent COVID-19.",
  description: `The COVID-19 vaccines are safe for most people 18 years and older, including those with pre-existing conditions of any kind, including auto-immune disorders. These conditions include: hypertension, diabetes, asthma, pulmonary, liver and kidney disease, as well as chronic infections that are stable and controlled. Check when you should come in for a second dose – if needed. Most of the vaccines available are two-dose vaccines. Second doses help boost the immune response and strengthen immunity.In most cases, minor side effects are normal.`,
  buttonLabel: "Read More",
  imgStart: true,
  img: svg5,
  alt: NAV_LINKS_DATA[3]["to"],
  primary: true,
  darkText: true,
};
