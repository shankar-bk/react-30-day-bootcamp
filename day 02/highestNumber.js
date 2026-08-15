let numbers = [1, 4, 78, 56, 34, 99, 23];

let highnum = numbers[0];

numbers.forEach(num => {
    if (num > highnum){
        highnum = num;
    }
});
console.log(highnum);