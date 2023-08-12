function time(input) {
    let hours = Number(input[0]);
    let minites = Number(input[1]);
    let conHours = hours * 60;
    let sumMinites = conHours + minites;
    let totaMinites = sumMinites + 15;
    let finalHours = Math.floor(totaMinites / 60);
    let finalMinites = totaMinites % 60;
    if (finalHours === 24) {
        finalHours = 0;
    } if (finalMinites < 10) {
        console.log(`${finalHours}:0${finalMinites}`);
    } else {
        console.log(`${finalHours}:${finalMinites}`);
    }
} 