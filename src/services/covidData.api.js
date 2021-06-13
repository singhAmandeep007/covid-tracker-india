export function getCovidData(){
  return fetch('https://api.covid19india.org/data.json');
}