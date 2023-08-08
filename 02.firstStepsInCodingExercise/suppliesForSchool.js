function school(input){
let pen=Number(input[0]);
let marker=Number(input[1]);
let litre=Number(input[2]);
let discount=Number(input[3]);
let money=pen*5.80+marker*7.2+litre*1.20;
let total=money-money*discount/100;
console.log(total);

}


school(["2","3","4","25"])