// Step 1:
// Use the following Audio file below:

var audio = new Audio("raven.mp3");

//  Step 2: do the following between the --- comments below
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function
setTimeout(function(){
  fiveSeconds();
}, 50);
setTimeout(function(){
  fiveSeconds();
}, 100);
setTimeout(function(){
  fiveSeconds();
}, 1500);

// ---------------------
// CODE STEP TWO HERE
// ---------------------

// Step 3:
// Fill in the blanks to these functions.
function fiveSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
 $ .html .time left <h2>"About 10 seconds left"</h2>
  // console log 10 seconds left
  console.log("10 seconds left")
}

function tenSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  console.log("5 seconds left")
}

function timeUp() {
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  // console log done
  console.log("done!")

  // The following line will play the audio file above
  audio.play();
}
