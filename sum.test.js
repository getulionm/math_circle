const sum = require('./sum');

test('1+2=3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('10+10=20', () => {
  expect(sum(10, 10)).toBe(20);
});
