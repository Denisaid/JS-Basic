function yardGreening(input){
let area=Number(input[0]);
let price=7.61;
let sum=area*price;
let discount=sum*0.18;
let total=sum-discount;
console.log(`The final price is: ${total} lv.`);
console.log(`The discount is: ${discount} lv.`)


}



yardGreening(["550"])