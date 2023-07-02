const mapArrToString = require('./mapArrToString');

// several scenarios
describe('mapArrToString', () => {
  test('correct value', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]); // toEqual - deep equality. toBe - strict equality
  });
  test('mess values', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, "safd"])).toEqual(["1", "2", "3"]);
  });
  test('empty array', () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test('not equal', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3]);
  });
});