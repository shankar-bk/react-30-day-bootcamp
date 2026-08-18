function find(numbers){
    let start = numbers[0];
    let end = numbers[0];
    for (let num of numbers){
        if (num <start){
            start =num;
        }
        if (num >end){
            end =num;
        }
    }
    let expected = (start +end) * (end -start +1) / 2;
    let actual =0;
    for (let num of numbers) {
        actual += num;
    }
    return expected - actual;
}
console.log(find([2,3,5,6,7]));