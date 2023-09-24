function coffe(input){
let drink=input[0];
let sugar=input[1];
let countDrink=Number(input[2]);
let totalPrice=0;
let discountPrice=0;
let endPrice=0;

switch(sugar){
    case 'Without':
        switch(drink){
            case 'Espresso':
                endPrice=(countDrink*0.90)*0.65;
                
                if (countDrink>=5){
                    endPrice=endPrice*0.75;
                }
                if (endPrice>15){
                    endPrice=endPrice*0.80;
                }
                break;
                case 'Cappuccino':
                    totalPrice=countDrink*1;
                    endPrice=totalPrice*0.65;
                    if (endPrice>15){
                        endPrice=endPrice*0.80;
                    }
                    break;
                    case 'Tea':
                        endPrice=(countDrink*0.50)*0.65;
                        if (endPrice>15){
                            endPrice=endPrice*0.80;
                        }
                        break;
                    
        }
        break;
        case 'Normal':
            switch(drink){
                case 'Espresso':
                    endPrice=countDrink*1;
                    if (endPrice>15){
                        endPrice=endPrice*0.80;
                    }
                    break;
                    case 'Cappuccino':
                        endPrice=countDrink*1.20;
                        if (endPrice>15){
                            endPrice=endPrice*0.80;
                        }
                        break;
                        case 'Tea':
                            endPrice=countDrink*0.60;
                            if (endPrice>15){
                                endPrice=endPrice*0.80;
                            }
                            break;

            }
            break;
            case 'Extra':
                switch(drink){
                    case 'Espresso':
                        endPrice=countDrink*1.20;
                        if (endPrice>15){
                            endPrice=endPrice*0.80;
                        }
                        break;
                        case 'Cappuccino':
                            endPrice=countDrink*1.60;
                            if (endPrice>15){
                                endPrice=endPrice*0.80;
                            }
                            break;
                            case 'Tea':
                                endPrice=countDrink*0.70;
                                if (endPrice>15){
                                    endPrice=endPrice*0.80;
                                }
                                break;
                }
                break;
        
}
console.log(`You bought ${countDrink} cups of ${drink} for ${endPrice.toFixed(2)} lv.`);
}


coffe(["Espresso","Without","10"])
coffe(["Cappuccino","Normal","13"])
coffe(["Tea","Extra","3"])

