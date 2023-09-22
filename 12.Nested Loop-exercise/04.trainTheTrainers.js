function trainThetrainers(input){
    let index=0;
    let gradeCount=Number(input[index]);
    index++;

    let command=input[index];
    index++;

let totalGradeSum=0;
let presentationCount=0;

    while(command!=='Finish'){
        let presentationName=command;
        let gradeSum=0;
        for (let curGradeCount=1; curGradeCount<=gradeCount;curGradeCount++){
            let curgrade=Number(input[index]);
            index++;

            gradeSum+=curgrade;
        }
        let acvGrade=gradeSum/gradeCount;
        console.log(`${presentationName} - ${acvGrade.toFixed(2)}.`);

        totalGradeSum+=acvGrade;
        presentationCount++;

        command=input[index];
        index++;
    }
    let totalAvgSum=totalGradeSum/presentationCount
    console.log(`Student's final assessment is ${totalAvgSum.toFixed(2)}.`);
}



trainThetrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84",

"5.66",

"Finish"])