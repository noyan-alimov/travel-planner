import './styles/styles.scss';
import { fetchCurrentWeather } from './js/fetchCurrentWeather';
import { fetchForecastWeather } from './js/fetchForecastWeather';
import { fetchImage } from './js/fetchImage';
import { calculateDayDifference } from './js/calculateDayDifference';
import { fetchTouristAttractions } from './js/fetchTouristAttractions';
import { putTitleAboveTable } from './js/putTitleAboveTable';

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

      const daysDifference = calculateDayDifference(date, today);

      if (date === today) {
        fetchCurrentWeather(apiWeather, city);
        fetchImage(apiImage, city);
        fetchTouristAttractions(city);
        putTitleAboveTable();
      } else if (date < today) {
        alert("Please enter today's or future date");
      } else {
        fetchForecastWeather(apiWeather, city, daysDifference);
        fetchImage(apiImage, city);
        fetchTouristAttractions(city);
        putTitleAboveTable();
      }
    });
});
