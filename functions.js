// define the function

function sayHi(myName, callback) {
  console.log("Hi, I'm " + myName);
  callback();
}

function sayBye() {
  console.log("Bye everyone!");
}

function saySeeYouAgain() {
  console.log("See you tomorrow!");
}

const people = [
  {
    // index: 0
    name: "Sean",
    age: 34,
  },
  {
    // index: 1
    name: "Tim",
    age: 10,
  },
  {
    // index: 2
    name: "Herold",
    age: 90,
  },
];

const oldPeople = [];

let person = null;

for (let i = 0; i < people.length; i++) {
  person = people[i];
  if (person.age > 20) {
    oldPeople.push(person);
  }
}

console.log(person);

// run the function
// for (let index = 10000000; index > 0; index--) {
//   // sayHi("Sean", sayBye);
//   console.log(index);
// }
