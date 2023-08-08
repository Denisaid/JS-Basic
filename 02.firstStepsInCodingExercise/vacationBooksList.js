function vacationBooksList(input){
let page=Number(input[0]);
let time=Number(input[1]);
let day=Number(input[2]);
let needTime=page/time;
let hour=needTime/day;
console.log(hour.toFixed(3));

}


vacationBooksList(["212","20","2"])