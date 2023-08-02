function petShop(input) {
    let a = Number(input[0]);
    let b = Number(2.5);
    let sumDog = Number(a*b);
    let c = Number(input[1]);
    let d = Number(4);
    let sumCat = Number(c*d);
    let endPrice = Number(sumDog+sumCat);
    console.log(`${endPrice} lv.`);
}

petShop(["5","4"])