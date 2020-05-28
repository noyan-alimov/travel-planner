import { calculateDayDifference } from '../calculateDayDifference';

test('Calculating the difference days between user input and today', () => {
  expect(calculateDayDifference('2020-05-30', '2020-05-27')).toBe(3);
});
