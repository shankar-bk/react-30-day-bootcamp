let arr = [2,8,12,7,11,15];
let target = 9;
let map = new Map();
for (let i =0; i <arr.length; i++){
    let needed =target-arr[i];
    if (map.has(needed)) {
        console.log(needed, arr[i]);
        
    }
    map.set(arr[i],i);
}