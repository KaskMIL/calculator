const add = (num1, num2) => num1 + num2;

const substract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => {
  const result = num1 * num2;
  if(Number.isInteger(result)) {
    return result;
  } else {
    return parseInt(result.toFixed(2));
  }
};

const divide = (num1, num2) => {
  if (num2 == 0) {
    return NaN;
  } else if (num1 == 0) {
    return 0;
  } else {
    const result = num1 / num2;
    if (Number.isInteger(result)) {
      return result;
    } else {
      return parseFloat(result.toFixed(2));
    }
  }
}

export { add, substract, multiply, divide };

//module.exports = { add, substract, multiply, divide };