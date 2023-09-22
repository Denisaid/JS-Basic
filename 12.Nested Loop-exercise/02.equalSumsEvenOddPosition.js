function equal(input){
let startNumber=Number(input[0]);
let endNumber=Number(input[1]);
let result='';
for (let curNum=startNumber;curNum<=endNumber;curNum++){
    let oddSum=0;
    let evenSum=0;

    let curNumAsStr=curNum.toString();

    for (let index=0;index<curNumAsStr.length;index++){
        let curDigit=Number(curNumAsStr[index]);

        let position=index+1;

        if (position%2===0){
            evenSum+=curDigit;
        } else {
            oddSum+=curDigit;
        }
    }
    if (oddSum===evenSum){
        result+=curNumAsStr+' ';
    }
}

console.log(result);

}


equal(["100000","100050"])