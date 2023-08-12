function worldSwimmingRecord(input) {
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeters = Number(input[2]);
    let resultDistance = distance * timeForMeters;
    let easy = Math.floor(distance / 15);
    let totalEasy = easy * 12.5;
    let totalTime = resultDistance + totalEasy;
    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);

    } else {
        let needSeconds = totalTime - worldRecord;
        console.log(`No, he failed! He was ${needSeconds.toFixed(2)} seconds slower.`);
    }

}