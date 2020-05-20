//Function [a, b, a, c, a, a] => [a, b, c]
//create empty list final =[]
//push each letter to the array
//when it encounter a letter that it has already added it should skip
//return the final array
const uniqueLetter = (arr) => {
  // const finalArr = [];
  // for (let letter in arr) {
  //   //index

  //   if (arr.indexOf(letter) != -1) {
  //     //figure this out..
  //     finalArr.push(arr[letter]);
  //   }
  // }
 return[...new Set(arr)]
};
 console.log(uniqueLetter(["a", "b", "a", "c", "a", "a"]));
