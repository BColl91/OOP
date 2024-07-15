// const person = {firstName: "Ovidia",
//     lastName: "Fuu",
//     age: 29,
//     eyeColour: "Grey"
// };

// person.eyeColour

// class Person {
//     constructor (name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
//     talks() {
//         console.log( `Hi, my name is ${this.name}, I am ${this.age} and I work as a ${this.job}`);
//     }
//     work() {
//         console.log(`I am well versed as ${this.job}`);
//     }
// }

// // const Shep = new Person("Shep", 38, "Shepard");
// // Shep.talks();
// // Shep.work();

// const Ignis = new Person("Ignis", 24, "a Patient Cook");
// Ignis.talks();
// Ignis.work();



// class Dog {
//     constructor(name, age, breed){
//         this.name = name;
//         this.age = age;
//         this.breed = breed;
//     }
//     walks() {
//         console.log(`Taking ${this.name} the ${this.breed} aged ${this.age} for a walk.`)
//     }
//     eats() {
//         console.log(`${this.name} has eated some food.`)
//     }
// }

// // const stanley = new Dog("Stanley", 10, "Bulldog");
// // stanley.walks();
//  const Bob = new Dog("Bob", 4, "Unknown Entity");
//  Bob.walks();
//  Bob.eats();

// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//         this.hunger = 100;
//     }
//     drinks() {
//         this.health += 5;
//         return this;
//     }
 
//     eats() {
//         this.health += 5;
//         this.hunger += 10;
//         console.log(`${this.name}'s health is ${this.health}.`);
//         return this;
//     }
//     stats() {
//         return console.table({
//             name: this.name,
//             health: this.health,
//         });
//     }
// }
 
// const hedgehog = new Animal('Hedgehog');
// hedgehog.eats();
// hedgehog.drinks()
// hedgehog.stats();



// class Dog extends Animal {
//     constructor(name, happy) {
//         super (name, happy);
//         this.happy = happy;
//     }
//     playBall() {
//         this.health += 10;
//         this.hunger -= 10;
//         console.log(`${this.name} is happy`);
//     }
//    walks() {
//     this.happy += 20;
//     this.hunger -= 15;
//     console.log(`Taking ${this,name} for a walk, they are ${this.happy}`);
//    this.health += 10;
//    return this;
//     }
//     stats() {
//         return console.table({
//             name: this.name,
//             health: this.health,
//         });
//     }
// }
 
// const mon = new Animal('mon');
// mon.walks();
// mon.playBall();
// mon.stats();


//ACTIVITY

class CoffeeShopTill {
    constructor() {
        this.priceList = {
            "Tea": 2.00,
            "Americano": 3.00,
            "Cappuccino": 3.50,
            "Latte": 3.50,
            "Mocha": 3.98,
            "Espresso": 2.50,
            "Hot Chocolate": 3.00
        };
    }
 
    calculateTotal(drinkNames) {
        let total = 0;
        let chosenDrinks = [];
        for (let drink of drinkNames) {
            if (this.priceList.hasOwnProperty(drink)) {
                total += this.priceList[drink];
                chosenDrinks.push(drink);
            } else {
                console.log(`Sorry, we don't have ${drink} on the menu.`);
            }
        }
        console.log(`You have chosen: ${chosenDrinks.join(", ")}`);
        return total;
    }
}

class Customer {
    constructor(name, totalCash) {
        this.name = name;
        this.totalCash = totalCash;
    }

    canAffordOrder(totalPrice) {
        if (this.totalCash >= totalPrice) {
            console.log(`${this.name} can afford this order.`);
        } else {
            console.log(`${this.name} cannot afford this order.`);
        }
    }
}

const till = new CoffeeShopTill();
const drinks = ["Latte", "Espresso", "Tea"];
const total = till.calculateTotal(drinks);
console.log(`Total price: $${total.toFixed(2)}`);

// const customer = new Customer("Keanu Reeves", 10.00);
// customer.canAffordOrder(total);

const customer = new Customer("Paul Phoenix", 6.80);
customer.canAffordOrder(total);
