const validateValue = require('./validateValue');

// One scenario
test("One Value validation", () => {
  expect(validateValue(50)).toBe(true)
});

// several scenarios
describe('Several Value validation', () => {
  test('correct value', () => { 
    expect(validateValue(50)).toBe(true);
  });
  test('correct boundary value', () => { 
    expect(validateValue(0)).toBe(true);
  });
  test('correct boundary value 2', () => { 
    expect(validateValue(100)).toBe(true);
  });
  test('More than the correct value', () => { 
    expect(validateValue(101)).toBe(false);
  });
  test('Less than the correct value', () => { 
    expect(validateValue(-1)).toBe(false);
  });
});
