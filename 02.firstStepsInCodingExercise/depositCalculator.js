function depositCalculator(input){
let deposit=Number(input[0]);
let mounth=Number(input[1]);
let yearPercent=Number(input[2]);
let interest=deposit*yearPercent/100;
let interestForMounth=interest/12;
let total=deposit+mounth*interestForMounth;
console.log(total);
}

depositCalculator(["200","3","5.7"])