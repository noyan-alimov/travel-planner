import './styles/styles.scss';
import { fetchWeather } from './js/fetchWeather';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const apiKey = '76da7ec1199a4d71964e8ecf8c8f2f6d';
  const city = document.querySelector('#city').value;
  fetchWeather(apiKey, city);
});
