// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
 // a) Create a test with expect statements for each of the variables provided.

describe ("greaterThan2", () => {
it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
expect (greaterThan2(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
expect (greaterThan2(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
 })

//GOOD FAIL:

// FAIL  ./code-challenges.test.js
// greaterThan2
//   ✕ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence

// ● greaterThan2 › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence

//   ReferenceError: greaterThan2 is not defined


 //b) Create the function that makes the test pass.


//PSEUDOCODE:
//Input: number larger than 2 representing the desired length
//Output: array that desired length containing the numbers of the Fibonacci sequence
//create a function called greaterThan2
//create for loop to loop through array an


const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const greaterThan2 = (num) => {
  let fib = [1,1]
  for ( let i = 2; i<num; i++){
    fib[i] = fib[i-1] + fib[i-2]
  } 
  return fib
}
  
console.log(greaterThan2(fibLength1))
console.log(greaterThan2(fibLength2))

//PASSING TEST:

// console.log
// [ 1, 1, 2, 3, 5, 8 ]
//   at Object.log (code-challenges.test.js:59:9)
// console.log
// [
//   1,  1,  2,  3,  5,
//   8, 13, 21, 34, 55
// ]
//   at Object.log (code-challenges.test.js:60:9)

// PASS  ./code-challenges.test.js
// greaterThan2
// ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)



 // --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe ("sortNumbers", () => {
it ("takes in an object and returns an array of the values sorted from least to greatest.", () => {
 expect (sortNumbers(studyMinutesWeek1)).toEqual ([15, 15, 20, 30, 30, 60, 90])
expect (sortNumbers(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    })
})

//GOOD FAIL:

// FAIL  ./code-challenges.test.js
// sortNumbers
//   ✕ takes in an object and returns an array of the values sorted from least to greatest.

// ● sortNumbers › takes in an object and returns an array of the values sorted from least to greatest.

//   ReferenceError: sortNumbers is not defined


// b) Create the function that makes the test pass.

//PSEUDOCODE:
//Input: object's own key property values
//Output: array of number sorted from least to greatest
//create function called sortNumbers
//use the object.value method to have an array returned of the given objects with a condition applied to it
//sort the array and have it return the numbers in the array sorted from least to greatest

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

const sortNumbers = (sortNumbers) => {
    return Object.values(sortNumbers).sort((a,b) => a-b)
     }
console.log(sortNumbers(studyMinutesWeek1))
console.log(sortNumbers(studyMinutesWeek2))

// PASSING TEST:
// [
//   15, 15, 20, 30,
//   30, 60, 90
// ]
//   at Object.log (code-challenges.test.js:114:9)
// console.log
// [
//   10, 15,  20, 45,
//   60, 65, 100
// ]
//   at Object.log (code-challenges.test.js:115:9)

// PASS  ./code-challenges.test.js
// sortNumbers
// ✓ takes in an object and returns an array of the values sorted from least to greatest. (1 ms)




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.


describe("accumulate" , () => {
  it("takes in an array and returns an array of the accumulating sum; empty arrays should return an empty array", () => {
    expect (accumulate(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect (accumulate(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect (accumulate(accountTransactions3)).toEqual([])
  })
})


//GOOD FAIL:

// FAIL  ./code-challenges.test.js
// accumulate
//   ✕ takes in an array and returns an array of the accumulating sum; empty arrays should return an empty array

// ● accumulate › takes in an array and returns an array of the accumulating sum; empty arrays should return an empty array

//   ReferenceError: accumulate is not defined



// b) Create the function that makes the test pass.

//PSEUDOCODE:
//create a function called accumulate
//create variable for running total named total
//create variable result to be an array
//create for loop to loop throught array that will take total and add to total the value of that index
//use .push to 
//call back function to see

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []



const accumulate = (nums) => {
  let total= 0
  let result = []

  for (let i=0; i<nums.length; i++){
    total = total + nums[i]
    result.push(total)
  }
  return result
}
console.log(accumulate(accountTransactions1))
console.log(accumulate(accountTransactions2))
console.log(accumulate(accountTransactions3))

//PASSING TEST

// console.log
//     [ 100, 83, 60, 51 ]
//       at Object.log (code-challenges.test.js:187:9)
//   console.log
//     [ 250, 161, 261, 165 ]
//       at Object.log (code-challenges.test.js:188:9)
//   console.log
//     []
//       at Object.log (code-challenges.test.js:189:9)

//  PASS  ./code-challenges.test.js
//   accumulate
//     ✓ takes in an array and returns an array of the accumulating sum; empty arrays should return an empty array (1 ms)