const myPersevereCodeObj = {
  wait: 'I do not object'
};

// Part 1 - Adding and changing properties in plain JS.
// Here, we'll be changing and adding properties BELOW the creation of the object.
// You won't change lines 1-3 above, but instead set and change the properties for each step below by writing NEW code underneath each comment.

// Below, set the value of property `wait` to be "I object".
myPersevereCodeObj.wait = 'I object';
console.log(myPersevereCodeObj);

// Add the new property `isAnExcellentObject` and set it to `true`.
myPersevereCodeObj.isAnExcellentObject = true;
console.log(myPersevereCodeObj);

// Add the property `term` and set it to 1.
myPersevereCodeObj.term = 1;
console.log(myPersevereCodeObj);

// Now add 1 to the value of your object's `term` property and put that new value back in your object's `term`.
myPersevereCodeObj.term += 1;
console.log(myPersevereCodeObj);

// Now add a new property called `currentScore` and set it to 3.
myPersevereCodeObj.currentScore = 3;
console.log(myPersevereCodeObj);

// Now add a new property called `cumulativeScore` and set it to 50.
myPersevereCodeObj.cumulativeScore = 50;
console.log(myPersevereCodeObj);

// Now add your `currentScore` and your `cumulativeScore` and put it back in `cumulativeScore`.
myPersevereCodeObj.cumulativeScore = myPersevereCodeObj.currentScore + myPersevereCodeObj.cumulativeScore;
console.log(myPersevereCodeObj);

// Now add a property called `I am exactly this cool` (you'll need bracket notation!) and set it to `soooooo cool`.
myPersevereCodeObj['I am exactly this cool'] = 'soooooo cool';
console.log(myPersevereCodeObj);

// Part 2 - your own object.
// Now make a new EMPTY object that represents yourself. You won't put any properties in the curly braces, but just like in part 1, add them in each step below using plain JavaScript statements.
const murph = {};

// Add a `firstName` property and set it to a string.
murph.firstName = 'Randall';
console.log(murph);
// Add a `lastName` property and set it to a string.
murph.lastName = 'Murphy';
console.log(murph);

// Add a `fullName` property and set it to the name properties put together with a space string in the middle.
murph.fullName = `${murph.firstName} ${murph.lastName}`;
console.log(murph);

// Add an `age` property and set it to a number.
murph.age = 37;
console.log(murph);

// Add an address property and set it to an empty array.
murph.address = [];
console.log(murph);

// Now push three strings into that array.
murph['address'].push('6000 state rd, memphis tn 38134','5105 frazier neck rd, preston md', '901 devonshire drive newbern nc 28562');
console.log(murph);



// Part 3 - setting key-value pairs in-line.
// Now make a new object, but this time we'll pre-populate it, not set it in any lines below it. In other words, the properties should be set the same way I initially set the `myPersevereCodeObj` on line 1. It can be called whatever you want and can have whatever properties you want, as long as they include at least one string value, boolean value, number value, and array of something. The important thing here is: this should all be done within the curly brackets of the object, not below the place where the object is declared.
const home = {
  "first time homeowner" : true,
  door:1,
  window:8,
  address:"4163 willowlake blvd memphis tn 38118",
  HOA: true,
  residents:['Murf','mike','josh']
}
console.log(home)


// As a stretch goal, go back pre-populate the object with at least one property using a key name that CAN'T be a variable name. That would be anything with a space in it, or a dash, or starting with a number.

// nonos 
// const obj = {
//   222: 'of',
//   r murphy: false,
//   -m
// }