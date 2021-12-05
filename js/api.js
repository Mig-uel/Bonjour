import axios from "axios";

// WeatherAPI
// const weatherAPI = (zipCode) => {
//   let url = axios.get(`${process.env.OW_BASE}${zipCode}&appid=${process.env.OW_API_KEY}`);

//   const res = url.then(response => { return response.data; }).catch(err => { console.error(err); });

//   return res;
// };

const weatherAPI = () => {
  let url = axios.get(`${process.env.OW_BASE}11218&appid=${process.env.OW_API_KEY}`);

  const res = url.then(response => { return response.data; }).catch(err => { console.error(err); });

  return res;
};

//QuotesAPI
const quotesAPI = () => {
  let url = axios.get(`${process.env.QUOTES_BASE}`);

  const res = url.then(response => { return response.data; }).catch(err => { console.error(err); });

  return res;
};

export { weatherAPI, quotesAPI };