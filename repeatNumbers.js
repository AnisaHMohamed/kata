let repeatNumbers = data => {
  let repeatedString = "";
  for (let arr of data) {
    for (let i = 0; i < (arr[1]); i++) {
      repeatedString = repeatedString + arr[0];
    }
    repeatedString = repeatedString + ",";
  }
  repeatedString = repeatedString.slice(0, -1);

  return repeatedString;
};