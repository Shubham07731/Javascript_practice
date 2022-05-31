const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //ES6 Enhanced object Literals
  hours,
  order(starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} 
      at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} , ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};
if (restaurant.hours.mon && restaurant.hours)
  console.log(restaurant.hours.mon.open);
if (restaurant.hours.fri) console.log(restaurant.hours.fri.open);

//console.lgo

console.log(restaurant.hours?.mon?.open);
console.log(restaurant);
const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  Owner: "Giovanni Rossi",
};

// OR assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
//nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
// rest1.Owner = rest1.Owner && "<ANONYMOUS>";
// rest2.Owner = rest2.Owner && "<ANONYMOUS>";

rest1.Owner &&= "<ANONYMOUS>";
rest2.Owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

const menu = [...restaurant.startMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

console.log([...menu.entries()]);
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

///Use ANy datatypes, return any data type,
// short-circuting
// console.log(3 || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);
// console.log("" || "Jonas");
// restaurant.numGuests = 10;
// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// console.log("-------OR--------");
// console.log(0 && "Jonas");
// console.log(7 && "Jonas");

// console.log("shubham" && null);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }
// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  console.log(day);
  const open = restaurant.hours[day]?.open ?? "Closed";
  console.log(`On ${day}, we open at ${open} `);
}
///Methods

console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

//Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];

if (users.length > 0) console.log(users[0].name);
else console.log(`users array empty`);

const properties = Object.keys(hours);
console.log(properties);
let openStr = `We are open an ${properties.length} days: `;

for (const days of properties) {
  openStr += `${days} , `;
}
console.log(openStr);

//Properties Value

const values = Object.values(hours);
console.log(values);

const entries = Object.entries(hours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
