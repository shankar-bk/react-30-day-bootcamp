const read = require("readline");

const rl = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(input) {
    let num = Number(input);

    if (num % 2 === 0) console.log("Even");
    else console.log("Odd");
    

    rl.close();
});