import './styles/styles.scss';
import { fetchCurrentWeather } from './js/fetchCurrentWeather';
import { fetchForecastWeather } from './js/fetchForecastWeather';
import { fetchImage } from './js/fetchImage';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch('http://localhost:8080/getApiKeys')
    .then(res => res.json())
    .then(data => {
      const apiWeather = data.apiWeather;
      const apiImage = data.apiImage;

      // Getting and comparing between the user input date and today's date
      const city = document.querySelector('#city').value;
      const date = document.querySelector('#date').value;

      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd;

      if (date === today) {
        fetchCurrentWeather(apiWeather, city);
        fetchImage(apiImage, city);
      } else if (date < today) {
        alert("Please enter today's or future date");
      } else {
        fetchForecastWeather(apiWeather, city);
        fetchImage(apiImage, city);
      }
    });
});
