//Given a string of space separated numbers return the highest and lowest number.

//Example:

//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"



const highAndLow = (numbers) => {
  // ...
 const numArray =  numbers.split(' ');
 let minNum = 0;
 let maxNum  = 0;
 
 numArray.forEach(num=>{
   let parsedNum = parseInt(num)
   if(maxNum < parsedNum) {
     maxNum = parsedNum
     }
   if(minNum > parsedNum) {
      minNum = parsedNum
     }
   })
 return (`${maxNum} ${minNum}`)
}
