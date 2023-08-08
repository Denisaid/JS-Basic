function fishTank(input){
    let length=Number(input[0]);
    let width=Number(input[1]);
    let height=Number(input[2]);
    let precentTaken=Number(input[3])/100;
let totalVolume=(length*width*height)/1000;
let volumeTaken=precentTaken*totalVolume;
let volumeLeft=totalVolume-volumeTaken;
console.log(volumeLeft);
}


fishTank(["85","75","47","17"])