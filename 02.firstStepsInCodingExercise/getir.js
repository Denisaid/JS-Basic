function foodDelivery(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);
    const chickenMenu=10.35;
    const fishMenu=12.40;
    const veganMenu=8.15;
    const delivery=2.50;
    let chickenPrice=chicken*chickenMenu;
    let fishPrice=fish*fishMenu;
    let veganPrice=vegan*veganMenu;
    let foodPrice=chickenPrice+fishPrice+veganPrice;
    let desert=0.2*foodPrice;
    let totalPrice=foodPrice+desert+delivery;
    console.log(totalPrice);


}


foodDelivery(["2", "4", "3"])