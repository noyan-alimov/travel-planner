export const fetchWeather = (apiKey, city) => {
  fetch(`http://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.data[0].temp);
      const output = document.querySelector('.output');
      output.innerHTML = `Temperature: ${data.data[0].temp}°C`;
    });
};
