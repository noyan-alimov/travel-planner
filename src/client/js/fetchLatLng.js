import { fetchForecastWeather } from './fetchForecastWeather';
import { calculateDayDifference } from './calculateDayDifference';

export const fetchLatLng = city => {
  const apiWeather = '76da7ec1199a4d71964e8ecf8c8f2f6d';

  // Getting and comparing between the user input date and today's date
  const date = document.querySelector('#date').value;

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  if (date < today) {
    alert("Please enter today's or future date");
  }

  const daysDifference = calculateDayDifference(date, today);

  fetch(`http://api.geonames.org/geocodeJSON?q=${city}&username=noyan`)
    .then(res => res.json())
    .then(data => {
      fetchForecastWeather(
        apiWeather,
        data.geoCoderResult.lat,
        data.geoCoderResult.lng,
        daysDifference
      );
    });
};
