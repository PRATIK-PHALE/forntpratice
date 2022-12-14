console.log("i ma the boss ");
function greet(name,greettext="fuck you all"){
    console.log(greettext+" "+ name);
    // console.log(name+ "is a godd boy");
}

let name="partik";
let name1="partik1";
let name2="partik2";
let name3="partik3";
greettext1="wooo waht game";
greet(name ,greettext1);
greet(name1,greettext1);
greet(name2, greettext1);
greet(name3);


// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
function sum(a,b,c){
    let d=a+b-c;
    return d;
    // This line will never execute
    // console.log("heyyy i am here");
}
let returnval=sum(3,4,5);
console.log(returnval);
// -------------------------------------------------------------------------------------
// login for min max number
const numbers=[4,6,5,7,8,10]
let maximum=-Infinity;
let minimum=Infinity;

for(let number of numbers){
    if(number>maximum)
        maximum=number
        if(number<minimum)
        minimum=number
}
console.log(maximum);
console.log(minimum);