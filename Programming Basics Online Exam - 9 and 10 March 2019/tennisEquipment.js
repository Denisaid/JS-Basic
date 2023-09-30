function tennis(input){
let priceRacket=Number(input[0]);
let countRacket=Number(input[1]);
let countSneakers=Number(input[2]);

let totalPriceRacket=priceRacket*countRacket;
let priceSneakers=priceRacket/6;
let sumSneakers=countSneakers*priceSneakers;
let priceEquitment=(totalPriceRacket+sumSneakers)*0.2;
let totalPrice=totalPriceRacket+sumSneakers+priceEquitment;
let pricePlayer=totalPrice/8;
let priceSponsors=totalPrice*7/8;

console.log(`Price to be paid by Djokovic ${Math.floor(pricePlayer)}`);
console.log(`Price to be paid by sponsors ${Math.ceil(priceSponsors)}`);


}



tennis(["850","4","2"])