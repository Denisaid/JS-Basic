function salary(input){
let openTab=Number(input[0]);
let startSalary=Number(input[1]);

for (let i=2; i<input.length; i++){
   let nameTab=input[i];

   if (nameTab==='Facebook'){
        startSalary-=150;
   } else if (nameTab==='Instagram'){
        startSalary-=100;
   } else if(nameTab==='Reddit'){
        startSalary-=50;
   }

} 
 if(startSalary<=0){
    console.log(`You have lost your salary.`);
 } else{
console.log(startSalary);
 }
    
}


salary(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])