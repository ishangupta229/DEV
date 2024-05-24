let num1 = prompt("Num1");
let num2 = prompt("Num2");
let num3 = prompt("Num3");

if(num1>num2){
    if(num1>num3){
        console.log(`${num1} is the greatest number`);
    }else{
        console.log(`${num3} is the greatest number`);
    }
} else{
    if(num2>num3){
        console.log(`${num2} is the greatest number`);
    }else{
        console.log(`${num3} is the greatest number`);
    }

}