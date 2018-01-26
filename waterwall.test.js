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

test ('should find no water when walls consistently decrease in size', () => {
  expect(water.waterWall([6, 5, 4, 3, 2, 1])).toEqual([]);
});

test ('should find no water when walls consistently increase in size', () => {
  expect(water.waterWall([1, 2, 3, 4, 5, 6])).toEqual([]);
});

test('should return the first set of walls in case of ties', () => {
  expect(water.waterWall([3, 1, 3, 1, 3])).toEqual([1, 3, 2]);
});

test('finds 13 water between walls 4 and 8', () => {
  expect(water.waterWall([7, 1, 1, 7, 5, 2, 1, 7])).toEqual([4, 8, 13]);
});
