// 0.
// Write a function called dividez that takes two numbers and returns the result of division
// dividez(4,2) => 2
// 1.
// Write a function named reverseString that takes a string and reverses it.
// ie reverseString('yoyo') => 'oyoy'
// 2.
// Write a function named arrayToString that takes an array of strings and returns one string with all values from array combined with '-'.
// ie arrayToString(['yo','my','yoyo']) => 'yo-my-yoyo'
// 3.
// Write a function named sumArray that takes an array of numbers and returns the sum.
// ie sumArray([1,2,3]) => 6
// 4.
// Write a function named removeItemFromArray that takes an array of anytype and a index and removes the item of a given index and returns new array. This one is up to you to think about how to handle invalid input.  discuss this with your partner first
// ie removeItemFromArray([1,'2' ,'hello'], 2) => [1, '2']
// 5.
// Write a function numToWord that takes a single number and returns the number as the word (only needs to work for 0-9)
// numToWord(0) => 'zero'
// 6.
// write a function wordCount that takes a string a returns the number of words
// wordCount('there are four in') => 4
// 7.
// write a function fullName that takes in a object with first_name and last_name and returns the full name as string
// fullName({first_name:'karate',last_name:'kid'}) => 'karate kid'
// 8.
// write a function fullNameArray that takes an array of objects from 7 and returns a new array of full_name
// fullNameArray(
// [{first_name:'karate',last_name:'kid'},
// {first_name:'jim',last_name:'bob'}]
//) => ['karate kid', 'jim bob']

// 0.
// Write a function called dividez that takes two numbers and returns the result of division
// dividez(4,2) => 2

// function dividez(num1, num2) {
//   return num1/num2
// }

// function test0() {
//   let answer = dividez(20, 5)
//   if (answer !== 4) {
//     console.log("Oopsie Woopsie")
//      return;
//   }
//   console.log("Correct")
// }

// test0()

// 1.
// Write a function named reverseString that takes a string and reverses it.
// ie reverseString('yoyo') => 'oyoy'

// function reverseString(str) {
//   return str.split("").reverse().join("");
// };

// console.log(reverseString('string'));

// function test1() {
//   let answer = reverseString("string");
//   if (answer === "gnirts") {
//     console.log("Yes!");
//     return;
//   }
//   console.log("Sucks to suck");
// };

// test1();

// 2.
// Write a function named arrayToString that takes an array of strings and returns one string with all values from array combined with '-'.
// ie arrayToString(['yo','my','yoyo']) => 'yo-my-yoyo'

// function arrayToString(arr) {
//   return arr.join("-");
// }

// console.log(arrayToString(["DC", "Harlan", "J-Daddy"]));

// function test2() {
//   let answer = arrayToString(["DC", "Harlan", "J-Daddy"]);
//   if (answer === "DC-Harlan-J-Daddy") {
//     console.log("This works");
//     return;
//   }
//   console.log("Try again");
// }

// test2();

// 3.
// Write a function named sumArray that takes an array of numbers and returns the sum.
// ie sumArray([1,2,3]) => 6

// function sumArray(arr) {
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   return arr.reduce(reducer);
// };

// accumulator currentValue
// 5               0   = 5
// 9               5
// 16              14 = 30

// function test3() {
//   let answer = sumArray([5, 9, 16]);
//   if (answer !== 30) {
//     console.log("Incorrect");
//     return;
//   }
//   console.log("Correct");
// }

// test3();

// 4.
// Write a function named removeItemFromArray that takes an array of anytype and a index and removes the item of a given index and returns new array. This one is up to you to think about how to handle invalid input.  discuss this with your partner first
// ie removeItemFromArray([1,'2' ,'hello'], 2) => [1, '2']

// function removeItemFromArray(arr) {
//   // return arr.splice(0, 2);
//   arr.pop();
//   return arr;
// };

// // answer => ["Panda", "Tiger"]  !== ["Panda", "Tiger"]
// function test4() {
//   let answer = removeItemFromArray(["Panda", "Tiger", "Armadillo"]);
//   if (JSON.stringify(answer) === JSON.stringify(["Panda", "Tiger"])); {
//     console.log(answer);
//     console.log("You did it right!");
//     return;
//   }
//   console.log(answer);
//   console.log("Oops! Do it again");
// }

// test4();

// 5.
// Write a function numToWord that takes a single number and returns the number as the word (only needs to work for 0-9)
// numToWord(0) => 'zero'

// function numToWord(num) {
//   let numArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
//   return numArray[num]
// };

// function test5() {
//   let number = numToWord(9)
//   if (number !== 'nine') {
//     console.log("Oopsie Woopsie")
//     return;
//   }
//   console.log(number)
//   console.log("Correct")
// };

// test5();

// 6.
// write a function wordCount that takes a string a returns the number of words
// wordCount('there are four in') => 4

// function wordCount(str) {
//   return str.split(" ").length
// }

// function test6() {
//   let answer = wordCount('hello mr tc')
//   if (answer !== 3) {
//     console.log("Nope")
//     return;
//   }
//   console.log("Nice")
// }

// test6()

// 7.
// write a function fullName that takes in a object with first_name and last_name and returns the full name as string
// fullName({first_name:'karate',last_name:'kid'}) => 'karate kid'

// function fullName(name) {
//     return `${name.firstName} ${name.lastName}`
// }

// function test7() {
//   let answer = fullName({firstName: "Daniel", lastName: "Russo"});
//   if ( answer !== "Daniel Russo" ) {
//     console.log("Wrong!");
//     return;
//   }
//   console.log("Good job!");
// };

// test7();

//  8.
// write a function fullNameArray that takes an array of objects from 7 and returns a new array of full_name
// fullNameArray(
// [{first_name:'karate',last_name:'kid'},
// {first_name:'jim',last_name:'bob'}]
//) => ['karate kid', 'jim bob']

// function fullNameArray(arr) {
  
//   let newArr = arr.map(a => `${a.firstName} ${a.lastName}`)
//    return newArr;
// }

// function test8() {
//   let theName = fullNameArray([
//     { firstName: "John", lastName: "Smith" },
//     { firstName: "Jane", lastName: "Doe" },
//   ]);
//   if (JSON.stringify(theName) !== JSON.stringify(['John Smith', 'Jane Doe'])) {
//     console.log("Nope")
//     return;
//   }
//   console.log(theName)
//   console.log("Nice")
// }

// test8()
