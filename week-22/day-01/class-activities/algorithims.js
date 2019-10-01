// Write a for loop that looks at each index of
// the array to see if it matches the random value


var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

for (let i = 0; i< stuff.length; i++) {
        console.log('Number ' + i + 'in the stuff array matches random number' + random_value[i]);

}



/// or armandos in class fancy answer
let stuff = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
let rand = Math.floor( Math.random() * stuff.length );
let real = ( rand % 2 == 0 ) ? rand : rand + 1 ;

stuff.filter( (ar, i) => { if (ar == real) alert(`${stuff[i]} is = to ${real}`) } )

// for (let v in stuff){
//     if (stuff[v] == real){
//         alert(`${stuff[v]} is = to ${real}`)
//     }
// }