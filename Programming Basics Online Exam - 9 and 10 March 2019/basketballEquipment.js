function basketball(input){
let priceYears=Number(input[0]);

let priceSneakers=priceYears-(priceYears*0.4);
let basketballEkip=priceSneakers-(priceSneakers*0.2);
let priceBall=basketballEkip/4;
let accesoary=priceBall/5;
let total=priceSneakers+basketballEkip+priceBall+accesoary+priceYears;

console.log(total.toFixed(2));


}


basketball(["320"])