export const fetchImage = city => {
  fetch(
    `https://pixabay.com/api/?key=16743373-5f5da7530e215f793144c572a&q=${city}&image_type=photo`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data.hits[0].largeImageURL);
      const output = document.querySelector('.image');
      output.style.backgroundImage = `url(${data.hits[0].largeImageURL})`;
    });
};
