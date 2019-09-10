import React from "react";

function Math(props) {
    console.log("props", props)
    let value;

    switch (props.operator) {
        case "+":
            value = props.num1 + props.num2;
            break;
        case "-":
            value = props.num1 - props.num2;
            break;
        case "*":
            value = props.num1 * props.num2;
            break;
        case "/":
            value = props.num1 / props.num2;
            break;
        default:
            value = NaN;
    }
    return <span style={{ fontSize: value }}>{value}</span>;
}
//  return <span style={{ fontSize: value }}>{value}</span>; 
// the above line sets the fint size to the calculated value

export default Math;