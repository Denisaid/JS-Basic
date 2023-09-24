function travel(input) {
  let town = input[0];
  let typePacket = input[1];
  let discountVIP = input[2];
  let countNight = Number(input[3]);
  let nightPrice = 0;
  let endPrice = 0;

  if (countNight>7){
    countNight=countNight-1;
  }
  if (countNight<1){
    console.log(`Days must be positive number!`);
  } else if ((town==='Bansko'||town==='Borovets')&&(typePacket==='noEquipment'||typePacket==='withEquipment')||(town==='Varna'||town==='Burgas')&&(typePacket==='withBreakfast'||typePacket==='noBreakfast')){
  switch (town) {
    case "Bansko":
    case "Borovets":
      switch (typePacket) {
        case "noEquipment":
          if (discountVIP === "no") {
            endPrice=80*countNight;
          } else if (discountVIP === "yes") {
            nightPrice = 80 * 0.95;
            endPrice=nightPrice*countNight;
          }
          break;
        case "withEquipment":
          if (discountVIP === "no") {
            endPrice=countNight*100;
          } else if (discountVIP === "yes") {
            nightPrice = 100 * 0.9;
            endPrice=nightPrice*countNight;
          }
          break;
      }
      break;
      case 'Varna':
        case 'Burgas':
          switch (typePacket) {
            case "noBreakfast":
              if (discountVIP === "no") {
                endPrice=countNight*100;
              } else if (discountVIP === "yes") {
                nightPrice = 100 * 0.93;
                endPrice=nightPrice*countNight;
              }
              break;
            case "withBreakfast":
              if (discountVIP === "no") {
                endPrice=countNight*130;
              } else if (discountVIP === "yes") {
                nightPrice = 130 * 0.88;
                endPrice=nightPrice*countNight;
              }
              break;
          }
          break;
          
  } 
  console.log(`The price is ${endPrice.toFixed(2)}lv! Have a nice time!`);
  } else {
    console.log(`Invalid input!`);
  }    
}

//travel(["Borovets", "noEquipment", "yes", "0"]);
 travel(["Bansko", "withEquipment", "no", "2"]);
// travel(["Varna", "withBreakfast", "yes", "5"]);
// travel(["Burgas", "noBreakfast", "no", "4"]);
