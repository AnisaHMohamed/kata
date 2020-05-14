//Given a string of space separated numbers return the highest and lowest number.

//Example:

//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"

const highAndLow = (numbers) => {
  // ...
  const numbersSplit = numbers.split(" "); //creates an array of numbers
  return `${Math.max(...numbersSplit)} ${Math.min(...numbersSplit)}`; //find max and minimun number of the arrays
};
