const output = document.querySelector('.attractions');

const table = document.createElement('table');
const tableHeaderContainer = document.createElement('tr');
const tableHeaderName = document.createElement('th');
const tableHeaderRating = document.createElement('th');
tableHeaderName.textContent = 'Name';
tableHeaderRating.textContent = 'Rating';
tableHeaderContainer.appendChild(tableHeaderName);
tableHeaderContainer.appendChild(tableHeaderRating);
table.appendChild(tableHeaderContainer);

export const fetchTouristAttractions = city => {
  fetch('http://localhost:8080/touristAttractions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ city })
  })
    .then(res => res.json())
    .then(data => {
      data.results.forEach(attraction => {
        const attractionInfoContainer = document.createElement('tr');
        const name = document.createElement('td');
        const rating = document.createElement('td');
        name.innerHTML = attraction.name;
        rating.innerHTML = attraction.rating;
        rating.style.textAlign = 'right';
        attractionInfoContainer.appendChild(name);
        attractionInfoContainer.appendChild(rating);
        table.appendChild(attractionInfoContainer);
        output.appendChild(table);
      });
    });
};
