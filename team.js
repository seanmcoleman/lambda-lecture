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

// const winningGames = games.filter((game) => {
//   if (game.homeTeamInitials === teamInitials) {
//     const isAWin = game.homeTeamGoals > game.awayTeamGoals;
//     return isAWin;
//   } else {
//     const isAWin = game.awayTeamGoals > game.homeTeamGoals;
//     return isAWin;
//   }
// });

// const finalWinningGames = winningGames.filter((game) => game.finals);

function getWins(games, teamInitials) {
  return games.reduce((winningCount, game) => {
    if (game.homeTeamInitials === teamInitials) {
      const isAWin = game.homeTeamGoals > game.awayTeamGoals;
      if (isAWin && game.finals) {
        winningCount++;
      }
    } else {
      const isAWin = game.awayTeamGoals > game.homeTeamGoals;
      if (isAWin && game.finals) {
        winningCount++;
      }
    }

    return winningCount;
  }, 0);
}

console.log(getWins(games, "TR"));
