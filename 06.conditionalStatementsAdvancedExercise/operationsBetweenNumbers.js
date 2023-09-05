function operationsBetweenNNumber(input){
let n1=Number(input[0]);
let n2=Number(input[1]);
let operation=input[2];
let result=0;
let type='';
switch (operation) {
    case '+':
        result=n1+n2;
    break;
    case '-':
        result=n1-n2;
    break;
    case '*':
        result=n1*n2;
    break;
    case '/':
        result=n1/n2;
    break;
    case '%':
        result=n1%n2;
    break;      
        

    default:
        break;
}

if (operation=='+'||operation=='-'||operation=='*'){
  if(result%2==0){
type='even';
  } else {
    type='odd';
  }
  console.log(`${n1} ${operation} ${n2} = ${result} - ${type}`);
}
if (operation=='/'){
    if (n2==0){
        console.log(`Cannot divide ${n1} by zero`);
    } else {
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    }
}
if (operation=='%'){
    if (n2==0){
        console.log(`Cannot divide ${n1} by zero`);
    } else {
        console.log(`${n1} % ${n2} = ${result}`);
    }
}


}




operationsBetweenNNumber(["123", "12", "/"])