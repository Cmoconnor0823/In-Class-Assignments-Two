// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
//could have used splice to start at place 2 rather than using
//the for loop to start at place 2
var points = process.argv;

var userNum = [];

for (i = 2; i < points.length; i++) {
    userNum.push(parseFloat(points[i]));
}

console.log(points);

console.log(userNum.sort(sortNums));

function sortNums(a, b){
    return (a-b);
}