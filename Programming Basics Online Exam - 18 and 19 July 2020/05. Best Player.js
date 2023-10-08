function bestPlayer(input) {
  let index = 0;
  let maxGoals = 0;
  let bestPlayer = "";

  while (input[index] !== "END") {
    let player = input[index++];
    let numberOfGoals = Number(input[index++]);
    if (numberOfGoals > maxGoals) {
      maxGoals = numberOfGoals;
      bestPlayer = player;
    }
    if (maxGoals >= 10) {
      break;
    }
  }
  console.log(`${bestPlayer} is the best player!`);
  if (maxGoals >= 3) {
    console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${maxGoals} goals.`);
  }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);

bestPlayer(["Silva", "5", "Harry Kane", "10"]);
