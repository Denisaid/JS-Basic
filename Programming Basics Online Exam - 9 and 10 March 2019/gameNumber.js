function gameNumber(input) {
  let firstPlayer = input[0];

  let secondPlayer = input[1];

  let index = 2;
  let command = input[index];

  let result1 = 0;
  let result2 = 0;

  let total1 = 0;
  let total2 = 0;
  let stop = true;
  while (command !== "End of game") {
    let cardFirstPlayer = Number(command);
    index++;
    command = input[index];
    let cardSecondPlayer = Number(command);

    if (cardFirstPlayer == cardSecondPlayer) {
        stop=false;
        index++;
      command = input[index];
      cardFirstPlayer = Number(command);
      index++;
      command = input[index];
      cardSecondPlayer = Number(command);

      if (cardFirstPlayer > cardSecondPlayer) {
        console.log(`Number wars!`);
        console.log(`${firstPlayer} is winner with ${total1} points`);
        break;
      } else if (cardSecondPlayer > cardFirstPlayer) {
        console.log(`Number wars!`);
        console.log(`${secondPlayer} is winner with ${total2} points`);
        break;
      }
    } else if (cardFirstPlayer > cardSecondPlayer) {
      result1 = cardFirstPlayer - cardSecondPlayer;
      total1 += result1;
    } else if (cardSecondPlayer > cardFirstPlayer) {
      result2 = cardSecondPlayer - cardFirstPlayer;
      total2 += result2;
    }

    index++;
    command = input[index];
  }
  if (stop){
  console.log(`${firstPlayer} has ${total1} points`);
  console.log(`${secondPlayer} has ${total2} points`);
  }
}

gameNumber(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
//gameNumber(["Elena","Simeon","6","3","2","5","8","9","End of game"])
