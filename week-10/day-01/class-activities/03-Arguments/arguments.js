// process.argv will print out any command line arguments.
console.log(process.argv +" process.argv");
console.log(process.argv[3] +" process.argv[3]")
var a = process.argv[2]
var b = process.argv[3]


function clueless() {
    if(a==b){
        console.log("yes")
    } else{
        console.log("no")
    }
    };
 
clueless();
