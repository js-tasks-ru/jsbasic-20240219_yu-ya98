function filterRange(arr, a, b) {
  let filteredArr = arr.filter((num) => {
    return num >= a && num <= b || num >= b && num <= a;
  });

  return filteredArr;
}
