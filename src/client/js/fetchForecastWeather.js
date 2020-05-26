export const fetchForecastWeather = (apiKey, city) => {
  fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data.data);
      const output = document.querySelector('.output');
      const forecastDays = data.data;
      forecastDays.forEach(day => {
        console.log(day.temp);
        const dayTemp = document.createElement('p');
        const dateTemp = document.createElement('p');
        dayTemp.textContent = `Temperature: ${day.temp}°C`;
        dateTemp.textContent = `Date: ${day.valid_date}`;
        dateTemp.style.marginBottom = '2.5rem';
        output.appendChild(dayTemp);
        output.appendChild(dateTemp);
      });
    });
};
