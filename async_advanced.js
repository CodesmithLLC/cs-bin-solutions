// ###########################
// # Advanced Async Problems #
// ###########################

// Challenge 1: Promise-function
/*
Write a function, promised, that takes in a value. This function will return a promise that will resolve after 2 seconds.
Hint: take a look at the Promise object -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 

Example:
const createPromise = promised('wait for it...');
createPromise.then((val) => console.log(val)); // -> will log "wait for it..." to the console after 2 seconds

*/

const promised = (val) => {
    return new Promise((resolve) => {
        return setTimeout(() => resolve(val), 2000)
    })
};

// Challenge 2: Second-clock
/*
Write a clock class, with two methods: start and reset.
​
----------
start: upon invocation, invokes a callback (this.cb, defined in the constructor)
on an argument every second, with the argument to the callback being:
​
1, 2, 3,... 59, 60, 1, 2, 3,... 59, 60, 1, 2, 3, etc.
​
In other words, the callback gets invoked every second on the "seconds hand" of
the clock. Always start with 1 and don't utilize the seconds value the current
clock time.
​
The first "tick" with value 1 occurs 1 second after the initial "secondClock" invocation.
The second "tick" with value 2 occurs 2 seconds after the initial "secondClock" invocation.
...
The sixtieth "tick" with value 60 occurs 60 seconds after the initial "secondClock" invocation.
The sixty-first "tick" with value 1 occurs 61 seconds after the initial "secondClock" invocation.
The sixty-second "tick" with value 2 occurs 62 seconds after the initial "secondClock" invocation.
etc.
​
----------
reset: upon invocation, completely stops the "clock".
Also resets the time back to the beginning.
​
Hint: look up setInterval and clearInterval.
​
*/

class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.time = 1;
    this.intervalID = null;
  }
  
  start() {
    this.intervalID = setInterval(() => {
      this.cb(this.time);
      this.time++;
      if (this.time === 61)
        this.time = 1;
    }, 1000);
  }
  
  stop() {
    clearInterval(this.intervalID);
  }
}

// Challenge 3: Debounce
/*
Write a function called 'debounce' that accepts a function and returns a new function that only allows invocation of the given function after 'wait' milliseconds have passed since the last time the returned function ran. Additional calls to the returned function within the 'wait' time should not be invoked or queued, but the timer should still get reset.
For examples of debouncing, check out https://css-tricks.com/debouncing-throttling-explained-examples/

Example:
function giveHi() { return 'hi'; }
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
*/

const debounce = (callback, interval) => {
  let timerStart = new Date();
  return () => {
    const invocationTime = new Date();
    if (invocationTime - timerStart > interval) {
      timerStart = new Date();
      return callback();
    }
  };
};
