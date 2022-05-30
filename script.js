"use strict";

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   order: function (starterIndex, mainIndex) {
//     return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} 
      at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} , ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

//SPREAD, becasue on RIGHT side of==
const arr = [1, 2, ...[3, 4]];

//REST, because on lEFT side of=
const [a, b, ...lake] = [1, 2, 3, 4, 5];
console.log(a, b, lake);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.startMenu,
];
// \#commentgit
console.log(pizza, risotto, otherFood);
//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 3, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: "Visa del Sole,21",
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// const { menu = [], starterMenu: starters = [] } = restaurant;

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// const { fri } = openingHours;
// console.log(fri);
// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x, y, z] = arr; //Destructuring an array
// // console.log(x, y, z);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // console.log(main, secondary);
// // [main, secondary];

// // let name = ["Shubham", "Maini"];
// // let [firstName, lastName] = name;
// // console.log(firstName, lastName);
// // let temp1 = firstName;
// // firstName = lastName;
// // lastName = temp1;
// // console.log(firstName, lastName);

// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, l, [j, k]] = nested;
// console.log(i, l, j, k);

// const arr = [7, 8, 9];

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// const newArr = [1, 2, ...arr];

// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// //copy array
// const mainmenuCopy = [...restaurant.mainMenu];

// ///join 2 arrays together
// const menuArr = [...restaurant.mainMenu, ...restaurant.startMenu];

// console.log(menuArr);
// ////Iterables :arrays,strings,maps,sets, Not Objects

// const str = "Jonas";

// const letters = [...str, "", "s."];

// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient!"),
//   prompt("Ingredient 2"),
//   prompt("ingredient 3"),
// ];
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
// console.log("ingredients", ingredients);
// console.log("sss", ...newArr);

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };

// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

const food = {
  firstName: "shubham",
  lastName: "Maini",
  Age: (age) => `My Age is ${age}`,
};
console.log(food.firstName, food.lastName, food.Age("23"));
