// ===============================================
// RUN THIS USING NODE
// ===============================================

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
// SOLUTION - Selection Sort
// ================================================

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function selectionSort(items) {

  // FILL IN YOUR CODE HERE
  // Use the above swap function when you are ready
  // to start swapping elements in the array.
  var len = items.length;
  var min;

    // the first for loop uses the placeholder of i
  for (var i = 0; i < len; i ++){
    // set the index of minimum to this position
    // I believe this var holds the lowest value in the array for comparison
    min = i;

    // check the rest of the array lis of numbers to see if
    // a smaller number exists in the array
    // var j = i + 1 is++ the place holder j that holds the number found at i
    // (i is the place holder for the number found in the applicable index array)
    // then we + 1 to move through the index
    // once you have that new number, (moving through the random number array)
    // compare it to the minimum number
    for (var j = i + 1; j < len; j++){
      if(items[j]< items [min]) {
        min = j;
      }
    }
     //then check if the current number isn't the minimum, swap it for the new minimum number
    if (i !== min) {
      swap(items, i, min)
    }
  }

  // then return the new list

  return items;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT this is the pre coded make a random list");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT this is your code to sort the list");
console.log(selectionSort(array).join(" "));
