function hotelRoom(input){
let mounth=input[0];
let dayNight=Number(input[1]);
let priceApart=0;
let priceStudio=0;

switch(mounth){
    case 'May':
        case 'October':
            if (dayNight>14){
                priceApart=dayNight*(65*0.90);
            } else {
                priceApart=dayNight*65;
            }
            if (dayNight<=7){
                priceStudio=dayNight*50;
            } else if(dayNight<14){
                priceStudio=dayNight*(50*0.95);
            } else {
                priceStudio=dayNight*(50*0.70);
            }
            break;
         case 'June':
         case 'September':
            if (dayNight>14){
                priceApart=dayNight*(68.70*0.90);
            } else {
                priceApart=dayNight*68.70;
            }
            if (dayNight<=14){
                priceStudio=dayNight*75.20;
            
            } else {
                priceStudio=dayNight*(75.20*0.80);
            }
            break;
         case 'July':
            case 'August':
                if (dayNight<=14){
                    priceApart=dayNight*77;
                    priceStudio=dayNight*76;
                } else {
                    priceApart=dayNight*(77*0.90);
                    priceStudio=dayNight*76;
                }
                 
            break;    

            
}

console.log(`Apartment: ${priceApart.toFixed(2)} lv.`);
console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);


}




hotelRoom(['July','14'])