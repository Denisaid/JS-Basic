function sumSeconds(input){
    let timeFirst=Number(input[0]);
    let timesecond=Number(input[1]);
    let timeThird=Number(input[2]);
    let totalTime=timeFirst+timesecond+timeThird;
    let minites=Math.floor(totalTime/60);
    let seconds=totalTime%60;
    if (seconds<10){
        console.log(`${minites}:0${seconds}`)
    } else{
        console.log(`${minites}:${seconds}`)
    }
    
    }

    