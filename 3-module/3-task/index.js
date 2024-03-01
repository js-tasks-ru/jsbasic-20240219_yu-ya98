function camelize(str) {
  let arr = [];
  let camelArr = [];
  let camelStr = '';

  if (str.startsWith('-')) {
    let strCutted = str.slice(1);
    arr = strCutted.split('-');
    for (let word of arr) {
      let camelWord = word[0].toUpperCase() + word.slice(1); 
      camelArr.push(camelWord);
    }
  } else {
    arr = str.split('-');
    camelArr.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      let word = arr[i];
      let camelWord = word[0].toUpperCase() + word.slice(1); 
      camelArr.push(camelWord);
    }
  }
  
  return camelStr = camelArr.join('');
}
