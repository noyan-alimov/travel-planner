export const fetchForecastWeather = (apiKey, lat, lng, day) => {
  fetch(
    `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${apiKey}&days=${
      day + 1
    }`
  )
    .then(res => res.json())
    .then(data => {
      const output = document.querySelector('.info');
      output.innerHTML = `Weather: ${data.data[day].temp}°C <br/>
      ${data.data[day].weather.description}`;
    });
};
