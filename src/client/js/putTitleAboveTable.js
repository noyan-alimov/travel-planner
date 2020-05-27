export const putTitleAboveTable = () => {
  const output = document.querySelector('.attractions');
  const tableTitle = document.createElement('h2');
  tableTitle.textContent = 'Top Tourist Attractions';
  output.appendChild(tableTitle);
};
