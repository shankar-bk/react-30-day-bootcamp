let str = "hello";
let count =[];
for (let char of str){
    if (count[char] === undefined){
        count[char] =1;
    } 
    else count[char]++;
}
console.log(count);

