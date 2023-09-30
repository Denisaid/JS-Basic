function wordSnooker(input) {
  let level = input[0];
  let typeTicket = input[1];
  let countTicket = Number(input[2]);
  let photo = input[3];

  let sumTicket = 0;
  switch (level) {
    case "Quarter final":
      if (typeTicket == "Standard") {
        sumTicket = countTicket * 55.5;
      } else if (typeTicket == "Premium") {
        sumTicket = countTicket * 105.2;
      } else if (typeTicket == "VIP") {
        sumTicket = countTicket * 118.9;
      }
      break;

    case "Semi final":
      if (typeTicket == "Standard") {
        sumTicket = countTicket * 75.88;
      } else if (typeTicket == "Premium") {
        sumTicket = countTicket * 125.22;
      } else if (typeTicket == "VIP") {
        sumTicket = countTicket * 300.4;
      }
      break;

    case "Final":
      if (typeTicket == "Standard") {
        sumTicket = countTicket * 110.1;
      } else if (typeTicket == "Premium") {
        sumTicket = countTicket * 160.66;
      } else if (typeTicket == "VIP") {
        sumTicket = countTicket * 400;
      }
      break;
  }

  if (sumTicket>2500&&sumTicket<=4000){
    sumTicket=sumTicket*0.90;
    if (photo=='Y'){
        sumTicket=sumTicket+countTicket*40;
    } else {
        sumTicket=sumTicket;
    }
  } else if(sumTicket>4000){
    sumTicket=sumTicket*0.75;
  }

  console.log(`${sumTicket.toFixed(2)}`);
}

wordSnooker(["Quarter final",
"Standard",
"11",
"N"])


