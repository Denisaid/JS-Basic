// Цената зависи от сезона:
// · Цената за наем на кораба през пролетта е 3000 лв.
// · Цената за наем на кораба през лятото и есента е 4200 лв.
// · Цената за наем на кораба през зимата е 2600 лв.
// В зависимост от броя си групата ползва отстъпка:
// · Ако групата е до 6 човека включително – отстъпка от 10%.
// · Ако групата е от 7 до 11 човека включително – отстъпка от 15%.
// · Ако групата е от 12 нагоре – отстъпка от 25%
// Приемат се 3 аргумента:
// · Бюджет на групата – цяло число в интервала [1…8000]
// · Сезон – текст : "Spring", "Summer", "Autumn", "Winter"
// · Брой рибари – цяло число в интервала [4…18]

function fishingBoat(input) {
  let budget = Number(input[0]);
  let sessons = input[1];
  let fishCount = Number(input[2]);
  let rentMoney = 0;
  switch (sessons) {
    case "Spring":
      rentMoney = 3000;
      break;
    case "Summer":
    case "Autumn":
      rentMoney = 4200;
      break;
    case "Winter":
      rentMoney = 2600;
      break;
  }
  if (fishCount <= 6) {
    rentMoney *= 0.9;
  } else if (fishCount <= 11) {
    rentMoney *= 0.85;
  } else {
    rentMoney *= 0.75;
  }

  if (sessons !== "Autumn" && fishCount % 2 === 0) {
    rentMoney *= 0.95;
  }

  if (budget >= rentMoney) {
    console.log(`Yes! You have ${(budget-rentMoney).toFixed(2)} leva left.`);
  } else {

    console.log(`Not enough money! You need ${(rentMoney-budget).toFixed(2)} leva.`);
  }
}

fishingBoat(["3000", "Summer", "11"]);
