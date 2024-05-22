export function stringToDate(_date, _format, _delimiter) {
  let formatLowerCase = _format.toLowerCase();
  let formatItems = formatLowerCase.split(_delimiter);
  let dateItems = _date.split(_delimiter);
  let monthIndex = formatItems.indexOf("mm");
  let dayIndex = formatItems.indexOf("dd");
  let yearIndex = formatItems.indexOf("yyyy");
  let month = parseInt(dateItems[monthIndex]);
  month -= 1;
  let formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
  return formatedDate;
}

export function numbersToPercentage(arr) {
  let sum = arr.map((v) => parseInt(v)).reduce((a, b) => a + b, 0);
  let percentArr = arr.map((v) => {
    return ((v * 100) / sum).toFixed(1);
  });
  return percentArr;
}
