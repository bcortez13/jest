const functions = require('./functions');

test('adds 2 plus 2 equal 4', () => {
  expect(functions.add(2,2)).toBe(4);
});

test('adds 2 plus 2 not to equal 5', () => {
  expect(functions.add(2,2)).not.toBe(5);
});

test('should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//
test('user should be coco pogi', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Coco',
    lastName: 'Pogi'
  });
});

test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600)
})
