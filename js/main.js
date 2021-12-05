import { weatherAPI, quotesAPI } from './api';
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

// let setWeather = (name, weather) => {
//   document.getElementById("weather-name").innerHTML = name;
//   document.getElementById("weather").innerHTML = weather;
// }

weatherAPI()
  .then(res => {
    console.log(res);
    // Returns a kelvin temperature so we need to convert it to fahrenheit and round it to nearest whole number (Math.round) and then convert it to a string (toFixed(0)) and then add the '°' symbol to the end of the string.
    setWeather(res.name, res.weather[0].icon, res.main.temp, res.main.temp_max, res.main.temp_min);
  })
  .catch(err => {
    console.log(err);
  });

let setWeather = (name, weatherIcon, temp, hi, lo) => {
  document.getElementById("location").innerHTML = name;
  document.getElementById("weather-icon").src = weatherIcon;
  let src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  document.getElementById("weather-icon").setAttribute("src", src);

  // Convert Kelvin to fahrenheit and round it to nearest whole number (Math.round) and then convert it to a string (toFixed(0)) and then add the '°' symbol to the end of the string.
  temp = Math.round((temp * 9) / 5 - 459.67).toFixed(0);

  document.getElementById("temperature").innerHTML = `${temp}°F`;

  hi = Math.round((hi * 9) / 5 - 459.67).toFixed(0);
  lo = Math.round((lo * 9) / 5 - 459.67).toFixed(0);

  document.getElementById("hi").innerHTML = `High: ${hi}°F`;
  document.getElementById("lo").innerHTML = `Low: ${lo}°F`;
};

quotesAPI()
  .then(res => {
    // console.log(res);
    if (!res)
      setQuote("No quote found!", "No author found!");
    else
      setQuote(res.content, res.author);
  })
  .catch(err => {
    console.log(err);
  });

let setQuote = (quote, author) => {
  document.getElementById("quote-text").innerHTML = quote;
  document.getElementById("quote-author-text").innerHTML = author;
}