function Greation(input) {
    let name = input[0];
    let numberProject = Number(input[1]);
    let hours=Number(3);
    let needHours=numberProject*hours;
    console.log(`The architect ${name} will need ${needHours} hours to complete ${numberProject} project/s.`);
}

Greation(["Deniz", "5"])