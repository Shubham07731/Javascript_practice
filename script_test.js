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
///Use ANy datatypes, return any data type,
// short-circuting
console.log(3 || "Jonas");
console.log(true || 0);
console.log(undefined || null);
console.log("" || "Jonas");
restaurant.numGuests = 10;
console.log(undefined || 0 || "" || "Hello" || 23 || null);
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

console.log("-------OR--------");
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("shubham" && null);

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
