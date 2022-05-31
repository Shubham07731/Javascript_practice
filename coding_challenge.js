const game = {
  team1: " Bayern Munich",
  team2: " Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //4
// const players1Final = [...allPlayers, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// //5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// //6const
// function printGoals(...players) {
//   console.log(`${players.length} Goals Score`);
// }
// printGoals("Davies", "Muller", "Lewandowski", "Kimmmichi");

// team1 < team2 && console.log("Team 1 is more likely to Win");
// team1 > team2 && console.log("Team 2 is more likely to Win");

// var players1 = game.players[0];
// var players2 = game.players[1];

// console.log(players1);
// console.log(players2);

// var gk = players1;
// var fieldPlayers = [];
// var allPlayers = game.players;
// console.log(allPlayers);

// var players1Final = game.players[0];
// players1Final.push("Thiago", "Coutinho", "Perisic");
// console.log(players1Final);

// var team1 = game.odds;
// var team2 = game.odds;
// var draw = game.odds;

// function printGoals(playerName) {
//   console.log(`${playerName} scored ${game.score} Goals`);
// }

// printGoals("Davies");
// printGoals("Muller");
// printGoals("Lewandowski");
// printGoals("Kimmich");
// printGoals(game.scored);

//////////////////////**********/////////\\\

for (const [index, value] of game.scored.entries()) {
  console.log(` Goal ${index + 1}: ${value}`);
}

const teams = Object.values(game.odds);
let total = 0;
for (const values of teams) total += values;
total /= teams.length;
console.log(total);
// var avg = total / values.length;

//for
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

console.log(teams);
