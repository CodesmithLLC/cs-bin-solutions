// Challenge 1
function sayHello() {
	setTimeout(() => console.log('Hello!'), 1000);
}

// Uncomment the line below when ready
// sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('Resolved!'), 1000);
});

// Should print out "Resolved!"
// ADD CODE HERE
// promise.then(val => console.log(val));


// Challenge 3
promise = new Promise(function(resolve, reject) {
  // ADD CODE HERE
  reject('Reject!')
})

// Should print out "Reject!"
// ADD CODE HERE
// promise.then(val => console.log(val)).catch(val =>  console.log(val));


// Challenge 4
promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  resolve('Promise has been resolved!');
});

// Uncomment the lines below when ready
// promise.then(val => console.log(val));
// console.log("I'm not the promise!");


// Challenge 5
function delay(){
	const promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(), 1000)
  });
  return promise;
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
// delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW
var thirdPromise = new Promise(function(resolve, reject) {
  resolve('Third Promise Resolved!')
});

var secondPromise = new Promise(function(resolve, reject) {
  resolve(thirdPromise);
  // reject('second promise rejected!!');
});
var firstPromise = new Promise(function(resolve, reject) {
  resolve(secondPromise)
});

// Uncomment the code below to test
// Should log the resolved message from thirdPromise
// firstPromise.then(val => console.log(val)).catch(val => console.log(val));


// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  // CODE GOES HERE
  const promise = Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(1)]);
  promise.then(val => console.log(val)).catch(err => console.log(err));
}

// Uncomment the code below to test
// Should log the response from fakePeople array
// getAllData();