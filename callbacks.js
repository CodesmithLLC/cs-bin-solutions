// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + 's';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const mappedArray = [];
  forEach(array, el => mappedArray.push(callback(el)));
  return mappedArray;
}


//Extension 2
function reduce(array, callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
}


//Extension 3
function intersection(arrays) {
  return arrays.reduce((acc, curr) => {
    return curr.filter(el => acc.includes(el));
  });
}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
  return arrays.reduce((acc, curr) => {
    const newElements = curr.filter(el => !acc.includes(el));
    return acc.concat(newElements);
  });
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  const matchObj = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      matchObj[array1[i]] = array2[i];
    }
  }
  return matchObj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  const multiMapObj = {};
  for (let i = 0; i < arrVals.length; i++) {
    multiMapObj[arrVals[i]] = [];
    for (let j = 0; j < arrCallbacks.length; j++) {
      multiMapObj[arrVals[i]].push(arrCallbacks[j](arrVals[i]));      
    }
  }
  return multiMapObj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
function objectFilter(obj, callback) {
  const newObj = {};
  for (let key in obj) {
    if (callback(key) === obj[key]) {
      newObj[key] = callback(key);
    }
  }
  return newObj;
}

// const cities = {
//   London: 'LONDON',
//   LA: 'Los Angeles',
//   Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


//Extension 8
function majority(array, callback) {
  let countT = 0;
  let countF = 0;
  for (let i = 0; i < array.length; i++) {
    callback(array[i]) ? ++countT : ++countF;
  }

  return countT > countF;
}

// /*** Uncomment these to check your work! ***/
// const isOdd2 = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd2)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd2)); // should log: false

//Extension 9
function prioritize(array, callback) {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      res.push(array[i]);
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      res.push(array[i]);
    }
  }
  return res;
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS));
// should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

//Extension 10
function countBy(array, callback) {
  const res = {};
  let countO = 0,
    countE = 0;
  for (let num of array) {
    let key = callback(num);
    key === "odd" ? (res[key] = ++countO) : (res[key] = ++countE);
  }
  return res;
}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// }));
// should log: { odd: 3, even: 2 }

//Extension 11
function groupBy(array, callback) {
  const res = {};
  for (let i of array) {
    let dec = callback(i);
    if (dec in res) {
      res[dec].push(i);
    } else {
      res[dec] = [i];
    }
  }
  return res;
}

//using reduce
function groupBy(array, callback) {
  return array.reduce((res, i) => {
    const dec = callback(i);
    if (dec in res) {
      res[dec].push(i);
    } else {
      res[dec] = [i];
    }
    return res;
  }, {});
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored));
// should log: { 1: [1.3], 2: [2.1, 2.4] }

//Extension 12
function goodKeys(obj, callback) {
  const res = [];
  for (let key in obj) {
    if (callback(obj[key])) {
      res.push(key);
    }
  }
  return res;
}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

//Extension 13
function commutative(func1, func2, value) {
  let op = func2(func1(value));
  let op2 = func1(func2(value));

  return op === op2;
}

// /*** Uncomment these to check your work! ***/
// const multBy3 = (n) => n * 3;
// const divBy4 = (n) => n / 4;
// const subtract5 = (n) => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

//Extension 14
function objFilter(obj, callback) {
  const res = {};

  for (let key in obj) {
    if (obj[key] === callback(key)) {
      res[key] = obj[key];
    }
  }
  return res;
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = (n) => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

//Extension 15
function rating(arrOfFuncs, value) {
  let count = 0;
  for (let func of arrOfFuncs) {
    if (func(value)) {
      count++;
    }
  }

  return (count / arrOfFuncs.length) * 100;
}

// Using filter

function rating(arrOfFuncs, value) {
  if (arrOfFuncs.length === 0) return 0;
  const count = arrOfFuncs.filter((func) => func(value)).length;
  return (count / arrOfFuncs.length) * 100;
}
// /*** Uncomment these to check your work! ***/
// const isEven = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes("6");
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

//Extension 16
function pipe(arrOfFuncs, value) {
  let result = value;
  for (let func of arrOfFuncs) {
    result = func(result);
  }
  return result;
}

//Using reduce

function pipe(arrOfFuncs, value) {
  return arrOfFuncs.reduce((acc, func) => func(acc), value);
}

// /*** Uncomment these to check your work! ***/
// const capitalize = (str) => str.toUpperCase();
// const addLowerCase = (str) => str + str.toLowerCase();
// const repeat = (str) => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, "cat")); // should log: 'CATcatCATcat'

//Extension 17
function highestFunc(objOfFuncs, subject) {
  let highestKey = null;
  let highestResult = -Infinity;

  for (let key of Object.keys(objOfFuncs)) {
    let result = objOfFuncs[key](subject);

    if (result > highestResult) {
      highestKey = key;
      highestResult = result;
    }
  }
  return highestKey;
}

// Using Object.entries

function highestFunc(objOfFuncs, subject) {
  let highestKey = null;
  let highestResult = -Infinity;

  //Iterate over keys and values in a single loop instead of writing `Object.keys` and getting its value from key
  for (const [key, func] of Object.entries(objOfFuncs)) {
    let result = func(subject);

    if (result > highestResult) {
      highestKey = key;
      highestResult = result;
    }
  }
  return highestKey;
} // /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

//Extension 18
function combineOperations(startVal, arrOfFuncs) {
  // let result = startVal;
  // for(let func of arrOfFuncs){
  //   result = func(result);
  // }
  // return result;

  //using reduce

  // return arrOfFuncs.reduce((acc,func)=>func(acc),startVal)

  //utilising the previously written func
  return pipe(arrOfFuncs, startVal);
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyByThree, add100])); // Should output 100

//Extension 19
function myFunc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return 1;
  }
  return -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

//Extension 20
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums2 = [1, 2, 3];
// myForEach(nums2, addToSum);
// console.log(sum); // Should output 6
