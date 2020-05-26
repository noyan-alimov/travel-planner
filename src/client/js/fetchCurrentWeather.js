export const fetchCurrentWeather = (apiKey, city) => {
  fetch(`http://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      const output = document.querySelector('.info');
      output.innerHTML = `Weather: ${data.data[0].temp}°C <br/> ${data.data[0].weather.description}`;
    });
};
