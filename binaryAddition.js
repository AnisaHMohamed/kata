// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

const binaryAddition = (num1, num2) => {
return (num1+num2).toString(2)
  //   let sum = num1+num2
//   const finalArr=[]
//   sum%2==0? finalArr.push(0):finalArr.push(1)
//   while( sum>=2 ){
//     Math.floor((sum/2))%2==0?finalArr.push(0) :finalArr.push(1)
//     sum = Math.floor((sum/2))
//   }
// return finalArr.reverse().join("")
}
console.log(binaryAddition(92,10))
console.log(binaryAddition(240,4))