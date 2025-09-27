/*
Sample test file using jest.

To run the tests, use the command:
npm test
*/

const sum = (a, b) => a + b;

test("adds numbers correctly", () => {
  expect(sum(2, 3)).toBe(5);
});
