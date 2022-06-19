const calculator = require('../calculator.js')

describe('Add Function', () => {
  test('Add #1', () => {
    expect(calculator.add(5, 9)).toBe(14);
  });
  test('Add #2', () => {
    expect(calculator.add(2,7)).toBe(9)
  });
});

describe('Substract Function', () => {
  test('Substrct #1', () => {
    expect(calculator.substract(16,8)).toBe(8)
  });
  test('Substract #2', () => {
    expect(calculator.substract(8,16)).toBe(-8)
  });
});

describe('Multiply Function', () => {
  test('Multiply #1', () => {
    expect(calculator.multiply(3,9)).toBe(27);
  });
  test('Multiply #2', () => {
    expect(calculator.multiply(-3,2)).toBe(-6);
  });
  test('Multiply #3', () => {
    expect(calculator.multiply(-3,-5)).toBe(15);
  });
  test('Multiply #3', () => {
    expect(calculator.multiply(12,0)).toBe(0);
  });
});

describe('Divide Function', () => {
  test('Divide #1', () => {
    expect(calculator.divide(9,3)).toBe(3);
  });
  test('Divide #2', () => {
    expect(calculator.divide(3,9)).toBe(0.33);
  });
  test('Divide #3', () => {
    expect(calculator.divide(-9,3)).toBe(-3);
  });
  test('Divide #4', () => {
    expect(calculator.divide(-15,-3)).toBe(5);
  });
  test('Divide #5', () => {
    expect(calculator.divide(0,32)).toBe(0);
  });
  test('Divide #6', () => {
    expect(calculator.divide(15,0)).toBe(NaN);
  });
})