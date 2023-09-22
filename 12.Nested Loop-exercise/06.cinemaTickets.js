function cinemaTickets(input){
let index=0;

let command=input[index];
index++;

let studentTicket=0;
let standartTicket=0;
let kidsTicket=0;

while(command!=='Finish'){
    let movieTitle=command;

    let freeSpaces=Number(input[index]);
    index++;

    let command1=input[index];
    index++;

    let spacesTaken=0;

    while(command1!=='End'){
        let ticketType=command1;

        if (ticketType==='student'){
            studentTicket++;
        } else if (ticketType==='standard'){
            standartTicket++;
        }else {
            kidsTicket++;
        }
        spacesTaken++;

        if (spacesTaken===freeSpaces){
            break;
        }

        command1=input[index];
        index++;
    }
    let precentFull=(spacesTaken/freeSpaces)*100;
    console.log(`${movieTitle} - ${precentFull.toFixed(2)}% full.`);

    command=input[index];
    index++;
}
let totalTickects=standartTicket+studentTicket+kidsTicket;
console.log(`Total tickets: ${totalTickects}`);

let studentTicketsPercent=(studentTicket/totalTickects)*100;
let standartTicketPercent=(standartTicket/totalTickects)*100;
let kidsTicketPercent=(kidsTicket/totalTickects)*100;

console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
console.log(`${standartTicketPercent.toFixed(2)}% standard tickets.`);
console.log(`${kidsTicketPercent.toFixed(2)}% kids tickets.`);

}


cinemaTickets(["The Matrix","20","student","standard","kid","kid","student",

"student","standard","student","End","The Green Mile","17","student","standard",

"standard","student","standard","student","End","Amadeus","3","standard",

"standard","standard","Finish"])