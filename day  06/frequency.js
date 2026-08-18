let arr = [1, 2, 2, 3, 3, 3, 4];
let frequency = new Map();
for (let num of arr) {
    if (frequency.has(num)){
        frequency.set(num,frequency.get(num) + 1);
    } else {
        frequency.set(num, 1);
    }
}
console.log(frequency);