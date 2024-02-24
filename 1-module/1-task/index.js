function factorial(n) {
  if (n > 1) {
    let result = n; 
    for (let i = n; i >= 2; i--) {
      result *= (i - 1);
    }
    return result;
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return 'Неправильное значение';
  }
}
