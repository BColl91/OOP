// let age = 21;
// let name = `Bex`;
// console.log(`My age: ${age}`);

// const callAge = () => {
//     console.log(`My age is ${age}`);
//     console.log(`My name is ${name}`);
// };

// callAge();

// console.log(`Global Scope with local variable name: ${name}`);


// const startLet = () => {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }
// startLet();

// const whichGreeting = (timeOfDay) => {
//     console.log(`Good ${timeOfDay}`);
// };
// const greet = (time, fn) => {
//     if (time < 1200) {
//         fn('Morning');
//     } else if (time >= 1200 && time < 1800) {
//         fn('Afternoon');
//     } else {
//         fn('Evening');
//     }
// };
// greet(0900, whichGreeting);





// //Act1 
// //I created the function 'greet()' to display the phrase 'Hello Codenation'. I added a higher-order function that runs a given function `n` times, and uses a for loop to check if and how many times the greet is shown, and if it has reached 'n' amount of times. If it has not, then i++ will move it along until it does.
// function greet() {
//     console.log("Hello Codenation");
// }
// const runMultipleTimes = (fn, n) => {
//     for (let i = 0; i < n; i++) {
//         fn();
//     }
// }
// //this calls both the function and higher-order function with a specified 'n' of times. In this case- 5.
// runMultipleTimes(greet, 5);



// //Act2 
// //An array with 5 numbers has been created. THen the function .map i sused to iterate through said array and then multiply each number by 3.
// let numbers = [1, 2, 3, 4, 5];
// let multipliedNumbers = numbers.map(function(number) {
//     return number * 3;
// });
// //The the result gets logged!
// console.log(multipliedNumbers);




//Act3 
//Made note of the functions from the activity. This features, adding, subtracting, multiplying and dividing. Then a higher-order function called 'doMaths' is created to return the other functions, take the arguments, and check if the other functions work. 
const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if (b === 0) {
        return 'Division by zero is not allowed';
    }
    return a / b;
};

const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    };
};

// Examples are then given for the two arguments, doMaths is called and the results, along with the results for the other functions, are displayed.
const testNum1 = 10;
const testNum2 = 5;

const doMathsWithNum1 = doMaths(testNum1);

console.log(doMathsWithNum1(testNum2, add));
console.log(doMathsWithNum1(testNum2, subtract));
console.log(doMathsWithNum1(testNum2, multiply));
console.log(doMathsWithNum1(testNum2, divide));
console.log(doMathsWithNum1(0, divide));
