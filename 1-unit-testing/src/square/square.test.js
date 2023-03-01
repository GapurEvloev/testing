const square = require('./square');

describe('square', () => {
  let mockValue;

  // will launch before each test
  beforeEach(() => {
    // Add sm to DB
  });

  // will launch once before all tests
  beforeAll(() => {

  });

  test('correct value', () => {
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).not.toBeUndefined();

    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test("square with 1", () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  })

  afterEach(() => {
    // Remove sm from DB
    jest.clearAllMocks();
  });

  afterAll(() => {

  });
});