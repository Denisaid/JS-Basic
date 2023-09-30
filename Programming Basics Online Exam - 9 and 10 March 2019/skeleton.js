function skelton(input){
let minControl=Number(input[0]);
let secondControl=Number(input[1]);
let range=Number(input[2]);
let secondRange=Number(input[3]);

let totalTime=minControl*60+secondControl;
let countLost=range/120;
let totalLostTime=countLost*2.5;
let timeMarin=(range/100)*secondRange-totalLostTime;

if (timeMarin<=totalTime){
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${timeMarin.toFixed(3)}.`);
} else {
    let needTime=timeMarin-totalTime;
    console.log(`No, Marin failed! He was ${needTime.toFixed(3)} second slower.`);
}

}


skelton(["1","20","1546","12"])

