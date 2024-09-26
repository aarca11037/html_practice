

console.log("Below are the leap years between 2000 and 3000.")
for(let i = 2000; i <= 3000; i++){
    if((i % 400 == 0) || ((i % 4 == 0) && (i % 100 != 0))){
        console.log(i);
    }
}