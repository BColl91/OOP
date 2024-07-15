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


//Act1  write a simple function that logs "Hello Codenation" to the console. Then write a higher-order function which will run the simple function five times, even though you only call it once. (parameter, for loop)


//Act2  The array method .map is an example of a higher-order function. Declare a variable with five number, then use .map to iterate through the array and multiply each array by 3.

//Act3  test this function to ensure it works by passing a number to the do Maths function. Then passing a number and one of the four maths funcitons to the returned funciton.
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const doMaths = (num1 => {
    return (num2, fn) =. {
        return fn (num1, num2);
    };
};