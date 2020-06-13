const games = [
  {
    homeTeamName: "Team Javascript",
    awayTeamName: "Team Ruby",
    homeTeamGoals: 3,
    awayTeamGoals: 5,
    homeTeamInitials: "TJ",
    awayTeamInitials: "TR",
    finals: true,
  },
  {
    homeTeamName: "Team Javascript",
    awayTeamName: "Team Ruby",
    homeTeamGoals: 2,
    awayTeamGoals: 8,
    homeTeamInitials: "TJ",
    awayTeamInitials: "TR",
    finals: false,
  },
  {
    homeTeamName: "Team Ruby",
    awayTeamName: "Team Javascript",
    homeTeamGoals: 13,
    awayTeamGoals: 7,
    homeTeamInitials: "TR",
    awayTeamInitials: "TJ",
    finals: true,
  },
  {
    homeTeamName: "Team Javascript",
    awayTeamName: "Team Ruby",
    homeTeamGoals: 22,
    awayTeamGoals: 17,
    homeTeamInitials: "TJ",
    awayTeamInitials: "TR",
    finals: false,
  },
  {
    homeTeamName: "Team Ruby",
    awayTeamName: "Team Javascript",
    homeTeamGoals: 99,
    awayTeamGoals: 88,
    homeTeamInitials: "TR",
    awayTeamInitials: "TJ",
    finals: true,
  },
];

function addObjectToArray() {
  games.push({
    homeTeamName: "Team Ruby",
    awayTeamName: "Team Javascript",
    homeTeamGoals: 99,
    awayTeamGoals: 88,
    homeTeamInitials: "TR",
    awayTeamInitials: "TJ",
    finals: false,
  });
}

class Scoreboard {
  constructor(myGames) {
    this.games = myGames;
  }

  addGame(homeTeamName, awayTeamName, homeTeamGoals, awayTeamGoals, finals) {
    const game = new Game(
      homeTeamName,
      awayTeamName,
      homeTeamGoals,
      awayTeamGoals,
      finals
    );
    this.games.push(game);
  }
}

class Game {
  constructor(
    homeTeamName,
    awayTeamName,
    homeTeamGoals,
    awayTeamGoals,
    finals
  ) {
    this.homeTeamName = homeTeamName;
    this.awayTeamName = awayTeamName;
    this.homeTeamGoals = homeTeamGoals;
    this.awayTeamGoals = awayTeamGoals;
    this.finals = finals;
  }

  whoWon() {
    if (this.homeTeamGoals > this.awayTeamGoals) return "home";
    if (this.awayTeamGoals > this.homeTeamGoals) return "away";
  }

  didHomeWin()

  didAwayWin()

  isFinals()

  isWinner(name) {
    if (this.homeTeamName === name) {
      const isAWin = this.homeTeamGoals > this.awayTeamGoals;
      if (isAWin && this.finals) {
        return true;
      }
    } else {
      const isAWin = this.awayTeamGoals > this.homeTeamGoals;
      if (isAWin && this.finals) {
        return true;
      }
    }

    return false;
  }
}

const scoreboard = new Scoreboard([]);
console.log(scoreboard.games.length);

scoreboard.addGame("TR", "TJ", 3, 8, true);
scoreboard.addGame("TR", "TJ", 5, 8, true);
scoreboard.addGame("TR", "TJ", 20, 8, true);

console.log(scoreboard.games);

scoreboard.games.forEach((game) => {
  console.log(game.isWinner("TR"));
  console.log(game.whoWon());
});
