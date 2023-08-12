function lunchBreak(input){
    let nameSerials=input[0];
    let time=Number(input[1]);
    let timeBreak=Number(input[2]);
    let timeLunch=timeBreak*1/8;
    let rest=timeBreak*1/4;
    let remain=timeBreak-timeLunch-rest;
    if (remain>=time){
        console.log(`You have enough time to watch ${nameSerials} and left with ${Math.ceil(remain-time)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameSerials}, you need ${Math.ceil(time-remain)} more minutes.`);
    }
    
    }