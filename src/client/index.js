import './styles/styles.scss';
import { fetchCurrentWeather } from './js/fetchCurrentWeather';
import { fetchForecastWeather } from './js/fetchForecastWeather';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const apiKey = '76da7ec1199a4d71964e8ecf8c8f2f6d';
  const city = document.querySelector('#city').value;
  const date = document.querySelector('#date').value;
  console.log(date);

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);

  if (date === today) {
    fetchCurrentWeather(apiKey, city);
  } else if (date < today) {
    alert("Please enter today's or future date");
  } else {
    fetchForecastWeather(apiKey, city);
  }
});
