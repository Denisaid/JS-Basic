function pcShop(input){
let countGame=Number(input[0]);
let countHearthstone=0;
let countFornite=0;
let countOverwatch=0;
let countOthers=0;

for (i=1; i<=countGame; i++){
    let game=input[i];
    if (game==='Hearthstone'){
        countHearthstone++;
    } else if (game==='Fornite'){
        countFornite++;
    } else if (game=='Overwatch'){
        countOverwatch++;
    } else {
        countOthers++;
    }
}
let percentHearthstone=(countHearthstone/countGame)*100;
let percerntFornite=(countFornite/countGame)*100;
let percentOverwatch=(countOverwatch/countGame)*100;
let percentOthers=(countOthers/countGame)*100;

console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%`);
console.log(`Fornite - ${percerntFornite.toFixed(2)}%`);
console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
console.log(`Others - ${percentOthers.toFixed(2)}%`);
}



pcShop(["4","Hearthstone","Fornite","Overwatch","Counter-Strike"])
