let score=prompt("Enter your score ");

if((score>80) && (score<100)){
    console.log("Grade is A");
}
else if((score<=80) && (score>70)){
    console.log("Grade is B");
}
else if((score>70) && (score>=50)){
    console.log("Grade is C");
}
else if((score<50) && (score>=40)){
    console.log("Grade is D");
}
else{
    console.log("You are fail.")
}