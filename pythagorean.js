const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

const result = input.map(function(obj,i) { 
    sideA = (obj['x'])^2;
    sideB = (obj.y)^2; 
    return sideA+sideB

});



//const result = input.map(Object.keys(obj),((obj[x]^2 )+ (obj[y]^2)));

console.log(result[0] === 7);
console.log(result[1] === 13);
console.log(result[2] === 17);





// const words = ["ground", "control", "to", "major", "tom"];

// const map = function(array, callback) {
//   const results = [];

//   for (let item of array) {
//     results.push(callback(item));

//   }

//   return results;
// }



// const results1 = map(words, word => word[0]);
// console.log(results1);
// const randomNumbers = [1,99,102,32,8888,21,13,55,22];
// assertArraysEqual(map([1,99,102,32,8888,21,13,55,22], num=> num/2),[0.5,49.5,51,16,4444,10.5,6.5,27.5,11])