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

// Challenge 4
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


// Challenge 5
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

// Challenge 6
function delay(func, wait, ...args) {
  setTimeout(() => func(...args), wait);
}

// Challenge 7
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



//--------------------------------------------------
// Extension
//--------------------------------------------------


// CHALLENGE 8
function saveOutput(func, magicWord) {
  
  let obj = {};
  
  return function (arg){
    if (arg === magicWord) {
      return obj;
    } else {
      obj[arg] = func(arg);
      return func(arg);
    };     
  };
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {

  let invocations = -1;
  
  return function (){
    invocations++;
    if (invocations === array.length) {
      invocations = 0;
      return array[invocations];
    } else {
      return array[invocations];
    };
  };  
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'

// CHALLENGE 10
function defineFirstArg(func, arg) {  
  	return function (arg1){
      return func(arg, arg1);      
    };
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
  
  let todaysDate = new Date().toLocaleDateString();
  let obj = {date: todaysDate, output: 0};
  
  return function (...arg){
    obj.output = func(arg);
    return obj;
  }
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
  
  let obj = {};

  return function (str1, str2){
    if(str1 && str2) {
      obj[str1] = str2;
    } else if (!str2) {
      let str = str1;
			Object.keys(obj).forEach((key) => {
  		  str = str.replaceAll(key, obj[key]);
      });
      return str; 
    }; 
  };
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// changeScene('fox', 'bird');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
 
  let secretHolder = secret;

  const newObj = { getSecret: function(){
    return secretHolder;
  }, setSecret: function(newSecret){
    secretHolder = newSecret;
  }};  
  return newObj;  
}
// /*** Uncomment these to check your work! ***/
// console.log(obj.getSecret()) // => returns 5
// obj.setSecret(2)
// console.log(obj.getSecret()) // => returns 2
// obj.setSecret(10)
// console.log(obj.getSecret()) // => returns 10


// CHALLENGE 14
function callTimes() {
  
  let calls = 0;
  
  return function (){
    calls++;
    return calls;
  };

}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// console.log(myNewFunc1()); // => 1
// console.log(myNewFunc1()); // => 2
// console.log(myNewFunc2()); // => 1
// console.log(myNewFunc2()); // => 2


// CHALLENGE 15
function roulette(num) {

  let invocations = 0;
  
  return function(){
    invocations++;
    if (invocations < num) {
      return 'spin';
    } else if (invocations === num) {
      return 'win'; 
    } else {
      return 'pick a number to play again'};
  };
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'

// CHALLENGE 16
function average() {
  
  let nums = [];
  
  return function(num){
    
    if (!num && nums.length === 0) {
    return 0;
    } else if (num) {
      nums.push(num);
      let sum = nums.reduce((acc, cur) => { return acc + cur }, 0);
  		let avg = sum / nums.length;
      return avg;
    } else {
      let sum = nums.reduce((acc, cur) => { return acc + cur }, 0);
  		let avg = sum / nums.length;
      return avg;
    };
  };
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8