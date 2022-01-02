// ##########################
// # Higher-Order Functions #
// ##########################


// Challenge 1
const addTwo = (num) => {
  return num + 2;
};

// To check if you've completed this function, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
const addS = (word) => {
  return word + 's';
};

// Uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
const map = (array, callback) => {
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
};

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

// See for yourself if your forEach works!



// Challenge 5
const mapWith = (array, callback) => {
  const mappedArray = [];
  forEach(array, el => mappedArray.push(callback(el)));
  return mappedArray;
};


// Challenge 6
const reduce = (array, callback, initialValue) => {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
};


// Challenge 7
const intersection = (arrays) => {
  return arrays.reduce((acc, curr) => {
    return curr.filter(el => acc.includes(el));
  });
};

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]


// Challenge 8
const union = (arrays) => {
  return arrays.reduce((acc, curr) => {
    const newElements = curr.filter(el => !acc.includes(el));
    return acc.concat(newElements);
  });
};

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
const objOfMatches = (array1, array2, callback) => {
  const matchObj = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      matchObj[array1[i]] = array2[i];
    }
  }
  return matchObj;
};

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], (str) => str.toUpperCase()));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
const multiMap = (arrVals, arrCallbacks) => {
  const multiMapObj = {};
  for (let i = 0; i < arrVals.length; i++) {
    multiMapObj[arrVals[i]] = [];
    for (let j = 0; j < arrCallbacks.length; j++) {
      multiMapObj[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
    }
  }
  return multiMapObj;
};

// console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
const commutative = (func1, func2, value) => {
  return (func1(func2(value)) === func2(func1(value))) ? true : false;
};

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 12
const objFilter = (obj, callback) => {
  const filteredObj = {};
  const objKeys = Object.keys(obj);
  for (let key of objKeys) {
    if (callback(key) === obj[key]) filteredObj[key] = obj[key];
  }
  return filteredObj;
};

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 13
const rating = (arrOfFuncs, value) => {
  let trueCount = 0;
  for (let func of arrOfFuncs) {
    if (func(value)) trueCount++;
  }
  return 100 * trueCount / arrOfFuncs.length;
};

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 14
const pipe = (arrOfFuncs, value) => {
  for (let func of arrOfFuncs) {
    value = func(value);
  }
  return value;
};  

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 15
const highestFunc = (objOfFuncs, subject) => {
  let highestNum = -Infinity;
  let highFunc;
  const objOfFuncsKeys = Object.keys(objOfFuncs);
  for (let func of objOfFuncsKeys) {
    if (objOfFuncs[func](subject) > highestNum) {
      highestNum = objOfFuncs[func](subject);
      highFunc = func;
    }
  }
  return highFunc;
};

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'








// ###########
// # Closure #
// ###########


// Challenge 1
const createFunction = () => {
  const innerFunc = () => {
    console.log('hello');
  }
  return innerFunc;
};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// function1();


// Challenge 2
const createFunctionPrinter = (input) => {
  const printerFunc = () => {
    console.log(input);
  }
  return printerFunc;
};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
// printHello();


// Challenge 3
const outer = () => {
  let counter = 0; // this variable is outside incrementCounter's scope
  const incrementCounter = () => {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter(); // Logs 'counter 1'
// willCounter(); // Logs 'counter 2'
// willCounter(); // Logs 'counter 3'

// jasCounter();  // Logs 'counter 1'
// willCounter(); // Logs 'counter 4'


// Challenge 4
const addByX = (x) => {
  const addBy = num => {
    return num + x;
  }
  return addBy;
};

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
// console.log(addByTwo(1)); // Logs 3

// now call addByTwo with an input of 2
// console.log(addByTwo(2)); // Logs 4


// Challenge 5
const once = (func) => {
  let counter = 0;
  let onceVal;
  const innerFunc = val => {
    if (counter === 0) onceVal = func(val);
    counter++;
    return onceVal;
  }
  return innerFunc;
};

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


// Challenge 6
const after = (count, func) => {
  let counter = 0;
  return (val) => {
    if (++counter >= count) func(val);
  }
};

const called = () => console.log('hello');
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


// Challenge 7
const delay = (func, wait) => {
  setTimeout(() => func(...args), wait);
};


// Challenge 8
const russianRoulette = (n) => {
  let counter = 0;
  return () => {
    counter++;
    if (counter < n) return 'click';
    if (counter === n) return 'bang';
    if (counter > n) return 'reload to play again';
  }
};

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'bang'
// console.log(play()); // should log: 'reload to play again'
// console.log(play()); // should log: 'reload to play again'


// Challenge 9
const average = () => {
  let sum = 0;
  let count = 0;
  return num => {
    if (num !== undefined) {
      sum += num;
      count++;
    }
    return count ? sum / count : 0;
  }
};

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // should log: 0
// console.log(avgSoFar(4)); // should log: 4
// console.log(avgSoFar(8)); // should log: 6
// console.log(avgSoFar()); // should log: 6
// console.log(avgSoFar(12)); // should log: 8
// console.log(avgSoFar()); // should log: 8


// Challenge 10
const makeFuncTester = (arrOfTests) => {
  return func => {
    for (let pair of arrOfTests) {
      if (func(pair[0]) !== pair[1]) return false;
    }
    return true;
  }
};

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // should log: false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // should log: true


// Challenge 11
const makeHistory = (limit) => {
  const strings = [];
  return str => {
    if (str === 'undo') {
      if (!strings.length) return 'nothing to undo';
      return strings.pop() + ' undone';
    }
    if (strings.length === limit) {
      strings.shift();
    }
    strings.push(str);
    return str + ' done';
  }
};

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // should log: 'jump done'
// console.log(myActions('undo')); // should log: 'jump undone'
// console.log(myActions('walk')); // should log: 'walk done'
// console.log(myActions('code')); // should log: 'code done'
// console.log(myActions('pose')); // should log: 'pose done'
// console.log(myActions('undo')); // should log: 'pose undone'
// console.log(myActions('undo')); // should log: 'code undone'
// console.log(myActions('undo')); // should log: 'nothing to undo'


// Challenge 12
const blackjack = (array) => {
  // let cardNum = 0;
  const dealer = (num1, num2) => {
    let first = true;
    let bust = false;
    let sum = num1 + num2;
    const player = () => {
      if (first) {
        first = false;
        return sum;
      }
      if (bust) return 'you are done!';
      if (sum + array[0] <= 21) {
        sum += array.shift();
        return sum;
      } else {
        array.shift();
        bust = true;
        return 'bust';
      }
    }
    return player;
  }
  return dealer;
};

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // should log: 9
// console.log(i_like_to_live_dangerously()); // should log: 11
// console.log(i_like_to_live_dangerously()); // should log: 17
// console.log(i_like_to_live_dangerously()); // should log: 18
// console.log(i_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // should log: 4
// console.log(i_TOO_like_to_live_dangerously()); // should log: 15
// console.log(i_TOO_like_to_live_dangerously()); // should log: 19
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 10
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 13
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!






// ##########################
// # Extension Challenges   #
// ##########################

// Challenge 1
const functionValidator = (funcArr, input, output) => {
  return funcArr.reduce((acc, curr) => {
    if (curr(input) === output) acc.push(curr);
    return acc;
  }, [])
}

const addFive = num => num + 5;
const multiplyByTwo = num => num * 2;
const subtractOne = num => num - 1;
const fnArr = [addFive, multiplyByTwo, subtractOne];

// console.log(functionValidator(fnArr, 5, 10)) // should log [num => num + 5, num => num * 2]


// Challenge 2
const allClear = (funcArr, value) => {
  return funcArr.reduce((acc, curr) => {
    if (acc) return curr(value);
    return acc;
  }, true)
}

// const isOdd = num => num % 2 === 1;
// const isPositive = num => num > 0;
// const multipleOfFive = num => num % 5 === 0;
// const numFnArr = [isOdd, isPositive, multipleOfFive];
// console.log(allClear(numFnArr, 25)) // should log true 
// console.log(allClear(numFnArr, -25)) // should log false
 

// Challenge 3
const numSelectString = (numArr) => {
  return numArr.sort((a, b) => a - b)
    .filter(num => num % 2 === 1)
    .reduce((acc, curr) => {
      return acc + ', ' + curr;
    })
}

// const nums = [17, 34, 3, 12]
// console.log(numSelectString(nums)) // should log "3, 17"

// Challenge 4
const movieSelector = (moviesArr) => {
  return moviesArr.filter(movieObj => movieObj.score > 5)
    .map(movieObj => {
      movieObj.title = movieObj.title.toUpperCase();
      return movieObj;
    })
    .reduce((acc, curr) => {
      acc.push(curr.title);
      return acc;
    }, [])
}

// const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
// console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]



// Challenge 5
const curriedAddThreeNums = (num1) => {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3;
    }
  }
}

// console.log(curriedAddThreeNums(3)(-1)(1)); // should log 3


// Challenge 6
const curriedAddTwoNumsToFive = curriedAddThreeNums(5);

// console.log(curriedAddTwoNumsToFive(6)(7)) // should log 18

