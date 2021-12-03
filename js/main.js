// import { weatherAPI, quotesAPI } from './api';
// import dotenv from 'dotenv';

// dotenv.config();

// let zipCodeButton = document.getElementById("zip-code-button");

// zipCodeButton.addEventListener("click", () => {
//   let zipCode = document.getElementById("zip-code").value;

//   weatherAPI(zipCode)
//     .then(res => {
//       // console.log(res);
//       setWeather(res.name, res.weather[0].description);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// quotesAPI()
//   .then(res => {
//     // console.log(res);
//     setQuote(res.content, res.author);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// let setWeather = (name, weather) => {
//   document.getElementById("weather-name").innerHTML = name;
//   document.getElementById("weather").innerHTML = weather;
// }
// let setQuote = (quote, author) => {
//   document.getElementById("quote").innerHTML = quote;
//   document.getElementById("quote-author").innerHTML = author;
// }