/* operation to use*/
var operation = prompt("Please choose: ( +, -, *, / )");

/*choose you numbers */
var num1 = parseFloat(prompt("Enter your first number:"));
var num2 = parseFloat(prompt("Enter your second number: "));

/* if else statement to calculate*/

if (operation === "+"){
    console.log(num1 + num2);
} else if (operation === "-"){
    console.log(num1 - num2);
} else if(operation === "*"){
    console.log(num1 * num2);
} else if(operation === "/"){
    console.log(num1 / num2);
} else {
    console.log("ERROR")
}
