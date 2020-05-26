export const fetchForecastWeather = (apiKey, city) => {
  fetch(
    `http://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}`
  )
    .then(res => res.json())
    .then(data => {
      const output = document.querySelector('.info');
      const forecastDays = data.data;
      let tempOfDays = [];
      forecastDays.forEach(day => {
        tempOfDays.push(day.temp);
      });
      const averageTemp = arrAvg(tempOfDays);
      output.innerHTML = `Approximate Temperature: ${averageTemp}°C`;
    });
};

const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
