function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);
  let sum = 0;
  if (day === "Monday" ||day === "Tuesday" ||day === "Wednesday" || day === "Thursday" || day === "Friday") {
    switch (fruit) {
      case "banana":
        sum = quantity * 2.5;
        break;
      case "apple":
        sum = quantity * 1.2;
        break;
      case "orange":
        sum = quantity * 0.85;
        break;
      case "grapefruit":
        sum = quantity * 1.45;
        break;
      case "kiwi":
        sum = quantity * 2.7;
        break;
      case "pineapple":
        sum = quantity * 5.5;
        break;
      case "grapes":
        sum = quantity * 3.85;
        break;
        default:console.log("error");
    } if (sum!==0){
      console.log(sum.toFixed(2));
    }
  } else if (day === "Saturday" || day === "Sunday") {
       switch (fruit) {
         case "banana":
           sum = quantity * 2.7;
           break;
         case "apple":
           sum = quantity * 1.25;
           break;
         case "orange":
           sum = quantity * 0.9;
           break;
         case "grapefruit":
           sum = quantity * 1.6;
           break;
         case "kiwi":
           sum = quantity * 3.0;
           break;
         case "pineapple":
           sum = quantity * 5.6;
           break;
         case "grapes":
           sum = quantity * 4.2;
           break;
           default:console.log("error");
       } if (sum!==0){
       console.log(sum.toFixed(2));
       }
      } else  {
        console.log("error");}
  
}
fruitShop(["tomato", "Sunday", "2"]);

