export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.slice(1).reduce((total, num) => total - num, numbers[0]);
}

export function multiply(numbers) {
  return numbers.reduce((total, num) => total * num, 1);
}

export function divide(numbers) {
  if (numbers.slice(1).some((num) => num === 0)) {
    return NaN;
  }
    return numbers.slice(1).reduce((total, num) => total / num, numbers[0]);
}

