const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop
// foreach will not return on its own

moviePatrons.forEach(patron => console.log(patron.age));


// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value
// filter will return 

// original solution
// const canWatchRatedR = moviePatrons.filter(function(patron) {
//   return patron.age > 17;
// });

// or to write in a single line
// const canWatchRatedR = moviePatrons.filter(patron => patron.age > 17);

// or to run a search and rejext one value
const canWatchRatedR = moviePatrons.filter(patron => patron.age >= 17 && patron.name != "Ashley")

console.log(canWatchRatedR);

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

// const cardedMoviePatrons = moviePatrons.map(patron => {
//   if (patron.age >= 17) {
//     patron.canWatchRatedR = true;
//   } else {
//     patron.canWatchRatedR = false;
//   }
//   return patron;
// });

// or
 cardedMoviePatrons = moviePatrons.map(patron => patron.canWatchRatedR = (patron.age >= 17) ? true : false);

console.log("Carded Movie Patrons: ");
console.log(cardedMoviePatrons);
