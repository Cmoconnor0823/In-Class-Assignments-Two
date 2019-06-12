// Initialize Firebase (YOUR OWN APP)
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)

// Create a variable to reference the database
var database = {
  apiKey: "AIzaSyD9LaUKBuapwyjbO6uiJcH0dnmgxCwmQKo",
  authDomain: "test-project1-532da.firebaseapp.com",
  databaseURL: "https://test-project1-532da.firebaseio.com",
  projectId: "test-project1-532da",
  storageBucket: "test-project1-532da.appspot.com",
  messagingSenderId: "925834655253",
  appId: "1:925834655253:web:be5635a9234794a2"
};

firebase.initializeApp(database);


// Use the below initialValue
var initialValue = 5;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;
var reachedZero = 0;
var resetCounter= 0;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, 
//get a snapshot of the current data. (I.E FIREBASE HERE)

var database = firebase.database();
// This callback keeps the page updated when a value changes in firebase.

// HINT: Assuming 'database' is our database variable, use...
 database.ref().on("value", function(snapshot) {
// We are now inside our .on function...
// Console.log the "snapshot" value (a point-in-time representation of the database)
console.log(snapshot.val(),"snapshot.val");
console.log(snapshot,"snapshot")
// This "snapshot" allows the page to get the most current values in firebase.
// Change the value of our clickCounter to match the value in the database
  clickCounter= snapshot.val().clickCount;
  reachedZero = snapshot.val().reachedZero;
  resetCounter = snapshot.val().resetCounter;
// Console Log the value of the clickCounter
console.log(clickCounter,"clickCounter");
// Change the HTML using jQuery to reflect the 
//updated clickCounter value
$("#click-value").text(clickCounter);
    }, function (errorObject) {
 
// Then include Firebase error logging
// HINT: }, function(errorObject)
      console.log("The read failed: " + errorObject.code);
    });
// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
    clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

    reachedZero++;

  }

  // Save new value to Firebase
    
database.ref().set({
 clickCount: clickCounter,
 reachedZero: reachedZero,
 resetCounter: resetCounter,

});
  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;
  resetCounter++;

  // Save new value to Firebase

database.ref().set({
  clickCount: clickCounter
});
  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});
