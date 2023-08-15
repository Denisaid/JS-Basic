function tradeCommissions(input) {
  let town = input[0];
  let volume = input[1];
  let isNegative = false;

  switch (town) {
    case "Sofia":
      if (volume >= 0 && volume <= 500) {
        console.log((volume * 0.05).toFixed(2));
      } else if (volume > 500 && volume <= 1000) {
        console.log((volume * 0.07).toFixed(2));
      } else if (volume > 1000 && volume <= 10000) {
        console.log((volume * 0.08).toFixed(2));
      } else if (volume > 01000) {
        console.log((volume * 0.12).toFixed(2));
      } else if (volume<0){
        isNegative=true
      }
      break;

    case "Varna":
      if (volume >= 0 && volume <= 500) {
        console.log((volume * 0.045).toFixed(2));
      } else if (volume > 500 && volume <= 1000) {
        console.log((volume * 0.075).toFixed(2));
      } else if (volume > 1000 && volume <= 10000) {
        console.log((volume * 0.1).toFixed(2));
      } else if (volume > 01000) {
        console.log((volume * 0.13).toFixed(2));
      } else if (volume<0){
        isNegative=true
      }
      break;
    case "Plovdiv":
      if (volume >= 0 && volume <= 500) {
        console.log((volume * 0.055).toFixed(2));
      } else if (volume > 500 && volume <= 1000) {
        console.log((volume * 0.08).toFixed(2));
      } else if (volume > 1000 && volume <= 10000) {
        console.log((volume * 0.12).toFixed(2));
      } else if (volume > 01000) {
        console.log((volume * 0.145).toFixed(2));
      } else if (volume<0){
        isNegative=true
      }
      break;
    default:
isNegative=true
      break;
  } if (isNegative==true){
    console.log('error');
  }
  
}

tradeCommissions(["Plovdiv", "-19000"]);
