// function one() {
//   console.log("start of one");
//   two();
//   console.log("end of one");
// }

// function two() {
//   console.log("start of two");
//   three();
//   console.log("end of two");
// }

// function three() {
//   console.log("start of three");
//   console.log("end of three");
// }

// one();

// recursion

//   let counter = 0;
// function recursiveFunc() {
//   console.log("hello world");

//   counter++;
//   if (counter > 3) {
//     return;
//   }
//   recursiveFunc();
// }

// recursiveFunc();

// Write a recursive function that finds factorial of the number;

// 5! = 5 * 4 * 3 * 2 * 1 = 120

// 10! = 10 * 9 * 8 * ... * 1

// function factorial(number) {
//   if (number < 0) return "Enter positive integer";

//   let result = 1;
//   for (let i = 2; i <= number; i++) {
//     result *= i;
//   }

//   return result;
// }

// console.log(factorial(5));

function factorialRecursion(number) {
  if (number < 0) return "Enter positive integer";

  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorialRecursion(number - 1);
  }
}

console.log(factorialRecursion(0));

// 5! = 5 * 4! = 120
// 4! = 4 * 3! = 24
// 3! = 3 * 2! = 6
// 2! = 2 * 1! = 2
// 1! = 1

// 2 * 1 = 2
// 3 * 2 = 6
// 4 * 6 = 24
// 5 * 24 = 120
// (5) -> 120
