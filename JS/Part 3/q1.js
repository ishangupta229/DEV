let a = [7,9,0,2];
let n =3;

console.log(a.slice(0,n)); //1
console.log(a.slice(-n)); //2

let str = "";

if(str==""){
    console.log("Empty");
}else{
    console.log("Not Empty");
}

str = "  iSHaN   ";
n =4;

let chr = str[n-1];
if(chr == chr.toLowerCase()){
    console.log("True");
}else{
    console.log("False");
}

console.log(str.trim());
console.log(str.trim().indexOf('H'));
