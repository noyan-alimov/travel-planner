export const fetchCurrentWeather = (apiKey, city) => {
  fetch(`http://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      const output = document.querySelector('.info');
      output.innerHTML = `Temperature: ${data.data[0].temp}°C`;
    });
};
