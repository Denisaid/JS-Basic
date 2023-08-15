function weekindOrWorkingDay(input) {
  let day = (input[0]);
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday" : console.log("Working day");break;
    case "Saturday":
    case "Sunday":console.log("Weekend");break;
    default:console.log("Error");break;
  }
}

weekindOrWorkingDay(["Friday"]);
/*case 1:console.log("Monday");break;
case 2:console.log("Tuesday");break;
case 3:console.log("Wednesday");break;
case 4:console.log("Thursday");break;
case 5:console.log("Friday");break;
case 6:console.log("Saturday");break;
case 7:console.log("Sunday");break;*/
