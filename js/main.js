import { weatherAPI, quotesAPI, getCookie } from './api';
import { getUserInfo } from './userInfo';

// import dotenv from 'dotenv';
// dotenv.config();

if (!(document.cookie))
  getUserInfo();
else {
  let cookieArray = document.cookie.split(';');
  let cookie = cookieArray[0].split('=');
  let user = cookie[1];
  document.getElementById("name-text").innerHTML = user;
}

getCookie()
  .then(cookie => {
    weatherAPI(cookie)
      .then(res => {
        // console.log(res);
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

      temp = Math.round((temp * 9) / 5 - 459.67).toFixed(0);

      document.getElementById("temperature").innerHTML = `${temp}°F`;

      hi = Math.round((hi * 9) / 5 - 459.67).toFixed(0);
      lo = Math.round((lo * 9) / 5 - 459.67).toFixed(0);

      document.getElementById("hi").innerHTML = `High: ${hi}°F`;
      document.getElementById("lo").innerHTML = `Low: ${lo}°F`;
    };
  })

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
};