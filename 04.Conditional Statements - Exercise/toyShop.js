function toyShop(input) {
    let holiday = Number(input[0]);
    let puzzle = Number(input[1]);
    let barby = Number(input[2]);
    let bears = Number(input[3]);
    let min = Number(input[4]);
    let truck = Number(input[5]);
    let toysPrice = puzzle * 2.60 + barby * 3 + bears * 4.10 + min * 8.2 + truck * 2;
    let toysCount = puzzle + barby + bears + min + truck;
    if (toysCount >= 50) {
        toysPrice = toysPrice * 0.75;
    }
    let moneyWon = toysPrice;
    moneyWon = 0.90 * moneyWon;
    if (moneyWon >= holiday) {
        let moneyLeft = moneyWon - holiday;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = holiday - moneyWon;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }


}

toyShop(["320", "8", "2", "5", "5", "1"])