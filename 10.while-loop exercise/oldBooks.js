function oldBooks(input){
let index=0;

let booksSearched=input[index];
index++;

let command=input[index];
index++;

let booksCheched=0;

while(command!=='No More Books'){
    if (command===booksSearched){
    console.log(`You checked ${booksCheched} books and found it.`);    
    break; 
    }
    booksCheched++;
    command=input[index];
    index++;

}

if(command==='No More Books'){
    console.log('The book you search is not here!');
    console.log(`You checked ${booksCheched} books.`);
}

}



oldBooks(["The Spot","Hunger Games","Harry Potter","Torronto",

"Spotify",

"No More Books"])