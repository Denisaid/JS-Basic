function newHouse(input){
let flowerType=input[0];
let flowersCount=Number(input[1]);
let budget=Number(input[2]);
let totalPrice=0;

switch (flowerType) {
    case 'Roses':
        totalPrice=flowersCount*5;        
        break;
        case 'Dahlias':
            totalPrice=flowersCount*3.80;
            break;
            case 'Tulips':
                totalPrice=flowersCount*2.80;
                break;
                case 'Narcissus':
                    totalPrice=flowersCount*3;
                    break;
                    case 'Gladiolus':
                        totalPrice=flowersCount*2.50;
                        break;


    
}
if (flowerType==='Roses'&&flowersCount>80){
    totalPrice*=0.90;
} else if (flowerType==='Dahlias'&&flowersCount>90){
    totalPrice*=0.85; 
} else if(flowerType==='Tulips'&&flowersCount>80){
    totalPrice*=0.85;
} else if(flowerType==='Narcissus'&&flowersCount<120){
    totalPrice*=1.15;
} else if(flowerType==='Gladiolus'&&flowersCount<80){
    totalPrice*=1.2;
}
if (budget>=totalPrice){
    let moneyLeft=budget-totalPrice;
 console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
} else {
    let moneyNeeds=totalPrice-budget;
    console.log(`Not enough money, you need ${moneyNeeds.toFixed(2)} leva more.`);
}

}




newHouse(["Roses","55","250"])