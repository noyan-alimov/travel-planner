import './styles/styles.scss';
import { fetchImage } from './js/fetchImage';
import { fetchTouristAttractions } from './js/fetchTouristAttractions';
import { putTitleAboveTable } from './js/putTitleAboveTable';
import { fetchLatLng } from './js/fetchLatLng';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const city = document.querySelector('#city').value;

  const apiImage = '16743373-5f5da7530e215f793144c572a';

  fetchLatLng(city);
  fetchImage(apiImage, city);
  fetchTouristAttractions(city);
  putTitleAboveTable();
});
