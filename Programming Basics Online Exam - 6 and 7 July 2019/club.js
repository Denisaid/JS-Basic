function club(input){
let index=0;
let targetIncome=Number(input[index]);
index++;

let command=input[index];
index++;

let income=0;

while (command!=='Party!') {
    let cocktailNsme=command;

    let cocktailCount=Number(input[index]);
    index++;

    let pricePerCocktail=cocktailNsme.length;
    let totaCocktailPrice=cocktailCount*pricePerCocktail;

    if (totaCocktailPrice%2!==0){
        totaCocktailPrice*=0.75;
    }

    income+=totaCocktailPrice;

    if (income>=targetIncome){
        console.log(`Target acquired.`);
        break;
    }

    command=input[index];
    index++;
    
}

if (command===`Party!`){
    let sumNeeded=targetIncome-income;
    console.log(`We need ${sumNeeded.toFixed(2)} leva more.`);
}

console.log(`Club income - ${income.toFixed(2)} leva.`);

}



//club(["500","Bellini","6","Bamboo","7","Party!"])
club(["100","Sidecar","7","Mojito","5","White Russian","10"])
