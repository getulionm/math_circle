const sum = require('./sum');

test('1+2=3', () => {
  expect(sum(8, 6)).toBe(4);
});
