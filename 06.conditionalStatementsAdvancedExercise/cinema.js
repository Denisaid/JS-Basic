function cinema(input){
let type=input[0];
let row=Number(input[1]);
let columns=Number(input[2]);
let total=0;
let sum=row*columns;
if (type==="Premiere"){
total=sum*12.0;
} else if (type==="Normal"){
    total=sum*7.50;
} else  {
    total=sum*5.00;
}
console.log(`${total.toFixed(2)} leva`);
}



cinema(["Normal","10","12"])