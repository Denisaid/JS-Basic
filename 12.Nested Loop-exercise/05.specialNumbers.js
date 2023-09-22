function special(input) {
  let N = Number(input[0]);
  let buff = "";
  for (x1 = 1; x1 <= 9; x1++) {
    for (x2 = 1; x2 <= 9; x2++) {
      for (x3 = 1; x3 <= 9; x3++) {
        for (x4 = 1; x4 <= 9; x4++) {
          if (N % x1 == 0 && N % x2 == 0 && N % x3 == 0 && N % x4 == 0) {
            buff += `${x1}${x2}${x3}${x4} `;
          }
        }
      }
    }
  }

  console.log(buff);
}

special(["3"]);
