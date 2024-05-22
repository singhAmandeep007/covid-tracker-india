export function getCovidData() {
  const api1 = "https://data.covid19india.org/data.json";
  const api2 = process.env.REACT_APP_PUBLIC_URL + "data.json";

  return Promise.allSettled([
    fetch(api1).then((response) => {
      if (!response.ok) {
        throw new Error("First API failed");
      }
      return response.json();
    }),
    fetch(api2).then((response) => {
      if (!response.ok) {
        throw new Error("Second API failed");
      }
      return response.json();
    }),
  ]).then((results) => {
    const [result1, result2] = results;

    if (result1.status === "fulfilled") {
      return result1.value;
    } else if (result2.status === "fulfilled") {
      return result2.value;
    } else {
      throw new Error("Both APIs failed");
    }
  });
}
