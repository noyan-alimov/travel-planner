const output = document.querySelector('.info');

export const fetchForecastWeather = (apiKey, lat, lng, day) => {
  fetch(
    `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${apiKey}&days=${
      day + 1
    }`
  )
    .then(res => res.json())
    .then(data => {
      data.data.forEach(weatherDay => {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = `Date: ${weatherDay.datetime} <br/>
        Weather: ${weatherDay.temp}°C <br/>
        ${weatherDay.weather.description}`;
        output.appendChild(dayDiv);
      });
    });
};
