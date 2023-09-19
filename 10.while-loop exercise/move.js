function move(input){
let index=0;

let width=Number(input[index]);
index++;

let length=Number(input[index]);
index++;

let height=Number(input[index]);
index++;

let housingVolume=width*length*height;

let command=input[index];
index++;

while(command!=='Done'){
    let boxesCount=Number(command);

    housingVolume-=boxesCount;

    if (housingVolume<=0){
        console.log(`No more free space! You need ${Math.abs(housingVolume)} Cubic meters more.`);
        break;
    }
command=input[index];
index++;

}

if (command==='Done'){
    console.log(`${housingVolume} Cubic meters left.`);
}

}



move(["10","1","2","4","6","Done"])