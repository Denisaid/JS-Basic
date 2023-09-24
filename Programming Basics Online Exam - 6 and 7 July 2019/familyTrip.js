function familyTrip(input){
let budjet=Number(input[0]);
let nightCount=Number(input[1]);
let priceNight=Number(input[2]);
let percentAddPrice=Number(input[3]);
let sumCoins=0;
let remaider=0;



if (nightCount>7){
let nightPrice=priceNight*0.95;
let totalNightPrice=nightCount*nightPrice;
let percentFalsePrice=(percentAddPrice/100)*budjet;
sumCoins=totalNightPrice+percentFalsePrice;

} else {

let totalNightPrice=nightCount*priceNight;
let percentFalsePrice=(percentAddPrice/100)*budjet;
sumCoins=totalNightPrice+percentFalsePrice;

}

if (budjet>=sumCoins){
remaider=budjet-sumCoins;
console.log(`Ivanovi will be left with ${remaider.toFixed(2)} leva after vacation.`);
} else {
remaider=sumCoins-budjet;
console.log(`${remaider.toFixed(2)} leva needed.`);
}

}


familyTrip(["800.50","8","100","2"])
