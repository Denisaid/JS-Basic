function gonzillaAndKing(input) {
    let filmBudget = Number(input[0]);
    let numberStatist = Number(input[1]);
    let clothingPriceForOneStilist = Number(input[2]);

    let priceDecor = filmBudget * 0.10;
    let priceClothing = numberStatist * clothingPriceForOneStilist;

    if (numberStatist > 150) {
        priceClothing -= priceClothing * 0.10;
    }
    let allPriceSum = priceDecor + priceClothing;
    if (allPriceSum > filmBudget) {
        let moneyNeeded = allPriceSum - filmBudget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } 
    else {
        let moneyLeft = filmBudget - allPriceSum;
        console.log((`Action!`));
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}