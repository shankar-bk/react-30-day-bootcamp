// let map = new Map();
// map.set("name","ravi");
// map.set("age",25);
// map.set("city","hyderabad");



let map = new Map();
map.set("name","ravi");
map.set("age",25);
console.log(map);
console.log(map.get("name"));
console.log(map.has("name"));
console.log(map.delete("name"));
console.log(map.size);
map.clear();
console.log(map);


// let set = new Set();

// set.add("ravi");
// set.add(25);
// console.log(set);
// console.log(set.has("ravi"));
// console.log(set.delete("ravi"));
// console.log(set.size);
// set.clear();
// console.log(set);


let arr = [1,2,3,2,4,1,5,3];
let set = new Set(arr);
console.log(set);

let arr2 = [10,20,30];
for (let i = 0;i <arr2.length;i++) {
    for (let j = i+1; j<arr2.length;j++) {
        console.log(arr2[i],arr2[j]);
    }
}

for (let i = 1;i<= 3;i++) {
    for (let j =1;j <= 2;j++) {
        console.log(i,j);
    }
}