// import { fromJSON } from "tough-cookie";

//Roman Numerals to Numbers
function romanize(num) {
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  finalStr = ''
  // for item in lookup chexk if value minus num is a postive or zero if it is we want to add subract value from
  // num and push key into the string //we need modulo
  for ( let letter of Object.keys(lookup)) {
    if (num%lookup[letter]>=0 ){
     const  multiple = (num-num%lookup[letter])/(num/lookup[letter]) ///this is the remainder left over subtract
     console.log(multiple)
     console.log(letter)
      while (multiple >0){
      finalStr.push(letter) ///push this many times (num-num%lookup[letter])/num/lookup[letter] +=
      num = num%lookup[letter];
      multiple --;
    }
    }
    return finalStr
}}

console.log(romanize(123));

//try with reduce
//  let roman = '';
//  for (key of Object.keys(lookup)){
//    const quotient = Math.floor(num/lookup[key])
//   roman += key.repeat(quotient)
//   }
//   return roman

//reduce to get minimun  number in array