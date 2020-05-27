export const putTitleAboveTable = () => {
  const output = document.querySelector('.attractions');
  const tableTitle = document.createElement('h2');
  tableTitle.textContent = 'Top Tourist Attractions';
  tableTitle.style.marginBottom = '1rem';
  output.appendChild(tableTitle);
};
