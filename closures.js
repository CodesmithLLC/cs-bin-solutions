// Challenge 1
function createFunction() {
  const innerFunc = () => {
    console.log('hello');
  }
  return innerFunc;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// function1();


// Challenge 2
function createFunctionPrinter(input) {
  const printerFunc = () => {
    console.log(input);
  }
  return printerFunc;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
// printHello();


// Challenge 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

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
function addByX(x) {
  const addBy = num => {
    return num + x;
  }
  return addBy;
}

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
// console.log(addByTwo(1)); // Logs 3

// now call addByTwo with an input of 2
// console.log(addByTwo(2)); // Logs 4



//--------------------------------------------------
// Extension
//--------------------------------------------------

// Challenge 5
function once(func) {
  let counter = 0;
  let onceVal;
  const innerFunc = val => {
    if (counter === 0) onceVal = func(val);
    counter++;
    return onceVal;
  }
  return innerFunc;
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


// Challenge 6
function after(count, func) {
  let counter = 0;
  return (val) => {
    if (++counter >= count) func(val);
  }
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed
// afterCalled(); // -> 'hello' is printed

// Challenge 7
function delay(func, wait, ...args) {
  setTimeout(() => func(...args), wait);
}

// Challenge 8
function rollCall(names) {
  return () => {
    if (!names.length) return console.log('Everyone accounted for');
    console.log(names.shift());
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // -> Should log 'Victoria'
// rollCaller() // -> Should log 'Juan'
// rollCaller() // -> Should log 'Ruth'
// rollCaller() // -> Should log 'Everyone accounted for'

// CHALLENGE 9
function cycleIterator(array) {
  let count = -1;
  const innerFunc = () => {
    if (count < array.length) {
      count++;
    }
    if (count >= array.length) {
      count = 0;
    }
    return array[count];
  };
  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  const innerFunc = (val) => {
    return func(arg, val);
  };
  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  const innerFunc = (val) => {
    const d = new Date();
    let o = {
      date: d.toLocaleString(),
      output: func(val),
    };
    return o;
  };
  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function myReplace(str, ...pair) {
  return str.replace(new RegExp(pair[0]), pair[1]);
}

function censor() {
  let list = [];
  const innerFunc = (a, b = "") => {
    if (b !== "") {
      list.push([a, b]);
    } else {
      return list.map((x) => myReplace(a, ...x));
    }
  };
  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
  const o = {
    getSecret() {
      return secret;
    },
    setSecret(val) {
      secret = val;
    },
  };
  return o;
}

// /*** Uncomment these to check your work! ***/
// let obj = createSecretHolder(5)
// console.log(obj.getSecret()) // => returns 5
// obj.setSecret(2)
// console.log(obj.getSecret()) // => returns 2

// CHALLENGE 14
function callTimes() {
  let count = 0;
  const innerFunc = () => {
    count++;
    return count;
  };
  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// console.log(myNewFunc1()); // => 1
// console.log(myNewFunc1()); // => 2
// console.log(myNewFunc2()); // => 1
// console.log(myNewFunc2()); // => 2

// CHALLENGE 15
function russianRoulette(num) {
  const innerFunc = () => {
    let str = "";
    switch (num) {
      case 0:
        return "reload to play again";
      case 1:
        num--;
        return "bang";
      default:
        num--;
        return "click";
    }
  };
  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'

// CHALLENGE 16
function average() {
  let list = [];
  const innerFunc = (...args) => {
    if (args.length !== 0) list.push(args[0]);
    if (list.length > 0) return list.reduce((a, b) => a + b, 0) / list.length;
    return 0;
  };
  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  const innerFunc = (func) => {
    let res = arrOfTests
      .map((x) => [func(x[0]), x[1]])
      .filter((x) => x[0] === x[1]);
    return arrOfTests.length === res.length;
  };
  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
  let history = [];
  const innerFunc = (str) => {
    if (str === "undo") {
      if (history.length) {
        let element = history.pop();
        return element + " undone";
      }
      return "nothing to undo";
    }
    if (history.length >= limit) history.shift();
    history.push(str);
    return str + " done";
  };
  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
  let count = -1;
  const dealer = (card1, card2) => {
    let sum = 0;
    let busted = false;
    const another = () => {
      if (sum === 0) sum = card1 + card2;
      else sum = sum + array[count];
      if (sum <= 21) {
        count++;
        return sum;
      } else {
        if (busted) return "you are done";
        busted = true;
        return "bust";
      }
    };
    return another;
  };
  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
