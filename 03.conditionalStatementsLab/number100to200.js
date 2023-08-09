function number(input){
let num=Number(input[0]);
let numA=100;
let numC=200;
if (num<numA){
    console.log("Less than 100");
} else if(100<=num && num<= 200){
    console.log("Between 100 and 200");
}else if(num>numC){
    console.log("Greater than 200");
} 
}


number(["180"])