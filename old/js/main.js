// Imports various functions
import { weatherAPI, quotesAPI, newsAPI } from './api';
import { getUserInfo } from './userInfo';
import { init as backgroundChanger } from './background';

// Check if use has already set a name, if not, create prompt, else set the name already stored.
if (localStorage.getItem('name') === null) {
  getUserInfo();
}
else {
  document.getElementById("name-text").innerHTML = ', ' + localStorage.getItem('name') + '!';
}

// Changes background based on time of day
backgroundChanger();

// Calls the weather API
weatherAPI()
  .then(res => {
    setWeather(res.name, res.weather[0].icon, res.main.temp, res.main.temp_max, res.main.temp_min);
  })
  .catch(err => {
    console.log(err);
  });

// Sets the weather
let setWeather = (name, weatherIcon, temp, hi, lo) => {
  document.getElementById("location").innerHTML = name;
  document.getElementById("weather-icon").src = weatherIcon;
  let src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  document.getElementById("weather-icon").setAttribute("src", src);

  // Convert the main temperature to fahrenheit
  temp = Math.round((temp * 9) / 5 - 459.67).toFixed(0);

  document.getElementById("temperature").innerHTML = `${temp}°F`;

  // Rounds the high and low temps and converts to fahrenheit
  hi = Math.round((hi * 9) / 5 - 459.67).toFixed(0);
  lo = Math.round((lo * 9) / 5 - 459.67).toFixed(0);

  // Sets the high and low temps
  document.getElementById("hi").innerHTML = `Hi: ${hi}°F`;
  document.getElementById("lo").innerHTML = `Lo: ${lo}°F`;
};

// Calls the quotes API
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

// Sets the quote
let setQuote = (quote, author) => {
  document.getElementById("quote-text").innerHTML = quote;
  document.getElementById("quote-author-text").innerHTML = author;
};

// Calls the news API
newsAPI()
  .then(res => {
    console.log(res.articles)
    let newsArray = res.articles;
    let fixedArray = [];

    if (res.articles.length === 0) {
      setNews(res.totalResults, fixedArray);
    }
    else {
      for (let i = 0; i < 4; i++) {
        fixedArray.push(newsArray[i]);
      }
    }

    // console.log(fixedArray[0].title);
    setNews(res.totalResults, fixedArray);
  })
  .catch(err => console.log(err));

// Sets the news
let setNews = (totalResults, news) => {
  let headlinesContainer = document.getElementById("headlines-container");

  if (totalResults === null) {
    headlinesContainer.innerHTML = `<h3>No news found!</h3>`;
  }
  else {
    for (let i = 0; i < news.length; i++) {
      let headline = document.createElement("div");
      headline.className = "headline";
      headline.id = `headline-${i}`;

      headline.innerHTML = `<a href="${news[i].url}" target="_blank">${news[i].title}</a>`;

      headlinesContainer.appendChild(headline);
    }
  }
};