function onTimeForTheExam(input){
let hoursExam=Number(input[0]);
let minutesExam=Number(input[1]);
let hoursArrived=Number(input[2]);
let minutesArrived=Number(input[3]);

let totalExam=hoursExam*60+minutesExam;
let totalArrived=hoursArrived*60+minutesArrived;

let totalDiffTime=Math.abs(totalExam-totalArrived);

let diffHour=Math.floor(totalDiffTime/60);

let diffMin=totalDiffTime%60;

if (totalExam===totalArrived){
  console.log(`On time`);
} else if(totalExam<totalArrived){
  console.log(`Late`);

  if (totalDiffTime<60){
    console.log(`${totalDiffTime} minutes after the start`);
  } else {
    if (diffMin<10){
      console.log(`${diffHour}:0${diffMin} hours after the start`);
    } else {
      console.log(`${diffHour}:${diffMin} hours after the start`);
    }
  }
}else {
  if (totalDiffTime<=30){
    console.log(`On time`);
    console.log(`${totalDiffTime} minutes before the start`);
  } else {
    console.log(`Early`);

    if (totalDiffTime<60){
      console.log(`${totalDiffTime} minutes before the start`);
    } else {
      if (diffMin<10){
        console.log(`${diffHour}:0${diffMin} hours before the start`);
      } else {
        console.log(`${diffHour}:${diffMin} hours before the start`);
      }
    }
  }
}



}




onTimeForTheExam(["9","30","9","50"])