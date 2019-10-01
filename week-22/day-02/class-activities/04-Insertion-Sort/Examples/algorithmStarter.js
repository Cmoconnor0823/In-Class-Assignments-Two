// ===============================================
// RUN THIS USING NODE
// ===============================================
// Require dependencies.
var generate = require("../shared/generate");
// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;


// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================

function insertSort(items) {
  // start at the beginning of the array
  // placeholder to for items in unsorted list to the right
  var i;

  // placeholder for index number of items in the sorted section to the left

  var j;
  // move into a loop
  for (i = 0; i < items.length; i++) {
  
    // create a place holder for the item to be sorted during its comparison
    var value = items[i];
    // Starting at the element (items[i - 1])
    // before the current value (value, items[i]),
    // move left through the array (decrementing j)
    // and shift each value to the right
    // (move to items[j + 1]) if it is larger
    // than the current value.
    
    for (j = i - 1; j > -1 && items[j] > value; j--) {
      // Stop when you reach a value which is less than
      // or equal to the current value.
      items[j + 1] = items[j];
    }

  }
  
return items;
}
//       swap A[j] and A[j-1]
//       j ← j - 1
//   end while
//end for
//* Then, test your algorithm with each of the commented out arrays of data. As a bonus, use Benchmark.js to time it in both cases.


// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
