
// Challenge 1
function countdown(n) {
  //Check if n is 0(exclusive)
	if(n === 0) return;
  //Else, print the value of n and invoke recursive call
  console.log(n);
  return countdown(n-1);
}

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);


// Challenge 2
//Create def. parameter, index and assign to 0
function sum(array, index = 0) {
  //Base case: if index reaches the last valid index
	if(index === array.length - 1) return array[array.length - 1];
  
  return array[index] + sum(array, index + 1);
}

// uncomment these to check your work
 // console.log(sum([1,1,1])); // -> returns 3
 // console.log(sum([1,2,3,4,5,6])); // -> returns 21


// Challenge 3
function palindrome(string) {
	// Use Regex to sanitize input string for testcases.
  string = string.replace(/\W/ig, '').toLowerCase();
                          
  //Base case 1: If we've reached the point where the string's length is less than or equal to 1, return true
  if(string.length <= 1) return true;
  
  //Base case 2: If the beginning and ending characters of the string don't match up, return false
  if(string[0] !== string[string.length - 1]) return false
  
  //Recursive case: call palindrome , but pass in a sliced version of the string w/ first and last chars removed. 
  return palindrome(string.slice(1,-1))
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false


// Challenge 4

/* Prime numbers cannot be 
	- Negative
  - Divisble by any number but by themselves and 1.
*/

function isPrime(num, testNum = num - 1) {
  //Take care of all negative numbers.
  if(num < 2) return false;
  //If we've reached the point that testNum is 1, we know that num is prime.
  if(testNum === 1 || num === 2) return true;
  //Check if num is divisible by testNum
  if(num % testNum === 0) return false
  
  //Recursive call: invoke isPrime, but decrement testNum by 1
  return isPrime(num, testNum - 1)
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false


//Challenge 5
function pathFinder(obj, arr, index = 0) {
	//Iterate through the keys of the passed in object,
  //checking if each key's value matches with the array's values
  //If each key corresponds to this value, return the final key's value(in this case, we expect a string)
  if(typeof obj[arr[index]] === "object"){
    return pathFinder(obj[arr[index]], arr, index + 1);
  }
  else if(typeof obj[arr[index]] === "string"){
    return obj[arr[index]];
  }
  else {
    return;
  }
}

// const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// const arr = ["first", "second", "third"];
// console.log(pathFinder(obj, arr));   //-> "finish"


//Challenge 6

//Create def. paramater to hold the de-nested elements. 
function flattenRecursively(arr, newArr = [], index = 0) {
  //We're looking to de-nest our array to only one level of nesting - the outer array
  
  //Plan: We can check to see if the current element is undefined, 
  //if so, we've reached the end of the array and we can return
  if(arr[index] === undefined) return newArr;
  
  //if the current element is an array, let's call flattenRecursively w/ the sub-array
  if(Array.isArray(arr[index])) {
    return flattenRecursively(arr[index], newArr, 0)
  } 
	//Else, let's push the non-array el to our newArr and continue 
  //the recursive call.
  else{
    newArr.push(arr[index]);
    return flattenRecursively(arr, newArr, index + 1)
  }
}

//console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
//console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]


//Challenge 7
function findInOrderedSet(arr, target) {
  if(arr[0] === target) return true;
  else if(arr[1] > target) return false;
  return findInOrderedSet(arr.slice(1), target)
}
//Bonus - Implement a binary search to prevent a continous search

const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false


//Challenge 8
function countWaysToReachNthStair(n) {
  
// Similiar to the fibonacci seq, we have only two possible routes for this question. For any positive integer, n, we can decrement by either 1 or 2 until we finally reach either 1 or 2. At that point - we can make use of the stack frame to keep track of the routes. 

  if(n === 1) return 1;
  
  if(n === 2) return 2;
  console.log('n is now', n)
  return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2)
  
  //For optimization, make use of a cache to store previous calculations. 
}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
//console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))


//Challenge 9
function getPermutations(arr, index = 0) {

}


console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
 console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


//Challenge 10
function getRangeBetween(x, y, outputArr = []) {
  //Note: x and y are exclusive
  //Base case: Starting from x, if we reach y, let's return our arr
  if(x === y - 1) return outputArr;
  outputArr.push(x + 1);
  return getRangeBetween(x + 1, y, outputArr)
}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]