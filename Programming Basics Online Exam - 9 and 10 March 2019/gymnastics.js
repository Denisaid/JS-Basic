function gimnastics(input) {
  let country = input[0];
  let type = input[1];

  let total = 0;
  let need = 0;
  let percent = 0;

  switch (country) {
    case "Russia":
      if (type == "ribbon") {
        total = 9.1 + 9.4;
        need = 20 - total;
        percent = (need / 20) * 100;
      } else if (type == "hoop") {
        total = 9.3 + 9.8;
        need = 20 - total;
        percent = (need / 20) * 100;
      } else if (type === "rope") {
        total = 9.6 + 9.0;
        need = 20 - total;
        percent = (need / 20) * 100;
      }
      break;
    case "Bulgaria":
      if (type == "ribbon") {
        total = 9.6 + 9.4;
        need = 20 - total;
        percent = (need / 20) * 100;
      } else if (type == "hoop") {
        total = 9.55 + 9.75;
        need = 20 - total;
        percent = (need / 20) * 100;
      } else if (type === "rope") {
        total = 9.5 + 9.4;
        need = 20 - total;
        percent = (need / 20) * 100;
      }
      break;
    case "Italy":
      if (type == "ribbon") {
        total = 9.2 + 9.5;
        need = 20 - total;
        percent = (need / 20) * 100;
      } else if (type == "hoop") {
        total = 9.45 + 9.35;
        need = 20 - total;
        percent = (need / 20) * 100;
      } else if (type === "rope") {
        total = 9.7 + 9.15;
        need = 20 - total;
        percent = (need / 20) * 100;
      }

      break;

    
  }
  console.log(`The team of ${country} get ${total.toFixed(3)} on ${type}.`);
  console.log(`${percent.toFixed(2)}%`);
}

gimnastics(["Bulgaria", "ribbon"]);
