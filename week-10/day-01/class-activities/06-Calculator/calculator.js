var firstNumber = process.argv[3];
var secondNumber = process.argv[4];
var answer;

function cal(){
    switch ( Operator  ){
        case "add":
            answer = firstNumber + secondNumber
            console.log(answer+" addition")
        //if addition is detected
        //take var firstNumber and add var secondNumber
        //*************** */parseInt?************
        //output answer----as a third thing in the array? or its own variable
        break;
     case "subtract":
         answer = firstNumber - secondNumber
         console.log( answer +" subtract")
        //if subtraction is dectected 
        // take var firstNumber [2] and subtract it from [3]
        // output answer
        break;
     case "multiplication":
         answer = firstNumber * secondNumber
         console.log( answer +" multiplication")
        //The multiplication operator (*) multiplies numbers.
        break;
     case "division":
         answer = firstNumber /  secondNumber
         console.log( answer + " division")
        // The division operator (/) divides numbers
        break;
     case "remainder":
         answer = firstNumber % secondNumber
        //if remainder
        break;
        default:
            console.log("nope")
            break;
    }
     
    
}