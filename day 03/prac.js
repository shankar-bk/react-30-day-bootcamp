//Learn arrow functions, template literals, destructuring, spread/rest and default parameters. 
// Exercises: clone object, merge arrays, nested destructuring, default parameters and function conversion. 
// Verification: transform monthly salary to annualSalaryin a new array.


function add(a,b){            //normal function
    return a+b;
}
console.log(add(2,5))

let sum = (a,b) => a+b;          // arrow function
console.log(sum(2,3));          

function samp(a){
    if (a< -1){

        return "a is negative";
    }
    else{
        "a is positive";
    }
}

console.log(samp(-2));

let check = a=>{
    if(a<-1) return "a is negative";
    else return "a is positive";
}
console.log(check(0));

// template iterals

const people = ["sai","siya","arya","sujay"];
console.log("this is the list of people: "  + people);  

console.log(`i am providing a list: ${people} these are olympic champions.`);


let [name,age] = ["ravi", 60];
console.log(`myself ${name} and i am ${age} years old`);
