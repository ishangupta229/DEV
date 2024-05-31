num = Math.ceil(Math.random() * 5) ;
let b = "no"
while(true){
    let a =  prompt ("Guess between 1-5");
    if(num == a ){
        console.log(`You guessed it right, num is : ${num}`);
        break;
    }
    b = prompt ("do u want to quit");
    if(b=="quit"){
        break;
    }
}
if(b=="quit"){
    console.log("You quitted !!!");
}