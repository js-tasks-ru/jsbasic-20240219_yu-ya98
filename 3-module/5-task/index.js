function getMinMax(str) {
  let arrAll = str.split(' ');

  let arrNum = arrAll.filter((item) => {
    return !isNaN(Number(item));
  });

  let min = Math.min(...arrNum);
  let max = Math.max(...arrNum);

  let resultObject = {
    min,
    max
  };
  
  return resultObject;
}
