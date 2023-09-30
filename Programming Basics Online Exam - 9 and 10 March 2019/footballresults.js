function results(input){
let firstResult=input[0];
let firstTeamGoal=Number(firstResult[0]);
let secondTeamGoal=Number(firstResult[2]);

let secondResult=input[1];
let oneTeam=Number(secondResult[0]);
let twoTeam=Number(secondResult[2]);

let thurdResult=input[2];
let one=Number(thurdResult[0]);
let two=Number(thurdResult[2]);

let won=0;
let drawn=0;
let losser=0;



if (firstTeamGoal>secondTeamGoal){
    won++;
} else if(firstTeamGoal==secondTeamGoal){
    drawn++;
} else {
    losser++;
}
if (oneTeam>twoTeam){
    won++;
} else if(oneTeam==twoTeam){
    drawn++;
} else {
    losser++;
}

if (one>two){
    won++;
} else if(one==two){
    drawn++;
} else {
    losser++;
}


console.log(`Team won ${won} games.`);
console.log(`Team lost ${losser} games.`);
console.log(`Drawn games: ${drawn}`);

}


results(["0:2","0:1","3:3"])

