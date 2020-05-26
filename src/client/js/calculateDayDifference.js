export const calculateDayDifference = (inputDate, todaysDate) => {
  let daysDifference;

  const inputDay = inputDate.slice(8, 10);
  const todaysDay = todaysDate.slice(8, 10);

  const inputMonth = inputDate.slice(5, 7);
  const todaysMonth = todaysDate.slice(5, 7);

  if (inputMonth === todaysMonth) {
    daysDifference = inputDay - todaysDay;
  } else {
    daysDifference = inputDay - todaysDay + 31;
  }

  return daysDifference;
};
