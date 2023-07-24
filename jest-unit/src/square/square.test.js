const square = require('./square');

describe('square', () => {
  let mockValue;

  beforeAll(() => { // will launch once before all tests
    // e.g. connect to DB
  });

  beforeEach(() => { // will launch before each test
    // e.g. add sm to DB
    mockValue = Math.random();
  });

  test('correct value', () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();
  });

  test('how many times Math.pow was called', () => {
    // checking how many times Math.pow was called
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test('how many times Math.pow was called', () => {
    // checking how many times Math.pow was called
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach(() => { // will launch after each test
    // e.g. remove sm from DB
    jest.clearAllMocks();
  });

  afterAll(() => { // will launch once after all tests
    // e.g. disconnect from DB
  });
})

// describe('square', () => {
//   let mockValue;
//
//   // will launch before each test
//   beforeEach(() => {
//     // Add sm to DB
//   });
//
//   // will launch once before all tests
//   beforeAll(() => {
//
//   });
//
//   test('correct value', () => {
//     // expect(square(2)).toBe(4);
//     // expect(square(2)).toBeLessThan(5);
//     // expect(square(2)).toBeGreaterThan(3);
//     // expect(square(2)).toBeGreaterThan(3);
//     // expect(square(2)).toBeGreaterThan(3);
//     // expect(square(2)).not.toBeUndefined();
//
//     const spyMathPow = jest.spyOn(Math, 'pow');
//     square(2);
//     expect(spyMathPow).toBeCalledTimes(1);
//   });
//
//   test("square with 1", () => {
//     const spyMathPow = jest.spyOn(Math, 'pow');
//     square(1);
//     expect(spyMathPow).toBeCalledTimes(0);
//   })
//
//   afterEach(() => {
//     // Remove sm from DB
//     jest.clearAllMocks();
//   });
//
//   afterAll(() => {
//
//   });
// });