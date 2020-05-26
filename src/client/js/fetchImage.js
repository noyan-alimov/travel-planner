export const fetchImage = (apiImage, city) => {
  fetch(`https://pixabay.com/api/?key=${apiImage}&q=${city}&image_type=photo`)
    .then(res => res.json())
    .then(data => {
      const output = document.querySelector('.image');
      output.style.backgroundImage = `url(${data.hits[0].largeImageURL})`;
    });
};
