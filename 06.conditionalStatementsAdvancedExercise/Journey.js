function journey(input){
let budget=Number(input[0]);
let sesson=input[1];
let price=0;
let destination='';
let inSleep='';

if (budget<=100){
    destination='Bulgaria';
    if (sesson==='summer'){
        price=budget*0.30;
        inSleep='Camp';

    } else if(sesson==='winter'){
        price=budget*0.70;
        inSleep='Hotel';

    }
    
} else if(budget<=1000){
    destination='Balkans';
    if (sesson==='summer'){
        price=budget*0.40;
        inSleep='Camp';
    } else if(sesson==='winter'){
        price=budget*0.80;
        inSleep='Hotel';
    }
    
} else if(budget>1000){
    destination='Europe'
    if (sesson==='summer'||sesson==='winter'){
        price=budget*0.90;
        inSleep='Hotel';
    } 
    
}
console.log(`Somewhere in ${destination}`);
console.log(`${inSleep} - ${price.toFixed(2)}`);
}



journey(["50", "summer"])