function barcodeGenerator(input) {
  let num1 = input[0];
  let num2 = input[1];

  let x1 = num1[0];
  let x2 = num1[1];
  let x3 = num1[2];
  let x4 = num1[3];

  let y1 = num2[0];
  let y2 = num2[1];
  let y3 = num2[2];
  let y4 = num2[3];

  let result = "";

  for (let i = x1; i <= y1; i++) {
    for (let j = x2; j <= y2; j++) {
      for (let k = x3; k <= y3; k++) {
        for (let l = x4; l <= y4; l++) {
          if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
            result += `${i}${j}${k}${l} `;
          }
        }
      }
    }
  }
  console.log(result);
}
barcodeGenerator(["2345", "6789"]);
barcodeGenerator(["3256", "6579"]);
