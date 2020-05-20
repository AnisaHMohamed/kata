function findEvenIndex(arr) {
  //Code goes here!
  if (arr.length > 2) {
    if (arr[0])
      for (let index = 0; index < arr.length; index++) {
        let beg = arr.slice(0, index).reduce((a, b) => a + b, 0);
        let end = arr.slice(index + 1).reduce((a, b) => a + b, 0);
        if (beg === end) {
          return index;
        }
      }
    return -1;
  } else if (arr.length == 2 && arr[0] == 0) {
    return 1;
  } else if ((arr.length == 2 && arr[1] == 0) || arr.length == 1) {
    return 0;
  }

  return -1;
}

