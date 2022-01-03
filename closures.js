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

function saveOutput(func, magicWord) {
  
  let result = 0;
  let output = {}

  function wordChecker(input){
		
    output = {...output, [input]: result}
    
    if (input === magicWord){
      
      return output
      
    }
    
    else {
      
      result = func(input)
      
      return result;
    }
    
  }       
  
  return wordChecker
  }

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

