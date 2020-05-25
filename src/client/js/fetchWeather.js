const fetch = require('node-fetch');

const apiKey = '76da7ec1199a4d71964e8ecf8c8f2f6d';

const fetchWeather = async apiKey => {
  const res = await fetch(
    `http://api.weatherbit.io/v2.0/current?city=London&key=${apiKey}`
  );
  const data = await res.json();
  console.log(data.data[0].temp);
};

fetchWeather(apiKey);
