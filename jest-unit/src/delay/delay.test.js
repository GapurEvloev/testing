const delay = require('./delay');

describe('delay', () => {
  test('correct value', async () => {
    const sum = await delay(() => 42 + 42, 1000);
    expect(sum).toBe(84);
  });
})