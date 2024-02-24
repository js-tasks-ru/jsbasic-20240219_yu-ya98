function ucFirst(str) {
  if (str) {
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
  } else {
    return str;
  }
}
