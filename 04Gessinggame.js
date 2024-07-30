let realnum=30;
let gessnum=prompt("Guess any number");
let count=1;

while(realnum!=gessnum){
    gessnum=prompt("Yo guess wrong number please guess again ");
    count++;
    
}
console.log("congratulations you won in ",count," attempts");