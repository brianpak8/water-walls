const water = require('./waterwall.js');


test('adds 1 + 2 to equal 3', () => {
  expect(water.testSum(1, 2)).toBe(3);
});


test ('adds 5 + 7 to equal 12', () => {
  expect(water.testSum(5, 7)).toBe(12);
});


const heights = [5, 2, 3, 7, 1, 1, 7];
test ('finds 12 water between walls 4 and 7', () => {
  expect(water.waterWall(heights)).toEqual([4, 7, 12]);
});