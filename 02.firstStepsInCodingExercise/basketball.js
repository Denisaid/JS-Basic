function basketball(input){
let annualTrainingFee=Number(input[0]);
let priceDiffFeeSneakers=0.4*annualTrainingFee;
let sneakersPrice=annualTrainingFee-priceDiffFeeSneakers;
let priceDiffSneakersOutfit=0.2*sneakersPrice;
let outfitPrice=sneakersPrice-priceDiffSneakersOutfit;
let ballPrice=(1/4)*outfitPrice;
let accessoriesPrice=(1/5)*ballPrice;
let totalPrice=annualTrainingFee+ballPrice+sneakersPrice+outfitPrice+accessoriesPrice;
console.log(totalPrice);


}


basketball(["365"])