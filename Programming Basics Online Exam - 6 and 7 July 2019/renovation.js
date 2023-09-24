function renovation(input) {
  let index = 0;
  let hightWall = Number(input[index]);
  index++;
  let widthWall = Number(input[index]);
  index++;
  let percentPaint = Number(input[index]);
  index++;

  let area = hightWall * widthWall * 4;
  let percentPaintWall = area - (area * percentPaint) / 100;

  let command = input[index];
  index++;

  while (command !== `Tired!`) {
    let lost = Number(command);
    percentPaintWall -= lost;
    if (percentPaintWall == 0) {
      console.log(`All walls are painted! Great job, Pesho!`);
      break;
    } else if (percentPaintWall < 0) {
      console.log(
        `All walls are painted and you have ${Math.abs(percentPaintWall)} l paint left!`);
      break;
    }

    command = input[index];
    index++;
  }
  
  if (command === "Tired!") {
    console.log(`${percentPaintWall} quadratic m left.`);
  }
}

renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
//renovation(["2", "3", "25", "6", "7", "8"]);
//renovation(["2", "3", "25", "6", "7", "5"]);
