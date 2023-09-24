function football(input) {
  let teamName = input[0];
  let totalSessons = Number(input[1]);
  let gameWin = 0;
  let gameD = 0;
  let gamelosser = 0;

  if (totalSessons == 0) {
    console.log(`${teamName} hasn't played any games during this season.`);
  } else {
    for (i = 2; i <= input.length; i++) {
      let game = input[i];
      if (game === "W") {
        gameWin++;
      } else if (game === "D") {
        gameD++;
      } else if (game === "L") {
        gamelosser++;
      }
    }
    let win = gameWin * 3;
    let even = gameD * 1;
    let totalpoints = win + even;

    let percentWin = (gameWin / totalSessons) * 100;

    console.log(
      `${teamName} has won ${totalpoints} points during this season.`
    );
    console.log("Total stats:");
    console.log(`## W: ${gameWin}`);
    console.log(`## D: ${gameD}`);
    console.log(`## L: ${gamelosser}`);
    console.log(`Win rate: ${percentWin.toFixed(2)}%`);
  }
}

football(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
//football(["Chelsea", "0"]);
