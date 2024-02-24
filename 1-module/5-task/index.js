function truncate(str, maxlength) {
  let length = str.length;

  if (length <= maxlength) {
    return str;
  } else {
    return str.substr(0, maxlength - 1) + '…';
  }
}
